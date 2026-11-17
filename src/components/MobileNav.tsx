'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useId, useRef, useState } from 'react';
import { Icon } from './Icon';
import { LinkButton } from './ui/Button';

export type NavItem = { label: string; href: string };

export function MobileNav({ items }: { items: NavItem[] }) {
  const [openFor, setOpenFor] = useState<string | null>(null);
  const panelId = useId();
  const pathname = usePathname();
  const buttonRef = useRef<HTMLButtonElement>(null);

  // The menu is "open" only for the path it was opened on, so navigating closes it
  // without an effect. Escape closes it and returns focus to the toggle.
  const open = openFor === pathname;
  const setOpen = (next: boolean | ((v: boolean) => boolean)) => {
    const value = typeof next === 'function' ? next(open) : next;
    setOpenFor(value ? pathname : null);
  };
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- setOpen is stable per render and only closes
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        className="inline-flex h-11 w-11 items-center justify-center rounded-md text-navy hover:bg-surface-navy-tint"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        <Icon name={open ? 'close' : 'menu'} className="h-6 w-6" />
        <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
      </button>
      <div id={panelId} hidden={!open} className="absolute inset-x-0 top-full border-b border-line bg-surface shadow-card">
        <nav aria-label="Main" className="container-content py-4">
          <ul className="flex flex-col">
            {items.map((item) => {
              const current = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={current ? 'page' : undefined}
                    className={`block rounded-md px-3 py-3 text-base font-medium no-underline hover:bg-surface-navy-tint ${current ? 'text-navy bg-surface-alt' : 'text-ink'}`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-4 flex flex-col gap-3">
            <LinkButton href="/contact#book" size="lg">
              Book a consultation
            </LinkButton>
          </div>
        </nav>
      </div>
    </div>
  );
}
