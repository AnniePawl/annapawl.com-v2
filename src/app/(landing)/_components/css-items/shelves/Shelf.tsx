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
