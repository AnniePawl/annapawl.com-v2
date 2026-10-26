import { Pin } from "./Pin";
import "./pin-cushion.css";

export function PinCushion({ cn }: { cn?: string }) {
  return (
    <div className={`pin-cushion-container ${cn ?? ""}`}>
      <div className="pin-cushion__pins">
        <Pin />
        <Pin />
        <Pin />
        <Pin />
        <Pin />
        <Pin />
      </div>
      <div className="pin-cushion__cushion" />
    </div>
  );
}
