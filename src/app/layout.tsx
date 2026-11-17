import type { Metadata, Viewport } from 'next';
import './globals.css';
import { siteConfig } from '@/config/site';
import { Analytics } from '@/components/Analytics';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { JsonLd } from '@/components/JsonLd';
import { MobileContactBar } from '@/components/MobileContactBar';
import { organisationSchema, personSchema, websiteSchema } from '@/lib/schema';

/*
 * Fonts: the brief requires the India site's typography. Once the font files
 * or next/font/google names are known, load them here with next/font and set
 * the CSS variables --font-brand-sans / --font-brand-display on <html>.
 * Example:
 *   const sans = Inter({ subsets: ['latin'], variable: '--font-brand-sans', display: 'swap' });
 *   <html className={sans.variable}>
 * Until then the system font stack in src/styles/tokens.css is used.
 */

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url),
  title: { default: `${siteConfig.name} | ${siteConfig.strapline}`, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  formatDetection: { telephone: true },
  openGraph: { siteName: siteConfig.name, locale: 'en_GB', type: 'website' },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#1a2744',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body className="flex min-h-dvh flex-col">
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <JsonLd data={[organisationSchema(), personSchema(), websiteSchema()]} />
        <Header />
        <main id="main" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </main>
        <Footer />
        <MobileContactBar />
        <Analytics />
      </body>
    </html>
  );
}
