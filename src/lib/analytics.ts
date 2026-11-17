/**
 * Cookieless, aggregate-only analytics helper (brief section 6.4).
 *
 * The provider script is only loaded when NEXT_PUBLIC_ANALYTICS_HOST and
 * NEXT_PUBLIC_ANALYTICS_DOMAIN are set, and never when the visitor has opted
 * out (localStorage key below). No cookies, no cross-site identifiers, no
 * advertising or social pixels.
 */
export const ANALYTICS_OPTOUT_KEY = 'pc_analytics_optout';

export type AnalyticsEvent =
  | 'enquiry_submit'
  | 'enquiry_success'
  | 'enquiry_error'
  | 'booking_open'
  | 'phone_click'
  | 'whatsapp_click'
  | 'email_click';

type PlausibleFn = (event: string, options?: { props?: Record<string, string | number | boolean> }) => void;

declare global {
  interface Window {
    plausible?: PlausibleFn;
  }
}

export function analyticsEnabled(): boolean {
  return Boolean(process.env.NEXT_PUBLIC_ANALYTICS_HOST && process.env.NEXT_PUBLIC_ANALYTICS_DOMAIN);
}

export function isOptedOut(): boolean {
  try {
    return typeof window !== 'undefined' && window.localStorage.getItem(ANALYTICS_OPTOUT_KEY) === '1';
  } catch {
    return false;
  }
}

export function setOptOut(optOut: boolean): void {
  try {
    if (optOut) window.localStorage.setItem(ANALYTICS_OPTOUT_KEY, '1');
    else window.localStorage.removeItem(ANALYTICS_OPTOUT_KEY);
  } catch {
    /* storage unavailable: nothing to persist, nothing fires anyway */
  }
}

/** Fire a custom event. Safe to call anywhere; silently no-ops when analytics is off. */
export function track(event: AnalyticsEvent, props?: Record<string, string | number | boolean>): void {
  if (typeof window === 'undefined' || !analyticsEnabled() || isOptedOut()) return;
  try {
    window.plausible?.(event, props ? { props } : undefined);
  } catch {
    /* never let analytics break the page */
  }
}
