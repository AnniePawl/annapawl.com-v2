// Ported from v1 src/components/css-items/sewing/PinCushion.js. Rendered
// inside Sewing.tsx, whose root is aria-hidden.
import { Pin } from "./Pin";
import "./pin-cushion.css";

export function PinCushion({ cn }: { cn?: string }) {
  return (
    <div className={`pin-cushion-container ${cn ?? ""}`}>
      <div className="pins">
        <Pin />
        <Pin />
        <Pin />
        <Pin />
        <Pin />
        <Pin />
      </div>
      <div className="pin-cushion" />
    </div>
  );
}

export default PinCushion;
