// Ported from v1 src/components/css-items/shelves/Shelf.js. Pure layout --
// the wooden shelf graphic + whatever illustrations sit on it (desktop
// and tablet).
import type { ReactNode } from "react";
import "./shelves.css";

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

export default Shelf;
