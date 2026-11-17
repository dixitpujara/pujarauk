import { z } from 'zod';

/** Shared between the client form and the API route so validation matches exactly. */
export const enquirerTypes = [
  { value: 'practice', label: 'An accountancy practice or bookkeeper' },
  { value: 'business', label: 'A business, contractor or landlord' },
  { value: 'individual', label: 'An individual with India-side tax matters' },
  { value: 'company', label: 'A company with, or planning, an Indian subsidiary' },
] as const;

export const serviceOptions = [
  { value: 'outsourced-bookkeeping', label: 'Outsourced bookkeeping' },
  { value: 'year-end-accounts', label: 'Year-end accounts preparation' },
  { value: 'vat', label: 'VAT returns and Making Tax Digital' },
  { value: 'payroll', label: 'Payroll processing support' },
  { value: 'management-accounts', label: 'Management accounts and reporting' },
  { value: 'self-assessment', label: 'Self Assessment preparation support' },
  { value: 'india-tax', label: 'India tax for UK and European residents' },
  { value: 'india-entry', label: 'India entry and subsidiary compliance' },
  { value: 'not-sure', label: 'Not sure yet' },
] as const;

const enquirerValues = enquirerTypes.map((t) => t.value) as [string, ...string[]];
const serviceValues = serviceOptions.map((s) => s.value) as [string, ...string[]];

/** Rough check that stops obvious attempts to paste NI numbers, UTRs or card numbers. */
const sensitivePatterns = [
  /\b[A-CEGHJ-PR-TW-Z]{2}\s?\d{2}\s?\d{2}\s?\d{2}\s?[A-D]\b/i, // National Insurance number
  /\b\d{10}\b(?!\s*(?:am|pm))/, // 10-digit UTR (also catches some phone numbers, so we only warn on message)
  /\b(?:\d[ -]?){13,19}\b/, // card / long account strings
];

export const enquirySchema = z.object({
  name: z.string().trim().min(2, 'Please enter your name.').max(120, 'Please use fewer than 120 characters.'),
  email: z.string().trim().toLowerCase().email('Please enter a valid email address.').max(200),
  phone: z
    .string()
    .trim()
    .max(30, 'Please use fewer than 30 characters.')
    .regex(/^[+\d\s().-]*$/, 'Please enter digits, spaces and + only.')
    .optional()
    .or(z.literal('')),
  enquirerType: z.enum(enquirerValues, { message: 'Please tell us who you are.' }),
  service: z.enum(serviceValues, { message: 'Please choose a service.' }),
  message: z
    .string()
    .trim()
    .min(20, 'Please tell us a little more (at least 20 characters).')
    .max(3000, 'Please keep your message under 3,000 characters.')
    .refine((m) => !sensitivePatterns.some((re) => re.test(m)), {
      message:
        'Your message looks like it contains a reference number, bank or card details. Please remove them; we will set up a secure channel for those.',
    }),
  privacy: z.literal(true, { message: 'Please confirm you have read the Privacy Notice.' }),
  marketingOptIn: z.boolean().default(false),
  /** Honeypot: must stay empty. Hidden from humans, filled by bots. */
  website: z.string().max(0).optional().or(z.literal('')),
  /** Time the form was rendered; submissions faster than a few seconds are rejected. */
  startedAt: z.number().int().optional(),
});

export type EnquiryInput = z.input<typeof enquirySchema>;
export type Enquiry = z.output<typeof enquirySchema>;

export function labelFor(list: readonly { value: string; label: string }[], value: string): string {
  return list.find((i) => i.value === value)?.label ?? value;
}
