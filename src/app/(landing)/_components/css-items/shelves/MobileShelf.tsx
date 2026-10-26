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
