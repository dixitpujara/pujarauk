import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { Icon } from './Icon';
import { Logo } from './Logo';
import { MobileNav, type NavItem } from './MobileNav';
import { TrackedLink } from './TrackedLink';
import { LinkButton } from './ui/Button';
import { DesktopNav } from './DesktopNav';

export const navItems: NavItem[] = [
  { label: 'Services', href: '/services' },
  { label: 'Who we help', href: '/who-we-help' },
  { label: 'How we work', href: '/how-we-work' },
  { label: 'About', href: '/about' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
];

export function Header() {
  const phone = siteConfig.contact.ukPhone.confirmed ? siteConfig.contact.ukPhone : null;
  const fallbackPhone = siteConfig.contact.indiaPhones[0];
  const shown = phone ?? fallbackPhone;
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-surface/85">
      <div className="container-content relative flex h-18 max-w-[80rem] items-center justify-between gap-4 py-3">
        <Link href="/" className="shrink-0 no-underline rounded-md">
          <Logo className="h-8 w-auto sm:h-10 lg:h-8 xl:h-10" />
        </Link>
        <DesktopNav items={navItems} />
        <div className="flex items-center gap-2 sm:gap-3">
          <TrackedLink
            href={`tel:${shown.e164}`}
            event="phone_click"
            props={{ location: 'header' }}
            className="hidden xl:inline-flex items-center gap-2 whitespace-nowrap rounded-md px-3 py-2 text-sm font-semibold text-navy no-underline hover:bg-surface-navy-tint"
          >
            <Icon name="phone" className="h-5 w-5" />
            <span>{shown.display}</span>
          </TrackedLink>
          <div className="hidden sm:block">
            <LinkButton href="/contact#book" className="whitespace-nowrap">Book a consultation</LinkButton>
          </div>
          <MobileNav items={navItems} />
        </div>
      </div>
    </header>
  );
}
