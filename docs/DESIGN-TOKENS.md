# Design tokens: syncing with pujaraandco.com

The brief requires an identical visual system to pujaraandco.com: same logo, colours, typography, spacing, radii and component styles. The India codebase and the live site were **not reachable** from the build environment (network policy blocked pujaraandco.com and its Vercel preview). Only the primary navy `#1a2744` is confirmed.

Everything else in `src/styles/tokens.css` marked `SYNC` is a provisional value chosen to work with the navy and to pass WCAG AA contrast. Replace them before launch.

## How to sync (about 30 minutes)

1. In the India codebase find the token source: usually `globals.css` (`@theme` or `:root` variables), `tailwind.config.*` (`theme.extend.colors`, `fontFamily`, `borderRadius`) and the `next/font` calls in `app/layout.tsx`.
2. Copy each value into the matching variable in `src/styles/tokens.css`. Keep the variable names used here; the components reference them (`bg-navy`, `text-accent-600`, `rounded-md`, `shadow-card`, `font-display`).
3. Fonts: add the same `next/font` calls to `src/app/layout.tsx` and set `--font-brand-sans` / `--font-brand-display` on `<html>`.
4. Logo: replace `src/components/Logo.tsx` with the real SVG. Also replace `src/app/icon.tsx` and `src/app/opengraph-image.tsx` with branded versions.
5. Re-run the contrast check: `npm run test:a11y`. Any `color-contrast` failure means the India accent needs a darker text-safe variant (that is what `--color-accent-600` is for).

## Token map

| Token | Current value | Status | Used for |
| --- | --- | --- | --- |
| `--color-navy` | `#1a2744` | confirmed | primary buttons, headings, footer text, CTA band |
| `--color-navy-700/800/900` | derived | SYNC | hover/active states |
| `--color-accent` | `#b8923a` | SYNC | logo dot, blockquote rule, nav underline |
| `--color-accent-600` | `#7a5f20` | SYNC | eyebrow text, focus ring (5.5:1 on tinted backgrounds) |
| `--color-accent-100` | `#f6efdc` | SYNC | blockquote background, inverse button hover |
| `--color-ink` / `--color-ink-muted` | `#1b2130` / `#4b5563` | SYNC | body and secondary text |
| `--color-line` | `#d9dee8` | SYNC | borders |
| `--color-surface*` | white / `#f4f6fa` / `#e9edf5` | SYNC | backgrounds |
| `--color-success/error` | `#1f6f43` / `#a8321f` | SYNC | form feedback (both pass 4.5:1) |
| `--font-sans`, `--font-display` | system stack | SYNC | all type |
| `--text-*` | 13 to 52px scale | SYNC | type scale |
| `--radius-*` | 6 / 10 / 16px / pill | SYNC | buttons, cards, inputs |
| `--shadow-card*` | soft navy shadows | SYNC | cards |

Layout widths, motion easing and durations are not brand-critical and can stay.
