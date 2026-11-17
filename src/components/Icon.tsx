import type { ComponentProps } from 'react';

export type IconName =
  | 'ledger' | 'accounts' | 'vat' | 'payroll' | 'reports' | 'selfassessment' | 'india' | 'subsidiary'
  | 'phone' | 'whatsapp' | 'mail' | 'check' | 'arrow' | 'menu' | 'close' | 'clock' | 'shield' | 'users' | 'globe' | 'chevron' | 'warning' | 'info' | 'calendar' | 'cross';

const paths: Record<IconName, React.ReactNode> = {
  ledger: <><path d="M5 4h11a2 2 0 0 1 2 2v14H7a2 2 0 0 1-2-2V4z" /><path d="M5 4v16M9 8h6M9 12h6M9 16h4" /></>,
  accounts: <><path d="M6 3h9l4 4v14H6z" /><path d="M15 3v4h4M9 13h6M9 17h6M9 9h2" /></>,
  vat: <><circle cx="12" cy="12" r="9" /><path d="M8 15l8-6M9 9h.01M15 15h.01" /></>,
  payroll: <><circle cx="9" cy="8" r="3" /><path d="M3 20a6 6 0 0 1 12 0M16 11h5M16 15h5M16 7h5" /></>,
  reports: <><path d="M4 20h16M7 16V9M12 16V5M17 16v-6" /></>,
  selfassessment: <><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 8h8M8 12h8M8 16h5" /></>,
  india: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></>,
  subsidiary: <><rect x="3" y="10" width="7" height="11" rx="1" /><rect x="14" y="4" width="7" height="17" rx="1" /><path d="M6 14h1M6 17h1M17 8h1M17 12h1M17 16h1" /></>,
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />,
  whatsapp: <><path d="M4 20l1.3-3.8A8 8 0 1 1 8 19.1z" /><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 1a4.5 4.5 0 0 1-2-2l1-1-1-2z" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>,
  check: <path d="M5 12l4 4L19 6" />,
  cross: <path d="M6 6l12 12M18 6L6 18" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  chevron: <path d="M6 9l6 6 6-6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  shield: <><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" /><path d="M9 12l2 2 4-4" /></>,
  users: <><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.5" /><path d="M3 20a6 6 0 0 1 12 0M15 19a4.5 4.5 0 0 1 6-3.5" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" /></>,
  warning: <><path d="M12 3l10 18H2z" /><path d="M12 10v4M12 17h.01" /></>,
  info: <><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h.01" /></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" /></>,
};

type Props = { name: IconName; className?: string; title?: string } & Omit<ComponentProps<'svg'>, 'className'>;

/** Inline stroke icons in one consistent style. Decorative by default (aria-hidden). */
export function Icon({ name, className = 'w-6 h-6', title, ...rest }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden={title ? undefined : true}
      role={title ? 'img' : undefined}
      focusable="false"
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      {paths[name]}
    </svg>
  );
}
