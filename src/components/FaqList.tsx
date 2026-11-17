import type { Faq } from '@/content/types';
import { Icon } from './Icon';
import { JsonLd } from './JsonLd';
import { faqSchema } from '@/lib/schema';

/**
 * Native <details> keeps the FAQ fully keyboard operable without JavaScript.
 * FAQPage JSON-LD is emitted only for the questions visible on this page.
 */
export function FaqList({ faqs, withSchema = true }: { faqs: Faq[]; withSchema?: boolean }) {
  if (!faqs.length) return null;
  return (
    <div className="divide-y divide-line border-y border-line">
      {withSchema ? <JsonLd data={faqSchema(faqs)} /> : null}
      {faqs.map((f) => (
        <details key={f.question} className="group py-1">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left font-semibold text-navy marker:content-none [&::-webkit-details-marker]:hidden">
            <span>{f.question}</span>
            <Icon name="chevron" className="h-5 w-5 shrink-0 transition-transform group-open:rotate-180" />
          </summary>
          <p className="pb-5 pr-9 text-ink-muted">{f.answer}</p>
        </details>
      ))}
    </div>
  );
}
