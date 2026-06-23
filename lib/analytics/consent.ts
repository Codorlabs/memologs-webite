import { analyticsConfig } from './config';

export type ConsentState = 'granted' | 'denied' | 'pending';

// When consent is not required, default to granted so tracking works out of the
// box. When required, start pending and hold events until setConsent(true).
let state: ConsentState = analyticsConfig.requireConsent ? 'pending' : 'granted';

const queue: Array<() => void> = [];

export function getConsent(): ConsentState {
  return state;
}

export function setConsent(granted: boolean): void {
  state = granted ? 'granted' : 'denied';
  if (state === 'granted') {
    flush();
  } else {
    queue.length = 0;
  }
}

// Run now if granted; queue while pending; drop if denied.
export function whenConsented(fn: () => void): void {
  if (state === 'granted') fn();
  else if (state === 'pending') queue.push(fn);
}

function flush(): void {
  while (queue.length) {
    const fn = queue.shift();
    if (fn) fn();
  }
}
