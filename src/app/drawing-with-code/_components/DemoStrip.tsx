import type { ReactNode } from "react";

/** A row of small live CSS demos under a toolkit entry. */
export function DemoStrip({ children }: { children: ReactNode }) {
  return <div className="dwc-demo-strip">{children}</div>;
}

/** One demo: the drawing, plus the code that made it as a caption. */
export function DemoTile({
  label,
  caption,
  children,
}: {
  /** What the drawing shows, for screen readers. */
  label: string;
  caption: ReactNode;
  children: ReactNode;
}) {
  return (
    <figure className="dwc-demo-tile">
      <div className="dwc-demo-stage" role="img" aria-label={label}>
        {children}
      </div>
      <figcaption className="dwc-demo-caption">{caption}</figcaption>
    </figure>
  );
}
