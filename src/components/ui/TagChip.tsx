import { ButtonHTMLAttributes, CSSProperties } from "react";
import { cx } from "../../lib/cx";
import type { BrandHue } from "../../lib/tagColor";

export interface TagChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Whether this chip represents an active/selected filter. Wired to
   *  aria-pressed so assistive tech announces the toggle state — and so
   *  badge.css's `.badge--mono[aria-pressed="true"]` can drive the
   *  active (filled) look straight off that attribute, no extra class
   *  needed. */
  active?: boolean;
  /**
   * Optional small colored dot before the label — one of the brand
   * hues (see lib/tagColor.ts). The pill itself stays neutral either
   * way; this is a scannable accent, not a full recolor, so tag filters
   * don't compete with the book covers for attention.
   */
  tone?: BrandHue;
}

/**
 * A tag/genre pill that IS or WILL BECOME clickable — e.g. the filter
 * chips on the Bookshelf page. Reuses Badge's `.badge`/`.badge--mono` CSS
 * for the same shape/weight as the "16 books" accent badge, minus the
 * color — a real <button> instead of Badge's <span>, so it's keyboard-
 * focusable and exposed to screen readers as an interactive toggle. Use
 * Badge instead for tags that are purely decorative/non-interactive
 * (e.g. a static count label).
 */
export default function TagChip({
  active = false,
  tone,
  className,
  children,
  style,
  ...rest
}: TagChipProps) {
  const toneStyle: CSSProperties | undefined = tone
    ? ({ "--chip-dot": `var(--${tone}-bold)` } as CSSProperties)
    : undefined;

  return (
    <button
      type="button"
      aria-pressed={active}
      className={cx(
        "badge",
        "badge--mono",
        "focus-ring cursor-pointer transition-colors duration-[var(--motion-hover-duration)] ease-[var(--motion-hover-ease)]",
        className
      )}
      style={{ ...toneStyle, ...style }}
      {...rest}
    >
      {tone && <span className="badge-dot" aria-hidden="true" />}
      {children}
    </button>
  );
}
