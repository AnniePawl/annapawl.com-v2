import type { CSSProperties, ReactNode } from "react";
import { cx } from "../../lib/cx";

export default function PageShell({
  children,
  width = "wide",
  accent,
  className,
}: {
  children: ReactNode;
  width?: "wide" | "reading";
  /**
   * The page's accent color, e.g. "var(--cherry-bold)". Sets --page-accent
   * for everything inside: the header title block (when PostHeader's accent
   * is var(--page-accent)), markers, buttons, links. Leave it out to use the
   * value from the page's CSS.
   */
  accent?: string;
  className?: string;
}) {
  const style = accent
    ? ({ "--page-accent": accent } as CSSProperties)
    : undefined;

  return (
    <div
      className={cx(
        "page-shell",
        width === "reading" && "page-shell--reading",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
}
