# Handover notes: pujaraandco.co.uk

Build date: 17 November 2026. Everything below must be resolved before go-live. The three required lists are at the end: placeholders, assumptions, and sign-off items.

## 0. Blockers found during the build (read first)

1. **India design tokens could not be pulled.** pujaraandco.com, its Vercel preview and the India repository were unreachable from the build environment (network policy). Only navy `#1a2744` is confirmed. Every other colour, font, radius and the logo are provisional and marked `SYNC` in `src/styles/tokens.css`. Sync steps: `docs/DESIGN-TOKENS.md`.
2. **Old .co.uk URLs could not be verified.** Wayback Machine and Search Console were not reachable. `redirects.ts` starts from the previous static build in this repository's git history (commit `19cfd0f`) plus common patterns. Check Search Console > Pages and `web.archive.org/web/*/pujaraandco.co.uk*` and add any URL with traffic or backlinks.
3. **The previous build in this repository was for a different premise.** Commit `19cfd0f` (2 November 2026) described "Pujara and Co Chartered Accountants, Basildon" with a UK address and UK phone. The current brief says no UK office or company exists, so that content was not reused. If a UK trading address genuinely exists, the brief and `src/config/site.ts` need updating, and the "no UK office" statements on Home, About, Contact and the footer must change.

## 1. Open `[CONFIRM]` items for Mitul Pujara

| # | Item | Where it lands | Default used until answered |
| --- | --- | --- | --- |
| C1 | UK contact number (virtual number recommended) | `siteConfig.contact.ukPhone` | Hidden; India number shown in header, mobile bar and footer |
| C2 | Mailbox on the .co.uk domain | `siteConfig.contact.email` | `hello@pujaraandco.co.uk`, unverified |
| C3 | Link the Google Business Profile (Ahmedabad listing)? | `siteConfig.contact.googleBusinessProfile.link` | Not linked (it would tie the two sites together) |
| C4 | No UK entity; all work contracted and invoiced by the India firm | footer, Terms | Assumed true |
| C5 | Back-office role only: no HMRC agent registration, no AML supervision claimed | all service copy, footer statement | Assumed true; wording is "we prepare, you submit" throughout |
| C6 | Countries served beyond the UK | `siteConfig.areaServed` | UK confirmed; Ireland, Germany, Netherlands shown with a visible `[CONFIRM]` on Clients in Europe |
| C7 | Which of the four audiences to keep | `src/content/audiences.ts` (`confirmed`) | All four kept |
| C8 | Booking tool (Cal.com / Calendly) and UK-time slot setup | `NEXT_PUBLIC_BOOKING_URL` | Fallback "book by email" block shown |
| C9 | Pricing: packages or request-a-quote | `pricing.mode` in `src/content/pages.ts` | `quote`; three placeholder packages ready to switch on |
| C10 | Whether UK VAT applies to fees | Terms, Pricing | Shown as `[CONFIRM]`; expected not, as an overseas supplier |
| C11 | Professional indemnity insurer, territory (UK/EU clients) and limit | `siteConfig.provider.professionalIndemnity`, Terms | Placeholder |
| C12 | ICO data protection fee status and number | `siteConfig.provider.ico`, Privacy Notice | Placeholder |
| C13 | Article 27 UK and EU representatives: appointed or exempt | `siteConfig.provider.representatives`, Privacy Notice | Placeholder blocks |
| C14 | Hosting (Vercel assumed) and email delivery (Resend assumed) | Privacy Notice processors | Named as assumptions |
| C15 | Secure document portal name | How we work | Placeholder |
| C16 | Turnaround commitments per service | `services.ts`, `pages.ts` | "[PLACEHOLDER: e.g. 5 UK working days]" patterns |
| C17 | Founding year, years in practice, team members' names, qualifications, bios, photos | Home credentials, About | Placeholders |
| C18 | EUR invoicing for European clients | Clients in Europe | `[CONFIRM]` |
| C19 | Marketing opt-in handling (which tool stores consent, unsubscribe route) | form, Privacy Notice | Opt-in captured in the notification email only |

## 2. `[LEGAL CHECK]` items for a UK-qualified adviser

