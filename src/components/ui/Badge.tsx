import { CSSProperties, HTMLAttributes } from "react";
import { cx } from "../../lib/cx";

export type BadgeHue =
  | "pink"
  | "red"
  | "cherry"
  | "coral"
  | "orange"
  | "clay"
  | "ochre"
  | "amber"
  | "lemon"
  | "lime"
  | "sage"
  | "moss"
  | "mint"
  | "emerald"
  | "sky"
  | "blue"
  | "steel"
  | "lilac"
  | "indigo"
  | "plum"
  | "mauve"
  | "sand"
  | "taupe"
  | "chocolate";

export type BadgeTone =
  | BadgeHue
  | {
      background: BadgeColor;
      foreground: BadgeColor;
    };

export type BadgeColor =
  | "cream"
  | "charcoal"
  | `${BadgeHue}-${"soft" | "bold"}`;

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
