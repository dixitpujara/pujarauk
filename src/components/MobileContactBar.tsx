import { siteConfig } from '@/config/site';
import { Icon } from './Icon';
import { TrackedLink } from './TrackedLink';

/** Click-to-call and WhatsApp bar, mobile only (brief section 8). */
export function MobileContactBar() {
  const phone = siteConfig.contact.ukPhone.confirmed ? siteConfig.contact.ukPhone : siteConfig.contact.indiaPhones[0];
  return (
    <nav aria-label="Call or WhatsApp" className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 border-t border-line bg-surface sm:hidden print:hidden" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
      <TrackedLink
        href={`tel:${phone.e164}`}
        event="phone_click"
        props={{ location: 'mobile_bar' }}
        className="flex min-h-12 items-center justify-center gap-2 text-sm font-semibold text-navy no-underline"
      >
        <Icon name="phone" className="h-5 w-5" /> Call
      </TrackedLink>
      <TrackedLink
        href={`https://wa.me/${siteConfig.contact.whatsapp.e164}`}
        event="whatsapp_click"
        props={{ location: 'mobile_bar' }}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-12 items-center justify-center gap-2 border-l border-line text-sm font-semibold text-navy no-underline"
      >
        <Icon name="whatsapp" className="h-5 w-5" /> WhatsApp
      </TrackedLink>
    </nav>
  );
}