| # | Item |
| --- | --- |
| L1 | HMRC mandatory tax adviser registration (from 18 May 2026, overseas route via the agent services account): does any planned activity count as interacting with HMRC on a client's behalf? Current copy avoids it entirely. |
| L2 | UK Money Laundering Regulations: is an India-only firm serving UK clients "carrying on business in the UK" and therefore required to be supervised by HMRC or a professional body? |
| L3 | Use of "Chartered Accountants (India)" and "FCA (ICAI)" in the UK under ICAEW's Use of Description rules and the Companies Act restrictions on "chartered". ICAEW's helpsheet asks overseas-qualified members to state the country of qualification in full; the site does this everywhere. |
| L4 | Privacy Notice: lawful bases, retention periods (12 months enquiries, 6 years client records), international transfer mechanism (UK IDTA/Addendum and EU SCCs) and transfer risk assessment, Article 27 representatives. |
| L5 | Cookie Policy: reliance on the statistical-purposes exception under PECR as amended by the Data (Use and Access) Act 2025 for cookieless analytics; booking widget disclosure. |
| L6 | Terms of Use and Terms of Business summary: governing law (England and Wales proposed), liability wording, consumer rights, PI cover statement. |
| L7 | Complaints Procedure: statement that no UK ombudsman scheme applies; ICAI grievance route. |
| L8 | Required business information under the E-Commerce Regulations 2002 and the Provision of Services Regulations 2009 (name, legal form, address, email, professional body and rules, PI cover, VAT position). Footer and Contact carry these. |
| L9 | Accessibility Statement wording (Equality Act 2010; European Accessibility Act note). |
| L10 | Marketing claims: all copy is factual; no statistics, testimonials or awards. If testimonials or client names are added later, check against the ICAI Code of Ethics (13th edition, effective 1 April 2026) and the UK fake-reviews rules. |
| L11 | Tax content accuracy: MTD for Income Tax thresholds (£50,000 from 6 April 2026, £30,000 from April 2027, £20,000 from April 2028), VAT registration threshold £90,000, India property sale and repatriation article (TDS rates, indexation changes, RBI USD 1 million limit, UK four-year FIG regime). |

## 3. Every placeholder (generated)

Regenerate with:

```bash
grep -rnoE "\[(PLACEHOLDER|CONFIRM|LEGAL CHECK)[^]]*\]" src redirects.ts
```

Grouped summary (97 markers at build time):

- **Identity and contact (config/site.ts):** UK phone, mailbox, booking tool, PI insurance, ICO number, Article 27 representatives, Google Business Profile link, countries served, principal photo.
- **Imagery:** principal photo (Home, About), team photos, real logo, favicon, Open Graph image. Visible dashed placeholder blocks render in place of photos. No stock imagery anywhere.
- **Numbers and commitments (content/services.ts, content/pages.ts):** turnaround times (7), Self Assessment records cut-off date, Indian incorporation time, TDS rate for non-resident sellers, founding year, years in practice, notice period, package prices (3), UK VAT position (4).
- **People (content/pages.ts):** two team members (name, qualification, bio), one principal background sentence.
- **Legal MDX:** UK/EU representative blocks, ICO number, hosting/email/booking processors, transfer mechanism, retention, governing law, PI cover, ICAI complaint route, accessibility test date and booking tool accessibility.
- **Insights:** TDS rate and surcharge, indexation rules, Indian return due date, UK four-year regime details.
- **Redirects:** verify the old URL list.

## 4. Assumptions made

1. No UK entity, office, registration or supervision exists; the India firm contracts and invoices all work.
2. The firm does not interact with HMRC or Companies House on clients' behalf; the UK accountant or client reviews and submits. All eight service pages, the footer and the FAQs say this.
3. The two India-side services (India tax for UK/EU residents, India entry and subsidiary compliance) are delivered directly by the firm as an ICAI-registered practice, so "we file Indian returns" wording is used there only.
4. UK first, Europe mentioned: English only, GBP, one Clients in Europe page, no translated pages or EUR pricing.
5. All four candidate audiences kept.
6. Stack: Next.js 16 App Router, TypeScript, Tailwind v4, MDX; Vercel hosting; Resend email; Plausible-compatible cookieless analytics (off until configured); Cal.com-style booking embed (off until configured).
7. Working hours stated as Monday to Friday, 9:00am to 5:30pm UK time, and a response commitment of one UK working day.
8. Retention: 12 months for enquiries without engagement, 6 years for client records after the engagement ends.
9. The Google Business Profile is not linked and the site does not claim any UK address.
10. The `www` host is canonical.
11. Tax facts used: MTD ITSA thresholds and dates as in the brief, VAT registration threshold £90,000, HMRC tax adviser registration from 18 May 2026, ICAI Code of Ethics 13th edition from 1 April 2026, Data (Use and Access) Act 2025 amendments to PECR, European Accessibility Act from 28 June 2025. Verified against secondary sources on 17 November 2026; GOV.UK primary pages could not be opened from the build environment.
12. No testimonials, statistics, awards, client names or logos anywhere.

## 5. Sign-off list before going live

| Item | Owner |
| --- | --- |
| All `[CONFIRM]` answers applied (section 1) | Mitul Pujara |
| All `[LEGAL CHECK]` items reviewed and legal MDX `draft: false` | UK-qualified adviser |
| Design tokens, fonts and logo synced from pujaraandco.com | Developer |
| Real photographs supplied and placeholders removed | Mitul Pujara |
| Redirect list verified against Search Console and Wayback | Developer |
| Tax figures in services, FAQs and Insights re-checked against GOV.UK and the Indian Income Tax Department on the publish date | Principal |
| Professional description wording ("Chartered Accountants (India)", "FCA (ICAI)") confirmed acceptable | Adviser |
| Marketing copy reviewed against CAP Code and ICAI Code of Ethics | Principal |
| Launch checklist completed (`docs/LAUNCH-CHECKLIST.md`) | Developer |
