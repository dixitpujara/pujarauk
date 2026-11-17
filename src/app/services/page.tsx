import type { Metadata } from 'next';
import { CtaBand } from '@/components/CtaBand';
import { PageHero } from '@/components/PageHero';
import { ServiceCard } from '@/components/ServiceCard';
import { Section, SectionHeading } from '@/components/ui/Section';
import { servicesHub } from '@/content/pages';
import { getService } from '@/content/services';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Accounting services for UK clients',
  description: 'Outsourced bookkeeping, year-end accounts, VAT, payroll, management accounts and Self Assessment preparation, plus India tax and subsidiary compliance.',
  path: '/services',
});

export default function ServicesPage() {
  return (
    <>
      <PageHero title={servicesHub.heading} lead={servicesHub.intro} crumbs={[{ name: 'Services', path: '/services' }]} />
      {servicesHub.groups.map((group, i) => {
        const items = group.services.map(getService).filter((s): s is NonNullable<typeof s> => Boolean(s));
        const id = `group-${i}`;
        return (
          <Section key={group.heading} tone={i % 2 ? 'alt' : 'default'} labelledBy={id}>
            <SectionHeading id={id} title={group.heading} text={group.description} />
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((s) => (
                <ServiceCard key={s.slug} service={s} />
              ))}
            </ul>
          </Section>
        );
      })}
      <CtaBand heading="Not sure which service fits?" text="Book a short call and we will tell you plainly what we can take on, what stays with your accountant, and what it would cost." />
    </>
  );
}
