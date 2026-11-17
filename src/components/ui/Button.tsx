import Link from 'next/link';
import type { ComponentProps, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'inverse';
type Size = 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-colors duration-[var(--duration-fast)] ease-[var(--ease-brand)] no-underline focus-visible:outline-offset-4 disabled:opacity-60 disabled:cursor-not-allowed';
const variants: Record<Variant, string> = {
  primary: 'bg-navy text-white hover:bg-navy-700 active:bg-navy-800',
  secondary: 'bg-white text-navy border-2 border-navy hover:bg-surface-navy-tint',
  ghost: 'text-navy hover:bg-surface-navy-tint',
  inverse: 'bg-white text-navy hover:bg-accent-100',
};
const sizes: Record<Size, string> = {
  md: 'px-5 py-2.5 text-sm min-h-11',
  lg: 'px-6 py-3 text-base min-h-12',
};

export function buttonClasses(variant: Variant = 'primary', size: Size = 'md', extra = '') {
  return `${base} ${variants[variant]} ${sizes[size]} ${extra}`.trim();
}

type LinkButtonProps = {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
} & Omit<ComponentProps<typeof Link>, 'href' | 'className' | 'children'>;

export function LinkButton({ href, variant = 'primary', size = 'md', className = '', children, ...rest }: LinkButtonProps) {
  return (
    <Link href={href} className={buttonClasses(variant, size, className)} {...rest}>
      {children}
    </Link>
  );
}

type ButtonProps = { variant?: Variant; size?: Size } & ComponentProps<'button'>;

export function Button({ variant = 'primary', size = 'md', className = '', type = 'button', ...rest }: ButtonProps) {
  return <button type={type} className={buttonClasses(variant, size, className)} {...rest} />;
}
