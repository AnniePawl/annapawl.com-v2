import { CSSProperties, ReactNode, useId } from "react";
import { cx } from "../../lib/cx";

export type TooltipHue =
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

export type TooltipTone =
  | TooltipHue
  | {
      background: TooltipColor;
      foreground: TooltipColor;
    };

export type TooltipColor =
  | "cream"
  | "charcoal"
  | `${TooltipHue}-${"soft" | "bold"}`;

export interface TooltipProps {
  label: string;
  children: ReactNode;
  side?: "top" | "bottom";
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
  const background = typeof tone === "string" ? `${tone}-soft` : tone?.background;
  const foreground = typeof tone === "string" ? `${tone}-bold` : tone?.foreground;
  const toneStyle: CSSProperties | undefined = tone
    ? ({
        "--tooltip-bg": `var(--${background})`,
        "--tooltip-foreground": `var(--${foreground})`,
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
