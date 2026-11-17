'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { NavItem } from './MobileNav';

export function DesktopNav({ items }: { items: NavItem[] }) {
  const pathname = usePathname();
  return (
    <nav aria-label="Main" className="hidden lg:block">
      <ul className="flex items-center gap-0.5">
        {items.map((item) => {
          const current = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={current ? 'page' : undefined}
                className={`whitespace-nowrap rounded-md px-2 py-2 text-sm font-medium no-underline hover:bg-surface-navy-tint hover:text-navy ${current ? 'text-navy underline decoration-accent decoration-2 underline-offset-8' : 'text-ink'}`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
