import { LinkButton } from './ui/Button';

export function CtaBand({ heading, text }: { heading: string; text: string }) {
  return (
    <section aria-labelledby="cta-heading" className="bg-navy text-white">
      <div className="container-content py-14 sm:py-16 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="max-w-2xl">
          <h2 id="cta-heading" className="text-3xl sm:text-4xl !text-white">
            {heading}
          </h2>
          <p className="mt-4 text-lg text-white/85">{text}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <LinkButton href="/contact#book" variant="inverse" size="lg">
            Book a free consultation
          </LinkButton>
          <LinkButton href="/contact#enquiry" variant="secondary" size="lg" className="!border-white !text-white !bg-transparent hover:!bg-white/10">
            Send an enquiry
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
