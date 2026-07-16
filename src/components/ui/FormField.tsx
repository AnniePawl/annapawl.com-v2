import { HTMLAttributes, LabelHTMLAttributes } from "react";
import { cx } from "../../lib/cx";

export function FormField({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cx("form-field", className)} {...rest}>
      {children}
    </div>
  );
}

export function FieldLabel({
  className,
  children,
  ...rest
}: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label className={cx("field-label", className)} {...rest}>
      {children}
    </label>
  );
}

export function FieldHint({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cx("field-hint", className)} {...rest}>
      {children}
    </p>
  );
}

export function FieldError({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cx("field-error", className)} role="alert" {...rest}>
      {children}
    </p>
  );
}
