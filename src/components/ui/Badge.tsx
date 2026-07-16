import { HTMLAttributes } from "react";
import { cx } from "../../lib/cx";

type BadgeVariant = "neutral" | "accent" | "success" | "warning" | "danger";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

export default function Badge({
  variant = "neutral",
  className,
  children,
  ...rest
}: BadgeProps) {
  return (
    <span className={cx("badge", `badge--${variant}`, className)} {...rest}>
      {children}
    </span>
  );
}
