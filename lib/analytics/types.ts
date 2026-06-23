// Canonical event names used across the app. Each adapter maps these to its
// platform-specific equivalent (e.g. Meta "Lead", GA4 "generate_lead").
export type CanonicalEventName =
  | 'PageView'
  | 'ViewContent'
  | 'Lead'
  | 'CompleteRegistration'
  | 'Contact'
  | 'Search'
  | 'StartTrial'
  | 'Purchase';

// First-party customer information used to maximize Event Match Quality.
// Always passed RAW (lightly normalized) — each platform hashes it itself
// (fbq advanced matching, Zaraz/Meta CAPI, TikTok). Never hash here, or you
// risk double-hashing.
export interface UserData {
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  city?: string;
  state?: string;
  zip?: string;
  country?: string;
  externalId?: string;
}

// Business/contextual data attached to an event (value, currency, content...).
// Keys are camelCase; adapters map to platform names (contentName -> content_name).
export interface EventData {
  value?: number;
  currency?: string;
  contentName?: string;
  contentCategory?: string;
  contentType?: string;
  contentIds?: string[];
  [key: string]: unknown;
}

// A fully-resolved event ready for dispatch. `eventId` is the shared key that
// lets the browser Pixel and the Conversions API event deduplicate.
export interface NormalizedEvent {
  name: CanonicalEventName | string;
  eventId: string;
  eventSourceUrl: string;
  data: EventData;
  user: UserData;
}

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
    zaraz?: {
      track: (name: string, props?: Record<string, unknown>) => void;
      [key: string]: unknown;
    };
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    ttq?: {
      track: (name: string, data?: Record<string, unknown>, options?: Record<string, unknown>) => void;
      identify: (data: Record<string, unknown>) => void;
      page: () => void;
      [key: string]: unknown;
    };
  }
}
