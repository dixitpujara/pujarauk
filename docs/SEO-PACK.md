# SEO pack

Generated from the production build on 17 November 2026 (`node scripts/seo-pack.mjs`). Titles are under 60 characters and descriptions under 155 (verified by `e2e/seo.spec.ts`). Every page has one H1, a self-referencing canonical on `https://www.pujaraandco.co.uk`, `lang="en-GB"`, Open Graph tags and a generated OG image.

## Intent targets

| Page | Primary intent |
| --- | --- |
| /services/outsourced-bookkeeping-for-accountancy-practices | outsourced bookkeeping for UK accountants |
| /services/year-end-accounts-preparation | outsourced year-end accounts preparation for UK practices |
| /services/vat-return-preparation-and-making-tax-digital | VAT return preparation, Making Tax Digital record-keeping |
| /services/payroll-processing-support | outsourced payroll processing for UK accountants |
| /services/management-accounts-and-reporting | outsourced management accounts preparation |
| /services/self-assessment-preparation-support | Self Assessment preparation support for practices |
| /services/india-tax-for-uk-and-european-residents | India tax adviser for UK residents, NRI tax return UK |
| /services/india-entry-and-subsidiary-compliance | Indian subsidiary compliance for UK companies |
| /insights/selling-property-in-india-from-the-uk-tax-and-repatriation | selling property in India from the UK tax |
| /insights/making-tax-digital-for-income-tax-what-changes-from-april-2026 | MTD for Income Tax April 2026 thresholds |

No city doorway pages, no keyword stuffing, no hreflang or links to the India domain.

## Structured data

- Site-wide (layout): `AccountingService` with the true Ahmedabad address, `areaServed` = confirmed countries, `memberOf` ICAI, firm registration identifier; `Person` for Mitul Pujara (`honorificSuffix` "FCA (ICAI)"); `WebSite`.
- Service pages: `Service` (provider = organisation, areaServed), `BreadcrumbList`, `FAQPage` (visible questions only).
- Insights: `Article` (author Person, datePublished, dateModified = review date), `BreadcrumbList`.
- Contact: `ContactPage`.
- No `LocalBusiness` with a UK address, because none exists. No `AggregateRating`.

## Redirects

See `redirects.ts`. Old URLs from the previous static build map to the closest new page; both bare and trailing-slash forms resolve (Next.js normalises the slash first, then applies the redirect). Verify against Search Console and the Wayback Machine before launch.

## Page inventory

