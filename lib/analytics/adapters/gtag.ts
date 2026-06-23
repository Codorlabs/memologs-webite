// Shared gtag.js loader for GA4 and Google Ads (one script, many configs).

let scriptInjected = false;
const configured = new Set<string>();

export function ensureGtag(id: string, configParams?: Record<string, unknown>): void {
  if (typeof window === 'undefined' || !id) return;

  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = function () {
      // gtag relies on the literal `arguments` object being pushed.
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer!.push(arguments);
    } as (...args: unknown[]) => void;
    window.gtag('js', new Date());
  }

  if (!scriptInjected) {
    scriptInjected = true;
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
    document.head.appendChild(script);
  }

  if (!configured.has(id)) {
    configured.add(id);
    window.gtag('config', id, configParams || {});
  }
}
