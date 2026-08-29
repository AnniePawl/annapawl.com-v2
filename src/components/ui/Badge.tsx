import { CSSProperties, HTMLAttributes } from "react";
import { cx } from "../../lib/cx";

type BadgeVariant = "neutral" | "accent" | "success" | "warning" | "danger";

// Matches the brand palette's hue names (foundations/color.css) — same
// convention as Card's `tone` prop.
export type BadgeTone =
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

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  /**
   * Optional colored pill treatment — soft fill, bold outline, and text
   * all in one of the brand palette's hues (--{tone}-soft / --{tone}-bold).
   * Overrides `variant` when set, same pattern as Card's `tone` prop. Best
   * for category/tag-style labels; the semantic variants stay the better
   * fit for status (success/warning/danger).
   */
  tone?: BadgeTone;
}

export default function Badge({
  variant = "neutral",
  tone,
  className,
  children,
  style,
  ...rest
}: BadgeProps) {
  const toneStyle: CSSProperties | undefined = tone
    ? ({
        "--badge-bg": `var(--${tone}-soft)`,
        "--badge-color": `var(--${tone}-bold)`,
      } as CSSProperties)
    : undefined;

  return (
    <span
      className={cx("badge", tone ? "badge--tone" : `badge--${variant}`, className)}
      style={{ ...toneStyle, ...style }}
      {...rest}
    >
      {children}
    </span>
  );
}
