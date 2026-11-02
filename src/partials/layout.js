const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function schema(cfg) {
  const a = cfg.address;
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'AccountingService',
    name: cfg.legalName,
    url: cfg.siteUrl,
    telephone: cfg.phoneIntl,
    email: cfg.email,
    image: `${cfg.siteUrl}/assets/img/logo-mark.svg`,
    priceRange: '££',
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${a.building}, ${a.street}`,
      addressLocality: a.town,
      addressRegion: a.county,
      postalCode: a.postcode,
      addressCountry: 'GB'
    },
    areaServed: cfg.areas.map(n => ({ '@type': 'City', name: n })),
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '09:00', closes: '17:00' }
    ],
    sameAs: [cfg.gbpReviewUrl]
  });
}

function header(cfg, current) {
  const links = cfg.nav.map(([href, label]) => {
    const isCurrent = href === '/' ? current === '/' : current.startsWith(href);
    return `<a href="${href}"${isCurrent ? ' aria-current="page"' : ''}>${label}</a>`;
  }).join('\n        ');
  return `
  <a class="skip-link" href="#main">Skip to content</a>
  <div class="topbar">
    <div class="wrap">
      <span><a href="tel:${cfg.phoneIntl}">${cfg.phoneDisplay}</a></span>
      <span class="hours">Open Monday to Saturday, 9am to 5pm</span>
      <span class="addr">${cfg.address.building}, ${cfg.address.street}, ${cfg.address.town} ${cfg.address.postcode}</span>
    </div>
  </div>
  <header class="site-header">
    <div class="wrap">
      <a class="brand" href="/">
        <img class="brand-mark" src="/assets/img/logo-mark.svg" alt="" width="42" height="42">
        <span class="brand-name">${cfg.name}<small>${cfg.tagline}<span class="loc"> · Basildon</span></small></span>
      </a>
      <button class="nav-toggle" aria-expanded="false" aria-controls="site-nav"><span class="label">Menu</span></button>
      <nav class="nav" id="site-nav" aria-label="Main">
        ${links}
        <a class="btn btn-brass" href="/contact/">Book a free chat</a>
      </nav>
    </div>
  </header>`;
}

function footer(cfg) {
  const a = cfg.address;
  const services = cfg.services.map(s => `<li><a href="/services/${s.slug}/">${s.short}</a></li>`).join('\n            ');
  return `
  <footer class="site-footer">
    <div class="wrap">
      <div class="grid">
        <div>
          <a class="brand" href="/">
            <img class="brand-mark" src="/assets/img/logo-mark.svg" alt="" width="42" height="42">
            <span class="brand-name">${cfg.name}<small>${cfg.tagline}</small></span>
          </a>
          <address>
            ${a.building}<br>${a.street}<br>${a.town}, ${a.county}<br>${a.postcode}
          </address>
          <p class="mt-1"><a href="tel:${cfg.phoneIntl}">${cfg.phoneDisplay}</a><br><a href="mailto:${cfg.email}">${cfg.email}</a></p>
        </div>
        <div>
          <h4>Services</h4>
          <ul>
            ${services}
          </ul>
        </div>
        <div>
          <h4>Firm</h4>
          <ul>
            <li><a href="/about/">About the practice</a></li>
            <li><a href="/services/">All services</a></li>
            <li><a href="/contact/">Contact and directions</a></li>
            <li><a href="${cfg.gbpReviewUrl}" rel="noopener" target="_blank">Google reviews</a></li>
            <li><a href="/privacy-policy/">Privacy policy</a></li>
          </ul>
        </div>
        <div>
          <h4>Opening hours</h4>
          <ul>
            ${cfg.hours.map(([d, h]) => `<li>${d}: ${h}</li>`).join('\n            ')}
          </ul>
          <p class="small mt-1">Evening and weekend appointments by arrangement.</p>
        </div>
      </div>
      <div class="legal">
        <p>&copy; <span id="year">2026</span> ${cfg.legalName}. ${cfg.regulator}.</p>
        <p>Serving Basildon and businesses across Essex.</p>
      </div>
    </div>
  </footer>`;
}

function ctaBand(cfg) {
  return `
  <section class="cta-band">
    <div class="wrap">
      <div>
        <h2>Talk to an accountant, not a call centre</h2>
        <p>A free 30-minute conversation about where you are and what you need. No obligation, no jargon.</p>
      </div>
      <div class="btn-row mt-0">
        <a class="btn btn-light" href="/contact/">Get in touch</a>
        <a class="btn btn-ghost" style="color:#fff;border-color:#fff" href="tel:${cfg.phoneIntl}">Call ${cfg.phoneDisplay}</a>
      </div>
    </div>
  </section>`;
}

module.exports = function layout(page, cfg) {
  const canonical = `${cfg.siteUrl}${page.path === '/404.html' ? '/404.html' : page.path}`;
  const title = page.path === '/' ? `${cfg.legalName} | Accountants in Basildon, Essex` : `${page.title} | ${cfg.name}, Basildon`;
  return `<!DOCTYPE html>
<html lang="en-GB">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(page.description)}">
  <link rel="canonical" href="${canonical}">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(page.description)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:locale" content="en_GB">
  <meta name="theme-color" content="#182a44">
  <link rel="icon" href="/assets/img/favicon.svg" type="image/svg+xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Public+Sans:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/assets/css/style.css">
  ${page.noindex ? '<meta name="robots" content="noindex">' : ''}
  <script type="application/ld+json">${schema(cfg)}</script>
  ${page.extraSchema ? `<script type="application/ld+json">${JSON.stringify(page.extraSchema)}</script>` : ''}
</head>
<body>
${header(cfg, page.path)}
  <main id="main">
${page.body(cfg)}
  </main>
${page.noCta ? '' : ctaBand(cfg)}
${footer(cfg)}
  <script src="/assets/js/main.js" defer></script>
</body>
</html>
`;
};
