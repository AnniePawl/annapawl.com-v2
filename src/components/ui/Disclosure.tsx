import type { ReactNode } from "react";
import { cx } from "../../lib/cx";

export interface DisclosureProps {
  /** Label while closed, e.g. "Show the CSS". */
  label: string;
  /** Label while open. Defaults to `label`. */
  openLabel?: string;
  defaultOpen?: boolean;
  children: ReactNode;
  className?: string;
  /** Docs only: shows the hover state without hovering. */
  "data-state"?: "hover";
}

/** Show/hide extra content, like a long code block. Native <details>, so no JS. */
export default function Disclosure({
  label,
  openLabel = label,
  defaultOpen,
  children,
  className,
  "data-state": dataState,
}: DisclosureProps) {
  return (
    <details className={cx("disclosure", className)} open={defaultOpen} data-state={dataState}>
      <summary className="disclosure-summary focus-ring">
        <span className="disclosure-icon" aria-hidden="true" />
        <span className="disclosure-label">{label}</span>
        <span className="disclosure-label-open">{openLabel}</span>
      </summary>
      <div className="disclosure-panel">{children}</div>
    </details>
  );
}
