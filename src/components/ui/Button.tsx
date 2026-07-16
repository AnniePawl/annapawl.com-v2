import { ButtonHTMLAttributes, forwardRef } from "react";
import { cx } from "../../lib/cx";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /**
   * Documentation/demo use only — forces a visual state (hover/focus/
   * pressed) without real interaction, so the vibe-system docs page can
   * show every state side by side. Never set this in real usage.
   */
  "data-state"?: "hover" | "focus" | "pressed";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = "primary", size = "md", className, children, ...rest },
  ref
) {
  return (
    <button
      ref={ref}
      className={cx("btn", `btn--${variant}`, `btn--${size}`, "focus-ring", className)}
      {...rest}
    >
      {children}
    </button>
  );
});

export default Button;
