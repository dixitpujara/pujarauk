'use client';

import { useState } from 'react';
import { siteConfig } from '@/config/site';
import { track } from '@/lib/analytics';
import { Icon } from './Icon';
import { Button } from './ui/Button';

/**
 * Booking embed with loading, empty (not configured), success and error states.
 * The iframe is only created after the visitor chooses to open it, so the
 * third-party tool sets nothing until then (see Cookie Policy).
 */
export function BookingEmbed() {
  const url = process.env.NEXT_PUBLIC_BOOKING_URL;
  const [opened, setOpened] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  if (!url) {
    return (
      <div className="rounded-lg border-2 border-dashed border-line bg-surface-alt p-6">
        <p className="font-semibold text-navy">Online booking is not switched on yet.</p>
        <p className="mt-2 text-ink-muted">
          [PLACEHOLDER: booking tool to be confirmed.] Until then, email{' '}
          <a href={`mailto:${siteConfig.contact.email}?subject=Consultation%20request`} className="font-semibold text-navy underline">
            {siteConfig.contact.email}
          </a>{' '}
          with two or three times that suit you (UK time) and we will confirm within one UK working day.
        </p>
      </div>
    );
  }

  if (!opened) {
    return (
      <div className="rounded-lg border border-line bg-surface-alt p-6">
        <p className="text-ink-muted">{siteConfig.booking.timezoneNote} The calendar is provided by a third party and loads only when you open it.</p>
        <Button
          size="lg"
          className="mt-4"
          onClick={() => {
            setOpened(true);
            track('booking_open');
          }}
        >
          <Icon name="calendar" className="h-5 w-5" /> Open the booking calendar
        </Button>
      </div>
    );
  }

  return (
    <div className="relative min-h-[640px] overflow-hidden rounded-lg border border-line bg-surface">
      {!loaded && !failed ? (
        <div className="absolute inset-0 flex items-center justify-center text-ink-muted" role="status" aria-live="polite">
          Loading available slots…
        </div>
      ) : null}
      {failed ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center" role="alert">
          <p className="font-semibold text-navy">The booking calendar did not load.</p>
          <p className="text-ink-muted">
            Please email{' '}
            <a href={`mailto:${siteConfig.contact.email}?subject=Consultation%20request`} className="font-semibold text-navy underline">
              {siteConfig.contact.email}
            </a>{' '}
            with times that suit you.
          </p>
          <Button variant="secondary" onClick={() => { setFailed(false); setLoaded(false); }}>Try again</Button>
        </div>
      ) : (
        <iframe
          title="Book a consultation (opens the booking provider's calendar)"
          src={url}
          className="h-[640px] w-full"
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          allow="payment"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      )}
    </div>
  );
}
