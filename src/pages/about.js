module.exports = {
  path: '/about/',
  title: 'About the practice',
  description: 'Pujara and Co is an independent firm of chartered accountants at Trafford House, Basildon. Meet the people behind the practice and find out how we work with Essex businesses.',
  body: (cfg) => `
    <section class="page-head">
      <div class="wrap">
        <nav class="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>About</span></nav>
        <h1>A small practice, deliberately.</h1>
        <p class="lead">We have kept Pujara and Co small so that every client deals with a qualified accountant who knows their file, rather than being passed down to whoever is free.</p>
      </div>
    </section>

    <section class="section">
      <div class="wrap cols-sidebar">
        <div class="prose">
          <h2>How the firm started</h2>
          <p>[PLACEHOLDER — two or three honest paragraphs from the principal: when the practice was set up, what they did before (practice background, industry, qualifications), and why they chose Basildon. Real detail here does more for trust than anything else on the site. Example shape: "I qualified with a mid-sized firm in London in 20XX and spent eight years looking after owner-managed businesses. I set up on my own in 20XX because I wanted to work with clients directly rather than through layers of managers."]</p>
          <p>[PLACEHOLDER — one paragraph on the kind of clients the firm has today and the typical size, e.g. "Today we look after around N businesses, most of them with turnover between £50,000 and £2 million, plus a good number of individuals with property or investment income."]</p>

          <h2>What you can expect from us</h2>
          <p>We would rather set expectations now than have you find out later.</p>
          <ul class="checks">
            <li><strong>A reply the same working day.</strong> Not always a full answer, but you will know we have seen it and when you will hear back.</li>
            <li><strong>Plain English.</strong> If we have to use a technical term we will explain it. You should never leave a meeting unsure what was decided.</li>
            <li><strong>Fees agreed in advance.</strong> Monthly, fixed, and reviewed once a year or when your business changes. We do not charge for phone calls or quick emails.</li>
            <li><strong>Honesty about what you do not need.</strong> Plenty of sole traders do not need a limited company. Plenty of businesses do not need monthly management accounts. We will say so.</li>
            <li><strong>Deadlines managed, not just met.</strong> You will hear from us weeks before anything is due, with a short list of what we need.</li>
          </ul>

          <h2>The people</h2>
          <h3>[Principal name], [ACA / FCA / ACCA / FCCA]</h3>
          <p>[PLACEHOLDER — 80 to 120 words. Qualification and year, where they trained, areas they enjoy most (e.g. owner-managed companies, property tax, start-ups), and one personal line so the page reads like a person wrote it. Add a photo at /assets/img/team-principal.jpg if available.]</p>
          <h3>[Team member name], [role]</h3>
          <p>[PLACEHOLDER — if there is a second person (bookkeeper, payroll administrator, trainee), add them here. Delete this block if not.]</p>

          <h2>Professional standing</h2>
          <p>${cfg.regulator}. The practice carries professional indemnity insurance and is registered with HMRC as a tax agent and under the Money Laundering Regulations, as every UK accountancy practice is required to be.</p>
          <p>[PLACEHOLDER — confirm whether the firm is ICAEW or ACCA regulated and add the firm number. If ICAEW, the firm will appear on the ICAEW firm finder; link to it here. Also list software partner status if relevant: Xero, QuickBooks, FreeAgent, Sage.]</p>
        </div>
        <aside class="side-card">
          <h3>In short</h3>
          <ul>
            <li>Independent chartered practice</li>
            <li>Based at Trafford House, Basildon</li>
            <li>Owner-managed businesses, landlords and individuals</li>
            <li>Fixed monthly fees</li>
            <li>Xero, QuickBooks and FreeAgent</li>
            <li>Open six days a week</li>
          </ul>
          <a class="btn btn-brass" href="/contact/">Arrange a free meeting</a>
        </aside>
      </div>
    </section>`
};
