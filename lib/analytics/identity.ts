import type { UserData } from './types';

const EXTERNAL_ID_KEY = 'ml_external_id';

// RFC4122-ish v4 id. Prefers native crypto, falls back for old browsers.
export function uuid(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
}

export function getCookie(name: string): string | undefined {
  if (typeof document === 'undefined') return undefined;
  const match = document.cookie.match(new RegExp('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)'));
  return match ? decodeURIComponent(match[2]) : undefined;
}

// Meta browser-id cookie, set by the Pixel. Sent to CAPI to link the two events.
export function getFbp(): string | undefined {
  return getCookie('_fbp');
}

// Meta click-id. Prefer the cookie; otherwise reconstruct from the fbclid param
// so the very first pageview after an ad click still carries the click id.
export function getFbc(): string | undefined {
  const cookie = getCookie('_fbc');
  if (cookie) return cookie;
  if (typeof window === 'undefined') return undefined;
  const fbclid = new URLSearchParams(window.location.search).get('fbclid');
  return fbclid ? `fb.1.${Date.now()}.${fbclid}` : undefined;
}

// Stable, first-party id persisted across visits. Strengthens match quality
// and is shared across all platforms as external_id. Prefers the server-set
// cookie (set by middleware, ITP-durable) and falls back to localStorage.
export function getExternalId(): string {
  if (typeof window === 'undefined') return '';
  const cookie = getCookie('ml_external_id');
  if (cookie) return cookie;
  try {
    let id = window.localStorage.getItem(EXTERNAL_ID_KEY);
    if (!id) {
      id = uuid();
      window.localStorage.setItem(EXTERNAL_ID_KEY, id);
    }
    return id;
  } catch {
    return '';
  }
}

// 2-letter country code from Cloudflare geo (set by middleware).
export function getCountry(): string | undefined {
  return getCookie('ml_country');
}

const USER_KEY = 'ml_user';

// Persist the durable match keys so returning visitors' events (incl. PageView)
// carry them even before they re-submit a form. Stored locally only.
export function storeUser(user: UserData): void {
  if (typeof window === 'undefined') return;
  try {
    const subset: UserData = {};
    if (user.email) subset.email = user.email;
    if (user.phone) subset.phone = user.phone;
    if (user.firstName) subset.firstName = user.firstName;
    if (user.lastName) subset.lastName = user.lastName;
    window.localStorage.setItem(USER_KEY, JSON.stringify(subset));
  } catch {
    /* ignore */
  }
}

export function getStoredUser(): UserData {
  if (typeof window === 'undefined') return {};
  try {
    const raw = window.localStorage.getItem(USER_KEY);
    return raw ? (JSON.parse(raw) as UserData) : {};
  } catch {
    return {};
  }
}

// Light normalization per Meta's guidance (lowercase, trim, strip noise).
// Hashing is intentionally left to each platform.
export function normalizeUser(user: UserData): UserData {
  const out: UserData = {};
  if (user.email) out.email = user.email.trim().toLowerCase();
  if (user.phone) out.phone = user.phone.replace(/[^0-9]/g, '');
  if (user.firstName) out.firstName = user.firstName.trim().toLowerCase();
  if (user.lastName) out.lastName = user.lastName.trim().toLowerCase();
  if (user.city) out.city = user.city.trim().toLowerCase().replace(/\s+/g, '');
  if (user.state) out.state = user.state.trim().toLowerCase();
  if (user.zip) out.zip = user.zip.trim().toLowerCase();
  if (user.country) out.country = user.country.trim().toLowerCase();
  if (user.externalId) out.externalId = user.externalId;
  return out;
}
