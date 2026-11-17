import type {
  AboutContent,
  ContactContent,
  EuropeContent,
  HomeContent,
  HowWeWorkContent,
  PricingContent,
  ServicesHubContent,
  WhoWeHelpContent,
} from './types';

/* ------------------------------------------------------------------ */
/* Home                                                                */
/* ------------------------------------------------------------------ */

export const home: HomeContent = {
  hero: {
    eyebrow: 'Chartered Accountants (India) working UK hours',
    heading: 'Accurate books, on-time accounts and India tax support for UK practices, businesses and individuals',
    lead:
      'We prepare bookkeeping, year-end accounts, VAT, payroll and management accounts for UK accountancy practices and businesses, and handle India-side tax for people living in the UK and Europe. You review and submit. We do the groundwork, on schedule, in UK working hours.',
    primaryCta: 'Book a free consultation',
    secondaryCta: 'Send an enquiry',
  },
  servicesIntro: {
    heading: 'What we prepare for you',
    text:
      'Every service is scoped in writing, prepared by a trained team, reviewed before it reaches you and delivered ready for you or your UK accountant to check and submit.',
  },
  whoWeWorkWith: {
    heading: 'Who we work with',
    text:
      'Accountancy practices that need reliable capacity, UK businesses that want their records kept properly, and people in the UK and Europe with tax matters in India.',
  },
  howItWorks: {
    heading: 'How it works',
    steps: [
      {
        title: 'Tell us what you need',
        description:
          'Book a short call or send an enquiry. We ask about your software, volumes, deadlines and what good looks like for you.',
      },
      {
        title: 'We agree scope, access and turnaround',
        description:
          'You receive a written scope with a fixed fee in GBP, the access we need, a secure way to share documents and the turnaround you can expect.',
      },
      {
        title: 'You receive review-ready work on schedule',
        description:
          'Work arrives with working papers and a short query list. You or your accountant review, approve and submit. We fix anything that needs changing.',
      },
    ],
  },
  credentials: [
    { label: 'Founded by', value: 'Mitul Pujara, FCA (ICAI)' },
    { label: 'Professional body', value: 'ICAI Firm Reg. No. 141156W' },
    { label: 'Working hours', value: 'Monday to Friday, UK time' },
    { label: 'Established', value: '[PLACEHOLDER: year the firm was established]' },
  ],
  principalIntro: {
    heading: 'Led by a qualified principal who reviews the work',
    paragraphs: [
      'Pujara & Co is founded and led by Mitul Pujara, FCA (ICAI), a fellow member of the Institute of Chartered Accountants of India. Mitul set up the practice in Ahmedabad and has [PLACEHOLDER: years in practice] of experience preparing accounts and tax work for businesses and individuals.',
      'Every engagement has a preparer, a reviewer and a final check before it reaches you. Mitul remains your point of contact for anything that needs a decision, not a ticket number.',
      'We are a small, founder-led practice. That means direct answers, consistent people on your work and a process you can rely on from one month to the next.',
    ],
    ctaLabel: 'More about the practice',
  },
  faqs: [
    {
      question: 'Where are you based? Do you have a UK office?',
      answer:
        'We do not have a UK office. Our whole team is based in Ahmedabad, India, and works Monday to Friday, 9:00am to 5:30pm UK time. You can reach us by phone, email, WhatsApp or video call during those hours. [PLACEHOLDER: UK contact number once confirmed.]',
    },
    {
      question: 'Are you UK qualified?',
      answer:
        'We are Chartered Accountants (India), members of the Institute of Chartered Accountants of India (ICAI). We are not members of ICAEW or ACCA. We prepare work for UK clients and work alongside your UK accountant, who remains responsible for UK advice and submissions.',
    },
    {
      question: 'Do you file with HMRC or Companies House?',
      answer:
        'No. We prepare returns, accounts and computations so they are ready to review. You, or your UK accountant, check the work and submit it. This keeps you in control and keeps our role clear.',
    },
    {
      question: 'How do you keep our data secure?',
      answer:
        'We follow UK GDPR-aligned processes. Your data is held and processed in India under written transfer safeguards. Documents move only through a secure portal with two-factor authentication, never as email attachments. Staff sign confidentiality undertakings and access is limited to the people on your engagement.',
    },
    {
      question: 'How do your fees work?',
      answer:
        'Fees are quoted in GBP as a fixed monthly amount or a fixed price per job, and agreed in writing before any work starts. If the scope changes, we tell you before the fee does.',
    },
    {
      question: 'How quickly do you respond?',
      answer:
        'We reply to every enquiry and client message within one UK working day. Turnaround for each type of work is agreed in your engagement letter and shown on our How we work page.',
    },
  ],
  closingCta: {
    heading: 'Ready to take the preparation off your desk?',
    text:
      'Book a free 20 to 30 minute consultation in UK time, or send an enquiry and we will reply within one UK working day.',
  },
};

