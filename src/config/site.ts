/**
 * Single source of truth for brand, legal and contact details.
 *
 * Every page footer, the Contact page, the legal pages and the JSON-LD read
 * from this file. If a UK entity is formed later, change this file and the
 * legal pages only; nothing else in the codebase hardcodes these values.
 *
 * Values wrapped in [PLACEHOLDER: ...] or marked `confirmed: false` must be
 * resolved before launch. See docs/HANDOVER.md for the full list.
 */

export const siteConfig = {
  /** Public origin, no trailing slash. Used for canonicals, sitemap, OG and JSON-LD. */
  url: 'https://www.pujaraandco.co.uk',
  /** Trading style used in the header, titles and copy. Never "Ltd", "LLP" or "UK Limited". */
  name: 'Pujara & Co',
  /** UK-focused strapline. */
  strapline: 'Accounts and tax support for UK practices, businesses and individuals',
  /** Locale and language for <html lang>, Open Graph and schema. */
  locale: 'en-GB',
  /** One-line description used as the default meta description fallback. */
  description:
    'Outsourced bookkeeping, year-end accounts, VAT, payroll and management accounts for UK accountancy practices and businesses, plus India tax support for UK and European residents.',

  /** The legal service provider. Keep this factual; there is no UK company. */
  provider: {
    legalName: 'Pujara & Co, Chartered Accountants',
    /** Shown in the footer and on Contact. Wording agreed in the brief, section 6.6. */
    legalForm:
      'a firm of Chartered Accountants registered with the Institute of Chartered Accountants of India (ICAI), Firm Reg. No. 141156W',
    firmRegistrationNumber: '141156W',
    professionalBody: {
      name: 'Institute of Chartered Accountants of India (ICAI)',
      shortName: 'ICAI',
      url: 'https://www.icai.org',
      /** Link to the body's rules, required by the brief (section 6.6). */
      rulesUrl: 'https://www.icai.org/post/code-of-ethics',
      rulesLabel: "ICAI Code of Ethics",
    },
    address: {
      line1: 'A-309, Privilon',
      line2: 'Behind Iskcon Temple, Ambli Road',
      locality: 'Satellite',
      city: 'Ahmedabad',
      region: 'Gujarat',
      postalCode: '380058',
      country: 'India',
      countryCode: 'IN',
    },
    /** One clear sentence used on About and How we work. */
    teamLocationSentence:
      'Our whole team is based in Ahmedabad, India, and works UK hours for UK and European clients.',
    /** Whether a VAT position has been confirmed. Leave false until confirmed. */
    vat: { confirmed: false, statement: '' },
    /** Professional indemnity insurance. Terms summary shows this only when confirmed. */
    professionalIndemnity: {
      confirmed: false,
      statement: '[PLACEHOLDER: professional indemnity insurer, policy territory (must include UK/EU clients) and limit]',
    },
    /** HMRC tax adviser registration and AML supervision. Hidden until confirmed. */
    hmrc: {
      taxAdviserRegistered: false,
      registrationStatement: '',
      amlSupervisor: '',
    },
    /** ICO data protection fee registration. */
    ico: { registered: false, registrationNumber: '' },
    /** UK GDPR / EU GDPR Article 27 representatives. */
    representatives: {
      uk: { appointed: false, name: '', address: '', email: '' },
      eu: { appointed: false, name: '', address: '', email: '' },
    },
  },

  principal: {
    name: 'Mitul Pujara',
    /** Post-nominals exactly as they must appear in the UK (brief section 6.1). */
    designation: 'FCA (ICAI)',
    membershipNumber: '165953',
    role: 'Founder and Principal',
    qualificationSentence:
      'Fellow member of the Institute of Chartered Accountants of India (ICAI), Membership No. 165953',
    /** Replace with a real photograph. Never use stock imagery. */
    photo: {
      src: '', // [PLACEHOLDER: path to the real photo in /public once supplied]
      alt: '[PLACEHOLDER: photo of Mitul Pujara]',
      width: 640,
      height: 800,
    },
  },

  contact: {
    /** [CONFIRM] UK virtual number strongly recommended. Leave empty to hide the UK number. */
    ukPhone: { display: '[PLACEHOLDER: UK phone number]', e164: '', confirmed: false },
    indiaPhones: [
      { display: '+91 90168 75077', e164: '+919016875077' },
      { display: '+91 73833 75077', e164: '+917383375077' },
    ],
    /** [CONFIRM] mailbox on the .co.uk domain. */
    email: 'hello@pujaraandco.co.uk',
    emailConfirmed: false,
    /** WhatsApp number in E.164 without "+". Uses the first India number until a UK number is confirmed. */
    whatsapp: { e164: '919016875077', confirmed: false },
    /** Response-time commitment shown on Contact and forms (UK time). */
    responseCommitment: 'We reply to every enquiry within one UK working day.',
    hours: 'Monday to Friday, 9:00am to 5:30pm UK time',
    /** Google Business Profile. [CONFIRM] whether to link the Ahmedabad listing. Hidden when false. */
    googleBusinessProfile: { link: false, url: 'https://share.google/wXkEiGQgKTIeoDJtF' },
  },

  booking: {
    /** [CONFIRM] booking tool. Set the embed URL via NEXT_PUBLIC_BOOKING_URL to activate the embed. */
    provider: '[PLACEHOLDER: booking tool, e.g. Cal.com or Calendly]',
    timezoneNote: 'All slots are shown in UK time (Europe/London).',
  },

  /** Countries served for areaServed and the Clients in Europe page. [CONFIRM] */
  areaServed: [
    { name: 'United Kingdom', code: 'GB', confirmed: true },
    { name: 'Ireland', code: 'IE', confirmed: false },
    { name: 'Germany', code: 'DE', confirmed: false },
    { name: 'Netherlands', code: 'NL', confirmed: false },
  ],

  social: {
    /** Only add profiles that exist and are maintained. Hidden when empty. */
    linkedin: '',
  },

  /** Dates shown on legal pages and tax content. Update on every review. */
  dates: {
    contentReviewed: '17 November 2026',
    legalDrafted: '17 November 2026',
  },

  /** Analytics: cookieless, aggregate-only provider acting as processor (brief 6.4). */
  analytics: {
    providerName: 'Plausible Analytics',
    providerUrl: 'https://plausible.io/data-policy',
  },
} as const;

export type SiteConfig = typeof siteConfig;

/** Formatted single-line postal address for schema and footer. */
export function formatAddress(separator = ', '): string {
  const a = siteConfig.provider.address;
  return [a.line1, a.line2, a.locality, `${a.city} ${a.postalCode}`, a.region, a.country].join(separator);
}

/** Absolute URL helper. */
export function absoluteUrl(path = '/'): string {
  const base = siteConfig.url.replace(/\/$/, '');
  return path.startsWith('/') ? `${base}${path}` : `${base}/${path}`;
}

/** Confirmed areaServed country names (for schema). */
export function confirmedCountries(): string[] {
  return siteConfig.areaServed.filter((c) => c.confirmed).map((c) => c.name);
}