| URL | Title (chars) | Meta description (chars) | H1 | JSON-LD |
| --- | --- | --- | --- | --- |
| / | Accounts and India tax support for UK clients | Pujara & Co (59) | Outsourced bookkeeping, accounts, VAT and payroll preparation for UK practices and businesses, plus India tax support for UK and European residents. (148) | Accurate books, on-time accounts and India tax support for UK practices, businesses and individuals | AccountingService, Person, WebSite, FAQPage |
| /services | Accounting services for UK clients | Pujara & Co (48) | Outsourced bookkeeping, year-end accounts, VAT, payroll, management accounts and Self Assessment preparation, plus India tax and subsidiary compliance. (151) | Services | AccountingService, Person, WebSite, BreadcrumbList |
| /who-we-help | Who we help | Pujara & Co (25) | UK accountancy practices, small businesses, contractors and landlords, UK and European residents with India tax matters, and Indian subsidiaries. (145) | Who we help | AccountingService, Person, WebSite, BreadcrumbList |
| /how-we-work | How we work | Pujara & Co (25) | Onboarding, secure document exchange, software, turnaround times, review process, UK communication hours, confidentiality and data security. (140) | How we work | AccountingService, Person, WebSite, BreadcrumbList, FAQPage |
| /about | About Pujara & Co | Pujara & Co (31) | A founder-led firm of Chartered Accountants (India), registered with ICAI, serving UK and European clients remotely from Ahmedabad in UK working hours. (151) | About Pujara & Co | AccountingService, Person, WebSite, BreadcrumbList |
| /clients-in-europe | Clients in Europe | Pujara & Co (31) | What Pujara & Co offers clients outside the UK: India tax and subsidiary services for European residents and companies, and what we do not cover. (145) | Clients in Europe | AccountingService, Person, WebSite, BreadcrumbList, FAQPage |
| /pricing | Pricing | Pujara & Co (21) | Fixed fees in GBP agreed in writing before work starts. Request a quote for bookkeeping, accounts, VAT, payroll, management accounts or India tax support. (154) | Pricing | AccountingService, Person, WebSite, BreadcrumbList, FAQPage |
| /insights | Insights for UK practices, businesses and NRIs | Pujara & Co (60) | Practical, dated articles on Making Tax Digital, India tax for UK residents, outsourcing and running a UK practice. General information, not advice. (148) | Insights | AccountingService, Person, WebSite, BreadcrumbList |
| /contact | Contact Pujara & Co | Pujara & Co (33) | Book a free consultation in UK time or send an enquiry. We reply within one UK working day. Full provider details and secure contact routes. (140) | Contact us | AccountingService, Person, WebSite, ContactPage, BreadcrumbList |
| /services/outsourced-bookkeeping-for-accountancy-practices | Outsourced Bookkeeping for UK Practices | Pujara & Co (53) | A dedicated bookkeeping team for UK accountancy practices and bookkeepers. Xero, QuickBooks and Sage, reviewed work, UK hours, fixed monthly scope. (147) | Outsourced bookkeeping for UK accountancy practices | AccountingService, Person, WebSite, Service, BreadcrumbList, FAQPage |
| /services/year-end-accounts-preparation | Year-End Accounts Preparation Support | Pujara & Co (51) | Draft year-end accounts for UK limited companies, sole traders and partnerships, prepared from your records for your accountant to review and submit. (149) | Year-end accounts preparation | AccountingService, Person, WebSite, Service, BreadcrumbList, FAQPage |
| /services/vat-return-preparation-and-making-tax-digital | VAT Return Preparation and MTD Records | Pujara & Co (52) | Quarterly VAT returns prepared from reconciled digital records, with Making Tax Digital bookkeeping for UK practices and businesses to review and submit. (153) | VAT return preparation and Making Tax Digital record-keeping | AccountingService, Person, WebSite, Service, BreadcrumbList, FAQPage |
| /services/payroll-processing-support | Payroll Processing Support for UK Firms | Pujara & Co (53) | Weekly and monthly payroll calculations, payslips, pension assessments and RTI-ready outputs prepared for UK practices and employers to check and submit. (153) | Payroll processing support | AccountingService, Person, WebSite, Service, BreadcrumbList, FAQPage |
| /services/management-accounts-and-reporting | Management Accounts and Reporting | Pujara & Co (47) | Monthly or quarterly management accounts, cash flow and KPI reports prepared for UK businesses and the practices that advise them. (130) | Management accounts and reporting | AccountingService, Person, WebSite, Service, BreadcrumbList, FAQPage |
| /services/self-assessment-preparation-support | Self Assessment Preparation Support | Pujara & Co (49) | Self Assessment tax return workings prepared for UK practices, sole traders, landlords and directors, ready for review before the 31 January deadline. (150) | Self Assessment preparation support | AccountingService, Person, WebSite, Service, BreadcrumbList, FAQPage |
| /services/india-tax-for-uk-and-european-residents | India Tax Adviser for UK and EU Residents | Pujara & Co (55) | Indian tax returns, property sale tax, repatriation paperwork and UK–India double taxation relief for UK and European residents, from an ICAI firm. (147) | India tax for UK and European residents | AccountingService, Person, WebSite, Service, BreadcrumbList, FAQPage |
| /services/india-entry-and-subsidiary-compliance | India Subsidiary Set-Up and Compliance | Pujara & Co (52) | Set up and run an Indian subsidiary, branch or LLP from the UK or Europe. Entity formation, ongoing Indian compliance and reporting to your finance team. (153) | India entry and subsidiary compliance for UK and European companies | AccountingService, Person, WebSite, Service, BreadcrumbList, FAQPage |
| /insights/selling-property-in-india-from-the-uk-tax-and-repatriation | Selling Indian property from the UK: tax | Pujara & Co (54) | What UK residents of Indian origin need to know about Indian capital gains tax, TDS, lower deduction certificates, repatriation and UK reporting. (145) | Selling property in India from the UK: tax and repatriation | AccountingService, Person, WebSite, Article, BreadcrumbList |
| /insights/making-tax-digital-for-income-tax-what-changes-from-april-2026 | MTD for Income Tax from April 2026 | Pujara & Co (48) | Who has to use Making Tax Digital for Income Tax, when the £50,000, £30,000 and £20,000 thresholds apply, and what quarterly updates mean in practice. (150) | Making Tax Digital for Income Tax: what changes from April 2026 | AccountingService, Person, WebSite, Article, BreadcrumbList |
| /insights/how-uk-accountancy-practices-outsource-bookkeeping-safely | Outsourcing bookkeeping safely: a guide | Pujara & Co (53) | A guide for UK practices considering an outsourced bookkeeping team: what to check, how handover works, and managing data protection and AML. (141) | How UK accountancy practices outsource bookkeeping safely | AccountingService, Person, WebSite, Article, BreadcrumbList |
| /legal/accessibility-statement | Accessibility Statement | Pujara & Co (37) | Our commitment to WCAG 2.2 Level AA on pujaraandco.co.uk, what we have done, known limitations, and how to tell us about an accessibility problem. (146) | Accessibility Statement | AccountingService, Person, WebSite, BreadcrumbList |
| /legal/complaints-procedure | Complaints Procedure | Pujara & Co (34) | How to raise a complaint with Pujara & Co, the timescales we work to, and where you can take a complaint if you are not satisfied with our response. (148) | Complaints Procedure | AccountingService, Person, WebSite, BreadcrumbList |
| /legal/cookie-policy | Cookie Policy | Pujara & Co (27) | What this website stores on your device, why, and how to opt out. Pujara & Co uses cookieless analytics and sets no advertising or tracking cookies. (148) | Cookie Policy | AccountingService, Person, WebSite, BreadcrumbList |
| /legal/privacy-notice | Privacy Notice | Pujara & Co (28) | How Pujara & Co collects, uses, stores and protects personal data from visitors and clients in the UK and the EU, and your rights under UK and EU GDPR. (151) | Privacy Notice | AccountingService, Person, WebSite, BreadcrumbList |
| /legal/terms-of-use | Terms of Use | Pujara & Co (26) | Terms for using the Pujara & Co website, the status of information on it, and a summary of our terms of business for UK and European clients. (141) | Terms of Use | AccountingService, Person, WebSite, BreadcrumbList |