/* ------------------------------------------------------------------ */
/* Services hub                                                        */
/* ------------------------------------------------------------------ */

export const servicesHub: ServicesHubContent = {
  heading: 'Services',
  intro:
    'Each service below is prepared by our team in Ahmedabad and delivered ready for you or your UK accountant to review and submit. Every page sets out what is included, what is not, and what we need from you.',
  groups: [
    {
      heading: 'For accountancy practices',
      description:
        'Outsourced preparation that follows your standards and your software, so your team can focus on review and client advice.',
      services: [
        'outsourced-bookkeeping-for-accountancy-practices',
        'year-end-accounts-preparation',
        'vat-return-preparation-and-making-tax-digital',
        'payroll-processing-support',
        'management-accounts-and-reporting',
        'self-assessment-preparation-support',
      ],
    },
    {
      heading: 'For UK businesses and individuals',
      description:
        'Records kept up to date and figures prepared ahead of each deadline, with your UK accountant kept in the loop.',
      services: [
        'outsourced-bookkeeping-for-accountancy-practices',
        'year-end-accounts-preparation',
        'vat-return-preparation-and-making-tax-digital',
        'self-assessment-preparation-support',
      ],
    },
    {
      heading: 'India-side services',
      description:
        'Indian tax returns, property sales and remittances for people in the UK and Europe, and set-up and compliance for companies operating in India.',
      services: ['india-tax-for-uk-and-european-residents', 'india-entry-and-subsidiary-compliance'],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Who we help                                                         */
/* ------------------------------------------------------------------ */

export const whoWeHelp: WhoWeHelpContent = {
  heading: 'Who we help',
  intro:
    'We work with four kinds of client. Each has a different problem, so each section below says what that problem usually looks like and what we do about it.',
};

/* ------------------------------------------------------------------ */
/* How we work                                                         */
/* ------------------------------------------------------------------ */

export const howWeWork: HowWeWorkContent = {
  heading: 'How we work',
  intro:
    'Our whole team is based in Ahmedabad, India, and works UK hours. This page explains how we take you on, how documents move, which software we use, how long things take and how we keep your data safe.',
  sections: [
    {
      id: 'onboarding',
      heading: 'Onboarding',
      paragraphs: [
        'Onboarding starts with a scoping call. We ask about your software, volumes, deadlines and the people involved on your side. Within [PLACEHOLDER: e.g. two UK working days] you receive a written scope, a fixed fee in GBP and an engagement letter.',
        'Once you sign, we complete our client identification checks, set up secure access and agree a start date. For practices, we usually begin with one or two jobs so you can check our working papers before scaling up.',
      ],
      bullets: [
        'Scoping call of 20 to 30 minutes in UK time.',
        'Written scope, fee and engagement letter before any work starts.',
        'Client identification checks completed before access is granted.',
        'A named contact for your engagement from day one.',
      ],
    },
    {
      id: 'documents',
      heading: 'Secure document exchange',
      paragraphs: [
        'Documents move through [PLACEHOLDER: secure portal name, e.g. a client portal with 2FA]. The portal uses two-factor authentication, encrypts files in transit and at rest, and keeps a log of who uploaded and downloaded what.',
        'We do not accept or send sensitive documents by email. If something arrives by email in error, we move it to the portal and delete the message. Bank statements, identity documents and payroll data are only ever handled inside the portal or inside your own accounting software.',
      ],
    },
    {
      id: 'software',
      heading: 'Software we work in',
      paragraphs: [
        'We work in the software you already use, including Xero, QuickBooks Online, Sage, FreeAgent, BrightPay, TaxCalc and IRIS. For practices, we work inside your subscriptions and your file structure so nothing is copied out of your systems.',
        'If you are a business without accounting software, we will recommend one that suits your size and your Making Tax Digital obligations, and set it up for you.',
      ],
    },
    {
      id: 'turnaround',
      heading: 'Turnaround times',
      paragraphs: [
        'Turnaround is agreed per engagement and written into your scope. Typical times are set out below. Peak periods such as January are planned in advance so your deadlines are protected.',
      ],
      bullets: [
        'Monthly bookkeeping: [PLACEHOLDER: e.g. 5 UK working days] after the month-end documents are received.',
        'VAT return figures: [PLACEHOLDER: e.g. 5 UK working days] after records are complete, and always before the submission deadline.',
        'Year-end accounts: [PLACEHOLDER: e.g. 10 UK working days] after a complete set of records.',
        'Payroll: [PLACEHOLDER: e.g. 2 UK working days] after approved timesheets and changes.',
        'Indian tax returns: [PLACEHOLDER: e.g. 7 UK working days] after information is received.',
      ],
    },
    {
      id: 'review',
      heading: 'Review process',
      paragraphs: [
        'Every job passes through three people. A preparer does the work and prepares the working papers. A reviewer checks it against our standards and your instructions. The principal signs off before anything is released to you.',
        'You then receive the finished work with a short query list and a summary of anything unusual. You, or your UK accountant, review, approve and submit. We do not submit anything to HMRC or Companies House on your behalf.',
      ],
    },
    {
      id: 'communication',
      heading: 'Communication hours',
      paragraphs: [
        'We work Monday to Friday, 9:00am to 5:30pm UK time, and we reply to every message within one UK working day. Calls and video meetings are booked in UK time slots.',
        'You get a named contact, a shared query log so nothing is lost in email threads, and a monthly check-in for ongoing engagements.',
      ],
    },
    {
      id: 'confidentiality',
      heading: 'Confidentiality and data security',
      paragraphs: [
        'Your data is held and processed in India under written transfer safeguards: the UK International Data Transfer Agreement for UK data and the EU Standard Contractual Clauses for EU data. [LEGAL CHECK: confirm the transfer mechanism and any transfer risk assessment.]',
        'Confidentiality is a contractual and a personal obligation for everyone on our team. We sign non-disclosure agreements with practices on request and never contact your clients directly.',
      ],
      bullets: [
        'Access controlled per engagement, removed when someone leaves the team.',
        'Two-factor authentication on every system that holds client data.',
        'Encrypted storage and encrypted transfer for all files.',
        'Written confidentiality undertakings signed by every member of staff.',
        'No client data on personal devices, personal email or messaging apps.',
      ],
    },
  ],
  faqs: [
    {
      question: 'Who does the work on my engagement?',
      answer:
        'A small, consistent team: a preparer, a reviewer and the principal. You are told who they are at the start, and we do not rotate people without telling you.',
    },
    {
      question: 'Can we start with a trial?',
      answer:
        'Yes. Most practices begin with one or two jobs at a fixed price so they can check our working papers and turnaround before committing to a monthly arrangement.',
    },
    {
      question: 'Will you contact my clients?',
      answer:
        'No. If you are a practice, your clients remain yours. All queries go to you, and we work under your name inside your systems if that is how you prefer it.',
    },
    {
      question: 'What happens if there is an error in the work?',
      answer:
        'Tell us and we correct it at no charge. Our review process is designed to catch errors before release, and we keep a log of corrections so the same issue does not recur.',
    },
    {
      question: 'How do you handle public holidays?',
      answer:
        'We follow the UK working calendar for deadlines and response times. Where an Indian public holiday falls on a UK working day, cover is arranged in advance so your turnaround is unaffected.',
    },
  ],
};

/* ------------------------------------------------------------------ */
/* About                                                               */
/* ------------------------------------------------------------------ */

export const about: AboutContent = {
  heading: 'About Pujara & Co',
  intro:
    'A founder-led practice of Chartered Accountants (India) preparing accounts and tax work for clients in the UK and Europe. Our whole team is based in Ahmedabad, India, and works UK hours.',
  practice: {
    heading: 'The practice',
    paragraphs: [
      'Pujara & Co was founded by Mitul Pujara in Ahmedabad in [PLACEHOLDER: founding year]. The firm is registered with the Institute of Chartered Accountants of India (ICAI), Firm Reg. No. 141156W.',
      'We serve UK and European clients entirely remotely. There is no UK office and no UK company. All work is contracted with, and invoiced by, the firm in India, and we say so plainly on every page of this site.',
      'What we offer UK clients is simple: careful preparation, a documented review process and people who are available when you are. Our role is to prepare; your UK accountant, or you, review and submit.',
    ],
  },
  principal: {
    heading: 'Mitul Pujara, FCA (ICAI)',
    paragraphs: [
      'Mitul is a fellow member of the Institute of Chartered Accountants of India (ICAI), Membership No. 165953, and the founder and principal of Pujara & Co.',
      'His work covers bookkeeping and accounts preparation for small and medium-sized businesses, Indian direct tax for residents and non-residents, and set-up and compliance for overseas companies operating in India. He personally signs off every engagement before it is released.',
      '[PLACEHOLDER: one or two sentences on Mitul’s background and areas of particular interest, confirmed by the principal.]',
    ],
  },
  team: {
    heading: 'The team',
    intro:
      'Our team is based in Ahmedabad and works UK hours. Each person is trained on UK accounting and VAT practice and works under the review of a qualified senior.',
    members: [
      {
        name: '[PLACEHOLDER: team member name]',
        role: 'Senior Accountant',
        qualification: '[PLACEHOLDER: qualification]',
        bio: '[PLACEHOLDER: two-sentence bio]',
      },
      {
        name: '[PLACEHOLDER: team member name]',
        role: 'Accounts and Bookkeeping Lead',
        qualification: '[PLACEHOLDER: qualification]',
        bio: '[PLACEHOLDER: two-sentence bio]',
      },
    ],
  },
  values: {
    heading: 'What you can expect from us',
    items: [
      {
        title: 'Clear scope',
        description: 'You know what is included, what is not and what it costs before we start. Changes are agreed in writing.',
      },
      {
        title: 'Work that is ready to review',
        description: 'Working papers, reconciliations and a query list come with every job, so review takes minutes rather than hours.',
      },
      {
        title: 'Available in your hours',
        description: 'We work Monday to Friday in UK time and reply within one UK working day.',
      },
      {
        title: 'Honest about our role',
        description: 'We are Chartered Accountants (India). We prepare; you or your UK accountant review and submit. We never overstate what we do.',
      },
    ],
  },
};

/* ------------------------------------------------------------------ */
/* Clients in Europe                                                   */
/* ------------------------------------------------------------------ */

export const europe: EuropeContent = {
  heading: 'Clients in Europe',
  intro:
    'We work with clients across Europe as well as the UK. This page sets out what we can do for you if you are outside the UK, and what we cannot, so there are no surprises.',
  offered: {
    heading: 'What we offer clients in Europe',
    items: [
      'Indian tax returns, property sale tax workings and remittance support for residents of Indian origin anywhere in Europe.',
      'Set-up and ongoing compliance for European companies with a subsidiary, branch or liaison office in India.',
      'Bookkeeping and management reporting support for English-language businesses where your local accountant handles statutory filings.',
      'Double taxation relief workings under the relevant India treaty, prepared for your local adviser to apply.',
      'All work in English, invoiced in GBP. [CONFIRM: EUR invoicing]',
    ],
  },
  notOffered: {
    heading: 'What we do not offer outside the UK',
    items: [
      'Local statutory accounts or company filings in any EU country.',
      'Local VAT or income tax returns outside the UK.',
      'Local payroll outside the UK.',
      'Advice on the law or tax rules of any European country. Your local adviser remains responsible for that.',
    ],
  },
  practicalities: {
    heading: 'Practicalities',
    paragraphs: [
      'We work Monday to Friday, 9:00am to 5:30pm UK time, which covers most of the European working day. Calls are booked in UK time; we will confirm the equivalent in your time zone.',
      'We work in English only. Documents in other languages can be handled where your local adviser provides an English summary.',
      'Countries served: [CONFIRM: countries served]. If your country is not listed, ask; the answer depends on the service you need.',
    ],
  },
  faqs: [
    {
      question: 'Can you prepare my local tax return if I live in Germany, the Netherlands or Ireland?',
      answer:
        'No. We do not prepare local returns outside the UK. We can prepare your Indian return and the double taxation workings your local adviser needs.',
    },
    {
      question: 'I am selling property in India from Europe. What can you do?',
      answer:
        'We prepare the Indian capital gains computation, support an application for a lower tax deduction certificate where appropriate, and prepare the remittance paperwork. Your local adviser handles how the gain is treated in your country of residence.',
    },
    {
      question: 'Do you invoice in euros?',
      answer: 'Invoices are in GBP. [CONFIRM: EUR invoicing]',
    },
    {
      question: 'How does EU data protection apply?',
      answer:
        'EU GDPR applies to personal data we receive from you. Data is held in India under EU Standard Contractual Clauses. Our Privacy Notice explains your rights and how to complain to your supervisory authority. [LEGAL CHECK]',
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Pricing                                                             */
/* ------------------------------------------------------------------ */

export const pricing: PricingContent = {
  heading: 'Pricing',
  intro:
    'Fees are quoted in GBP, fixed in advance and agreed in writing. Tell us what you need and we will send a written quote within [PLACEHOLDER: e.g. two UK working days].',
  mode: 'quote',
  packages: [
    {
      name: 'Practice support',
      priceFrom: '[PLACEHOLDER: from £X per month]',
      priceNote: '[CONFIRM: whether UK VAT applies]',
      forWhom: 'Accountancy practices that want a standing team for bookkeeping, VAT and accounts preparation.',
      includes: [
        'Dedicated preparer hours each month',
        'Work in your software and templates',
        'Review-ready working papers and query lists',
        'Named contact in UK hours',
      ],
    },
    {
      name: 'Business bookkeeping',
      priceFrom: '[PLACEHOLDER: from £X per month]',
      priceNote: '[CONFIRM: whether UK VAT applies]',
      forWhom: 'UK businesses, contractors and landlords who want their records kept up to date.',
      includes: [
        'Monthly bookkeeping and bank reconciliation',
        'VAT return figures prepared each quarter',
        'Simple monthly report on cash and profit',
        'Year-end records ready for your accountant',
      ],
    },
    {
      name: 'India tax',
      priceFrom: '[PLACEHOLDER: from £X per return]',
      priceNote: '[CONFIRM: whether UK VAT applies]',
      forWhom: 'UK and European residents with income, property or investments in India.',
      includes: [
        'Indian income tax return preparation',
        'Capital gains and property sale workings',
        'Remittance form support',
        'Double taxation relief workings for your UK adviser',
      ],
    },
  ],
  howWeQuote: {
    heading: 'How we quote',
    steps: [
      {
        title: 'A short call',
        description: 'We ask about volumes, software, deadlines and the people involved. Twenty to thirty minutes in UK time.',
      },
      {
        title: 'A written quote',
        description: 'You receive a fixed fee in GBP with the scope, what is excluded and the turnaround, within [PLACEHOLDER: e.g. two UK working days].',
      },
      {
        title: 'An engagement letter',
        description: 'If you are happy, we send an engagement letter. Nothing is billed until it is signed and work has started.',
      },
    ],
  },
  whatAffectsPrice: {
    heading: 'What affects the price',
    items: [
      'Volume: number of transactions, employees, returns or entities.',
      'Condition of the records when we start.',
      'Software and whether it is already set up and reconciled.',
      'Turnaround required, including peak-season work.',
      'Reporting detail, such as departmental or multi-currency management accounts.',
    ],
  },
  faqs: [
    {
      question: 'Are fees quoted in pounds?',
      answer: 'Yes. All fees are quoted and invoiced in GBP. [CONFIRM: whether UK VAT applies]',
    },
    {
      question: 'Do you charge fixed fees or by the hour?',
      answer:
        'Fixed fees for defined, recurring work such as bookkeeping, VAT and accounts. Hourly rates only for open-ended work, agreed in advance with a cap.',
    },
    {
      question: 'What is included in a fixed fee?',
      answer:
        'Everything in the written scope, plus reasonable queries and corrections. Anything outside the scope is quoted separately before we do it.',
    },
    {
      question: 'What if my needs change?',
      answer:
        'Tell us. We revise the scope and fee in writing, and the new fee applies from the next billing period. Monthly arrangements can be ended with [PLACEHOLDER: notice period] notice.',
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Contact                                                             */
/* ------------------------------------------------------------------ */

export const contact: ContactContent = {
  heading: 'Contact us',
  intro:
    'Book a call, send an enquiry or message us on WhatsApp. We reply within one UK working day, Monday to Friday, 9:00am to 5:30pm UK time.',
  formIntro:
    'Tell us a little about what you need and we will come back with next steps or a written quote.',
  sensitiveDataNotice:
    'Please do not send National Insurance numbers, Unique Taxpayer References, bank details, passwords or documents through this form. We will set up a secure channel once we are working together.',
  bookingHeading: 'Book a free consultation',
  bookingIntro:
    'A 20 to 30 minute call to understand what you need and whether we are the right fit. All slots are shown in UK time.',
  detailsHeading: 'Who you are contacting',
};
