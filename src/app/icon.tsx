import { ImageResponse } from 'next/og';

export const size = { width: 64, height: 64 };
export const contentType = 'image/png';

/** Favicon. [PLACEHOLDER: replace with the real brand mark.] */
export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', background: '#1a2744', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 40, fontWeight: 700, borderRadius: 14, fontFamily: 'sans-serif' }}>P</div>
    ),
    { ...size },
  );
}
