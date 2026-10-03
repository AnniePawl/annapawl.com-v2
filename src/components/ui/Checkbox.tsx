import { InputHTMLAttributes, forwardRef } from "react";
import { Check } from "lucide-react";
import { cx } from "../../lib/cx";

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { label, className, id, ...rest },
  ref
) {
  return (
    <label className={cx("checkbox-wrapper", className)} htmlFor={id}>
      <span className="checkbox-box">
        <input ref={ref} type="checkbox" id={id} className="checkbox-input" {...rest} />
        <Check className="checkbox-icon" aria-hidden="true" size={14} strokeWidth={3} />
      </span>
      {label ? <span className="checkbox-label">{label}</span> : null}
    </label>
  );
});

export default Checkbox;
