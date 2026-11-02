const cfg = require('../config');

function servicePage(slug, data) {
  const svc = cfg.services.find(s => s.slug === slug);
  const others = cfg.services.filter(s => s.slug !== slug)
    .map(s => `<li><a href="/services/${s.slug}/">${s.short}</a></li>`).join('');
  const faqs = data.faqs.map(([q, a]) => `
          <details>
            <summary>${q}</summary>
            <div class="faq-body">${a}</div>
          </details>`).join('');
  return {
    path: `/services/${slug}/`,
    title: data.metaTitle,
    description: data.description,
    extraSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: data.faqs.map(([q, a]) => ({
        '@type': 'Question', name: q,
        acceptedAnswer: { '@type': 'Answer', text: a.replace(/<[^>]+>/g, '') }
      }))
    },
    body: (cfg) => `
    <section class="page-head">
      <div class="wrap">
        <nav class="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span><a href="/services/">Services</a></span><span>${svc.short}</span></nav>
        <h1>${data.h1}</h1>
        <p class="lead">${data.lead}</p>
      </div>
    </section>
    <section class="section">
      <div class="wrap cols-sidebar">
        <div class="prose">
          ${data.content}
          <h2>Common questions</h2>
          <div class="faq">${faqs}
          </div>
        </div>
        <aside class="side-card">
          <h3>${data.sideTitle || 'What is included'}</h3>
          <ul>${data.included.map(i => `<li>${i}</li>`).join('')}</ul>
          <a class="btn btn-brass" href="/contact/">Ask about ${svc.short.toLowerCase()}</a>
          <h3 class="mt-2">Other services</h3>
          <ul>${others}</ul>
        </aside>
      </div>
    </section>`
  };
}

