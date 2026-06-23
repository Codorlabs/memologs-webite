# Analytics

A small, config-driven analytics layer. You call one API; it fans out to every
enabled platform (Meta, GA4, Google Ads, TikTok) and keeps the browser Pixel and
the server-side Conversions API in sync for deduplication.

## Usage

```ts
import { analytics } from '@/lib/analytics';

// Conversion with customer data (maximizes Event Match Quality)
analytics.track(
  'Lead',
  { contentName: 'Contact Form', currency: 'USD', value: 0 }, // event data
  { email, firstName, lastName },                              // user data (raw, never hashed here)
);

// Just identify (advanced matching, no event)
analytics.identify({ email });

// Manual pageview (already handled automatically on route change)
analytics.pageView();

// Consent (only matters if NEXT_PUBLIC_ANALYTICS_REQUIRE_CONSENT=true)
analytics.setConsent(true);
```

Canonical event names: `PageView`, `ViewContent`, `Lead`, `CompleteRegistration`,
`Contact`, `Search`, `StartTrial`, `Purchase`. Each adapter maps these to its
platform's name. Any other string is sent as a custom event.

## How deduplication works

For every `track()` call we generate **one `event_id`** and send the same
`event_name` + `event_id` to:

1. **Browser Pixel** — `fbq('track', name, data, { eventID })`
2. **Conversions API** — `zaraz.track(name, { event_id, ... })`, which the Zaraz
   Meta managed component sends server-side from the Cloudflare edge.

Meta sees both, matches on `event_name` + `event_id`, and counts them once.

## Event Match Quality (EMQ)

Every event carries as much match signal as we have:

| Signal             | Source                                   | Browser | CAPI |
| ------------------ | ---------------------------------------- | ------- | ---- |
| email, phone, name | form fields (+ rehydrated next session)  | ✅ (AM) | ✅   |
| external_id        | server-set `ml_external_id` cookie       | ✅      | ✅   |
| _fbp / _fbc        | server-set cookie / fbclid param         | ✅      | ✅   |
| country            | Cloudflare geo (`ml_country` cookie)     | ✅ (AM) | ✅   |
| client IP + UA     | injected by Zaraz at the edge            | —       | ✅   |
| event_source_url   | `window.location.href`                   | —       | ✅   |

PII is passed **raw** (lightly normalized). Hashing is done by fbq (advanced
matching) and by the Zaraz Meta component — do not hash it yourself.

### Cookie durability (ITP)

`_fbp`, `_fbc`, `ml_external_id`, and `ml_country` are written by
[`middleware.ts`](../../middleware.ts) via HTTP `Set-Cookie` (server-side,
first-party, 90 days). That makes them exempt from Safari ITP's 7-day / 24-hour
cap on JavaScript-set cookies, so identifiers stay durable. The browser Pixel
adopts the pre-existing `_fbp` rather than minting its own. Email/phone/name are
also rehydrated from `localStorage` on load so returning visitors' PageViews
carry them (consent-gated; stored locally only).

## Required Zaraz dashboard setup (one-time)

The code already calls `zaraz.track(...)`. Finish the server side in
Cloudflare → Zaraz:

1. **Add tool → Meta (Facebook) Pixel / Conversions API.**
   - **Pixel ID:** `1005901432009535`. **API token:** your Meta CAPI token.
2. **Create a trigger per event** (Triggers → Create): rule
   `Variable name = Event Name` (i.e. `{{ system.track.name }}`),
   `Equals`, `Match value` = `PageView` / `Lead` / `CompleteRegistration`.
3. **Add an Action per event**, bound to its trigger, and turn ON
   **"Include Event Properties"** — this forwards everything from the
   `zaraz.track()` call (`event_id`, `em`, `fn`, `ln`, `country`, `fbp`, `fbc`,
   `external_id`, …). The component reads `event_id` for dedup, hashes the user
   fields into `user_data`, and auto-adds client IP + user-agent.
   - **PageView** → Action Type **Page view** (event name is auto-set to the
     standard `PageView`).
   - **Lead** → Action Type **Event**, Event name `Lead`.
   - **CompleteRegistration** → Action Type **Event**, Event name
     `CompleteRegistration`.
   - Do **not** attach a Meta action to Zaraz's built-in Pageview trigger — it
     has no `event_id` and would double-count.
4. Publish. Verify in Meta Events Manager → Test Events that each event shows
   **both** "Browser" and "Server" with a "Deduplicated" badge, and check the
   Event Match Quality score per event.

> Note: Zaraz itself is injected by Cloudflare at the edge — we never load it.
> In local dev `window.zaraz` is absent, so only the browser Pixel fires.

## Adding another platform later

Set its env var (see `.env.example`) and it activates — no code change:

- GA4: `NEXT_PUBLIC_GA4_MEASUREMENT_ID`
- Google Ads: `NEXT_PUBLIC_GOOGLE_ADS_ID` (+ add conversion labels to
  `config.ts → googleAds.labels`, e.g. `{ Lead: 'AbCdEf…' }`)
- TikTok: `NEXT_PUBLIC_TIKTOK_PIXEL_ID`

To add a brand-new platform, implement the `Adapter` interface in
`adapters/`, register it in `core.ts`, and add its config to `config.ts`.
