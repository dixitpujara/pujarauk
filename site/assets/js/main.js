(function () {
  'use strict';

  // Mobile navigation
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.querySelector('.label').textContent = open ? 'Close' : 'Menu';
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.querySelector('.label').textContent = 'Menu';
        toggle.focus();
      }
    });
  }

  // Contact form: posts to the endpoint in data-endpoint, falls back to a mailto link
  var form = document.getElementById('contact-form');
  if (form) {
    var status = document.getElementById('form-status');
    form.addEventListener('submit', function (e) {
      var endpoint = form.getAttribute('data-endpoint') || '';
      if (!endpoint || endpoint.indexOf('REPLACE') !== -1) {
        // No endpoint configured yet: open the visitor's mail client instead.
        e.preventDefault();
        var data = new FormData(form);
        var body = 'Name: ' + data.get('name') + '\n' +
                   'Phone: ' + data.get('phone') + '\n' +
                   'Email: ' + data.get('email') + '\n' +
                   'Enquiry about: ' + data.get('topic') + '\n\n' +
                   data.get('message');
        var to = form.getAttribute('data-fallback-email') || '';
        window.location.href = 'mailto:' + to +
          '?subject=' + encodeURIComponent('Website enquiry from ' + data.get('name')) +
          '&body=' + encodeURIComponent(body);
        return;
      }
      if (!window.fetch) { return; } // plain POST
      e.preventDefault();
      if (form.querySelector('[name="website"]').value) { return; } // honeypot
      var btn = form.querySelector('button[type="submit"]');
      btn.disabled = true; btn.textContent = 'Sending…';
      status.className = 'form-status';
      fetch(endpoint, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form)
      }).then(function (r) {
        if (!r.ok) { throw new Error('Request failed'); }
        form.reset();
        status.textContent = 'Thank you. Your message has been sent and we will reply within one working day.';
        status.className = 'form-status ok';
      }).catch(function () {
        status.textContent = 'Sorry, the message did not send. Please call us on 07887 179840 or email instead.';
        status.className = 'form-status err';
      }).finally(function () {
        btn.disabled = false; btn.textContent = 'Send enquiry';
      });
    });
  }

  // Current year in footer
  var y = document.getElementById('year');
  if (y) { y.textContent = new Date().getFullYear(); }
})();
