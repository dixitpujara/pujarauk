import type { NextConfig } from 'next';
import createMDX from '@next/mdx';
import { redirects } from './redirects';

/**
 * Security headers (brief section 11). The CSP allows the cookieless analytics
 * script and the booking embed only when their hosts are configured through
 * environment variables, so nothing third-party loads by default.
 *
 * script-src keeps 'unsafe-inline' because Next.js emits inline hydration
 * scripts on statically generated pages. Upgrading to a nonce-based CSP
 * requires a proxy/middleware that makes every page dynamic; see README.
 */
const analyticsHost = process.env.NEXT_PUBLIC_ANALYTICS_HOST ? `https://${process.env.NEXT_PUBLIC_ANALYTICS_HOST}` : '';
const bookingOrigin = (() => {
  try {
    return process.env.NEXT_PUBLIC_BOOKING_URL ? new URL(process.env.NEXT_PUBLIC_BOOKING_URL).origin : '';
  } catch {
    return '';
  }
})();

const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline' ${analyticsHost}`.trim(),
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  `connect-src 'self' ${analyticsHost}`.trim(),
  `frame-src 'self' ${bookingOrigin}`.trim(),
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  'upgrade-insecure-requests',
].join('; ');

const securityHeaders = [
  { key: 'Content-Security-Policy', value: csp },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=()' },
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
];

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  reactStrictMode: true,
  poweredByHeader: false,
  images: { formats: ['image/avif', 'image/webp'] },
  async headers() {
    return [{ source: '/(.*)', headers: securityHeaders }];
  },
  async redirects() {
    return redirects;
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
