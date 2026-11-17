'use client';

import Script from 'next/script';
import { useSyncExternalStore } from 'react';
import { analyticsEnabled, isOptedOut } from '@/lib/analytics';

const subscribe = () => () => {};
const getSnapshot = () => analyticsEnabled() && !isOptedOut();
const getServerSnapshot = () => false;

/**
 * Loads the cookieless analytics script only when configured and not opted out.
 * The script is loaded after hydration so it never blocks rendering.
 */
export function Analytics() {
  // Read the opt-out flag only on the client; the server always renders nothing.
  const allowed = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  if (!allowed) return null;
  const host = process.env.NEXT_PUBLIC_ANALYTICS_HOST;
  const domain = process.env.NEXT_PUBLIC_ANALYTICS_DOMAIN;
  return <Script defer data-domain={domain} src={`https://${host}/js/script.tagged-events.js`} strategy="afterInteractive" />;
}
