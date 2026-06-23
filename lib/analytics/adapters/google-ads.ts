import type { Adapter } from './base';
import { analyticsConfig } from '../config';
import { ensureGtag } from './gtag';

// Google Ads only cares about conversions you've explicitly mapped to a label
// in analyticsConfig.googleAds.labels. Unmapped events are ignored.
export const googleAdsAdapter: Adapter = {
  name: 'google-ads',

  isEnabled: () => analyticsConfig.googleAds.enabled && !!analyticsConfig.googleAds.conversionId,

  load() {
    ensureGtag(analyticsConfig.googleAds.conversionId);
  },

  identify() {
    // Enhanced conversions for Google Ads are configured via gtag('set','user_data')
    // in the GA4 adapter; nothing extra needed here.
  },

  track(event) {
    if (typeof window === 'undefined' || !window.gtag) return;
    const label = analyticsConfig.googleAds.labels[event.name];
    if (!label) return;
    window.gtag('event', 'conversion', {
      send_to: `${analyticsConfig.googleAds.conversionId}/${label}`,
      value: event.data.value,
      currency: event.data.currency,
      transaction_id: event.eventId,
    });
  },
};
