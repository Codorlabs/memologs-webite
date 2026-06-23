import type { Adapter } from './base';
import type { EventData, NormalizedEvent, UserData } from '../types';
import { analyticsConfig } from '../config';
import { getExternalId, getFbp, getFbc } from '../identity';

// Standard events fire via `track`; anything else falls back to `trackCustom`.
const STANDARD_EVENTS = new Set([
  'PageView', 'ViewContent', 'Lead', 'CompleteRegistration', 'Contact', 'Search',
  'AddToCart', 'InitiateCheckout', 'AddPaymentInfo', 'Purchase', 'Subscribe',
  'StartTrial', 'Schedule', 'SubmitApplication', 'Donate', 'FindLocation',
]);

// camelCase EventData -> Meta custom_data keys.
const DATA_KEY_MAP: Record<string, string> = {
  contentName: 'content_name',
  contentCategory: 'content_category',
  contentType: 'content_type',
  contentIds: 'content_ids',
};

// UserData -> Meta advanced-matching / CAPI user_data keys (raw; Meta hashes).
function metaUser(user: UserData): Record<string, unknown> {
  const o: Record<string, unknown> = {};
  if (user.email) o.em = user.email;
  if (user.phone) o.ph = user.phone;
  if (user.firstName) o.fn = user.firstName;
  if (user.lastName) o.ln = user.lastName;
  if (user.city) o.ct = user.city;
  if (user.state) o.st = user.state;
  if (user.zip) o.zp = user.zip;
  if (user.country) o.country = user.country;
  if (user.externalId) o.external_id = user.externalId;
  return o;
}

function metaCustom(data: EventData): Record<string, unknown> {
  const o: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(data)) {
    if (value == null) continue;
    o[DATA_KEY_MAP[key] || key] = value;
  }
  return o;
}

// Official Meta Pixel bootstrap (queues calls until fbevents.js loads).
function loadBase(): void {
  if (typeof window === 'undefined' || window.fbq) return;
  const n: any = function () {
    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
  };
  if (!window._fbq) window._fbq = n;
  n.push = n;
  n.loaded = true;
  n.version = '2.0';
  n.queue = [];
  window.fbq = n;
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://connect.facebook.net/en_US/fbevents.js';
  document.head.appendChild(script);
}

export const metaAdapter: Adapter = {
  name: 'meta',

  isEnabled: () => analyticsConfig.meta.enabled && !!analyticsConfig.meta.pixelId,

  load() {
    loadBase();
    // Init with external_id so even anonymous pageviews carry a match key.
    // No automatic PageView is fired here — we send a deduplicated one ourselves.
    window.fbq!('init', analyticsConfig.meta.pixelId, { external_id: getExternalId() });
  },

  identify(user) {
    if (typeof window === 'undefined' || !window.fbq) return;
    // Re-init updates the advanced-matching set for subsequent browser events.
    window.fbq('init', analyticsConfig.meta.pixelId, metaUser(user));
  },

  track(event) {
    const isStandard = STANDARD_EVENTS.has(event.name);
    const custom = metaCustom(event.data);

    // 1) Browser Pixel — carries eventID for deduplication.
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq(isStandard ? 'track' : 'trackCustom', event.name, custom, {
        eventID: event.eventId,
      });
    }

    // 2) Conversions API via Zaraz — fired server-side from the Cloudflare edge,
    // which also injects client IP + user-agent. Same event_name + event_id as
    // the Pixel above => Meta deduplicates them into one event.
    if (typeof window !== 'undefined' && window.zaraz?.track) {
      window.zaraz.track(event.name, {
        event_id: event.eventId,
        event_source_url: event.eventSourceUrl,
        action_source: 'website',
        ...metaUser(event.user),
        fbp: getFbp(),
        fbc: getFbc(),
        ...custom,
      });
    }
  },
};
