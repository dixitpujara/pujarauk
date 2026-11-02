# Pujara and Co Chartered Accountants — website

Static marketing site for PUJARA AND CO Chartered Accountants, Trafford House, 125 Cherrydown East, Basildon SS16 5GL.

No framework, no build dependencies beyond Node. The deployable site is the `site/` folder; upload its contents to any static host or the web root of a cPanel/Plesk account.

## Structure

```
src/config.js          Business details, services, nav, areas (single source of truth)
src/partials/layout.js Shared head, header, footer, CTA band, LocalBusiness schema
src/pages/*.js         One module per page (service pages are an array)
src/build.js           Generator: node src/build.js  ->  writes site/
site/                  Deployable output (committed so hosting needs no build step)
```

Edit copy in `src/pages`, details in `src/config.js`, then run:

```bash
node src/build.js
```

Preview locally:

```bash
python3 -m http.server 8000 --directory site
```

## Pages

Home, About, Services overview, seven service pages (annual accounts, Self Assessment, corporation tax, VAT and MTD, bookkeeping, payroll, company formation), Contact, Privacy policy, 404. Plus `sitemap.xml` and `robots.txt`.

Each service page carries FAQ schema; every page carries `AccountingService` LocalBusiness schema with NAP matching the Google Business Profile.

## Before go-live: placeholders to replace

Search the `src/` folder for `PLACEHOLDER` and `TODO`. In order of importance:

1. **Reviews** — `src/pages/home.js` has three review cards with placeholder text. Paste real Google review wording with the reviewer's first name. Do not publish invented reviews.
2. **About page** — the firm's history, the principal's name, qualification (ACA/FCA/ACCA/FCCA) and bio, any team members, and a photo.
3. **Regulator** — `src/config.js` `regulator`: confirm ICAEW or ACCA and the firm number. Chartered status should be verifiable from the footer.
4. **Email address** — `src/config.js` `email`. Currently `info@pujaraandco.co.uk`, unconfirmed.
5. **Domain** — `src/config.js` `siteUrl`. Used for canonical URLs, sitemap and schema.
6. **Contact form endpoint** — `src/config.js` `formEndpoint`. Create a free Formspree form (or similar) and paste the endpoint URL. Until it is set, the form falls back to opening the visitor's email client with the message pre-filled, so nothing is lost.
7. **Fees** — `src/pages/services.js` has an optional "from £X per month" block. Publishing starting prices improves enquiry rates; delete the block if the firm prefers not to.
8. **Directions** — `src/pages/contact.js`: confirm parking, suite number and step-free access.
9. **Privacy policy** — form provider name and last-updated date.
10. **Company number** — only if the practice trades as a limited company.

## Tax figures to check annually

The service pages quote current UK thresholds: VAT registration £90,000; corporation tax 19%/25% with marginal relief between £50,000 and £250,000; Employment Allowance £10,500; Companies House incorporation fee £50; Making Tax Digital for Income Tax from April 2026 (£50k), 2027 (£30k), 2028 (£20k). Review after each Budget.

## Fonts

Fraunces and Public Sans load from Google Fonts with system fallbacks. To self-host, download both families, place them in `site/assets/fonts/`, and replace the `<link>` tags in `src/partials/layout.js` with `@font-face` rules in `style.css`.

## Deployment notes

- Any static host works: Netlify, Cloudflare Pages, GitHub Pages, or a standard LAMP server.
- Configure the host to serve `404.html` for missing pages (`.htaccess`: `ErrorDocument 404 /404.html`).
- Point the Google Business Profile website field to the live URL once deployed.
- If the site is later moved into WordPress, `style.css` and the page markup can be lifted directly into a block theme or a classic theme's templates.
