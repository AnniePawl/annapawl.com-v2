import type { HTMLAttributes, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cx } from "../../lib/cx";

export interface CalloutProps extends HTMLAttributes<HTMLElement> {
  /** Short spaced-caps label, e.g. "Good to know". */
  eyebrow: string;
  children: ReactNode;
  actionLabel?: ReactNode;
  actionHref?: string;
}

/**
 * A quiet editorial aside: cream surface, hairline border, 4px corners.
 * The only color is the label marker, which follows the page accent.
 */
export default function Callout({
  eyebrow,
  children,
  actionLabel,
  actionHref,
  className,
  ...rest
}: CalloutProps) {
  return (
    <aside {...rest} className={cx("callout", className)}>
      <span className="callout-label">{eyebrow}</span>
      <div className="callout-description">{children}</div>
      {actionLabel && actionHref ? (
        <a
          className="callout-action text-link text-link--standalone focus-ring"
          href={actionHref}
        >
          {actionLabel}
          <ArrowRight className="text-link-icon" aria-hidden="true" />
        </a>
      ) : null}
    </aside>
  );
}
