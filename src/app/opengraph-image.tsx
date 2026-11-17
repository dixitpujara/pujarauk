import { ImageResponse } from 'next/og';
import { siteConfig } from '@/config/site';

export const alt = `${siteConfig.name}: ${siteConfig.strapline}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/** Default Open Graph image. [PLACEHOLDER: swap for a designed OG image using the real logo.] */
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 72,
          background: '#1a2744',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div style={{ width: 64, height: 64, borderRadius: 14, background: '#ffffff', color: '#1a2744', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 40, fontWeight: 700 }}>P</div>
          <div style={{ fontSize: 40, fontWeight: 700 }}>Pujara &amp; Co</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ fontSize: 56, fontWeight: 700, lineHeight: 1.1, maxWidth: 980 }}>{siteConfig.strapline}</div>
          <div style={{ fontSize: 26, opacity: 0.85 }}>Chartered Accountants (India) · Working UK hours · pujaraandco.co.uk</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
