import type { ReactNode } from "react";
import { cx } from "../../lib/cx";

export default function PageShell({
  children,
  width = "wide",
  className,
}: {
  children: ReactNode;
  width?: "wide" | "reading";
  className?: string;
}) {
  return (
    <div
      className={cx(
        "page-shell",
        width === "reading" && "page-shell--reading",
        className
      )}
    >
      {children}
    </div>
  );
}
