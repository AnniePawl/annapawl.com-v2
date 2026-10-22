import { CSSProperties, HTMLAttributes } from "react";
import { cx } from "../../lib/cx";
import type { PaletteColor } from "./colorTokens";

/** Marker color. Any palette token; defaults to the page accent. */
export type BadgeTone = PaletteColor;

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone;
}

/**
 * A compact label in the bookshelf-tag style: a small colored marker
 * beside charcoal text. No pill, border, or fill.
 */
export default function Badge({
  tone,
  className,
  children,
  style,
  ...rest
}: BadgeProps) {
  const toneStyle = tone
    ? ({ "--badge-marker": `var(--${tone})` } as CSSProperties)
    : undefined;

  return (
    <span
      className={cx("badge", className)}
      style={{ ...toneStyle, ...style }}
      {...rest}
    >
      {children}
    </span>
  );
}
