import { ReactNode, useId } from "react";
import { cx } from "../../lib/cx";

export interface TooltipProps {
  label: string;
  children: ReactNode;
  side?: "top" | "bottom";
  className?: string;
}

/**
 * CSS-only tooltip (shown on hover/focus-within) — no positioning library.
 * Good enough for short labels anchored to a single trigger; revisit with
 * a floating-ui-style approach if we need collision detection later.
 */
export default function Tooltip({
  label,
  children,
  side = "top",
  className,
}: TooltipProps) {
  const id = useId();

  return (
    <span className={cx("tooltip-wrapper", className)}>
      <span className="tooltip-trigger" aria-describedby={id} tabIndex={0}>
        {children}
      </span>
      <span role="tooltip" id={id} className={cx("tooltip", `tooltip--${side}`)}>
        {label}
      </span>
    </span>
  );
}
