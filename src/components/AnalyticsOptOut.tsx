'use client';

import { useId, useSyncExternalStore } from 'react';
import { analyticsEnabled, isOptedOut, setOptOut } from '@/lib/analytics';
import { siteConfig } from '@/config/site';

const listeners = new Set<() => void>();
function subscribeToStorage(cb: () => void) {
  listeners.add(cb);
  window.addEventListener('storage', cb);
  return () => {
    listeners.delete(cb);
    window.removeEventListener('storage', cb);
  };
}
function notifyStorage() {
  listeners.forEach((l) => l());
}

/** Simple, persistent opt-out control rendered on the Cookie Policy page. */
export function AnalyticsOptOut() {
  const id = useId();
  // Local storage is the source of truth; subscribe so the checkbox follows it.
  const optedOut = useSyncExternalStore(subscribeToStorage, isOptedOut, () => false);
  const ready = useSyncExternalStore(subscribeToStorage, () => true, () => false);

  const enabled = analyticsEnabled();

  return (
    <div id="opt-out" className="rounded-lg border border-line bg-surface-alt p-5">
      {!enabled ? (
        <p className="text-ink-muted">Analytics is not currently active on this site, so there is nothing to opt out of.</p>
      ) : (
        <>
          <label htmlFor={id} className="flex items-start gap-3 font-medium">
            <input
              id={id}
              type="checkbox"
              className="mt-1 h-5 w-5 accent-navy"
              checked={optedOut}
              disabled={!ready}
              onChange={(e) => {
                setOptOut(e.target.checked);
                notifyStorage();
              }}
            />
            <span>Exclude my visits from {siteConfig.analytics.providerName} statistics on this device</span>
          </label>
          <p className="mt-3 text-sm text-ink-muted" role="status" aria-live="polite">
            {ready
              ? optedOut
                ? 'You are opted out. No analytics script loads on this device until you untick the box.'
                : 'Analytics is active. Ticking the box stores a single item in local storage to remember your choice.'
              : 'Checking your current setting…'}
          </p>
        </>
      )}
    </div>
  );
}
