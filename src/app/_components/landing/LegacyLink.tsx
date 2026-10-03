// Two links in the source point at routes that were never carried over
// into this Next.js site: /dwc ("CSS art" / "More on css art", DesktopAbout
// .js, MobileAbout.js, and the old Modal.js) and /foodblog ("forkplay",
// DesktopAbout.js, MobileAbout.js). Per the port brief: don't invent a
// destination for a route that doesn't exist, and don't silently drop the
// copy either -- so this renders the same visible text, same underline
// look as a real link (landing-legacy-link in landing.css), but as inert
// text rather than a link to nowhere. `title` explains why on hover/focus
// for sighted/keyboard users; it isn't a link, so it's not tab-stoppable
// and needs no separate screen-reader affordance.
import type { ReactNode } from "react";

export function LegacyLink({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <span
      className={`landing-legacy-link ${className ?? ""}`}
      title="Not part of this site yet"
    >
      {children}
    </span>
  );
}
