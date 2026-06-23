import type { Adapter } from './base';
import { analyticsConfig } from '../config';
import { ensureGtag } from './gtag';

// Canonical event name -> GA4 recommended event name.
const EVENT_MAP: Record<string, string> = {
  PageView: 'page_view',
  ViewContent: 'view_item',
  Lead: 'generate_lead',
  CompleteRegistration: 'sign_up',
  Contact: 'contact',
  Search: 'search',
  StartTrial: 'start_trial',
  Purchase: 'purchase',
};

export const ga4Adapter: Adapter = {
  name: 'ga4',

  isEnabled: () => analyticsConfig.ga4.enabled && !!analyticsConfig.ga4.measurementId,

  load() {
    // send_page_view:false — we fire page_view manually on route change.
    ensureGtag(analyticsConfig.ga4.measurementId, { send_page_view: false });
  },

  identify(user) {
    if (typeof window === 'undefined' || !window.gtag) return;
    window.gtag('set', 'user_data', {
      email: user.email,
      phone_number: user.phone,
      address: { first_name: user.firstName, last_name: user.lastName },
    });
  },

  track(event) {
    if (typeof window === 'undefined' || !window.gtag) return;
    window.gtag('event', EVENT_MAP[event.name] || event.name, {
      ...event.data,
      event_id: event.eventId,
    });
  },
};
