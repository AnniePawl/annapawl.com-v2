import { TextareaHTMLAttributes, forwardRef } from "react";
import { cx } from "../../lib/cx";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { error = false, className, ...rest },
  ref
) {
  return (
    <textarea
      ref={ref}
      className={cx("input", error && "input--error", "focus-ring", className)}
      aria-invalid={error || undefined}
      {...rest}
    />
  );
});

export default Textarea;
