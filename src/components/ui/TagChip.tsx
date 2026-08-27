import { ButtonHTMLAttributes } from "react";
import { cx } from "../../lib/cx";

export interface TagChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Whether this chip represents an active/selected filter. Wired to
   *  aria-pressed so assistive tech announces the toggle state. */
  active?: boolean;
}

/**
 * A tag/genre pill that IS or WILL BECOME clickable — e.g. the filter
 * chips on the Bookshelf page. Reuses Badge's `.badge`/`.badge--*` CSS
 * classes for identical visuals, but renders a real <button> instead of
 * Badge's <span>, so it's keyboard-focusable and exposed to screen
 * readers as an interactive toggle. Use Badge instead for tags that are
 * purely decorative/non-interactive (e.g. a static count label).
 */
export default function TagChip({
  active = false,
  className,
  children,
  ...rest
}: TagChipProps) {
  return (
    <button
      type="button"
      aria-pressed={active}
      className={cx(
        "badge",
        active ? "badge--accent" : "badge--neutral",
        "focus-ring",
        "cursor-pointer transition-colors duration-[var(--motion-hover-duration)] ease-[var(--motion-hover-ease)] hover:bg-[var(--accent-soft)] hover:text-[color:color-mix(in_srgb,var(--accent)_60%,black)]",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
