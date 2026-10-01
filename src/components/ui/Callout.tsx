import type { HTMLAttributes, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cx } from "../../lib/cx";
import {
  EDITORIAL_COLORWAYS,
  type EditorialColorway,
} from "./editorialColorways";

export interface CalloutProps extends HTMLAttributes<HTMLElement> {
  eyebrow: string;
  title: string;
  children: ReactNode;
  colorway?: EditorialColorway;
  actionLabel?: ReactNode;
  actionHref?: string;
}

/** A non-blocking editorial aside that shares the modal's two-tone frame. */
export default function Callout({
  eyebrow,
  title,
  children,
  colorway = "moss-cherry",
  actionLabel,
  actionHref,
  className,
  style,
  ...rest
}: CalloutProps) {
  return (
    <aside
      {...rest}
      className={cx("callout", className)}
      style={{ ...EDITORIAL_COLORWAYS[colorway], ...style }}
    >
      <div className="callout-label-rail">
        <span className="callout-eyebrow type-eyebrow">{eyebrow}</span>
      </div>
      <div className="callout-content">
        <h3 className="callout-title">{title}</h3>
        <div className="callout-description">{children}</div>
        {actionLabel && actionHref ? (
          <a className="callout-action focus-ring" href={actionHref}>
            {actionLabel}
            <ArrowRight className="callout-action-icon" aria-hidden="true" />
          </a>
        ) : null}
      </div>
    </aside>
  );
}
