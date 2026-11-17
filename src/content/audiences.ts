import type { Audience, AudienceId } from './types';

/**
 * Candidate audiences in priority order. All four are kept pending the
 * principal's confirmation of which to retain (see docs/HANDOVER.md).
 */
export const audiences: Audience[] = [
  {
    id: 'practices',
    slug: 'uk-accountancy-practices',
    name: 'UK accountancy practices',
    heading: 'An outsourced team for UK accountancy practices and bookkeepers',
    intro:
      'January fills up, staff are hard to find and the work still has to go out on time. We give your practice a trained, supervised team that prepares bookkeeping, accounts, VAT, payroll and management accounts to your standards. You review, you sign off and you keep the client relationship.',
    painPoints: [
      'Peak-season backlogs around 31 January and year-end deadlines.',
      'Difficulty recruiting and keeping experienced bookkeepers and accounts staff.',
      'Partner and manager time spent on preparation rather than review and advice.',
      'Fixed-fee clients whose work costs more to produce than it earns.',
      'Inconsistent working papers that slow down the review stage.',
    ],
    howWeHelp: [
      'Dedicated preparers who learn your templates, software and file structure.',
      'Review-ready working papers with a clear query list, not a half-finished file.',
      'Capacity that flexes with your calendar, from a few jobs a month to a standing team.',
      'Work prepared in your own software subscriptions, so nothing leaves your systems.',
      'Agreed turnaround times and a named contact available in UK working hours.',
      'Strict confidentiality: your clients remain your clients and we never contact them.',
    ],
    services: [
      'outsourced-bookkeeping-for-accountancy-practices',
      'year-end-accounts-preparation',
      'vat-return-preparation-and-making-tax-digital',
      'payroll-processing-support',
      'management-accounts-and-reporting',
      'self-assessment-preparation-support',
    ],
    confirmed: true,
  },
  {
    id: 'businesses',
    slug: 'uk-small-businesses-contractors-and-landlords',
    name: 'UK small businesses, contractors and landlords',
    heading: 'Bookkeeping and accounts support for UK businesses, contractors and landlords',
    intro:
      'You want accurate books, a clear view of your numbers and no last-minute scramble before a deadline. We keep your records up to date, prepare your VAT, accounts and Self Assessment figures, and hand them to you or your UK accountant ready to check and submit.',
    painPoints: [
      'Receipts and invoices pile up and the books are always a few months behind.',
      'VAT returns and year-end accounts arrive as a rush rather than a routine.',
      'Making Tax Digital rules now require digital records and quarterly updates for many sole traders and landlords.',
      'Hard to tell how the business is really doing until the accounts are done.',
      'Paying for an accountant to do data entry that could be done more cheaply elsewhere.',
    ],
    howWeHelp: [
      'Monthly or quarterly bookkeeping in Xero, QuickBooks Online, Sage or FreeAgent.',
      'Bank reconciliations, supplier and customer ledgers kept current.',
      'VAT return figures prepared and checked ahead of each deadline.',
      'Year-end accounts and Self Assessment computations prepared for your review or your accountant’s.',
      'Simple monthly reports so you can see cash, profit and what is owed.',
      'Fixed monthly fees in GBP agreed in writing before we start.',
    ],
    services: [
      'outsourced-bookkeeping-for-accountancy-practices',
      'year-end-accounts-preparation',
      'vat-return-preparation-and-making-tax-digital',
      'self-assessment-preparation-support',
    ],
    confirmed: true,
  },
  {
    id: 'individuals',
    slug: 'india-tax-for-uk-and-european-residents',
    name: 'UK and European residents with India-side obligations',
    heading: 'India tax support for UK and European residents of Indian origin',
    intro:
      'Income, property or investments in India bring Indian filing obligations that do not go away when you move abroad. We prepare your Indian tax returns, handle the tax side of selling Indian property, support repatriation paperwork and help your UK adviser apply the UK-India double taxation agreement correctly.',
    painPoints: [
      'Rental income, interest or capital gains in India that still need an Indian return.',
      'Selling a flat or land in India and facing tax deducted at source on the sale.',
      'Moving sale proceeds or inheritance from India to the UK and the forms that go with it.',
      'Uncertainty about which country taxes what, and how to claim relief for tax paid twice.',
      'Chasing paperwork across two time zones with no single point of contact.',
    ],
    howWeHelp: [
      'Preparation of Indian income tax returns for non-residents, including capital gains.',
      'Lower tax deduction certificates and tax computations on property sales in India.',
      'Form 15CA and 15CB support for remittances out of India.',
      'Tax residency certificates and double taxation relief workings to pass to your UK adviser.',
      'Help with Indian tax notices and reconciling tax credits.',
      'Plain-English explanations and a named contact available in UK hours.',
    ],
    services: ['india-tax-for-uk-and-european-residents'],
    confirmed: true,
  },
  {
    id: 'companies',
    slug: 'uk-and-eu-companies-with-an-indian-subsidiary',
    name: 'UK and EU companies with Indian operations',
    heading: 'Set-up and compliance support for UK and European companies operating in India',
    intro:
      'An Indian subsidiary, branch or liaison office comes with its own registrations, filings and deadlines. We help you choose the right structure, get it registered and keep it compliant month to month, with reporting your head office can read.',
    painPoints: [
      'Unclear which Indian structure suits a first entry: subsidiary, branch, liaison office or project office.',
      'Registrations with several Indian authorities before the entity can trade or hire.',
      'Monthly and annual Indian compliance that is easy to miss from abroad.',
      'Intercompany invoicing, transfer pricing and remittance rules that affect group accounts.',
      'Local accounts in Indian formats that need converting for UK group reporting.',
    ],
    howWeHelp: [
      'Structure comparison and an entry plan with realistic timelines.',
      'Company incorporation, tax registrations and bank account documentation in India.',
      'Ongoing Indian bookkeeping, tax, payroll and statutory filing preparation.',
      'Monthly management reporting in GBP or EUR formats for the parent company.',
      'Coordination with your UK accountant and auditors on group consolidation.',
      'A single point of contact in UK working hours.',
    ],
    services: ['india-entry-and-subsidiary-compliance', 'management-accounts-and-reporting'],
    confirmed: true,
  },
];

export function getAudience(id: AudienceId): Audience | undefined {
  return audiences.find((a) => a.id === id);
}

export function getAudienceBySlug(slug: string): Audience | undefined {
  return audiences.find((a) => a.slug === slug);
}

export function confirmedAudiences(): Audience[] {
  return audiences.filter((a) => a.confirmed);
}
