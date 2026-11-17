import Link from 'next/link';
import { JsonLd } from './JsonLd';
import { breadcrumbSchema, type Crumb } from '@/lib/schema';

export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  const all: Crumb[] = [{ name: 'Home', path: '/' }, ...crumbs];
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-ink-muted">
      <JsonLd data={breadcrumbSchema(all)} />
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {all.map((c, i) => {
          const last = i === all.length - 1;
          return (
            <li key={c.path} className="flex items-center gap-2">
              {last ? (
                <span aria-current="page" className="text-ink font-medium">
                  {c.name}
                </span>
              ) : (
                <Link href={c.path} className="hover:text-navy hover:underline">
                  {c.name}
                </Link>
              )}
              {!last ? <span aria-hidden="true">/</span> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
