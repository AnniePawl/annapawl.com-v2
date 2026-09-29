import type { ReactNode } from "react";
import { cx } from "../../lib/cx";

export default function PageShell({
  children,
  width = "wide",
  padded = true,
  className,
}: {
  children: ReactNode;
  width?: "wide" | "reading";
  padded?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cx(
        "page-shell",
        width === "reading" && "page-shell--reading",
        !padded && "page-shell--flush",
        className
      )}
    >
      {children}
    </div>
  );
}
