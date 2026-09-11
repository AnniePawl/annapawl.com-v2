import { CSSProperties, ReactNode, useId } from "react";
import { cx } from "../../lib/cx";

// Matches the brand palette's hue names (foundations/color.css) — same
// convention as Card's/Badge's `tone` prop (11 hues, no "neutral" — the
// tooltip's own default mint already covers the untoned case).
export type TooltipTone =
  | "pink"
  | "red"
  | "orange"
  | "yellow"
  | "lime"
  | "mint"
  | "green"
  | "sky"
  | "blue"
  | "indigo"
  | "violet";

export interface TooltipProps {
  label: string;
  children: ReactNode;
  side?: "top" | "bottom";
  /**
   * Optional color combo — one of the brand palette's hues. Sets
   * --tooltip-bg / --tooltip-accent inline (the hue's -soft / -bold
   * tokens), which the bubble's fill, border, and little pointer all
   * read from. Falls back to the component's own default mint when
   * not set.
   */
  tone?: TooltipTone;
  className?: string;
}

/**
 * CSS-only tooltip (shown on hover/focus-within) — no positioning library.
 * Good enough for short labels anchored to a single trigger; revisit with
 * a floating-ui-style approach if we need collision detection later.
 */
export default function Tooltip({
  label,
  children,
  side = "top",
  tone,
  className,
}: TooltipProps) {
  const id = useId();
  const toneStyle: CSSProperties | undefined = tone
    ? ({
        "--tooltip-bg": `var(--${tone}-soft)`,
        "--tooltip-accent": `var(--${tone}-bold)`,
      } as CSSProperties)
    : undefined;

  return (
    <span className={cx("tooltip-wrapper", className)} style={toneStyle}>
      <span className="tooltip-trigger" aria-describedby={id} tabIndex={0}>
        {children}
      </span>
      <span role="tooltip" id={id} className={cx("tooltip", `tooltip--${side}`)}>
        {label}
      </span>
    </span>
  );
}
