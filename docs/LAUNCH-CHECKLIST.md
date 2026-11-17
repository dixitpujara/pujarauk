# Launch checklist

Tick each line before DNS is switched. Evidence (screenshots or report files) goes in a dated folder outside the repository.

## Content and legal
- [ ] Every `[CONFIRM]`, `[PLACEHOLDER]` and `[LEGAL CHECK]` resolved (`docs/HANDOVER.md`); `grep -rn "PLACEHOLDER\|CONFIRM\|LEGAL CHECK" src` returns nothing except the comment in `types.ts`
- [ ] Legal MDX files set to `draft: false` with the review date in `updatedOn`
- [ ] `siteConfig.dates.contentReviewed` updated
- [ ] Real logo, favicon, OG image and photographs in place; `PhotoPlaceholder` no longer rendered
- [ ] Design tokens synced (`docs/DESIGN-TOKENS.md`) and `npm run test:a11y` still green (contrast)

## Infrastructure
- [ ] Separate hosting project from the India site; no shared env vars
- [ ] Environment variables set in production (see README)
- [ ] DNS: apex and `www` records live; `www` is canonical and apex redirects to it
- [ ] SSL issued; `curl -I https://www.pujaraandco.co.uk` shows HSTS, CSP, nosniff, Referrer-Policy, Permissions-Policy
- [ ] Mailbox `hello@pujaraandco.co.uk` receiving; SPF, DKIM (mailbox + Resend) and DMARC published; test email passes authentication (check headers)
- [ ] Resend domain verified; test enquiry delivers notification and auto-reply to the inbox (not junk)
- [ ] Rate limit tested: sixth submission within 10 minutes returns 429 with the friendly message

## Search
- [ ] Search Console property for `pujaraandco.co.uk` (domain property) verified via DNS TXT, separate from the India property
- [ ] Sitemap submitted: `https://www.pujaraandco.co.uk/sitemap.xml`
- [ ] `robots.txt` reachable and disallows `/api/` and `/contact/thank-you`
- [ ] Redirect test: each old URL in `redirects.ts` returns 308/301 to the intended page (run `e2e/seo.spec.ts` or spot-check with `curl -I`)
- [ ] Rich results test on Home (AccountingService, Person, FAQPage), a service page (Service, BreadcrumbList, FAQPage) and an article (Article)
- [ ] No link, hreflang or canonical pointing to pujaraandco.com (`e2e/seo.spec.ts` checks this)
- [ ] Open Graph preview checked for Home and one service page

## Privacy and tracking
- [ ] Cookie audit in a clean browser profile: no cookies set on any page before interacting with the booking widget; only `pc_analytics_optout` (if used) and `pc_enquiry_draft` in storage
- [ ] If analytics enabled: provider configured as processor, cookieless mode confirmed, opt-out on the Cookie Policy page works (script does not load after opting out)
- [ ] No advertising, remarketing or social pixels present (check the Network tab)
- [ ] Booking widget cookies listed in the Cookie Policy once the tool is confirmed

## Accessibility and performance
- [ ] `npm run test:a11y` passes on desktop and mobile projects (axe WCAG 2.2 AA, all pages)
- [ ] Keyboard-only pass by a person: skip link, header, mobile menu, FAQ, form errors, booking embed, footer
- [ ] 200% browser zoom on Home, a service page and Contact: no clipped content or horizontal scroll
- [ ] Screen reader spot check (VoiceOver or NVDA) on Home and Contact
- [ ] `npm run lighthouse` on the production URL: mobile LCP under 2.5s, INP under 200ms, CLS under 0.1 (build-time run: performance 98 to 100, LCP 0.9s, CLS 0)
- [ ] Accessibility Statement updated with the test date

## Analytics events (if enabled)
- [ ] `enquiry_submit`, `enquiry_success`, `enquiry_error`, `booking_open`, `phone_click`, `whatsapp_click`, `email_click` appear in the dashboard after a test session

## After launch
- [ ] Monitor Search Console coverage and 404s weekly for the first month; add redirects for any old URLs that appear
- [ ] Review tax figures after each UK Budget and Indian Finance Act; update `reviewedOn` dates
- [ ] Monthly `npm audit` and dependency review
