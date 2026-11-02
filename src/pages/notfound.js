module.exports = {
  path: '/404.html',
  title: 'Page not found',
  description: 'The page you were looking for is not here.',
  noindex: true,
  noCta: true,
  body: (cfg) => `
    <section class="section">
      <div class="wrap narrow">
        <span class="eyebrow">Error 404</span>
        <h1>That page is not here.</h1>
        <p class="lead">It may have moved, or the link may have a typo in it. Try one of these instead, or ring us on <a href="tel:${cfg.phoneIntl}">${cfg.phoneDisplay}</a>.</p>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/services/">Services</a></li>
          <li><a href="/about/">About the practice</a></li>
          <li><a href="/contact/">Contact</a></li>
        </ul>
      </div>
    </section>`
};
