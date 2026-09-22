// Ported from css-items/shelves/{Shelf,MobileShelf}.js. Pure layout --
// the wooden shelf graphic + whatever illustrations sit on it. `cn`
// selects which breakpoint's shelf-plank styling applies (desktop-*
// classes are unused for now since the source only ever set it on
// mobile's shelf, but kept for parity).
import type { ReactNode } from "react";

export function Shelf({
  items,
}: {
  items: [ReactNode, ReactNode?, ReactNode?, ReactNode?];
}) {
  return (
    <div>
      <div className="shelf-contents">{items}</div>
      <div className="shelf" />
    </div>
  );
}

export function MobileShelf({
  items,
}: {
  items: [ReactNode, ReactNode?];
}) {
  return (
    <div className="mobile-shelf-container">
      <div className="mobile-shelf-contents">{items}</div>
      <div className="shelf mobile-shelf" />
    </div>
  );
}
