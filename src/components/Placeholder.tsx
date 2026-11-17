/**
 * Visible stand-in for a real photograph. Renders a labelled block so nothing
 * fictional ships: the label is the [PLACEHOLDER] note itself.
 */
export function PhotoPlaceholder({ label, ratio = 'aspect-[4/5]', className = '' }: { label: string; ratio?: string; className?: string }) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`${ratio} ${className} w-full rounded-lg border-2 border-dashed border-line bg-surface-navy-tint flex items-center justify-center p-6 text-center text-sm text-ink-muted`}
    >
      <span>{label}</span>
    </div>
  );
}
