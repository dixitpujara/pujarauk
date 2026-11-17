# Sitemap and wireframe outline

Submitted for approval alongside the build (brief, section 13 step 2). Layouts are described top to bottom. Every page has the sticky header (logo, nav, phone, "Book a consultation"), the footer with required business information, and on mobile a fixed call/WhatsApp bar.

## Sitemap

```
/                                   Home
/services                           Services hub (three groups)
/services/outsourced-bookkeeping-for-accountancy-practices
/services/year-end-accounts-preparation
/services/vat-return-preparation-and-making-tax-digital
/services/payroll-processing-support
/services/management-accounts-and-reporting
/services/self-assessment-preparation-support
/services/india-tax-for-uk-and-european-residents
/services/india-entry-and-subsidiary-compliance
/who-we-help                        One section per confirmed audience (anchors)
/how-we-work                        Seven sections + FAQ
/about                              Practice, principal, team, values
/clients-in-europe                  Offered / not offered, practicalities, FAQ
/pricing                            Request a quote (packages layout ready)
/insights                           Article index
/insights/[slug]                    Article (author, published, reviewed, sources, disclaimer)
/contact                            Booking embed, enquiry form, provider details
/contact/thank-you                  Form success (noindex)
/legal/privacy-notice
/legal/cookie-policy                Includes analytics opt-out control
/legal/terms-of-use                 Includes Terms of Business summary
/legal/complaints-procedure
/legal/accessibility-statement
/404                                Custom not-found
/sitemap.xml, /robots.txt, /opengraph-image, /icon
/api/enquiry                        POST only
```

## Wireframe outline

**Home**: hero (eyebrow, H1 naming who is helped and how, lead, primary CTA "Book a free consultation", secondary "Send an enquiry", response-time line, photo placeholder) → services overview (8 cards) → who we work with (4 cards) → how it works (3 numbered steps) → credentials strip (4 confirmed facts) → principal introduction (photo + 3 paragraphs + link) → FAQ (6, native disclosure) → closing CTA band.

**Services hub**: page hero with breadcrumbs → three grouped card sections (practices / businesses and individuals / India-side) → CTA band.

**Service page**: hero (eyebrow = service name, H1, intro, two CTAs) → "Is this for you?" (2-column bullets) → included / not included (two columns) → how it works (4–5 numbered steps) → what you provide → FAQ with "written for" audience links → related services → CTA band.

**Who we help**: hero with anchor pills → per audience: heading, intro, services list | pain points card + how we help card.

**How we work**: hero with team location sentence and anchor pills → sticky section index (desktop) + seven prose sections → FAQ → CTA.

**About**: hero → the practice (with legal name, form and address) → principal (photo placeholder, credentials, paragraphs) → team cards → values → CTA.

**Clients in Europe**: hero → offered / not offered cards → practicalities with country chips → FAQ → CTA.

**Pricing**: hero with "Request a quote" → (packages grid when enabled) → how we quote (3 steps) → what affects price → FAQ → CTA.

**Insights index**: hero → article cards (tags, title, description, author, date, reading time).

**Article**: hero with title, description, author/published/reviewed/reading time → prose body → sources → disclaimer → CTA.

**Contact**: hero → left: booking section (consent-gated embed with loading/empty/error states), enquiry form (sensitive-data notice, fields, privacy checkbox, unticked marketing opt-in, error summary with links, inline errors, loading state) | right sticky: provider details, phones, WhatsApp, email, hours, response time, professional body, principal.

**Legal**: hero with last-updated and draft flag → prose → (cookie policy: opt-out control) → provider line.

**404**: heading, two CTAs, service links.
