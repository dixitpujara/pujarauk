import type { ReactNode } from 'react';
import { Breadcrumbs } from './Breadcrumbs';
import type { Crumb } from '@/lib/schema';

export function PageHero({ title, lead, crumbs, eyebrow, children }: { title: string; lead?: string; crumbs: Crumb[]; eyebrow?: string; children?: ReactNode }) {
  return (
    <header className="bg-surface-alt border-b border-line">
      <div className="container-content py-10 sm:py-14">
        <Breadcrumbs crumbs={crumbs} />
        {eyebrow ? <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-accent-600">{eyebrow}</p> : null}
        <h1 className={`${eyebrow ? 'mt-2' : 'mt-6'} max-w-4xl text-4xl sm:text-5xl`}>{title}</h1>
        {lead ? <p className="mt-5 max-w-3xl text-lg sm:text-xl text-ink-muted">{lead}</p> : null}
        {children}
      </div>
    </header>
  );
}
