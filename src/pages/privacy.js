module.exports = {
  path: '/privacy-policy/',
  title: 'Privacy policy',
  description: 'How Pujara and Co chartered accountants collect, use and protect personal information submitted through this website.',
  noCta: true,
  body: (cfg) => `
    <section class="page-head">
      <div class="wrap">
        <nav class="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>Privacy policy</span></nav>
        <h1>Privacy policy</h1>
        <p class="lead">This page explains what information this website collects, why, and what we do with it. It covers the website only. Clients of the practice receive a separate privacy notice as part of our engagement letter.</p>
      </div>
    </section>
    <section class="section">
      <div class="wrap narrow prose">
        <h2>Who we are</h2>
        <p>${cfg.legalName}, ${cfg.address.building}, ${cfg.address.street}, ${cfg.address.town}, ${cfg.address.county} ${cfg.address.postcode}. We are the data controller for information collected through this website. You can contact us about privacy at <a href="mailto:${cfg.email}">${cfg.email}</a> or on ${cfg.phoneDisplay}.</p>

        <h2>What we collect and why</h2>
        <h3>Enquiry form</h3>
        <p>When you send an enquiry we receive the name, contact details and message you type in. We use these to reply to you and, if you become a client, to set up your file. Our lawful basis is that this is necessary to take steps at your request before entering into a contract. We keep enquiry details for 12 months if you do not become a client, then delete them.</p>
        <h3>Phone and email</h3>
        <p>If you call or email us we will keep a note of the conversation for the same purpose and the same period.</p>
        <h3>Website usage</h3>
        <p>This website does not set advertising or tracking cookies. Our hosting provider keeps standard server logs, including IP addresses, for security purposes. [PLACEHOLDER — if Google Analytics or similar is added later, describe it here and add a consent banner if required.]</p>
        <h3>Embedded map</h3>
        <p>The contact page includes a map from Google. Loading it may result in Google setting cookies and collecting usage data under <a href="https://policies.google.com/privacy" rel="noopener" target="_blank">Google's privacy policy</a>.</p>

        <h2>Sharing</h2>
        <p>We do not sell or share enquiry information with third parties for marketing. The form is processed by [PLACEHOLDER — name of form provider, e.g. Formspree, or "our email provider"], which acts as our processor. Client information is shared with HMRC, Companies House and software providers only as needed to do the work you have engaged us for, and that is covered in the client privacy notice.</p>

        <h2>Your rights</h2>
        <p>You can ask to see the information we hold about you, ask us to correct or delete it, or object to how we use it. Email us and we will respond within one month. If you are unhappy with how we handle your information you can complain to the Information Commissioner's Office at <a href="https://ico.org.uk" rel="noopener" target="_blank">ico.org.uk</a>.</p>

        <h2>Changes</h2>
        <p>We will update this page if our practices change. Last updated [PLACEHOLDER — date].</p>
      </div>
    </section>`
};