module.exports = [
  servicePage('annual-accounts', {
    metaTitle: 'Year-end accounts for limited companies and sole traders in Basildon',
    description: 'Statutory year-end accounts prepared and filed with Companies House and HMRC by chartered accountants in Basildon. Fixed fees, deadlines managed, and the numbers explained.',
    h1: 'Year-end accounts, filed on time and actually explained.',
    lead: 'Every limited company has to file accounts with Companies House and a tax return with HMRC, whatever its size. Sole traders need a set of figures for their Self Assessment. We prepare them, file them, and then sit down with you and go through what they say about the business.',
    content: `
          <h2>Limited company accounts</h2>
          <p>Private companies must file accounts at Companies House within nine months of their year end, and the corporation tax return with HMRC within twelve. Miss the Companies House date and the penalty starts at £150 and climbs to £1,500, doubling if you are late two years running. We work backwards from those dates and ask for your records early enough that there is never a rush.</p>
          <p>Most of our company clients qualify as micro-entities or small companies, which means a shorter set of accounts under FRS 105 or FRS 102 Section 1A. We prepare the full version for your records and file the abridged version the public gets to see, where the rules allow it. We also handle the confirmation statement and keep the Companies House register up to date when directors, addresses or shareholdings change.</p>
          <h2>Sole trader and partnership accounts</h2>
          <p>If you are self-employed there is no legal format for your accounts, but you still need accurate figures for your tax return and for anything else that comes up, such as a mortgage application or a tender. We prepare a proper income and expenditure account, make sure you have claimed everything you are entitled to, and keep the working papers so there are no awkward gaps if HMRC ever asks.</p>
          <p>From April 2026, sole traders and landlords with income over £50,000 come into Making Tax Digital for Income Tax, with the threshold dropping to £30,000 in 2027 and £20,000 in 2028. That means quarterly digital updates rather than one annual return, and the accounts process changes with it. We are moving clients onto suitable software now rather than waiting.</p>
          <h2>What you get back from us</h2>
          <p>Accounts are not just a filing. Once they are done we go through the headline numbers with you: how profit compares with last year, where the money went, how much tax is coming and when, and whether the business is carrying anything it should not be, like an overdrawn director's loan account. Half an hour on this once a year saves a lot of surprises.</p>
          <div class="callout"><p><strong>Switching to us mid-year?</strong> That is fine. We request the previous accountant's working papers through the standard professional clearance process, and most hand over without fuss. You do not need to wait for your year end.</p></div>`,
    included: ['Statutory accounts prepared under FRS 105 or FRS 102 1A', 'Filing with Companies House and HMRC', 'Confirmation statement', 'Director’s loan account review', 'Annual review meeting', 'Deadline reminders'],
    faqs: [
      ['What records do you need from me?', '<p>Bank statements for the year, sales invoices, purchase invoices and receipts, details of any loans or finance, and a note of anything unusual. If you use Xero, QuickBooks or FreeAgent and keep it reasonably up to date, most of this is already there and we just need access.</p>'],
      ['My company has not traded. Do I still need accounts?', '<p>Yes. A dormant company still has to file dormant accounts and a confirmation statement each year. They are simple and cheap, but the penalties for forgetting are the same as for a trading company.</p>'],
      ['Can you do accounts for a year that has already passed?', '<p>Yes, including late ones. If you have fallen behind we will get the overdue filings in first to stop penalties growing, then get you onto a normal cycle.</p>'],
      ['Do you need to visit my premises?', '<p>No. Everything can be done by email, phone and shared software, though you are always welcome at the office and some clients prefer to drop records in person.</p>']
    ]
  }),

  servicePage('self-assessment-tax-returns', {
    metaTitle: 'Self Assessment tax return accountants in Basildon, Essex',
    description: 'Self Assessment tax returns prepared and filed by chartered accountants in Basildon for sole traders, company directors, landlords, contractors and higher earners. Fixed fee, no surprises.',
    h1: 'Self Assessment, done properly and well before January.',
    lead: 'If HMRC has asked you for a tax return, or you think they should have, we will prepare it, check it, tell you what you owe, and file it. Most clients send us their paperwork in the summer and have forgotten about it by the autumn.',
    content: `
          <h2>Who needs to file</h2>
          <p>Anyone who is self-employed with income over £1,000, a partner in a business, a landlord with rental income, a company director taking dividends, someone earning over £150,000 through PAYE, or anyone with untaxed income from abroad, investments or a side business. You also need to file if your income is over £60,000 and your household receives Child Benefit, because of the High Income Child Benefit Charge.</p>
          <p>If you are not sure, ask. Plenty of people are paying penalties for returns they did not know they had to file, and a few are filing returns they could stop.</p>
          <h2>The dates that matter</h2>
          <ul>
            <li><strong>5 October</strong> — register for Self Assessment if this is your first year</li>
            <li><strong>31 January</strong> — file the online return and pay the balance, plus the first payment on account for the next year</li>
            <li><strong>31 July</strong> — second payment on account</li>
          </ul>
          <p>A return filed one day late costs £100 even if no tax is owed, and the penalties keep climbing after three, six and twelve months. Interest runs on late payments from 1 February.</p>
          <h2>What we do</h2>
          <p>We gather what we need from you, prepare the return, check it for anything missed, and go through it with you before anything is submitted. You will know exactly what the bill is and when it falls due, and if payments on account are going to cause a cash-flow problem we will tell you whether a claim to reduce them is sensible.</p>
          <p>For landlords we handle the restriction on mortgage interest relief, the property allowance, and capital gains reporting when you sell, which has to be done within 60 days of completion. For contractors we deal with CIS deductions and getting any overpaid tax refunded. For directors we make sure dividends, salary and benefits all agree with the company's records.</p>
          <div class="callout"><p><strong>Making Tax Digital for Income Tax</strong> begins in April 2026 for sole traders and landlords with gross income over £50,000, and will reach those over £20,000 by April 2028. It replaces the single annual return with quarterly updates from compatible software. If this affects you we will set you up on the right system well ahead of your start date.</p></div>`,
    included: ['Preparation and filing of SA100 and supplementary pages', 'Calculation of tax and payments on account', 'Review of allowable expenses and reliefs', 'Registration with HMRC if needed', 'Dealing with HMRC on your behalf as your agent', 'Reminders ahead of every payment date'],
    faqs: [
      ['How much is a tax return?', '<p>It depends on what goes in it. A straightforward return for a director or landlord with one property is at the lower end; a sole trader with full accounts, several properties and capital gains is more work. We quote a fixed price after a short conversation, and it will not change unless the job does.</p>'],
      ['I have missed the deadline. Can you still help?', '<p>Yes. The sooner it is filed the less it costs, so get in touch straight away. We can also appeal penalties where there is a reasonable excuse, though HMRC applies that fairly narrowly.</p>'],
      ['What expenses can I claim as a sole trader?', '<p>Anything incurred wholly and exclusively for the business: materials, tools, van costs, insurance, a share of phone and home-office costs, professional fees, and so on. The grey areas are usually mixed-use items like a car or a home office, and that is where good advice pays for itself.</p>'],
      ['Do I need to send you receipts for everything?', '<p>You need to keep them for five years after the filing deadline, but you do not need to post them to us. A tidy spreadsheet or a bookkeeping app with receipts photographed is ideal. We will tell you if we need to see anything specific.</p>']
    ]
  }),

  servicePage('corporation-tax', {
    metaTitle: 'Corporation tax returns and planning for Essex limited companies',
    description: 'CT600 corporation tax returns, capital allowances, and practical tax planning for owner-managed limited companies in Basildon and Essex from chartered accountants.',
    h1: 'Corporation tax: the return, and the planning around it.',
    lead: 'Every company pays corporation tax on its profits, but how much depends on decisions made during the year, not just at the end. We prepare the return and, more usefully, talk to you before the year end while there is still time to do something about it.',
    content: `
          <h2>The basics</h2>
          <p>Corporation tax is currently 19% on profits up to £50,000 and 25% on profits over £250,000, with a sliding rate in between called marginal relief. Those thresholds are shared between associated companies, so if you own more than one company the bands shrink. The tax is due nine months and one day after the year end, and the return (the CT600, with full accounts and tax computations attached) is due twelve months after.</p>
          <p>Unlike Self Assessment, HMRC does not send a bill. You have to work out what is owed and pay it, which is where most of the trouble starts for companies without an accountant.</p>
          <h2>Where the savings usually are</h2>
          <ul>
            <li><strong>Capital allowances.</strong> Most equipment, vans and computers qualify for 100% relief in the year of purchase through the Annual Investment Allowance. Timing a purchase before rather than after the year end can bring the relief forward twelve months.</li>
            <li><strong>Salary and dividends.</strong> How a director takes money out affects corporation tax, income tax and National Insurance together. We look at the whole picture each year rather than one tax at a time.</li>
            <li><strong>Pension contributions.</strong> Employer contributions are generally an allowable expense and are one of the few ways to move money out of a company efficiently.</li>
            <li><strong>Losses.</strong> If the company has made a loss we will make sure it is carried back or forward in the way that produces the quickest refund or the biggest future saving.</li>
            <li><strong>R&amp;D relief.</strong> Fewer companies qualify than the adverts suggest, but genuine development work in software, engineering or manufacturing can still attract a worthwhile credit. We will give you an honest view.</li>
          </ul>
          <h2>What we do</h2>
          <p>We prepare the computation and the CT600, file it with HMRC alongside the accounts in the required iXBRL format, and tell you the amount and payment date well in advance. Before the year end we will have a short planning conversation to see whether anything is worth bringing forward or deferring. If HMRC raises an enquiry, we deal with it.</p>`,
    included: ['CT600 return and tax computation', 'iXBRL tagging and online filing', 'Capital allowances claims', 'Pre-year-end planning conversation', 'Director remuneration review', 'HMRC correspondence handled'],
    faqs: [
      ['When do I have to pay corporation tax?', '<p>Nine months and one day after your accounting year end. For a 31 March year end that is 1 January. Larger companies with profits over £1.5 million pay in quarterly instalments, but that does not apply to most owner-managed businesses.</p>'],
      ['Is it better to take salary or dividends?', '<p>Usually a mix: a salary around the National Insurance threshold to secure a state pension year, with the rest as dividends. The best split changes each tax year as thresholds move, and it also depends on whether you have other income, so we review it annually rather than setting it once.</p>'],
      ['Can I claim my car through the company?', '<p>You can, but for most petrol or diesel cars the benefit-in-kind charge outweighs the saving. Fully electric cars are a different story and are currently very tax-efficient through a company. Vans are treated more generously than cars. Ask before you buy, not after.</p>'],
      ['My company made a loss. Do I still file a return?', '<p>Yes, and it is worth doing properly because the loss can be set against last year’s profit for a refund, or carried forward against future profits.</p>']
    ]
  }),

  servicePage('vat-and-making-tax-digital', {
    metaTitle: 'VAT returns and Making Tax Digital accountants in Basildon',
    description: 'VAT registration, quarterly VAT returns, scheme selection and Making Tax Digital compliance for Essex businesses, handled by chartered accountants in Basildon.',
    h1: 'VAT without the quarterly panic.',
    lead: 'VAT is the tax most small businesses get wrong, usually by registering late, choosing the wrong scheme, or claiming things they should not. We register you at the right time, pick the scheme that suits how you trade, and file every return from MTD-compatible software.',
    content: `
          <h2>When you have to register</h2>
          <p>You must register for VAT once your taxable turnover in any rolling twelve-month period goes over £90,000, or as soon as you expect it to in the next thirty days alone. The rolling part catches people out: it is not your accounting year, it is any twelve months. We keep an eye on this for clients who are approaching the threshold so that registration happens on time and not after a penalty letter.</p>
          <p>Some businesses choose to register voluntarily below the threshold, typically because their customers are VAT-registered businesses and the ability to reclaim VAT on costs outweighs the admin. We will tell you if that makes sense for you.</p>
          <h2>Choosing a scheme</h2>
          <ul>
            <li><strong>Standard accounting</strong> — VAT on invoices issued and received. The default, and right for most.</li>
            <li><strong>Cash accounting</strong> — VAT accounted for when money actually moves. Helpful if customers pay slowly.</li>
            <li><strong>Flat rate scheme</strong> — pay a fixed percentage of gross turnover and keep the difference. Simpler, and sometimes cheaper, but the "limited cost trader" rules mean it suits fewer businesses than it used to.</li>
            <li><strong>Annual accounting</strong> — one return a year with payments on account. Less admin, less visibility.</li>
          </ul>
          <p>Builders and contractors also need to understand the domestic reverse charge, which changes who accounts for the VAT on most construction work between VAT-registered businesses. We set this up correctly in your software so invoices come out right.</p>
          <h2>Making Tax Digital</h2>
          <p>All VAT-registered businesses must keep digital records and file returns through MTD-compatible software; the old online form is gone. We set clients up on Xero, QuickBooks or FreeAgent, connect it to HMRC, and either file from your records or do the bookkeeping ourselves and file from that. Returns are reviewed by a qualified accountant before submission, which is how errors get caught before HMRC catches them.</p>
          <div class="callout"><p><strong>Already registered and worried about past returns?</strong> Errors under £10,000 can usually be corrected on the next return. Larger ones need a separate disclosure, and it is far better to make one voluntarily than to wait for an inspection. We can review your last four years and tell you where you stand.</p></div>`,
    included: ['VAT registration and deregistration', 'Scheme selection and changes', 'Quarterly return preparation and MTD filing', 'Software set-up and HMRC connection', 'Reverse charge and partial exemption advice', 'Error correction and disclosures'],
    faqs: [
      ['What happens if I registered late?', '<p>HMRC will backdate your registration to the date you should have registered, and you owe VAT on sales from then even if you did not charge it. There is also a penalty based on how late you were. We can often reduce the damage by reclaiming VAT on costs for the same period and negotiating the penalty.</p>'],
      ['Can I reclaim VAT on things I bought before registering?', '<p>Yes, within limits: goods you still hold bought up to four years before registration, and services up to six months before. Keep the invoices.</p>'],
      ['How often do I have to file?', '<p>Quarterly for most businesses. Your quarters are set when you register but can be changed to line up with your year end. Payment is due one month and seven days after the quarter ends.</p>'],
      ['Should I be on the flat rate scheme?', '<p>Only if your costs for goods are a meaningful share of turnover. Service businesses with few purchases are usually classed as limited cost traders and pay 16.5%, which rarely beats standard accounting. We will run both calculations for you.</p>']
    ]
  }),

  servicePage('bookkeeping', {
    metaTitle: 'Bookkeeping and cloud accounting for small businesses in Basildon',
    description: 'Monthly bookkeeping on Xero, QuickBooks or FreeAgent for Essex businesses, with bank reconciliation, invoicing, and real-time figures you can use. Chartered accountants in Basildon.',
    h1: 'Books that are up to date, not a shoebox in December.',
    lead: 'Good bookkeeping is the difference between knowing how the business is doing and finding out at the year end. We either keep the books for you or set you up on software and check them each month, whichever you prefer. Either way you get figures you can actually make decisions on.',
    content: `
          <h2>Two ways to work</h2>
          <p><strong>We do it.</strong> You forward invoices and receipts to a capture app, your bank feeds in automatically, and we reconcile everything monthly. You get a short summary each month and can log in at any time to see where things stand. This suits busy owners who would rather be doing anything else.</p>
          <p><strong>You do it, we check it.</strong> We set up the software, chart of accounts and bank feed, show you or a member of staff how to code transactions and raise invoices, and then review the books each month or quarter to pick up anything miscoded before it reaches the VAT return. Cheaper, and fine if someone in the business has an hour a week.</p>
          <h2>Software</h2>
          <p>We work day to day with Xero, QuickBooks Online and FreeAgent, and can support Sage if you are already on it. For most trades and service businesses Xero or FreeAgent does everything needed. We are not tied to one provider and will recommend the one that suits your bank, your invoicing habits and your budget. Some business bank accounts include FreeAgent free of charge, which is worth knowing before you pay for a subscription.</p>
          <h2>What good books give you</h2>
          <ul>
            <li>A VAT return that takes an hour instead of a weekend</li>
            <li>Knowing who owes you money and chasing it before it gets old</li>
            <li>A realistic tax estimate months before the bill, so the money is put aside</li>
            <li>Management figures you can show a lender, a landlord or a buyer</li>
            <li>A year end with no surprises, because we have seen every month</li>
          </ul>
          <p>If you are behind, that is not unusual and not a problem. We regularly take on businesses that are a year or more out of date, get the backlog done in one go, and then keep them current.</p>`,
    included: ['Software set-up and bank feeds', 'Monthly or quarterly reconciliation', 'Sales and purchase ledger', 'Receipt capture set-up', 'Monthly summary of key figures', 'Backlog clearance if needed'],
    faqs: [
      ['Which software do you recommend?', '<p>For a sole trader or small limited company, FreeAgent or Xero. For a retail or stock-heavy business, QuickBooks or Xero with an inventory add-on. We will look at how you work before suggesting one, and we do not take commission that would bias the advice.</p>'],
      ['Do I need a bookkeeper and an accountant?', '<p>Not two separate people, no. Bookkeeping is the monthly recording; accounting is the year end, tax and advice built on top of it. Having both done by one firm means nothing falls between the two.</p>'],
      ['Can you work with my existing bookkeeper?', '<p>Yes. Several clients have an in-house or freelance bookkeeper and we review their work quarterly and do the year end. We are happy to work that way.</p>'],
      ['How much paperwork do I need to keep?', '<p>Digital copies are fine for HMRC. Photograph receipts into the software as you go and you can throw the paper away. Keep records for six years for a company and five years after the filing deadline for a sole trader.</p>']
    ]
  }),

  servicePage('payroll', {
    metaTitle: 'Payroll, PAYE and auto-enrolment services in Basildon, Essex',
    description: 'Outsourced payroll for small employers in Basildon and Essex: payslips, RTI submissions to HMRC, workplace pensions, P60s and P11Ds, run on time every month by chartered accountants.',
    h1: 'Payroll run on time, every time, without you thinking about it.',
    lead: 'Paying staff correctly is one of the few things a business cannot get wrong twice. We run payroll for employers from one director to a few dozen staff, handle every HMRC and pension submission, and send payslips out before payday.',
    content: `
          <h2>What is involved</h2>
          <p>Every time you pay someone, HMRC has to be told on or before the day through a Full Payment Submission under Real Time Information. Pension contributions have to be calculated and paid to the scheme. Starters need P45s processing, leavers need them issuing, and statutory sick, maternity and paternity pay have their own rules. At the end of the tax year there are P60s for every employee by 31 May and P11Ds for benefits by 6 July. Miss a monthly submission and HMRC's penalties start automatically.</p>
          <p>None of it is difficult in isolation. It is the relentlessness that catches small employers out, especially when the person who normally does it is on holiday.</p>
          <h2>How we run it</h2>
          <p>You tell us hours, overtime, new starters and leavers by an agreed date each month, by email or through a simple online portal. We process the payroll, send you a summary to approve, then issue password-protected payslips to staff by email, submit the FPS to HMRC, calculate what you owe in PAYE and National Insurance, and upload pension contributions to your provider. You get a one-page report showing what to pay and to whom.</p>
          <h2>Directors' payroll</h2>
          <p>If you are the only employee of your own company you still need a PAYE scheme to pay yourself a salary, and the right salary level is a tax planning decision. We set up the scheme, run it annually or monthly as suits, and make sure the figures tie up with the company accounts and your personal tax return.</p>
          <h2>Workplace pensions</h2>
          <p>Every employer must assess staff for automatic enrolment and put eligible workers into a qualifying scheme. We handle the assessment each pay period, the enrolment letters, the opt-outs, and the declaration of compliance to The Pensions Regulator, which is required within five months of your duties start date and then every three years at re-enrolment. If you do not have a scheme yet we will help you choose one.</p>
          <div class="callout"><p><strong>Employment Allowance.</strong> Most small employers can reduce their employer National Insurance bill by up to £10,500 a year. It is not applied automatically; it has to be claimed through the payroll, and we check every client is claiming it where eligible.</p></div>`,
    included: ['Weekly, fortnightly or monthly processing', 'Payslips by email', 'RTI submissions (FPS and EPS)', 'Auto-enrolment assessment and pension uploads', 'Starters, leavers and statutory payments', 'P60s, P11Ds and year-end returns'],
    faqs: [
      ['How much does payroll cost?', '<p>A fixed monthly fee based on how many people are paid and how often. A single-director payroll is a small addition to an accounts package; a monthly payroll for ten staff is more. We will quote exactly once we know the numbers.</p>'],
      ['Can you take over mid-year?', '<p>Yes. We need the year-to-date figures from your current software or provider, which are straightforward to export, and we can usually be running the next payroll within a week.</p>'],
      ['What about CIS subcontractors?', '<p>CIS is separate from payroll but we handle it too: verifying subcontractors with HMRC, applying the right deduction, issuing statements and filing the monthly CIS return by the 19th.</p>'],
      ['Do I need to give staff a pension if I only have one employee?', '<p>If they are aged 22 to state pension age and earn over £10,000 a year, yes. Directors without an employment contract are usually exempt, but the business still has to tell The Pensions Regulator that.</p>']
    ]
  }),

  servicePage('company-formation', {
    metaTitle: 'Company formation and start-up accountants in Basildon',
    description: 'Setting up a limited company or going self-employed in Essex? Pujara and Co handle incorporation, HMRC registrations, software and first-year advice from Basildon.',
    h1: 'Starting a business, set up properly from the first day.',
    lead: 'The decisions you make in the first month, such as sole trader or limited, VAT or not yet, which bank and which software, shape how much admin and tax you deal with for years. We help you make them with your eyes open, then do the set-up so you can get on with finding customers.',
    content: `
          <h2>Sole trader or limited company?</h2>
          <p>There is no universal answer, and anyone who gives you one without asking questions is guessing. As a rough guide, a limited company starts to make sense when profits are consistently above the higher-rate threshold, when customers or agencies insist on it, when you want to bring in a partner or investor, or when limited liability genuinely matters for the work you do. Below that, the extra accounting and admin of a company often costs more than it saves.</p>
          <p>We will look at your expected income, your other income, whether you have a spouse or partner to share ownership with, and what the business is likely to look like in three years, and give you a clear recommendation. You can always incorporate later; it is harder to go back the other way.</p>
          <h2>What we set up</h2>
          <ul>
            <li>Incorporation at Companies House with sensible share structure and articles, usually within 24 hours</li>
            <li>Directors' identity verification, which Companies House now requires</li>
            <li>Registration for corporation tax, PAYE and, if needed, VAT and CIS</li>
            <li>Registration for Self Assessment if you are going self-employed</li>
            <li>A registered office address, if you would rather not use your home</li>
            <li>Bookkeeping software, bank feed and invoice templates</li>
            <li>A written note of every deadline for your first year and what each one means</li>
          </ul>
          <h2>The first year</h2>
          <p>New businesses rarely need much accounting work in year one, but they do need someone to ask. How to pay yourself. Whether to put the van through the business. What to do with that letter from HMRC. Our start-up packages include unlimited questions by phone and email, because the five-minute call that stops a mistake is the most valuable thing we do.</p>
          <div class="callout"><p><strong>Already set up but not sure it was done right?</strong> We see a lot of companies formed through online agents with odd share structures, the wrong SIC code, or a registered office that has since lapsed. A quick review is cheap and usually reassuring.</p></div>`,
    sideTitle: 'Start-up package',
    included: ['Structure advice before you commit', 'Companies House incorporation', 'All HMRC registrations', 'Software set-up and training', 'Year-one deadline plan', 'Unlimited questions by phone and email'],
    faqs: [
      ['How long does it take to form a company?', '<p>Usually the same or next working day once we have your details and the directors have completed identity verification. Bank accounts take longer; allow one to three weeks depending on the bank.</p>'],
      ['What does it cost to set up a limited company?', '<p>The Companies House fee for online incorporation is £50. Our fee for the set-up work is fixed and quoted in advance, and for clients taking an ongoing package we often include it.</p>'],
      ['Can my spouse be a shareholder?', '<p>Often, yes, and it can be tax-efficient, but it needs to be done properly with real shares carrying real rights, not an arrangement that only exists on paper. We will explain the rules and set it up correctly if it suits you.</p>'],
      ['Do I need a business bank account as a sole trader?', '<p>Not legally, but in practice yes. Mixing personal and business money makes bookkeeping slow and makes any HMRC enquiry much more painful. Several banks offer free accounts for the first year.</p>']
    ]
  })
];
