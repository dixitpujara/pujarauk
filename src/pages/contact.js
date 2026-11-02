module.exports = {
  path: '/contact/',
  title: 'Contact and directions',
  description: 'Contact Pujara and Co chartered accountants at Trafford House, 125 Cherrydown East, Basildon SS16 5GL. Call 07887 179840 or send an enquiry. Open Monday to Saturday 9am to 5pm.',
  noCta: true,
  body: (cfg) => {
    const a = cfg.address;
    const mapQuery = encodeURIComponent(`${a.building}, ${a.street}, ${a.town} ${a.postcode}`);
    return `
    <section class="page-head">
      <div class="wrap">
        <nav class="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>Contact</span></nav>
        <h1>Get in touch.</h1>
        <p class="lead">Call, email, or use the form. Tell us roughly what you need and we will come back to you within one working day, usually sooner. The first meeting is free and there is no pressure to sign anything.</p>
      </div>
    </section>

    <section class="section">
      <div class="wrap cols-sidebar">
        <div>
          <h2>Send an enquiry</h2>
          <form id="contact-form" class="form" method="post" action="${cfg.formEndpoint}" data-endpoint="${cfg.formEndpoint}" data-fallback-email="${cfg.email}" novalidate>
            <div class="form-row">
              <div>
                <label for="name">Your name <span class="req" aria-hidden="true">*</span></label>
                <input id="name" name="name" type="text" autocomplete="name" required>
              </div>
              <div>
                <label for="phone">Phone number</label>
                <input id="phone" name="phone" type="tel" autocomplete="tel" inputmode="tel">
              </div>
            </div>
            <div>
              <label for="email">Email address <span class="req" aria-hidden="true">*</span></label>
              <input id="email" name="email" type="email" autocomplete="email" required>
            </div>
            <div>
              <label for="topic">What is it about?</label>
              <select id="topic" name="topic">
                <option>I am looking for a new accountant</option>
                <option>Self Assessment tax return</option>
                <option>Limited company accounts and tax</option>
                <option>VAT or Making Tax Digital</option>
                <option>Bookkeeping or payroll</option>
                <option>Starting a new business</option>
                <option>Something else</option>
              </select>
            </div>
            <div>
              <label for="message">Tell us a bit about your situation <span class="req" aria-hidden="true">*</span></label>
              <textarea id="message" name="message" required placeholder="For example: sole trader electrician, VAT registered, turnover around £90k, current accountant has stopped replying."></textarea>
            </div>
            <div class="hp" aria-hidden="true">
              <label for="website">Leave this field empty</label>
              <input id="website" name="website" type="text" tabindex="-1" autocomplete="off">
            </div>
            <p class="form-note">We only use these details to reply to you. See our <a href="/privacy-policy/">privacy policy</a>.</p>
            <div>
              <button class="btn btn-brass" type="submit">Send enquiry</button>
            </div>
            <div id="form-status" class="form-status" role="status" aria-live="polite"></div>
          </form>
        </div>
        <div>
          <div class="contact-block">
            <h3>The office</h3>
            <address>
              <strong>${cfg.legalName}</strong><br>
              ${a.building}<br>${a.street}<br>${a.town}, ${a.county}<br>${a.postcode}
            </address>
            <dl class="mt-1">
              <dt>Phone</dt><dd><a href="tel:${cfg.phoneIntl}">${cfg.phoneDisplay}</a></dd>
              <dt>Email</dt><dd><a href="mailto:${cfg.email}">${cfg.email}</a></dd>
              <dt>Hours</dt><dd>Monday to Saturday<br>9:00am to 5:00pm<br><span class="muted">Sunday closed</span></dd>
            </dl>
          </div>
          <div class="contact-block mt-1">
            <h3>Finding us</h3>
            <p class="small">Trafford House is on Cherrydown East, just off the A1321 and a few minutes' walk from Basildon railway station. There is visitor parking on site. If you are coming by train, leave the station towards the town centre and Cherrydown East is on your left.</p>
            <p class="small mb-0">[PLACEHOLDER — confirm parking arrangements, floor or suite number, and whether there is step-free access.]</p>
          </div>
        </div>
      </div>
      <div class="wrap">
        <iframe class="map" title="Map showing Trafford House, Cherrydown East, Basildon" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=${mapQuery}&output=embed"></iframe>
      </div>
    </section>`;
  }
};
