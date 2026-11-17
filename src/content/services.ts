import type { Service } from './types';

/**
 * Service pages. All copy is British English and written fresh for the UK site.
 *
 * Compliance note: Pujara & Co prepares work. The UK accountant or the client
 * reviews and submits to HMRC and Companies House. Nothing here claims that
 * the firm files UK returns, acts as agent, or deals with HMRC on a client's
 * behalf. The India tax and India entry services are different: there the
 * firm acts directly as an ICAI-registered firm in India.
 */
export const services: Service[] = [
  {
    slug: 'outsourced-bookkeeping-for-accountancy-practices',
    name: 'Outsourced bookkeeping for practices',
    title: 'Outsourced bookkeeping for UK accountancy practices',
    metaTitle: 'Outsourced Bookkeeping for UK Practices | Pujara & Co',
    metaDescription:
      'A dedicated bookkeeping team for UK accountancy practices and bookkeepers. Xero, QuickBooks and Sage, reviewed work, UK hours, fixed monthly scope.',
    summary:
      'A dedicated team that keeps your clients’ books current in Xero, QuickBooks or Sage, so your staff can focus on review and advice.',
    intro:
      'Your practice has more client work than your team has hours. Recruiting is slow and expensive, and seasonal peaks still arrive. We give you a trained bookkeeping team that works in your software, follows your processes and delivers reviewed work in UK hours.',
    audiences: ['practices'],
    whoItIsFor: [
      'Sole practitioners and small firms who spend evenings on bookkeeping instead of client advice',
      'Growing practices that need capacity without the cost and risk of another hire',
      'Bookkeeping businesses with backlog, seasonal peaks or staff on leave',
      'Firms moving clients onto cloud software who need help with the transition and the catch-up',
    ],
    included: [
      'Bank and credit card transaction coding in Xero, QuickBooks Online, Sage, FreeAgent or your chosen software',
      'Sales and purchase ledger processing, including supplier bill capture through Dext, Hubdoc or AutoEntry',
      'Bank, credit card, PayPal and Stripe reconciliations',
      'Customer and supplier statement reconciliations and aged debtor and creditor reviews',
      'Fixed asset register maintenance and standard monthly journals',
      'Month-end checks against your review checklist, with queries listed for your client',
      'Catch-up and clean-up projects for clients with backlogged records',
      'A named team lead you can reach by email, Teams or phone during UK hours',
      'A weekly status report showing what is done, what is waiting and what needs your client',
    ],
    notIncluded: [
      'Submitting VAT returns, accounts or tax returns to HMRC or Companies House. You review and submit.',
      'Signing off work in your name or speaking to your clients as your firm, unless you ask us to',
      'UK statutory audit, insolvency, probate and regulated investment advice',
      'Direct contact with HMRC on your or your client’s behalf',
    ],
    howItWorks: [
      {
        title: 'Scoping call',
        description:
          'We walk through your client list, software, volumes and review process. You tell us what good looks like.',
      },
      {
        title: 'Trial client',
        description:
          'We start with one or two clients for a month at an agreed fee so you can judge the quality before you commit.',
      },
      {
        title: 'Onboarding and access',
        description:
          'You grant user access to the software and document portal. We document each client in a short procedures sheet.',
      },
      {
        title: 'Weekly processing',
        description:
          'Transactions are coded and reconciled on an agreed cycle. Queries go to you or your client in one batch, not one at a time.',
      },
      {
        title: 'Review and sign-off',
        description:
          'A second person checks each period before it reaches you. You review, raise any points and submit.',
      },
    ],
    clientProvides: [
      'User access to the accounting software and bill-capture tools for each client',
      'Read-only bank feeds or statements where feeds are not connected',
      'Your chart of accounts preferences and any client-specific coding rules',
      'A contact for queries and the turnaround you expect on answers',
      'Agreement on deadlines for VAT quarters and year ends',
    ],
    faqs: [
      {
        question: 'Will my clients know the work is outsourced?',
        answer:
          'That is your decision. Many practices tell clients they use a trusted team for processing. Others keep us in the background. We never contact your clients unless you ask us to.',
      },
      {
        question: 'Who reviews the work before it reaches me?',
        answer:
          'Every period is checked by a second team member against your checklist before it is marked ready. You still carry out the final review and submit anything that goes to HMRC or Companies House.',
      },
      {
        question: 'How do you keep client data secure?',
        answer:
          'We work inside your software and portals rather than downloading data. Access is per user, with two-factor authentication where available, and we remove access the day an engagement ends. Our How we work page sets out the full process.',
      },
      {
        question: 'What are your working hours?',
        answer:
          'Monday to Friday, 9:00am to 5:30pm UK time. Our team is based in Ahmedabad, India, and plans its day around UK hours so you get same-day responses.',
      },
      {
        question: 'How do you charge?',
        answer:
          'Most practices choose a fixed monthly fee per client based on transaction volume. Catch-up projects are quoted separately. Fees are in GBP and agreed in writing before we start.',
      },
      {
        question: 'Can you handle a backlog before the regular service starts?',
        answer:
          'Yes. We quote catch-up work as a separate fixed project with a start and end date, then move the client onto the regular monthly cycle.',
      },
    ],
    cta: {
      heading: 'Add capacity to your practice without adding headcount',
      text: 'Book a free consultation to talk through your client list, software and review process. We will suggest a trial scope within one UK working day.',
    },
    serviceType: 'Outsourced bookkeeping',
    icon: 'ledger',
  },

  {
    slug: 'year-end-accounts-preparation',
    name: 'Year-end accounts preparation',
    title: 'Year-end accounts preparation',
    metaTitle: 'Year-End Accounts Preparation Support | Pujara & Co',
    metaDescription:
      'Draft year-end accounts for UK limited companies, sole traders and partnerships, prepared from your records for your accountant to review and submit.',
    summary:
      'Working papers and draft statutory accounts prepared to your file standard, so review takes hours rather than days.',
    intro:
      'Year-end season should not mean late nights for your team. We prepare the working papers, draft accounts and Corporation Tax computations from the bookkeeping, ready for your review. You keep control of judgement, sign-off and submission.',
    audiences: ['practices', 'businesses'],
    whoItIsFor: [
      'Accountancy practices that want a reliable preparation team for FRS 105 and FRS 102 Section 1A accounts',
      'Limited companies and partnerships whose accountant needs clean records before year end',
      'Sole traders who want accounts and a tax computation prepared for their own Self Assessment',
      'Practices catching up on overdue year ends',
    ],
    included: [
      'Trial balance review, closing journals and reconciliations of every balance sheet account',
      'Working papers in your template or ours, with lead schedules and supporting documents',
      'Draft statutory accounts for micro-entities (FRS 105) and small companies (FRS 102 Section 1A)',
      'Sole trader and partnership accounts in a format ready for Self Assessment',
      'Draft Corporation Tax computation and capital allowances schedule for your review',
      'Prepared in TaxCalc, IRIS, Xero Tax, CCH or your chosen accounts production software',
      'A query list for the client, grouped and prioritised',
      'Comparison with the prior year and commentary on unusual movements',
    ],
    notIncluded: [
      'Submitting accounts to Companies House or the CT600 to HMRC. Your accountant or you reviews and submits.',
      'UK statutory audit or any assurance report',
      'Accounts for charities, pension schemes, LLPs under full FRS 102 or groups unless agreed in advance',
      'Tax advice on restructuring, remuneration or reliefs beyond the standard computation',
    ],
    howItWorks: [
      {
        title: 'Records in',
        description:
          'You share the bookkeeping file, bank statements, prior-year accounts and any new agreements through the secure portal.',
      },
      {
        title: 'Reconcile and query',
        description:
          'We reconcile every balance and send one consolidated query list. You or the client answer in a single round where possible.',
      },
      {
        title: 'Draft accounts and computation',
        description:
          'We prepare the working papers, draft accounts and tax computation in your software, with a reviewer note on judgement areas.',
      },
      {
        title: 'Second review',
        description:
          'A second team member checks the file against our standard before release.',
      },
      {
        title: 'Your sign-off',
        description:
          'You review, amend if needed, obtain the director or client approval and submit. We update the file for any changes you make.',
      },
    ],
    clientProvides: [
      'Access to the bookkeeping software or a closing trial balance with nominal ledger',
      'Bank, loan and credit card statements to the year-end date',
      'Prior-year signed accounts, tax computation and fixed asset register',
      'Details of new loans, leases, grants, related party transactions and dividends',
      'Your file template or review checklist, if you have one',
    ],
    faqs: [
      {
        question: 'Which accounting standards do you work with?',
        answer:
          'FRS 105 for micro-entities and FRS 102 Section 1A for small companies, plus sole trader and partnership accounts. Full FRS 102 and other frameworks are considered case by case.',
      },
      {
        question: 'How long does a set of accounts take?',
        answer:
          'Standard turnaround is [PLACEHOLDER: e.g. 10 UK working days] from receipt of complete records and answers to queries. Faster turnaround can be agreed for a deadline.',
      },
      {
        question: 'Do you submit to Companies House and HMRC?',
        answer:
          'No. We prepare the file so that the accountant or company can review and submit it. This keeps responsibility and sign-off with the UK accountant or director.',
      },
      {
        question: 'Can you work from messy or incomplete records?',
        answer:
          'Yes, but we will quote the catch-up bookkeeping separately so you know the cost before we start. Clean records make accounts quicker and cheaper.',
      },
      {
        question: 'Will the Corporation Tax computation be reviewed by a qualified person?',
        answer:
          'Every computation is prepared by a trained team member and reviewed by a qualified member of the Institute of Chartered Accountants of India (ICAI). The UK accountant retains the final review and submission.',
      },
    ],
    cta: {
      heading: 'Get through year-end season with a prepared file',
      text: 'Send us a sample client and we will quote a fixed fee and a turnaround date for the accounts.',
    },
    serviceType: 'Accounts preparation',
    icon: 'accounts',
  },

  {
    slug: 'vat-return-preparation-and-making-tax-digital',
    name: 'VAT returns and Making Tax Digital',
    title: 'VAT return preparation and Making Tax Digital record-keeping',
    metaTitle: 'VAT Return Preparation and MTD Records | Pujara & Co',
    metaDescription:
      'Quarterly VAT returns prepared from reconciled digital records, with Making Tax Digital bookkeeping for UK practices and businesses to review and submit.',
    summary:
      'Reconciled digital records and a checked VAT return every quarter, ready for review and submission through MTD-compatible software.',
    intro:
      'A VAT return built on unreconciled books is a risk, and a late one costs penalty points. We keep the digital records up to date, prepare the quarterly return with a full reconciliation and give you a clear file to review and submit.',
    audiences: ['practices', 'businesses'],
    whoItIsFor: [
      'Practices that prepare VAT returns for many clients and need a reliable quarterly process',
      'VAT-registered businesses with turnover above the £90,000 registration threshold',
      'Businesses on the flat rate, cash accounting or annual accounting scheme',
      'Sole traders and landlords preparing for Making Tax Digital for Income Tax',
    ],
    included: [
      'Transaction coding with the correct VAT treatment, including reverse charge and EC and non-EC purchases',
      'Quarterly VAT control account reconciliation to the return figures',
      'Draft VAT return in Xero, QuickBooks Online, Sage, FreeAgent or bridging software, ready for review',
      'Review of VAT scheme suitability flagged for the accountant, such as flat rate or cash accounting',
      'Partial exemption and margin scheme workings where they apply',
      'Digital links maintained between records and the return, as Making Tax Digital requires',
      'Quarterly updates and year-end records prepared for Making Tax Digital for Income Tax',
      'A VAT query list for unusual items, such as capital purchases, vehicles or entertaining',
    ],
    notIncluded: [
      'Submitting the VAT return or MTD updates to HMRC. The accountant or business reviews and submits.',
      'VAT registration or deregistration applications to HMRC',
      'Formal VAT advice on complex matters such as land and property options, TOGC or international supplies. We flag these for a UK VAT specialist.',
      'Representing you in an HMRC VAT enquiry',
    ],
    howItWorks: [
      {
        title: 'Set-up',
        description:
          'We confirm the VAT scheme, quarter dates, software and any sector-specific treatments with you.',
      },
      {
        title: 'Monthly bookkeeping',
        description:
          'Records are coded and reconciled monthly so the quarter end is a check, not a scramble.',
      },
      {
        title: 'Quarter-end reconciliation',
        description:
          'We reconcile the VAT control account, review unusual items and prepare the draft return.',
      },
      {
        title: 'Review file',
        description:
          'You receive the draft return, reconciliation and query list at least [PLACEHOLDER: e.g. 10 days] before the submission deadline.',
      },
      {
        title: 'You submit',
        description:
          'After your review, you submit through your MTD-compatible software. We post any adjustments you make.',
      },
    ],
    clientProvides: [
      'Access to the accounting software with VAT settings configured',
      'Bank feeds or statements and sales and purchase invoices through a capture tool',
      'VAT registration details, scheme and quarter dates',
      'Prompt answers to the query list before the deadline',
      'Details of any property, vehicle or overseas transactions in the quarter',
    ],
    faqs: [
      {
        question: 'Who presses submit on the VAT return?',
        answer:
          'You do, or your UK accountant does, through MTD-compatible software. We prepare and reconcile the return and give you a file to review first.',
      },
      {
        question: 'What is Making Tax Digital for Income Tax and when does it start?',
        answer:
          'It requires sole traders and landlords to keep digital records and send quarterly updates to HMRC. It applies from 6 April 2026 for qualifying self-employment and property income over £50,000, from April 2027 for income over £30,000, and from April 2028 for income over £20,000. Check GOV.UK for the current position.',
      },
      {
        question: 'Can you handle the flat rate scheme?',
        answer:
          'Yes. We prepare returns under the flat rate, cash accounting and annual accounting schemes and keep the records in line with the scheme rules.',
      },
      {
        question: 'What if a transaction has an unclear VAT treatment?',
        answer:
          'We flag it on the query list with the options and our suggested treatment. The UK accountant or business decides. Complex matters go to a UK VAT specialist.',
      },
      {
        question: 'Do you work with bridging software?',
        answer:
          'Yes, where the business keeps records in spreadsheets with digital links. We also help move those records into cloud software when that is the better long-term option.',
      },
    ],
    cta: {
      heading: 'Make every VAT quarter a routine',
      text: 'Tell us how many returns you prepare and which software you use. We will quote a fixed fee per return.',
    },
    serviceType: 'VAT return preparation',
    icon: 'vat',
  },

  {
    slug: 'payroll-processing-support',
    name: 'Payroll processing support',
    title: 'Payroll processing support',
    metaTitle: 'Payroll Processing Support for UK Firms | Pujara & Co',
    metaDescription:
      'Weekly and monthly payroll calculations, payslips, pension assessments and RTI-ready outputs prepared for UK practices and employers to check and submit.',
    summary:
      'Payroll calculated, checked and ready for you to approve, with payslips, pension files and RTI submissions prepared for your sign-off.',
    intro:
      'Payroll is unforgiving. A missed starter, a wrong tax code or a late pension file creates work and complaints. We process each pay run in your payroll software, check it against the previous period and give you a clear approval pack before anything is sent.',
    audiences: ['practices', 'businesses'],
    whoItIsFor: [
      'Accountancy practices and payroll bureaus running payroll for many small employers',
      'Businesses with 1 to 50 employees that want payroll handled accurately each month',
      'Employers with weekly and monthly pay cycles, variable hours or multiple pay elements',
      'Practices covering staff absence or seasonal peaks in their payroll team',
    ],
    included: [
      'Pay run processing in BrightPay, Sage Payroll, Xero Payroll, Moneysoft or your chosen software',
      'Starters, leavers, tax code changes, statutory sick, maternity and paternity pay calculations',
      'Payslips, P45s, P60s and employer summary reports prepared for distribution',
      'Automatic enrolment assessments and pension contribution files for NEST, The People’s Pension, Smart Pension and others',
      'Full Payment Submission (FPS) and Employer Payment Summary (EPS) prepared in the software, ready for you to review and submit',
      'PAYE and National Insurance liability summary each period with the payment date and reference',
      'Payroll journals posted to the accounting software',
      'Year-end reconciliation and P60 preparation',
    ],
    notIncluded: [
      'Submitting RTI returns to HMRC or uploading pension files to the provider. You approve and submit.',
      'Registering a new PAYE scheme or pension scheme with HMRC or The Pensions Regulator',
      'Employment law advice, contracts or HR services',
      'Payments to employees or HMRC. We provide the figures; you make the payments.',
      'CIS returns unless agreed as a separate scope',
    ],
    howItWorks: [
      {
        title: 'Payroll set-up or handover',
        description:
          'We check employee records, year-to-date figures, pension settings and pay calendars against the previous provider or software.',
      },
      {
        title: 'Changes received',
        description:
          'You send starters, leavers, hours and changes by an agreed cut-off through a simple change form or portal.',
      },
      {
        title: 'Processing and check',
        description:
          'We run the payroll, reconcile it to the prior period and explain every variance in the approval pack.',
      },
      {
        title: 'Your approval and submission',
        description:
          'You approve the pack, submit the FPS and EPS, release payslips and make the payments.',
      },
      {
        title: 'Post-run tasks',
        description:
          'We post the journal, prepare the pension file and update the PAYE liability schedule.',
      },
    ],
    clientProvides: [
      'User access to the payroll software and pension provider portal where needed',
      'Employee details, starter forms and signed authorisations for new staff',
      'Hours, overtime, bonuses and absences by the agreed cut-off each period',
      'HMRC notices received, such as tax code changes and student loan notices',
      'Approval of each pay run before submission and payment',
    ],
    faqs: [
      {
        question: 'Do you submit RTI returns to HMRC?',
        answer:
          'No. We prepare the FPS and EPS in your payroll software and send you an approval pack. You or your UK accountant review and submit.',
      },
      {
        question: 'How quickly do you turn a payroll around?',
        answer:
          'For standard monthly payrolls, the approval pack is ready within [PLACEHOLDER: e.g. two UK working days] of receiving the changes. Weekly payrolls follow an agreed same-week schedule.',
      },
      {
        question: 'Can you take over mid-year from another provider?',
        answer:
          'Yes. We import year-to-date figures, reconcile them to the last P32 and run a parallel check on the first period.',
      },
      {
        question: 'Do you handle automatic enrolment?',
        answer:
          'We assess workers each period, prepare postponement and enrolment letters and produce the contribution file. You upload it to the pension provider.',
      },
      {
        question: 'How is employee data protected?',
        answer:
          'Payroll data stays in your payroll software or encrypted portal. We do not accept personal details by ordinary email and restrict access to the named team members on your engagement.',
      },
    ],
    cta: {
      heading: 'Take payroll off your monthly to-do list',
      text: 'Tell us how many employers and employees you run and which software you use. We will quote a fixed fee per pay run.',
    },
    serviceType: 'Payroll processing',
    icon: 'payroll',
  },

  {
    slug: 'management-accounts-and-reporting',
    name: 'Management accounts and reporting',
    title: 'Management accounts and reporting',
    metaTitle: 'Management Accounts and Reporting | Pujara & Co',
    metaDescription:
      'Monthly or quarterly management accounts, cash flow and KPI reports prepared for UK businesses and the practices that advise them.',
    summary:
      'Monthly or quarterly management accounts with cash flow, KPIs and plain commentary, prepared on a fixed schedule.',
    intro:
      'You cannot run a business on accounts that arrive nine months after the year end. We prepare management accounts from reconciled books on a fixed monthly or quarterly schedule, with the numbers your lenders, board or advisers ask for.',
    audiences: ['practices', 'businesses'],
    whoItIsFor: [
      'Owner-managed businesses with turnover from around £250,000 upwards that want monthly numbers',
      'Accountancy practices adding a management reporting service for their clients',
      'Businesses with bank covenants, investors or grant reporting conditions',
      'Companies planning growth, a sale or a funding round who need reliable trading data',
    ],
    included: [
      'Month-end close: accruals, prepayments, depreciation, stock and work in progress adjustments',
      'Profit and loss, balance sheet and cash flow statement with prior-period and budget comparisons',
      'KPI dashboard agreed with you, such as gross margin, debtor days and revenue by customer or product',
      'Plain-English commentary on variances and trends',
      'Rolling 13-week cash flow forecast where required',
      'Budget preparation support and reforecasts',
      'Reports in Xero, QuickBooks Online, Sage, Fathom, Syft, Google Sheets or Excel',
      'Departmental, project or multi-entity reporting where the records support it',
    ],
    notIncluded: [
      'Regulated investment, lending or corporate finance advice',
      'Statutory accounts or tax returns, which are separate services',
      'Assurance or audit opinions on the figures',
      'Decisions. We present the numbers and the options; you and your advisers decide.',
    ],
    howItWorks: [
      {
        title: 'Agree the pack',
        description:
          'We agree the report format, KPIs, comparatives and the date each month you need it.',
      },
      {
        title: 'Clean the books',
        description:
          'If the bookkeeping needs work first, we quote a short clean-up so month one starts from a reconciled position.',
      },
      {
        title: 'Month-end close',
        description:
          'We post the close journals, reconcile balances and finalise the trial balance by an agreed working day.',
      },
      {
        title: 'Report and commentary',
        description:
          'The pack is prepared, reviewed by a second person and delivered with commentary and questions for discussion.',
      },
      {
        title: 'Review call',
        description:
          'An optional monthly call in UK hours to walk through the pack with you or the client’s adviser.',
      },
    ],
    clientProvides: [
      'Reconciled bookkeeping, or an agreement for us to maintain it',
      'Budgets, forecasts and prior management accounts if they exist',
      'Stock, work in progress and sales pipeline information at each period end',
      'Loan, lease and investor agreements that set reporting requirements',
      'A single point of contact for queries and sign-off',
    ],
    faqs: [
      {
        question: 'How soon after month end will I get the pack?',
        answer:
          'Standard delivery is by [PLACEHOLDER: e.g. working day 10] after month end, assuming the bookkeeping is current and queries are answered promptly. Faster timetables can be agreed.',
      },
      {
        question: 'Do I need monthly or quarterly accounts?',
        answer:
          'Monthly suits businesses with tight cash, lenders or fast growth. Quarterly suits stable businesses that want a regular check-in. We will suggest a starting point and adjust.',
      },
      {
        question: 'Can you report against a budget?',
        answer:
          'Yes. If you have no budget, we can help you build one from the prior year and your plans, then report against it each period.',
      },
      {
        question: 'Do you work with my existing accountant?',
        answer:
          'Yes. Many practices ask us to prepare the pack for them to present to their client. We can also work directly with the business and share the pack with its accountant.',
      },
      {
        question: 'Can the reports be in my brand?',
        answer:
          'Yes. Reports can carry your practice branding or the business’s own, and we can use your existing templates.',
      },
    ],
    cta: {
      heading: 'See your numbers every month, not once a year',
      text: 'Book a call and we will suggest a management pack and a fixed monthly fee based on your business and software.',
    },
    serviceType: 'Management accounts and reporting',
    icon: 'reports',
  },

  {
    slug: 'self-assessment-preparation-support',
    name: 'Self Assessment preparation support',
    title: 'Self Assessment preparation support',
    metaTitle: 'Self Assessment Preparation Support | Pujara & Co',
    metaDescription:
      'Self Assessment tax return workings prepared for UK practices, sole traders, landlords and directors, ready for review before the 31 January deadline.',
    summary:
      'Tax return workings and draft computations for sole traders, landlords and directors, prepared early so the January rush is manageable.',
    intro:
      'January is the hardest month in every UK practice, and the hardest month for anyone who leaves their own return to the last week. We prepare the workings, schedules and draft Self Assessment computation from your records, so the person submitting has a complete file to review.',
    audiences: ['practices', 'businesses', 'individuals'],
    whoItIsFor: [
      'Accountancy practices that need extra preparation capacity between October and January',
      'Sole traders and partners who want their accounts and tax workings prepared early',
      'Landlords with one or more UK rental properties',
      'Company directors with salary, dividends and other income to report',
      'UK residents with Indian income who also need the UK and India positions to line up',
    ],
    included: [
      'Sole trader and partnership income schedules from bookkeeping or bank records',
      'UK property income and expense schedules, including finance cost restriction workings',
      'Employment, dividend, interest and pension income schedules from P60s, P11Ds and statements',
      'Capital gains schedules for share and property disposals',
      'Foreign income and foreign tax credit relief workings, including Indian income under the UK–India double taxation agreement',
      'Draft computation in TaxCalc, IRIS, Xero Tax, Taxfiler or your chosen software',
      'Payment on account and balancing payment summary with due dates',
      'Quarterly digital records and updates prepared for Making Tax Digital for Income Tax where it applies',
    ],
    notIncluded: [
      'Submitting the return to HMRC. You or your UK accountant review and submit.',
      'Acting as your agent with HMRC, registering you for Self Assessment or handling HMRC correspondence',
      'Tax planning advice on residence, domicile, trusts or non-standard reliefs. We flag these for a UK tax adviser.',
      'Representation in an HMRC enquiry',
    ],
    howItWorks: [
      {
        title: 'Checklist',
        description:
          'You receive a short checklist of the documents and figures needed for the tax year, tailored to your income types.',
      },
      {
        title: 'Documents in',
        description:
          'Upload the documents to the secure portal. We do not accept National Insurance numbers, UTRs or bank details by website form or ordinary email.',
      },
      {
        title: 'Workings prepared',
        description:
          'We prepare the schedules and the draft computation and list any missing items or decisions.',
      },
      {
        title: 'Review',
        description:
          'A second team member reviews the file. You or your accountant then check it and raise any points.',
      },
      {
        title: 'You submit',
        description:
          'After approval, the return is submitted by you or your accountant and the payment summary is yours to act on.',
      },
    ],
    clientProvides: [
      'Income documents for the tax year: P60, P45, P11D, dividend vouchers, interest certificates',
      'Business records or accounting software access for self-employment income',
      'Rental statements, mortgage interest certificates and expense records for property',
      'Details of Indian or other foreign income and tax paid, with certificates',
      'Prior-year return and tax computation if available',
    ],
    faqs: [
      {
        question: 'Do you submit my Self Assessment return to HMRC?',
        answer:
          'No. We prepare the workings and draft computation. You submit through your own HMRC account, or your UK accountant submits as your agent.',
      },
      {
        question: 'When should I send my records?',
        answer:
          'As early as possible after 5 April. Records received by [PLACEHOLDER: e.g. 30 November] are prepared well before the 31 January deadline. Late records are accepted but cannot be guaranteed a turnaround.',
      },
      {
        question: 'I have rental income in India and the UK. Can you handle both?',
        answer:
          'Yes. We prepare the UK property schedule and the foreign income schedule for the UK return, and as an ICAI-registered firm we can also prepare and file the Indian return. See our India tax service.',
      },
      {
        question: 'How do you handle Making Tax Digital for Income Tax?',
        answer:
          'For qualifying income over £50,000 from 6 April 2026, over £30,000 from April 2027 and over £20,000 from April 2028, we prepare the digital records and quarterly update figures for you to submit through compatible software.',
      },
      {
        question: 'Can you advise on whether I am UK tax resident?',
        answer:
          'We can prepare the day-count and tie information under the Statutory Residence Test for your adviser. Formal residence advice should come from a UK tax adviser, and we will say so when it is needed.',
      },
    ],
    cta: {
      heading: 'Start your tax return before January',
      text: 'Send an enquiry with your income types and we will send the checklist and a fixed fee quote.',
    },
    serviceType: 'Self Assessment preparation',
    icon: 'selfassessment',
  },

  {
    slug: 'india-tax-for-uk-and-european-residents',
    name: 'India tax for UK and EU residents',
    title: 'India tax for UK and European residents',
    metaTitle: 'India Tax Adviser for UK and EU Residents | Pujara & Co',
    metaDescription:
      'Indian tax returns, property sale tax, repatriation paperwork and UK–India double taxation relief for UK and European residents, from an ICAI firm.',
    summary:
      'Indian tax returns, property sale compliance, repatriation paperwork and UK–India double taxation relief, handled by chartered accountants in India.',
    intro:
      'If you live in the UK or Europe and still have income, property or savings in India, two tax systems apply to you. We are an ICAI-registered firm in Ahmedabad, so we handle the Indian side directly and give your UK adviser the figures they need for the UK return.',
    audiences: ['individuals'],
    whoItIsFor: [
      'UK and European residents of Indian origin with rental income, interest or investments in India',
      'Non-resident Indians (NRIs) and Overseas Citizens of India (OCIs) selling property in India',
      'Families repatriating sale proceeds, inheritance or savings from India',
      'People who have received a notice from the Indian Income Tax Department',
      'UK residents whose accountant needs Indian income and tax figures for double taxation relief',
    ],
    included: [
      'Indian income tax return (ITR) preparation and filing for non-residents',
      'Tax computation on the sale of Indian property, including indexed cost and capital gains workings',
      'Application for a lower or nil TDS deduction certificate before a property sale',
      'Form 15CA and 15CB certification for repatriation of funds under the Liberalised Remittance and NRO account rules',
      'Tax residency certificate support and Form 10F for treaty relief claims',
      'UK–India double taxation agreement workings and Indian tax paid certificates for your UK adviser',
      'Response to Indian income tax notices and representation before the Indian tax authorities',
      'PAN application and correction, and NRO and NRE account tax reporting',
      'Review of TDS deducted on rent, interest and sale proceeds, with refund claims where due',
    ],
    notIncluded: [
      'Preparing or submitting your UK Self Assessment return, unless taken as our separate Self Assessment preparation support service',
      'UK tax advice on residence, domicile or remittance. We provide the Indian figures for your UK adviser.',
      'Regulated investment advice or recommendations on where to invest in India or the UK',
      'Legal conveyancing for the property sale. We work alongside your Indian lawyer.',
      'Immigration or OCI application services',
    ],
    howItWorks: [
      {
        title: 'Initial call',
        description:
          'A free consultation in UK hours to understand your Indian income, assets and any deadlines, such as a sale completion date.',
      },
      {
        title: 'Document list',
        description:
          'We send a short list of what we need, such as the PAN, prior returns, property papers and bank statements, to upload to the secure portal.',
      },
      {
        title: 'Computation and advice',
        description:
          'We prepare the Indian tax computation, explain your options in plain English and confirm the fee before any filing.',
      },
      {
        title: 'Filing and certificates',
        description:
          'We file the return or certificate application with the Indian authorities, track it and deal with any follow-up questions.',
      },
      {
        title: 'Figures for the UK',
        description:
          'You receive a summary of Indian income and tax paid in a format your UK accountant can use for relief under the double taxation agreement.',
      },
    ],
    clientProvides: [
      'PAN card and Indian income tax portal login, or authority for us to register you',
      'Previous Indian tax returns and Form 26AS or Annual Information Statement access',
      'Property purchase deed, sale agreement and cost of improvement records for a sale',
      'NRO, NRE and Indian bank statements for the tax year',
      'UK tax residency certificate or UK tax return where treaty relief is claimed',
    ],
    faqs: [
      {
        question: 'Do I have to file an Indian tax return if I live in the UK?',
        answer:
          'Usually yes if your Indian income exceeds the basic exemption limit, if tax has been deducted at source and you want a refund, or if you have sold property or investments. We confirm your position after the initial call.',
      },
      {
        question: 'How much tax is deducted when I sell property in India?',
        answer:
          'Buyers must deduct TDS at the rate set for non-resident sellers, which is often more than the final tax due. A lower deduction certificate applied for before completion can reduce this. The current rate is [PLACEHOLDER: current TDS rate for non-resident sellers, check before publishing].',
      },
      {
        question: 'How do I move the sale proceeds to the UK?',
        answer:
          'Funds are usually repatriated from an NRO account with a chartered accountant’s certificate (Form 15CB) and your declaration (Form 15CA) submitted to the bank. We prepare both and liaise with the bank’s requirements.',
      },
      {
        question: 'Will I be taxed twice on the same income?',
        answer:
          'The UK–India double taxation agreement is designed to prevent that. We provide the Indian tax paid certificates and workings so your UK adviser can claim the relief available on your UK return.',
      },
      {
        question: 'Can you deal with the Indian tax office on my behalf?',
        answer:
          'Yes. As a firm of Chartered Accountants (India) registered with ICAI, we can represent you before the Indian income tax authorities, respond to notices and attend hearings with your authorisation.',
      },
      {
        question: 'Do you also handle the UK side?',
        answer:
          'We can prepare the UK Self Assessment workings for your review or your accountant’s review under our separate service. We do not submit UK returns or act as your agent with HMRC.',
      },
    ],
    cta: {
      heading: 'Sort out your Indian tax position from the UK',
      text: 'Book a free consultation in UK hours. Tell us what you own in India and we will explain what needs filing, when and at what fee.',
    },
    serviceType: 'Indian tax compliance for non-residents',
    icon: 'india',
  },

  {
    slug: 'india-entry-and-subsidiary-compliance',
    name: 'India entry and subsidiary compliance',
    title: 'India entry and subsidiary compliance for UK and European companies',
    metaTitle: 'India Subsidiary Set-Up and Compliance | Pujara & Co',
    metaDescription:
      'Set up and run an Indian subsidiary, branch or LLP from the UK or Europe. Entity formation, ongoing Indian compliance and reporting to your finance team.',
    summary:
      'Entity formation, ongoing Indian compliance and clear reporting for UK and European companies with a presence in India.',
    intro:
      'Setting up in India means dealing with a company registrar, a tax department, a central bank regime and a payroll system your UK finance team has never seen. We set up the entity, run the compliance calendar and report to you in a format your UK accountant and auditors can use.',
    audiences: ['companies'],
    whoItIsFor: [
      'UK and European companies opening a development, support or sales operation in India',
      'Businesses choosing between a private limited subsidiary, LLP, branch office or liaison office',
      'Groups with an existing Indian entity that is behind on filings or needs a reliable local accountant',
      'Finance directors who need Indian figures consolidated into group accounts on time',
    ],
    included: [
      'Advice on entity type and structure for your business model and the Indian foreign investment rules',
      'Incorporation of a private limited company, LLP, branch or liaison office, including name approval and registered office',
      'Registrations after set-up: tax identification, Goods and Services Tax where required, import-export code, professional tax and labour registrations',
      'Foreign investment reporting to the Reserve Bank of India for share subscriptions and transfers',
      'Monthly bookkeeping in your group software, with the Indian statutory books maintained alongside',
      'Indian payroll, withholding tax and statutory contributions for your Indian employees',
      'Annual accounts, statutory audit coordination with an independent auditor, and annual returns to the Registrar of Companies',
      'Indian Corporate Income Tax returns, transfer pricing documentation support and withholding tax compliance',
      'Monthly reporting pack and compliance calendar for your UK finance team',
    ],
    notIncluded: [
      'UK accounting, UK tax or UK group audit work. We supply the Indian figures to your UK advisers.',
      'Acting as the statutory auditor of the Indian entity where we keep its books. An independent auditor is appointed.',
      'Immigration, visas and employment contracts, though we can introduce specialists',
      'Regulated investment advice or bank account opening on your behalf. We guide you through the process.',
    ],
    howItWorks: [
      {
        title: 'Discovery call',
        description:
          'We discuss what you plan to do in India, headcount, funding and timing, and recommend a structure.',
      },
      {
        title: 'Set-up plan',
        description:
          'You receive a written plan with steps, documents, costs in GBP and a realistic timeline for each stage.',
      },
      {
        title: 'Incorporation and registrations',
        description:
          'We prepare and file the incorporation documents and registrations and keep you updated at each step.',
      },
      {
        title: 'Ongoing compliance',
        description:
          'A compliance calendar runs monthly, quarterly and annual tasks. You get a status report each month in UK hours.',
      },
      {
        title: 'Group reporting',
        description:
          'Indian figures are mapped to your group chart of accounts and delivered by your reporting deadline.',
      },
    ],
    clientProvides: [
      'Group structure chart, business plan for India and proposed funding route',
      'Director and shareholder identity documents, notarised and apostilled where India requires',
      'Access to group accounting and reporting systems, or an agreed template',
      'A UK finance contact for approvals and queries',
      'Board resolutions and signed documents at each stage, which we draft for you',
    ],
    faqs: [
      {
        question: 'How long does it take to set up an Indian subsidiary?',
        answer:
          'Incorporation of a private limited company typically takes [PLACEHOLDER: e.g. three to six weeks] once documents are notarised. Bank account opening and post-incorporation registrations add further time. We give you a dated plan at the start.',
      },
      {
        question: 'Should we set up a subsidiary, LLP or branch?',
        answer:
          'A private limited subsidiary is the most common choice for operating businesses. A branch or liaison office suits narrower activities and needs separate approval. We explain the differences on the discovery call and recommend one.',
      },
      {
        question: 'Can our UK accountant get the figures they need?',
        answer:
          'Yes. We report monthly in your group format, provide audit support schedules for the group auditors and respond to their queries directly in UK hours.',
      },
      {
        question: 'Who audits the Indian company?',
        answer:
          'Indian companies require a statutory audit by an independent chartered accountant. We coordinate the audit and prepare the file, but we do not audit entities where we keep the books.',
      },
      {
        question: 'Can you handle the Indian payroll for our staff?',
        answer:
          'Yes. We run the Indian payroll, withholding tax and statutory contributions, and provide payslips and reports for your HR and finance teams.',
      },
      {
        question: 'Do you work with European as well as UK parent companies?',
        answer:
          'Yes. The Indian process is the same. Documents may need notarisation and apostille in your home country, and we work in English in UK hours.',
      },
    ],
    cta: {
      heading: 'Set up in India with a local team that reports in your format',
      text: 'Book a discovery call and we will send a written set-up plan with steps, timeline and fees in GBP.',
    },
    serviceType: 'India entry and subsidiary compliance',
    icon: 'subsidiary',
  },
];

export const serviceSlugs = services.map((s) => s.slug);

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
