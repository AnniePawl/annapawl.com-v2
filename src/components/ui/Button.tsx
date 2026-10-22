import {
  ButtonHTMLAttributes,
  CSSProperties,
  ReactNode,
  forwardRef,
} from "react";
import { cx } from "../../lib/cx";
import type { PaletteColor } from "./colorTokens";

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

/** One-off color override — the exception, not the system. */
export type ButtonTone = {
  accent?: PaletteColor;
  tint?: PaletteColor;
  ink?: PaletteColor;
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  shape?: ButtonShape;
  size?: ButtonSize;
  tone?: ButtonTone;
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
  const toneStyle = tone
    ? ({
        ...(tone.accent && { "--page-accent": `var(--${tone.accent})` }),
        ...(tone.tint && { "--page-accent-tint": `var(--${tone.tint})` }),
        ...(tone.ink && { "--page-accent-ink": `var(--${tone.ink})` }),
      } as CSSProperties)
    : undefined;

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
