import type { NormalizedEvent, UserData } from '../types';

// Every platform integration implements this interface. The dispatcher only
// ever touches adapters whose isEnabled() returns true.
export interface Adapter {
  readonly name: string;
  isEnabled(): boolean;
  // Inject the platform script / initialize. Must be idempotent.
  load(): void;
  // Update known user data for advanced matching (no event sent).
  identify(user: UserData): void;
  // Send a single event.
  track(event: NormalizedEvent): void;
}
