import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  tone?: 'default' | 'alt' | 'navy';
  className?: string;
  id?: string;
  labelledBy?: string;
};

const tones = {
  default: 'bg-surface',
  alt: 'bg-surface-alt',
  navy: 'bg-navy text-white [&_h2]:text-white [&_h3]:text-white',
};

export function Section({ children, tone = 'default', className = '', id, labelledBy }: Props) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`${tones[tone]} py-14 sm:py-20 ${className}`}>
      <div className="container-content">{children}</div>
    </section>
  );
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  text,
  align = 'left',
}: {
  id: string;
  eyebrow?: string;
  title: string;
  text?: string;
  align?: 'left' | 'center';
}) {
  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''} mb-10`}>
      {eyebrow ? <p className="text-sm font-semibold uppercase tracking-wide text-accent-600 mb-3">{eyebrow}</p> : null}
      <h2 id={id} className="text-3xl sm:text-4xl">
        {title}
      </h2>
      {text ? <p className="mt-4 text-lg text-ink-muted">{text}</p> : null}
    </div>
  );
}
