import { SelectHTMLAttributes, forwardRef } from "react";
import { ChevronDown } from "lucide-react";
import { cx } from "../../lib/cx";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { error = false, className, children, ...rest },
  ref
) {
  return (
    <span className={cx("select-wrapper", className)}>
      <select
        ref={ref}
        className={cx("input", "select", error && "input--error", "focus-ring")}
        aria-invalid={error || undefined}
        {...rest}
      >
        {children}
      </select>
      <ChevronDown className="select-chevron" aria-hidden="true" size={16} />
    </span>
  );
});

export default Select;
