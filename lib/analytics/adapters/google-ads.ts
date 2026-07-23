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

  identify(user) {
    // Enhanced conversions: attach hashed-by-gtag customer data to conversions.
    // Set here too (not only in the GA4 adapter) so it works when GA4 is off.
    if (typeof window === 'undefined' || !window.gtag) return;
    window.gtag('set', 'user_data', {
      email: user.email,
      phone_number: user.phone,
      address: { first_name: user.firstName, last_name: user.lastName },
    });
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
