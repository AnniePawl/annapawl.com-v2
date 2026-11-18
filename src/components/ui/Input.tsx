import { InputHTMLAttributes, forwardRef } from "react";
import { Search } from "lucide-react";
import { cx } from "../../lib/cx";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  /** "search" draws a box with a search icon, so it looks searchable. */
  variant?: "default" | "search";
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { error = false, variant = "default", className, ...rest },
  ref
) {
  const input = (
    <input
      ref={ref}
      className={cx(
        "input",
        variant === "search" && "input--search",
        error && "input--error",
        "focus-ring",
        className
      )}
      aria-invalid={error || undefined}
      {...(variant === "search" ? { type: "search" } : null)}
      {...rest}
    />
  );

  if (variant !== "search") return input;

  return (
    <span className="input-search">
      <Search className="input-search-icon" aria-hidden="true" />
      {input}
    </span>
  );
});

export default Input;
