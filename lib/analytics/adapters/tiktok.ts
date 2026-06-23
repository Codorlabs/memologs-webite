import type { Adapter } from './base';
import { analyticsConfig } from '../config';

// Canonical event name -> TikTok standard event.
const EVENT_MAP: Record<string, string> = {
  ViewContent: 'ViewContent',
  Lead: 'SubmitForm',
  CompleteRegistration: 'CompleteRegistration',
  Contact: 'Contact',
  Search: 'Search',
  StartTrial: 'Subscribe',
  Purchase: 'PlaceAnOrder',
};

// Official TikTok Pixel bootstrap. ttq.page() handles the initial pageview;
// SPA pageviews are intentionally not re-sent to TikTok (see track()).
function loadBase(pixelId: string): void {
  if (typeof window === 'undefined' || window.ttq) return;
  const script = document.createElement('script');
  script.innerHTML = `
    !function (w, d, t) {
      w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"];ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e};ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};
      ttq.load('${pixelId}');ttq.page();
    }(window, document, 'ttq');
  `;
  document.head.appendChild(script);
}

export const tiktokAdapter: Adapter = {
  name: 'tiktok',

  isEnabled: () => analyticsConfig.tiktok.enabled && !!analyticsConfig.tiktok.pixelId,

  load() {
    loadBase(analyticsConfig.tiktok.pixelId);
  },

  identify(user) {
    if (typeof window === 'undefined' || !window.ttq) return;
    window.ttq.identify({
      email: user.email,
      phone_number: user.phone,
      external_id: user.externalId,
    });
  },

  track(event) {
    if (typeof window === 'undefined' || !window.ttq) return;
    // ttq.page() in load() already covers the initial pageview.
    if (event.name === 'PageView') return;
    const name = EVENT_MAP[event.name] || event.name;
    window.ttq.track(
      name,
      {
        content_name: event.data.contentName,
        value: event.data.value,
        currency: event.data.currency,
      },
      { event_id: event.eventId },
    );
  },
};
