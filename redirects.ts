/**
 * 301 redirects from URLs of the old pujaraandco.co.uk site to the closest new page.
 *
 * The old site has been offline for about six months. The Wayback Machine and
 * Search Console could not be queried from the build environment, so this map
 * starts from the URL structure of the previous static build held in this
 * repository's git history plus common accountancy-site patterns.
 *
 * [PLACEHOLDER: verify against Search Console > Pages and the Wayback Machine
 * (https://web.archive.org/web/*\/pujaraandco.co.uk*) before launch and add any
 * URL that still receives traffic or has backlinks.]
 */
export type Redirect = { source: string; destination: string; permanent: boolean };

const map: Record<string, string> = {
  // Previous build in this repository (never confirmed live)
  '/about/': '/about',
  '/services/': '/services',
  '/services/annual-accounts/': '/services/year-end-accounts-preparation',
  '/services/self-assessment-tax-returns/': '/services/self-assessment-preparation-support',
  '/services/corporation-tax/': '/services/year-end-accounts-preparation',
  '/services/vat-and-making-tax-digital/': '/services/vat-return-preparation-and-making-tax-digital',
  '/services/bookkeeping/': '/services/outsourced-bookkeeping-for-accountancy-practices',
  '/services/payroll/': '/services/payroll-processing-support',
  '/services/company-formation/': '/services/india-entry-and-subsidiary-compliance',
  '/contact/': '/contact',
  '/privacy-policy/': '/legal/privacy-notice',
  // Common patterns from typical older accountancy sites [PLACEHOLDER: confirm]
  '/index.html': '/',
  '/about-us': '/about',
  '/about-us.html': '/about',
  '/our-services': '/services',
  '/services.html': '/services',
  '/contact-us': '/contact',
  '/contact.html': '/contact',
  '/privacy': '/legal/privacy-notice',
  '/privacy-policy': '/legal/privacy-notice',
  '/terms': '/legal/terms-of-use',
  '/terms-and-conditions': '/legal/terms-of-use',
  '/cookies': '/legal/cookie-policy',
  '/cookie-policy': '/legal/cookie-policy',
  '/blog': '/insights',
  '/news': '/insights',
  '/bookkeeping': '/services/outsourced-bookkeeping-for-accountancy-practices',
  '/accounts': '/services/year-end-accounts-preparation',
  '/vat': '/services/vat-return-preparation-and-making-tax-digital',
  '/payroll': '/services/payroll-processing-support',
  '/self-assessment': '/services/self-assessment-preparation-support',
  '/nri-services': '/services/india-tax-for-uk-and-european-residents',
  '/nri-taxation': '/services/india-tax-for-uk-and-european-residents',
  '/india-business-setup': '/services/india-entry-and-subsidiary-compliance',
};

export const redirects: Redirect[] = Object.entries(map).flatMap(([source, destination]) => {
  // Next.js matches redirect sources with or without a trailing slash and
  // already normalises "/x/" to "/x", so register the bare form only and never
  // redirect a URL to itself.
  const bare = source.endsWith('/') && source !== '/' ? source.slice(0, -1) : source;
  return bare === destination ? [] : [{ source: bare, destination, permanent: true }];
});
