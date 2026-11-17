# Pujara & Co — UK and Europe website (pujaraandco.co.uk)

Standalone, UK-focused Next.js site for Pujara & Co, Chartered Accountants (India). Built to the Master Prompt v2 brief (17 November 2026). Fresh build: the old .co.uk site has been offline for about six months.

**Status: build-complete, not launch-ready.** Open `[CONFIRM]`, `[PLACEHOLDER]` and `[LEGAL CHECK]` items are listed in `docs/HANDOVER.md`. Nothing fictional ships: every gap is visible on the page as a placeholder until it is resolved.

## Stack

- Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4
- MDX for long-form content (Insights, legal pages) via `@next/mdx`
- Typed TypeScript content modules for structured copy (services, audiences, page sections)
- Resend for enquiry email delivery, Zod for validation
- Playwright + axe-core for accessibility and behaviour tests, Lighthouse for Core Web Vitals
- Deployed as its own project and repository. It shares no runtime config, analytics, Search Console property, sitemap or inbox with pujaraandco.com, and never links to it.

## Where things live

| Path | What |
| --- | --- |
| `src/config/site.ts` | **Single typed config** for brand, legal identity, address, phones, email, principal, booking, areaServed, dates. Footer, Contact, legal pages and JSON-LD all read from here. If a UK entity is formed later, edit this file and the legal MDX only. |
| `src/styles/tokens.css` | **Design tokens** (colours, type scale, radii, shadows). Every value marked `SYNC` must be replaced from the pujaraandco.com codebase. See `docs/DESIGN-TOKENS.md`. |
| `src/content/services.ts` | Eight service pages (who for, included, not included, process, client provides, FAQ, CTA, meta). |
| `src/content/audiences.ts` | Four audiences for Who we help. Set `confirmed: false` to hide one. |
| `src/content/pages.ts` | Home, Services hub, Who we help, How we work, About, Clients in Europe, Pricing, Contact copy. |
| `src/content/insights/*.mdx` | Articles. First line `export const meta = {...}` (title, metaTitle, description, author, publishedOn, reviewedOn, tags, sources). |
| `src/content/legal/*.mdx` | Privacy Notice, Cookie Policy, Terms of Use, Complaints Procedure, Accessibility Statement. All `draft: true` until reviewed. |
| `src/app/` | Routes. `api/enquiry/route.ts` is the form endpoint. `sitemap.ts`, `robots.ts`, `opengraph-image.tsx`, `icon.tsx` generate SEO assets. |
| `src/components/` | Header, Footer, EnquiryForm, BookingEmbed, Analytics, FaqList, JsonLd, etc. |
| `src/lib/` | `seo.ts` (metadata builder), `schema.ts` (JSON-LD), `enquiry-schema.ts` (Zod, shared client/server), `rate-limit.ts`, `analytics.ts`, `content.ts` (MDX loaders). |
| `redirects.ts` | 301 map from old .co.uk URLs. Verify against Search Console and the Wayback Machine before launch. |
| `next.config.ts` | Security headers (CSP, HSTS, nosniff, Referrer-Policy, Permissions-Policy), MDX, redirects. |
| `e2e/` | Playwright tests: axe WCAG 2.2 AA on every page (desktop + mobile), SEO rules, form behaviour, keyboard operation, 320px layout, redirects, headers. |
| `scripts/lighthouse.mjs` | Lighthouse mobile run for four representative pages. |
| `scripts/seo-pack.mjs` | Regenerates the title/description/schema table in `docs/SEO-PACK.md`. |
| `docs/` | Handover, launch checklist, SEO pack, design tokens, sitemap and wireframe outline. |

## Setup

```bash
npm install
cp .env.example .env.local   # fill in values
npm run dev                  # http://localhost:3000
```

Node 20.9 or later.

## Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | yes (prod) | Public origin for canonicals, sitemap, OG and JSON-LD. Defaults to `https://www.pujaraandco.co.uk`. |
| `RESEND_API_KEY` | yes (prod) | Enquiry delivery. Without it the API returns 503 and the form shows the email/phone fallback. |
| `ENQUIRY_FROM` | yes (prod) | Verified sender, e.g. `Pujara & Co <no-reply@pujaraandco.co.uk>`. |
| `ENQUIRY_TO` | yes (prod) | Firm inbox that receives enquiries. Defaults to the config email. |
| `ENQUIRY_REPLY_TO` | no | Reply-to on the auto-reply. |
| `ENQUIRY_RATE_LIMIT`, `ENQUIRY_RATE_WINDOW_SECONDS` | no | Spam brake. Default 5 per 10 minutes per IP. In-memory per instance; swap `src/lib/rate-limit.ts` for Upstash/Vercel KV if a durable limit is needed. |
| `NEXT_PUBLIC_ANALYTICS_HOST`, `NEXT_PUBLIC_ANALYTICS_DOMAIN` | no | Cookieless Plausible-compatible analytics. Leave unset to run with no analytics at all. Both are also used to extend the CSP. |
| `NEXT_PUBLIC_BOOKING_URL` | no | Booking page URL (Cal.com or Calendly). Unset shows the "book by email" fallback. The origin is added to the CSP `frame-src`. |

