import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Set identity cookies via HTTP Set-Cookie (server-side, first-party). Unlike
// cookies written by JavaScript (document.cookie), these are exempt from
// Safari ITP's 7-day / 24-hour cap, so _fbp/_fbc/external_id stay durable and
// keep feeding both the browser Pixel and the Conversions API.

const NINETY_DAYS = 60 * 60 * 24 * 90;

function randomId(): string {
  return `${Math.floor(Math.random() * 1e16)}`;
}

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const now = Date.now();
  const opts = {
    maxAge: NINETY_DAYS,
    path: '/',
    sameSite: 'lax' as const,
    // Secure cookies are dropped over http://localhost in dev.
    secure: process.env.NODE_ENV === 'production',
    // Scope to the apex so app.memologs.com sees the same identifiers and can
    // stitch its server-side signup conversion back to this visit. Localhost has
    // no subdomains, so only set a domain in prod. Matches Zaraz's own managed
    // cookies (cfz_*), which are already Domain=memologs.com.
    ...(process.env.NODE_ENV === 'production' ? { domain: '.memologs.com' } : {}),
    // Not httpOnly: the browser Pixel and our analytics client must read these.
  };

  // _fbp — Meta browser id. Only set if absent so we never clobber a live one.
  if (!request.cookies.get('_fbp')) {
    response.cookies.set('_fbp', `fb.1.${now}.${randomId()}`, opts);
  }

  // _fbc — Meta click id, derived from the fbclid on the ad landing URL.
  const fbclid = request.nextUrl.searchParams.get('fbclid');
  if (fbclid && !request.cookies.get('_fbc')) {
    response.cookies.set('_fbc', `fb.1.${now}.${fbclid}`, opts);
  }

  // Stable first-party id, shared across all platforms as external_id.
  if (!request.cookies.get('ml_external_id')) {
    response.cookies.set('ml_external_id', crypto.randomUUID(), opts);
  }

  // Country from Cloudflare geo, used as Meta's `country` match key.
  const country = request.headers.get('cf-ipcountry');
  if (country && country !== 'XX' && !request.cookies.get('ml_country')) {
    response.cookies.set('ml_country', country, opts);
  }

  return response;
}

export const config = {
  // Page navigations only — skip static assets and API routes.
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|api/|.*\\.(?:png|jpg|jpeg|gif|svg|ico|webp|css|js|woff2?)$).*)',
  ],
};
