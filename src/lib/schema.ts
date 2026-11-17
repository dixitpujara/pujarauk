import { absoluteUrl, confirmedCountries, formatAddress, siteConfig } from '@/config/site';
import type { Faq, Service, ArticleMeta } from '@/content/types';

/**
 * JSON-LD builders. Only mark up what is visible on the page (brief section 9).
 * No UK LocalBusiness address exists, so the organisation carries the true
 * Ahmedabad address and areaServed lists the confirmed countries.
 */
const ORG_ID = absoluteUrl('/#organisation');
const PERSON_ID = absoluteUrl('/#principal');

export function organisationSchema() {
  const a = siteConfig.provider.address;
  const phones = [
    ...(siteConfig.contact.ukPhone.confirmed ? [siteConfig.contact.ukPhone.e164] : []),
    ...siteConfig.contact.indiaPhones.map((p) => p.e164),
  ];
  return {
    '@context': 'https://schema.org',
    '@type': 'AccountingService',
    '@id': ORG_ID,
    name: siteConfig.name,
    legalName: siteConfig.provider.legalName,
    url: siteConfig.url,
    description: siteConfig.description,
    email: siteConfig.contact.email,
    telephone: phones[0],
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${a.line1}, ${a.line2}`,
      addressLocality: a.city,
      addressRegion: a.region,
      postalCode: a.postalCode,
      addressCountry: a.countryCode,
    },
    areaServed: confirmedCountries().map((name) => ({ '@type': 'Country', name })),
    founder: { '@id': PERSON_ID },
    memberOf: {
      '@type': 'Organization',
      name: siteConfig.provider.professionalBody.name,
      url: siteConfig.provider.professionalBody.url,
    },
    identifier: {
      '@type': 'PropertyValue',
      propertyID: 'ICAI Firm Registration Number',
      value: siteConfig.provider.firmRegistrationNumber,
    },
    priceRange: '££',
    currenciesAccepted: 'GBP',
    availableLanguage: 'en-GB',
    ...(siteConfig.social.linkedin ? { sameAs: [siteConfig.social.linkedin] } : {}),
  };
}

export function personSchema() {
  const p = siteConfig.principal;
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': PERSON_ID,
    name: p.name,
    honorificSuffix: p.designation,
    jobTitle: p.role,
    worksFor: { '@id': ORG_ID },
    memberOf: { '@type': 'Organization', name: siteConfig.provider.professionalBody.name },
    url: absoluteUrl('/about'),
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: 'en-GB',
    publisher: { '@id': ORG_ID },
  };
}

export function serviceSchema(service: Service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    serviceType: service.serviceType,
    description: service.metaDescription,
    url: absoluteUrl(`/services/${service.slug}`),
    provider: { '@id': ORG_ID },
    areaServed: confirmedCountries().map((name) => ({ '@type': 'Country', name })),
    availableLanguage: 'en-GB',
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

export type Crumb = { name: string; path: string };

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}

export function articleSchema(meta: ArticleMeta) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: meta.title,
    description: meta.description,
    datePublished: meta.publishedOn,
    dateModified: meta.reviewedOn,
    inLanguage: 'en-GB',
    author: { '@id': PERSON_ID, '@type': 'Person', name: meta.author },
    publisher: { '@id': ORG_ID },
    mainEntityOfPage: absoluteUrl(`/insights/${meta.slug}`),
  };
}

export function contactPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    url: absoluteUrl('/contact'),
    name: 'Contact Pujara & Co',
    about: { '@id': ORG_ID },
    description: `Provider address: ${formatAddress()}`,
  };
}
