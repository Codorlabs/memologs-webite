import type { Adapter } from './base';
import type { EventData, NormalizedEvent, UserData } from '../types';
import { getExternalId, getFbp, getFbc } from '../identity';

// Server-side sink. One zaraz.track() per event is forwarded from the Cloudflare
// edge to every enabled Zaraz tool (Meta CAPI, GA4, TikTok Events API, Google
// Ads) via dashboard triggers keyed on the event name. Zaraz also injects the
// client IP + user-agent server-side. The shared event_id lets each platform
// deduplicate this server event against its browser-pixel counterpart.
//
// We ship a superset of property names so every managed component finds what it
// needs: Meta shorthand (em/ph/fn/ln/...) for the Meta component, and plain
// keys (email/phone/first_name/...) for GA4 / TikTok. Map them per tool in the
// Zaraz dashboard action. PII is raw — each component hashes it itself.

const DATA_KEY_MAP: Record<string, string> = {
  contentName: 'content_name',
  contentCategory: 'content_category',
  contentType: 'content_type',
  contentIds: 'content_ids',
};

function userProps(user: UserData): Record<string, unknown> {
  const o: Record<string, unknown> = {};
  // Meta CAPI shorthand.
  if (user.email) o.em = user.email;
  if (user.phone) o.ph = user.phone;
  if (user.firstName) o.fn = user.firstName;
  if (user.lastName) o.ln = user.lastName;
  if (user.city) o.ct = user.city;
  if (user.state) o.st = user.state;
  if (user.zip) o.zp = user.zip;
  if (user.country) o.country = user.country;
  if (user.externalId) o.external_id = user.externalId;
  // Plain keys for GA4 / TikTok components.
  if (user.email) o.email = user.email;
  if (user.phone) o.phone = user.phone;
  if (user.firstName) o.first_name = user.firstName;
  if (user.lastName) o.last_name = user.lastName;
  return o;
}

function customProps(data: EventData): Record<string, unknown> {
  const o: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(data)) {
    if (value == null) continue;
    o[DATA_KEY_MAP[key] || key] = value;
  }
  return o;
}

export const zarazAdapter: Adapter = {
  name: 'zaraz',

  // Enabled wherever Zaraz has injected itself (i.e. in the browser on the
  // edge-served site). Absent in local dev, so this no-ops there.
  isEnabled: () => typeof window !== 'undefined' && !!window.zaraz?.track,

  load() {
    // Nothing to load — Zaraz is injected by Cloudflare at the edge.
  },

  identify() {
    // Identity travels with each event's user props; no separate call needed.
  },

  track(event: NormalizedEvent) {
    if (typeof window === 'undefined' || !window.zaraz?.track) return;
    window.zaraz.track(event.name, {
      event_id: event.eventId,
      event_source_url: event.eventSourceUrl,
      action_source: 'website',
      ...userProps({ ...event.user, externalId: event.user.externalId || getExternalId() }),
      fbp: getFbp(),
      fbc: getFbc(),
      ...customProps(event.data),
    });
  },
};
