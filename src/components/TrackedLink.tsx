'use client';

import type { ComponentProps } from 'react';
import { track, type AnalyticsEvent } from '@/lib/analytics';

type Props = ComponentProps<'a'> & { event: AnalyticsEvent; props?: Record<string, string> };

/** Plain anchor that records a privacy-friendly event on click (phone, WhatsApp, email). */
export function TrackedLink({ event, props, onClick, children, ...rest }: Props) {
  return (
    <a
      {...rest}
      onClick={(e) => {
        track(event, props);
        onClick?.(e);
      }}
    >
      {children}
    </a>
  );
}
