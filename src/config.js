// Single source of truth for business details. Everything marked TODO is a
// placeholder that must be confirmed with the client before go-live.
module.exports = {
  siteUrl: 'https://www.pujaraandco.co.uk', // TODO confirm final domain
  name: 'Pujara and Co',
  legalName: 'PUJARA AND CO Chartered Accountants',
  tagline: 'Chartered Accountants',
  phoneDisplay: '07887 179840',
  phoneIntl: '+447887179840',
  email: 'info@pujaraandco.co.uk', // TODO confirm
  address: {
    building: 'Trafford House',
    street: '125 Cherrydown East',
    town: 'Basildon',
    county: 'Essex',
    postcode: 'SS16 5GL'
  },
  hours: [
    ['Monday to Friday', '9:00am – 5:00pm'],
    ['Saturday', '9:00am – 5:00pm'],
    ['Sunday', 'Closed']
  ],
  rating: { value: '5.0', count: 6 },
  gbpReviewUrl: 'https://share.google/FQwVbdn2j4Whdgfp8',
  // TODO replace with the firm's actual registration details
  regulator: 'Registered with [ICAEW / ACCA — confirm] — membership number [TODO]',
  companyNumber: '[TODO company number if a limited company]',
  formEndpoint: 'REPLACE_WITH_FORMSPREE_OR_OTHER_ENDPOINT',
  areas: ['Basildon', 'Laindon', 'Pitsea', 'Billericay', 'Wickford', 'Benfleet', 'Canvey Island', 'Rayleigh', 'Brentwood', 'Grays', 'Southend-on-Sea', 'Chelmsford'],
  nav: [
    ['/', 'Home'],
    ['/about/', 'About'],
    ['/services/', 'Services'],
    ['/contact/', 'Contact']
  ],
  services: [
    { slug: 'annual-accounts', short: 'Annual accounts', title: 'Year-end accounts for limited companies and sole traders', blurb: 'Statutory accounts filed on time with Companies House and HMRC, explained to you in plain English.' },
    { slug: 'self-assessment-tax-returns', short: 'Self Assessment', title: 'Self Assessment tax returns', blurb: 'For directors, landlords, sole traders and anyone with income HMRC needs to know about.' },
    { slug: 'corporation-tax', short: 'Corporation tax', title: 'Corporation tax returns and planning', blurb: 'CT600 preparation, capital allowances, and sensible planning so you are not paying more than you should.' },
    { slug: 'vat-and-making-tax-digital', short: 'VAT & MTD', title: 'VAT returns and Making Tax Digital', blurb: 'Registration, quarterly returns, scheme choice, and MTD-compliant software set up properly.' },
    { slug: 'bookkeeping', short: 'Bookkeeping', title: 'Bookkeeping and cloud accounting', blurb: 'Tidy, up-to-date books on Xero, QuickBooks or FreeAgent, so your numbers are ready when you need them.' },
    { slug: 'payroll', short: 'Payroll', title: 'Payroll, PAYE and auto-enrolment', blurb: 'Payslips, RTI submissions, pensions and P60s handled every month without you chasing.' },
    { slug: 'company-formation', short: 'Company formation', title: 'Company formation and start-up advice', blurb: 'Set up correctly from day one, with the right structure, registrations and a clear view of what comes next.' }
  ]
};
