module.exports = {
  path: '/services/',
  title: 'Accountancy and tax services',
  description: 'Year-end accounts, Self Assessment, corporation tax, VAT and Making Tax Digital, bookkeeping, payroll and company formation from chartered accountants in Basildon, Essex.',
  body: (cfg) => {
    const services = cfg.services.map((s, i) => `
        <li>
          <a href="/services/${s.slug}/">
            <span class="num">${String(i + 1).padStart(2, '0')}</span>
            <h3>${s.title}</h3>
            <p>${s.blurb}</p>
            <span class="arrow" aria-hidden="true">&rarr;</span>
          </a>
        </li>`).join('');
    return `
    <section class="page-head">
      <div class="wrap">
        <nav class="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>Services</span></nav>
        <h1>What we do, and what it includes.</h1>
        <p class="lead">Most clients take a package that covers everything below for one monthly fee. You can also come to us for a single piece of work, such as a one-off tax return or help with a Companies House filing you have been putting off.</p>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <ol class="service-list mt-0">${services}
        </ol>
      </div>
    </section>

    <section class="section section-alt">
      <div class="wrap cols">
        <div>
          <span class="eyebrow">Fees</span>
          <h2>How we charge</h2>
          <p>Fixed monthly fees, agreed before any work starts and paid by direct debit. The fee depends on the volume of transactions, whether you are VAT registered, how many people are on the payroll, and how much of the bookkeeping you want to do yourself.</p>
          <p>As a rough guide, a sole trader with tidy records usually pays less than a contractor's limited company, which in turn pays less than a VAT-registered business with staff. We will give you an exact figure after the first meeting.</p>
          <p class="small muted">[PLACEHOLDER — if the firm is happy to publish starting prices, add them here, e.g. "Sole trader accounts and tax return from £X per month. Limited company packages from £X per month." Published prices noticeably improve enquiry rates for small firms.]</p>
        </div>
        <div>
          <span class="eyebrow">Also available</span>
          <h2>Things that come up</h2>
          <ul>
            <li>Management accounts and cash-flow forecasts for businesses that are growing or borrowing</li>
            <li>Capital gains tax on selling a property, shares or a business</li>
            <li>Rental income and the property allowance for landlords</li>
            <li>Construction Industry Scheme (CIS) returns for contractors and subcontractors</li>
            <li>Help with an HMRC enquiry or a letter you do not understand</li>
            <li>Dormant company accounts and striking off a company you no longer need</li>
            <li>Tax references and accountant's certificates for mortgage applications</li>
          </ul>
        </div>
      </div>
    </section>`;
  }
};
