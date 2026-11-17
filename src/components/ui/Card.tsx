import type { ReactNode } from 'react';

export function Card({ children, className = '', as: Tag = 'div' }: { children: ReactNode; className?: string; as?: 'div' | 'li' | 'article' }) {
  return (
    <Tag className={`bg-surface border border-line rounded-lg shadow-card p-6 sm:p-7 ${className}`}>{children}</Tag>
  );
}
