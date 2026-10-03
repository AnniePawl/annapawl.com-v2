import { CSSProperties, HTMLAttributes } from "react";
import { cx } from "../../lib/cx";
import type { PaletteColor, PaletteHue } from "./colorTokens";

export type BadgeHue = PaletteHue;

export type BadgeTone =
  | BadgeHue
  | {
      background: BadgeColor;
      foreground: BadgeColor;
    };

export type BadgeColor = PaletteColor;

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone;
}

export default function Badge({
  tone,
  className,
  children,
  style,
  ...rest
}: BadgeProps) {
  const background = typeof tone === "string" ? `${tone}-soft` : tone?.background;
  const foreground = typeof tone === "string" ? `${tone}-bold` : tone?.foreground;
  const toneStyle: CSSProperties | undefined = tone
    ? ({
        "--badge-bg": `var(--${background})`,
        "--badge-foreground": `var(--${foreground})`,
      } as CSSProperties)
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
