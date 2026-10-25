// Ported from v1 src/components/css-items/shelves/MobileShelf.js. Same as
// Shelf.tsx, sized for the mobile layout (up to two items per shelf).
import type { ReactNode } from "react";
import "./shelves.css";

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
