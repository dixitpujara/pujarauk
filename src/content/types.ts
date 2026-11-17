/** Shared content types. All copy is British English, written fresh for the UK site. */

export type Faq = { question: string; answer: string };

export type AudienceId = 'practices' | 'businesses' | 'individuals' | 'companies';

export type Service = {
  slug: string;
  /** Short name used in nav, cards and breadcrumbs (under 40 characters). */
  name: string;
  /** H1 on the service page. */
  title: string;
  /** Page <title>, under 60 characters including " | Pujara & Co". */
  metaTitle: string;
  /** Meta description, under 155 characters. */
  metaDescription: string;
  /** One or two sentences for the services hub card. */
  summary: string;
  /** Lead paragraph under the H1: the client's problem and outcome. */
  intro: string;
  /** Which audiences this service is aimed at. */
  audiences: AudienceId[];
  whoItIsFor: string[];
  included: string[];
  notIncluded: string[];
  /** Ordered steps. */
  howItWorks: { title: string; description: string }[];
  clientProvides: string[];
  faqs: Faq[];
  /** Closing CTA heading and sentence. */
  cta: { heading: string; text: string };
  /** Schema.org serviceType for the Service JSON-LD. */
  serviceType: string;
  /** Icon key, resolved by components/Icon.tsx. */
  icon: 'ledger' | 'accounts' | 'vat' | 'payroll' | 'reports' | 'selfassessment' | 'india' | 'subsidiary';
};

export type Audience = {
  id: AudienceId;
  slug: string;
  name: string;
  heading: string;
  intro: string;
  painPoints: string[];
  howWeHelp: string[];
  services: string[]; // service slugs
  /** Confirmed audiences only are shown. */
  confirmed: boolean;
};

export type Step = { title: string; description: string };

export type ArticleMeta = {
  title: string;
  /** Short <title> (under 60 characters with the " | Pujara & Co" suffix). Falls back to title. */
  metaTitle?: string;
  description: string;
  slug: string;
  author: string;
  authorDesignation: string;
  publishedOn: string; // ISO date yyyy-mm-dd
  reviewedOn: string; // ISO date yyyy-mm-dd
  readingMinutes: number;
  tags: string[];
  /** Sources cited at the end of the article. Prefer GOV.UK. */
  sources: { label: string; url: string }[];
};

export type LegalMeta = {
  title: string;
  description: string;
  slug: string;
  /** Shown as "Last updated". */
  updatedOn: string; // ISO date
  draft: boolean;
};

/* ---------- Page content shapes (src/content/pages.ts) ---------- */

export type HomeContent = {
  hero: { eyebrow: string; heading: string; lead: string; primaryCta: string; secondaryCta: string };
  servicesIntro: { heading: string; text: string };
  whoWeWorkWith: { heading: string; text: string };
  howItWorks: { heading: string; steps: Step[] };
  /** Only confirmed, truthful credentials. No invented statistics. */
  credentials: { label: string; value: string }[];
  principalIntro: { heading: string; paragraphs: string[]; ctaLabel: string };
  faqs: Faq[];
  closingCta: { heading: string; text: string };
};

export type HowWeWorkContent = {
  heading: string;
  intro: string;
  sections: { id: string; heading: string; paragraphs: string[]; bullets?: string[] }[];
  faqs: Faq[];
};

export type TeamMember = {
  name: string;
  role: string;
  qualification: string;
  bio: string;
  /** Real photos only. Leave empty to show initials instead of an image. */
  photo?: { src: string; alt: string };
};

export type AboutContent = {
  heading: string;
  intro: string;
  practice: { heading: string; paragraphs: string[] };
  principal: { heading: string; paragraphs: string[] };
  team: { heading: string; intro: string; members: TeamMember[] };
  values: { heading: string; items: { title: string; description: string }[] };
};

export type EuropeContent = {
  heading: string;
  intro: string;
  offered: { heading: string; items: string[] };
  notOffered: { heading: string; items: string[] };
  practicalities: { heading: string; paragraphs: string[] };
  faqs: Faq[];
};

export type PricingContent = {
  heading: string;
  intro: string;
  /** "quote" shows a request-a-quote layout; "packages" shows GBP packages. [CONFIRM] */
  mode: 'quote' | 'packages';
  packages: {
    name: string;
    priceFrom: string; // e.g. "£250 per month"
    priceNote: string; // e.g. "Excludes VAT" or "[PLACEHOLDER]"
    forWhom: string;
    includes: string[];
  }[];
  howWeQuote: { heading: string; steps: Step[] };
  whatAffectsPrice: { heading: string; items: string[] };
  faqs: Faq[];
};

export type ContactContent = {
  heading: string;
  intro: string;
  formIntro: string;
  sensitiveDataNotice: string;
  bookingHeading: string;
  bookingIntro: string;
  detailsHeading: string;
};

export type ServicesHubContent = {
  heading: string;
  intro: string;
  groups: { heading: string; description: string; services: string[] }[]; // service slugs
};

export type WhoWeHelpContent = {
  heading: string;
  intro: string;
};
