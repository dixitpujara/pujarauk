import { siteConfig } from '@/config/site';

/**
 * [PLACEHOLDER: replace this wordmark with the real logo asset from the
 * pujaraandco.com codebase (SVG preferred), keeping the same height.]
 */
export function Logo({ className = 'h-9', inverse = false }: { className?: string; inverse?: boolean }) {
  const fill = inverse ? '#ffffff' : 'var(--color-navy)';
  const accent = 'var(--color-accent)';
  return (
    <svg className={className} viewBox="0 0 262 44" role="img" aria-label={`${siteConfig.name}, Chartered Accountants (India)`} focusable="false">
      <rect x="0" y="2" width="40" height="40" rx="8" fill={fill} />
      <text x="20" y="30" textAnchor="middle" fontFamily="var(--font-display)" fontWeight="700" fontSize="22" fill="#ffffff">P</text>
      <circle cx="33" cy="9" r="3" fill={accent} />
      <text x="52" y="27" fontFamily="var(--font-display)" fontWeight="700" fontSize="22" fill={fill} letterSpacing="-0.3">
        Pujara &amp; Co
      </text>
      <text x="53" y="40" fontFamily="var(--font-sans)" fontWeight="500" fontSize="9.5" fill={fill} opacity="0.75" letterSpacing="0.08em">
        CHARTERED ACCOUNTANTS (INDIA)
      </text>
    </svg>
  );
}
