import { InputHTMLAttributes, forwardRef } from "react";
import { cx } from "../../lib/cx";

export interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
}

const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(
  { label, className, id, ...rest },
  ref
) {
  return (
    <label className={cx("radio-wrapper", className)} htmlFor={id}>
      <span className="radio-box">
        <input ref={ref} type="radio" id={id} className="radio-input" {...rest} />
        <span className="radio-dot" aria-hidden="true" />
      </span>
      {label ? <span className="radio-label">{label}</span> : null}
    </label>
  );
});

export default Radio;
