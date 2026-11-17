import Link from 'next/link';
import type { Service } from '@/content/types';
import { Icon } from './Icon';

export function ServiceCard({ service }: { service: Service }) {
  return (
    <li className="group relative bg-surface border border-line rounded-lg shadow-card p-6 sm:p-7 transition-shadow hover:shadow-card-hover focus-within:shadow-card-hover">
      <div className="flex h-11 w-11 items-center justify-center rounded-md bg-surface-navy-tint text-navy">
        <Icon name={service.icon} className="h-6 w-6" />
      </div>
      <h3 className="mt-5 text-xl">
        <Link href={`/services/${service.slug}`} className="no-underline after:absolute after:inset-0 after:content-[''] group-hover:underline">
          {service.name}
        </Link>
      </h3>
      <p className="mt-3 text-ink-muted">{service.summary}</p>
      <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-navy" aria-hidden="true">
        Find out more <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </p>
    </li>
  );
}
