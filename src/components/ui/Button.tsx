import {
  ButtonHTMLAttributes,
  CSSProperties,
  ReactNode,
  forwardRef,
} from "react";
import { cx } from "../../lib/cx";
import type { PaletteColor } from "./colorTokens";

type ButtonVariant = "default" | "primary" | "secondary";
type ButtonSize = "sm" | "md" | "lg";

export type ButtonTone = {
  background: PaletteColor;
  foreground: PaletteColor;
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  tone?: ButtonTone;
  bordered?: boolean;
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
    variant = "default",
    size = "md",
    tone,
    bordered = false,
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
        "--button-background": `var(--${tone.background})`,
        "--button-foreground": `var(--${tone.foreground})`,
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
        bordered && "btn--bordered",
        "focus-ring",
        className
      )}
      style={{ ...toneStyle, ...style }}
      {...rest}
    >
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
