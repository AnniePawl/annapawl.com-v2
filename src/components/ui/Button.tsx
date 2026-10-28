import {
  ButtonHTMLAttributes,
  CSSProperties,
  ReactNode,
  forwardRef,
} from "react";
import { cx } from "../../lib/cx";
import { markerColor, type PaletteColor, type PaletteHue } from "./colorTokens";

/**
 * Buttons know their ROLE, never their color — color comes from the
 * page accent (--page-accent / -tint / -ink), set once per page.
 *
 * - primary   — hairline outline + accent dot (or an accent icon);
 *               fills with ink on hover. The default.
 * - secondary — soft accent tint + bold accent icon.
 * - quiet     — underlined text. Low-stakes actions like "Show all".
 *
 * Shape: "soft" (4px, default) for buttons that sit inside content;
 * "pill" for a standalone call to action. Never mix shapes in one group.
 */
type ButtonVariant = "primary" | "secondary" | "quiet";
type ButtonShape = "soft" | "pill";
type ButtonSize = "sm" | "md" | "lg";

/**
 * One-off color override — the exception, not the system.
 *
 * Shorthand: a palette color like "pink-bold" (or just "pink") uses that
 * hue's bold for the accent (dot, icons, hover fill), its soft for the
 * secondary background, and cream or charcoal hover text, whichever reads
 * better on that bold.
 *
 * Object form, for full control. Each value is a palette name ("cream")
 * or any CSS color ("#fff", "var(--x)", "color-mix(…)"):
 * - bg:        secondary background
 * - text:      secondary text (defaults to charcoal)
 * - icon:      icon color, and primary's dot
 * - hoverBg:   secondary background on hover
 * - hoverText: secondary text and icon on hover
 */
type ToneColor = PaletteColor | (string & {});

export type ButtonTone = {
  bg?: ToneColor;
  text?: ToneColor;
  icon?: ToneColor;
  hoverBg?: ToneColor;
  hoverText?: ToneColor;
};

/** Palette names become var(--name); anything else is already a CSS color. */
function toCss(color: ToneColor) {
  return /^[a-z]+(-[a-z]+)?$/.test(color) ? `var(--${color})` : color;
}

const NEUTRALS: PaletteColor[] = ["cream", "charcoal", "ivory", "espresso"];

// Bold shades dark enough that cream text reads best on the hover fill.
// Every other bold gets charcoal (each pick has the higher WCAG contrast).
const CREAM_INK_HUES = ["red", "cherry", "emerald", "slate", "plum", "mauve", "cocoa"];

function resolveTone(tone: PaletteColor | PaletteHue): CSSProperties {
  if (NEUTRALS.includes(tone as PaletteColor)) {
    return { "--page-accent": `var(--${tone})` } as CSSProperties;
  }
  const hue = tone.replace(/-(soft|bold)$/, "");
  const ink = CREAM_INK_HUES.includes(hue) ? "cream" : "charcoal";
  return {
    "--page-accent": `var(--${hue}-bold)`,
    "--page-accent-tint": `var(--${hue}-soft)`,
    "--page-accent-ink": `var(--${ink})`,
    // Dot and icons: a bare hue switches to its soft shade in dark mode.
    "--btn-icon": markerColor(tone),
  } as CSSProperties;
}

function toneObjectStyle(tone: ButtonTone): CSSProperties {
  return {
    ...(tone.bg && { "--btn-bg": toCss(tone.bg) }),
    ...(tone.text && { "--btn-text": toCss(tone.text) }),
    ...(tone.icon && { "--btn-icon": toCss(tone.icon) }),
    ...(tone.hoverBg && { "--btn-hover-bg": toCss(tone.hoverBg) }),
    ...(tone.hoverText && { "--btn-hover-text": toCss(tone.hoverText) }),
  } as CSSProperties;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  shape?: ButtonShape;
  size?: ButtonSize;
  tone?: ButtonTone | PaletteColor | PaletteHue;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  /**
   * Documentation/demo use only — forces a visual state (hover/focus/
   * pressed) without real interaction, so the sedge-design-system docs page can
   * show every state side by side. Never set this in real usage.
   */
  "data-state"?: "hover" | "focus" | "pressed";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = "primary",
    shape = "soft",
    size = "md",
    tone,
    startIcon,
    endIcon,
    type = "button",
    className,
    children,
    style,
    ...rest
  },
  ref
) {
  const toneStyle = !tone
    ? undefined
    : typeof tone === "string"
      ? resolveTone(tone)
      : toneObjectStyle(tone);

  return (
    <button
      ref={ref}
      type={type}
      className={cx(
        "btn",
        `btn--${variant}`,
        `btn--${size}`,
        shape === "pill" && "btn--pill",
        "focus-ring",
        className
      )}
      style={{ ...toneStyle, ...style }}
      {...rest}
    >
      {startIcon ? (
        <span className="btn-start-icon" aria-hidden="true">
          {startIcon}
        </span>
      ) : null}
      <span className="btn-label">{children}</span>
      {endIcon ? (
        <span className="btn-end-icon" aria-hidden="true">
          {endIcon}
        </span>
      ) : null}
    </button>
  );
});

export default Button;
