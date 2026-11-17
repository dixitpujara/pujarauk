import Link from 'next/link';
import { LinkButton } from '@/components/ui/Button';
import { services } from '@/content/services';

export const metadata = { title: 'Page not found', robots: { index: false, follow: false } };

export default function NotFound() {
  return (
    <section aria-labelledby="nf-heading" className="container-content py-20 sm:py-28">
      <div className="mx-auto max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent-600">Error 404</p>
        <h1 id="nf-heading" className="mt-2 text-4xl">
          We cannot find that page
        </h1>
        <p className="mt-4 text-lg text-ink-muted">The page may have moved when the site was rebuilt. Try one of the links below or use the menu.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <LinkButton href="/">Homepage</LinkButton>
          <LinkButton href="/contact" variant="secondary">
            Contact us
          </LinkButton>
        </div>
        <h2 className="mt-12 text-xl">Services</h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {services.map((s) => (
            <li key={s.slug}>
              <Link href={`/services/${s.slug}`} className="text-navy underline">
                {s.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
