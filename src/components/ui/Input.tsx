import { InputHTMLAttributes, forwardRef } from "react";
import { cx } from "../../lib/cx";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { error = false, className, ...rest },
  ref
) {
  return (
    <input
      ref={ref}
      className={cx("input", error && "input--error", "focus-ring", className)}
      aria-invalid={error || undefined}
      {...rest}
    />
  );
});

export default Input;
