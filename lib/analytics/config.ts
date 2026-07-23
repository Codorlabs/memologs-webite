// Central, config-driven switchboard. Enable a platform by setting its
// NEXT_PUBLIC_* env var; the dispatcher only loads/sends to enabled adapters.

export interface MetaConfig {
  enabled: boolean;
  pixelId: string;
}

export interface Ga4Config {
  enabled: boolean;
  measurementId: string;
}

export interface GoogleAdsConfig {
  enabled: boolean;
  conversionId: string;
  // Map a canonical event name -> Google Ads conversion label.
  // e.g. { Lead: 'AbCdEf…' }  (the part after the slash in send_to)
  labels: Record<string, string>;
}

export interface TikTokConfig {
  enabled: boolean;
  pixelId: string;
}

export interface AnalyticsConfig {
  meta: MetaConfig;
  ga4: Ga4Config;
  googleAds: GoogleAdsConfig;
  tiktok: TikTokConfig;
  requireConsent: boolean;
  debug: boolean;
}

const env = (key: string): string => process.env[key] || '';

// Google Ads conversion labels (the part after the slash in gtag `send_to`),
// keyed by canonical event name. Env-driven so no code edit is needed to wire a
// conversion. Only events with a label fire a Google Ads conversion.
const googleAdsLabels = (): Record<string, string> => {
  const labels: Record<string, string> = {};
  const lead = env('NEXT_PUBLIC_GOOGLE_ADS_LABEL_LEAD');
  const completeReg = env('NEXT_PUBLIC_GOOGLE_ADS_LABEL_COMPLETE_REGISTRATION');
  if (lead) labels.Lead = lead;
  if (completeReg) labels.CompleteRegistration = completeReg;
  return labels;
};

export const analyticsConfig: AnalyticsConfig = {
  meta: {
    // Meta is the only platform wired on by default.
    enabled: true,
    pixelId: env('NEXT_PUBLIC_META_PIXEL_ID') || '1005901432009535',
  },
  ga4: {
    enabled: !!env('NEXT_PUBLIC_GA4_MEASUREMENT_ID'),
    measurementId: env('NEXT_PUBLIC_GA4_MEASUREMENT_ID'),
  },
  googleAds: {
    enabled: !!env('NEXT_PUBLIC_GOOGLE_ADS_ID'),
    conversionId: env('NEXT_PUBLIC_GOOGLE_ADS_ID'),
    labels: googleAdsLabels(),
  },
  tiktok: {
    enabled: !!env('NEXT_PUBLIC_TIKTOK_PIXEL_ID'),
    pixelId: env('NEXT_PUBLIC_TIKTOK_PIXEL_ID'),
  },
  // Flip on to make events wait for explicit consent before firing.
  requireConsent: env('NEXT_PUBLIC_ANALYTICS_REQUIRE_CONSENT') === 'true',
  debug: process.env.NODE_ENV !== 'production',
};
