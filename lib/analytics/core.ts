import type { Adapter } from './adapters/base';
import type { CanonicalEventName, EventData, NormalizedEvent, UserData } from './types';
import { metaAdapter } from './adapters/meta';
import { ga4Adapter } from './adapters/ga4';
import { googleAdsAdapter } from './adapters/google-ads';
import { tiktokAdapter } from './adapters/tiktok';
import { analyticsConfig } from './config';
import { getCountry, getExternalId, getStoredUser, normalizeUser, storeUser, uuid } from './identity';
import { getConsent, setConsent, whenConsented } from './consent';

// Register platforms here. Disabled ones are skipped automatically.
const ADAPTERS: Adapter[] = [metaAdapter, ga4Adapter, googleAdsAdapter, tiktokAdapter];

class Analytics {
  private loaded = false;
  private user: UserData = {};

  /** Load all enabled platform scripts. Called once from AnalyticsProvider. */
  load(): void {
    if (this.loaded || typeof window === 'undefined') return;
    this.loaded = true;
    // Rehydrate match keys from a previous session before anything fires.
    this.user = { ...getStoredUser(), ...this.user };
    this.enrich();
    whenConsented(() => {
      this.enabled().forEach((a) => a.load());
      this.enabled().forEach((a) => a.identify(this.user));
    });
  }

  /** Merge known user data and push it to platforms for advanced matching. */
  identify(user: UserData): void {
    this.user = { ...this.user, ...normalizeUser(user) };
    this.enrich();
    if (getConsent() === 'granted') storeUser(this.user);
    whenConsented(() => this.enabled().forEach((a) => a.identify(this.user)));
  }

  /** Fill in the always-available match keys (external_id, geo country). */
  private enrich(): void {
    if (!this.user.externalId) this.user.externalId = getExternalId();
    if (!this.user.country) {
      const country = getCountry();
      if (country) this.user.country = country.trim().toLowerCase();
    }
  }

  /**
   * Track an event across all enabled platforms. One event_id is generated and
   * shared so the browser Pixel and the Conversions API event deduplicate.
   * Returns the event_id.
   */
  track(name: CanonicalEventName | string, data: EventData = {}, user?: UserData): string {
    if (user) this.identify(user);
    this.enrich();

    const event: NormalizedEvent = {
      name,
      eventId: uuid(),
      eventSourceUrl: typeof window !== 'undefined' ? window.location.href : '',
      data,
      user: this.user,
    };

    if (analyticsConfig.debug) {
      // eslint-disable-next-line no-console
      console.debug('[analytics]', name, event);
    }

    whenConsented(() => this.enabled().forEach((a) => a.track(event)));
    return event.eventId;
  }

  pageView(): string {
    return this.track('PageView');
  }

  /** Grant/deny consent. Granting flushes any events queued while pending. */
  setConsent(granted: boolean): void {
    setConsent(granted);
  }

  getConsent() {
    return getConsent();
  }

  private enabled(): Adapter[] {
    return ADAPTERS.filter((a) => a.isEnabled());
  }
}

// Single shared instance — import { analytics } anywhere.
export const analytics = new Analytics();
