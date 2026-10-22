import { CSSProperties, ReactNode, useId } from "react";
import { cx } from "../../lib/cx";
import type { PaletteColor } from "./colorTokens";

/** Custom colors. Any key left out falls back to the variant's default. */
export type TooltipTone = {
  background?: PaletteColor;
  marker?: PaletteColor;
  text?: PaletteColor;
};

export interface TooltipProps {
  label: string;
  children: ReactNode;
  side?: "top" | "bottom";
  /**
   * plain: cream box, page-accent marker (default).
   * tinted: page-accent tint box, page-accent marker
   * (soft sky + dark cherry on Sedge).
   */
  variant?: "plain" | "tinted";
  /** Make your own: override background, marker, and/or text color. */
  tone?: TooltipTone;
  className?: string;
}

/**
 * CSS-only tooltip (shown on hover/focus-within) — no positioning library.
 * Hairline border, 4px corners, and a small marker before the label: the
 * same anatomy as callout labels, card titles, and badges.
 */
export default function Tooltip({
  label,
  children,
  side = "top",
  variant = "plain",
  tone,
  className,
}: TooltipProps) {
  const id = useId();
  const toneStyle = tone
    ? ({
        ...(tone.background && { "--tooltip-bg": `var(--${tone.background})` }),
        ...(tone.marker && { "--tooltip-marker": `var(--${tone.marker})` }),
        ...(tone.text && { "--tooltip-text": `var(--${tone.text})` }),
      } as CSSProperties)
    : undefined;

  return (
    <span
      className={cx("tooltip-wrapper", `tooltip-wrapper--${variant}`, className)}
      style={toneStyle}
    >
      <span className="tooltip-trigger" aria-describedby={id} tabIndex={0}>
        {children}
      </span>
      <span role="tooltip" id={id} className={cx("tooltip", `tooltip--${side}`)}>
        {label}
      </span>
    </span>
  );
}