Secrets live only in environment variables. Nothing is logged except event names and a non-personal error summary.

## Scripts

```bash
npm run dev          # development server
npm run build        # production build (also type-checks)
npm run start        # serve the build
npm run typecheck    # tsc --noEmit
npm run lint         # eslint
npm run test:a11y    # Playwright + axe (starts the built site if not running)
npm run lighthouse   # Lighthouse mobile reports to lighthouse-reports/
npm run check        # typecheck + lint + build
```

To run the test suite against a running server (recommended, with the rate limit raised so the form tests do not trip it):

```bash
npm run build
ENQUIRY_RATE_LIMIT=1000 npm run start
```

```bash
E2E_BASE_URL=http://127.0.0.1:3000 npx playwright test --config e2e/playwright.config.ts --trace off
```

```bash
node scripts/lighthouse.mjs
```

## Fonts and the logo

The brief requires the India site's typography and logo. They were not available in the build environment, so:

- `src/components/Logo.tsx` renders a placeholder wordmark. Replace it with the real SVG (keep the same height).
- Fonts fall back to the system stack. Load the brand fonts with `next/font` in `src/app/layout.tsx` and set `--font-brand-sans` / `--font-brand-display` on `<html>` (instructions are in the file). Do not load fonts from Google Fonts at runtime: self-host through `next/font` so no third-party request is made and the CSP `font-src 'self'` holds.

## Content editing (non-developer)

- Articles: add a file to `src/content/insights/` with the `meta` export on line one and markdown underneath. No raw HTML, no curly braces in the text.
- Legal pages: edit the MDX in `src/content/legal/`. Set `draft: false` once reviewed and update `updatedOn`.
- Services and page copy: edit the TypeScript objects in `src/content/`. They are plain strings; the build fails if a required field is missing.
- Firm details: `src/config/site.ts` only.

## Deployment

Any Node host works; Vercel is the assumed target (`[CONFIRM]`). Create a **separate** project from the India site.

1. Import the repository, framework preset Next.js, root `/`.
2. Set the environment variables above for Production (and Preview if wanted).
3. Add the domain `pujaraandco.co.uk` and `www.pujaraandco.co.uk`. Choose the `www` host as canonical (the config assumes `https://www.pujaraandco.co.uk`); the host redirects the apex to it.
4. DNS at the registrar:
   - `A @ 76.76.21.21` (Vercel apex) or the host's current apex target
   - `CNAME www cname.vercel-dns.com`
   - Email records below.
5. SSL is issued automatically once DNS resolves. HSTS is already sent with `preload`; only submit to the preload list once you are sure the apex and all subdomains will stay HTTPS.

### Email for the .co.uk mailbox and transactional sending

Mailbox provider `[CONFIRM: e.g. Google Workspace or Microsoft 365]`. Records to add:

| Record | Purpose |
| --- | --- |
| `MX` as supplied by the mailbox provider | receive mail at `hello@pujaraandco.co.uk` |
| `TXT @ v=spf1 include:<mailbox provider SPF> include:amazonses.com ~all` | SPF. Resend sends through Amazon SES; use the exact include the Resend dashboard shows for your domain. |
| DKIM `CNAME`/`TXT` records from the mailbox provider **and** from Resend (`resend._domainkey` style) | DKIM signing for both senders |
| `TXT _dmarc v=DMARC1; p=quarantine; rua=mailto:dmarc@pujaraandco.co.uk; adkim=s; aspf=r` | DMARC. Start with `p=none` for two weeks, review reports, then move to `quarantine`. |
| Optional `TXT` for Resend "Return-Path" / custom MAIL FROM | alignment of the bounce domain |

Verify the domain inside Resend before launch, then send a test enquiry and check the notification and the auto-reply land in the inbox, not junk.

## Security notes

- CSP keeps `script-src 'unsafe-inline'` because statically generated Next.js pages carry inline hydration scripts. A stricter nonce-based CSP needs a `proxy.ts` that renders every page dynamically; a reasonable upgrade later.
- Form: server-side Zod validation, honeypot, minimum fill time, per-IP rate limit, same-origin check, HTML escaping before email, no sensitive data accepted (pattern check for NI numbers and long account strings).
- Dependencies: run `npm audit` and `npm outdated` monthly. Pin versions in `package.json` as they are now.
