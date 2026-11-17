import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';
import type { ComponentProps } from 'react';

/** Turns "## Heading" into an id so legal pages can be deep-linked (e.g. #opt-out-of-analytics). */
function slugify(children: React.ReactNode): string | undefined {
  const text = typeof children === 'string' ? children : Array.isArray(children) ? children.filter((c) => typeof c === 'string').join('') : '';
  return text
    ? text
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-')
    : undefined;
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: (props: ComponentProps<'h2'>) => <h2 id={slugify(props.children)} {...props} />,
    h3: (props: ComponentProps<'h3'>) => <h3 id={slugify(props.children)} {...props} />,
    a: ({ href = '', children, ...rest }: ComponentProps<'a'>) => {
      const external = /^https?:\/\//.test(href);
      if (external) {
        return (
          <a href={href} rel="noopener noreferrer" {...rest}>
            {children}
          </a>
        );
      }
      return (
        <Link href={href} {...rest}>
          {children}
        </Link>
      );
    },
    table: (props: ComponentProps<'table'>) => (
      <div className="overflow-x-auto">
        <table {...props} />
      </div>
    ),
    ...components,
  };
}
