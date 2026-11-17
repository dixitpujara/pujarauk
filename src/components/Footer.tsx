import Link from 'next/link';
import { formatAddress, siteConfig } from '@/config/site';
import { services } from '@/content/services';
import { Logo } from './Logo';
import { TrackedLink } from './TrackedLink';

const legalLinks = [
  { label: 'Privacy Notice', href: '/legal/privacy-notice' },
  { label: 'Cookie Policy', href: '/legal/cookie-policy' },
  { label: 'Terms of Use', href: '/legal/terms-of-use' },
  { label: 'Complaints Procedure', href: '/legal/complaints-procedure' },
  { label: 'Accessibility Statement', href: '/legal/accessibility-statement' },
];

const companyLinks = [
  { label: 'Who we help', href: '/who-we-help' },
  { label: 'How we work', href: '/how-we-work' },
  { label: 'About', href: '/about' },
  { label: 'Clients in Europe', href: '/clients-in-europe' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
];

/**
 * Required business information on every page (brief section 6.6). Everything
 * here comes from src/config/site.ts.
 */
export function Footer() {
  const { provider, contact } = siteConfig;
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-surface-alt pb-16 sm:pb-0">
      <div className="container-content py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo className="h-10 w-auto" />
            <p className="mt-4 max-w-sm text-sm text-ink-muted">{siteConfig.strapline}</p>
            <p className="mt-4 max-w-sm text-sm text-ink-muted">{provider.teamLocationSentence}</p>
          </div>
          <nav aria-labelledby="footer-services">
            <h2 id="footer-services" className="text-sm font-semibold uppercase tracking-wide">
              Services
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-ink underline hover:text-navy">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-labelledby="footer-practice">
            <h2 id="footer-practice" className="text-sm font-semibold uppercase tracking-wide">
              The practice
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-ink underline hover:text-navy">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-labelledby="footer-legal">
            <h2 id="footer-legal" className="text-sm font-semibold uppercase tracking-wide">
              Legal
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-ink underline hover:text-navy">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 border-t border-line pt-8 text-sm text-ink-muted">
          <p>
            <strong className="text-ink">{provider.legalName}</strong>, {provider.legalForm}.
          </p>
          <address className="mt-2 not-italic">
            {formatAddress()}
            {' · '}
            <TrackedLink href={`mailto:${contact.email}`} event="email_click" className="text-ink underline hover:text-navy">
              {contact.email}
            </TrackedLink>
            {' · '}
            {contact.ukPhone.confirmed ? (
              <>
                <TrackedLink href={`tel:${contact.ukPhone.e164}`} event="phone_click" props={{ location: 'footer' }} className="text-ink underline hover:text-navy">
                  {contact.ukPhone.display}
                </TrackedLink>
                {' · '}
              </>
            ) : null}
            {contact.indiaPhones.map((p, i) => (
              <span key={p.e164}>
                <TrackedLink href={`tel:${p.e164}`} event="phone_click" props={{ location: 'footer' }} className="text-ink underline hover:text-navy">
                  {p.display}
                </TrackedLink>
                {i < contact.indiaPhones.length - 1 ? ' / ' : ''}
              </span>
            ))}
          </address>
          <p className="mt-2">
            Professional body:{' '}
            <a href={provider.professionalBody.url} rel="noopener noreferrer" className="text-ink underline hover:text-navy">
              {provider.professionalBody.name}
            </a>
            {' · '}
            <a href={provider.professionalBody.rulesUrl} rel="noopener noreferrer" className="text-ink underline hover:text-navy">
              {provider.professionalBody.rulesLabel}
            </a>
            . Principal: {siteConfig.principal.name}, {siteConfig.principal.designation}, Membership No. {siteConfig.principal.membershipNumber}.
          </p>
          <p className="mt-2">
            We prepare accounts, returns and records for you or your UK accountant to review and submit. We are not currently registered with HMRC as a tax agent and do not submit UK returns on clients&rsquo; behalf.
            {provider.hmrc.taxAdviserRegistered ? ` ${provider.hmrc.registrationStatement}` : ''}
          </p>
          {provider.vat.confirmed ? <p className="mt-2">{provider.vat.statement}</p> : null}
          <p className="mt-6">&copy; {year} {provider.legalName}. All rights reserved. Content reviewed {siteConfig.dates.contentReviewed}.</p>
        </div>
      </div>
    </footer>
  );
}
