// Ported from v1 src/components/css-items/sewing/Tape.js. Rendered inside
// Sewing.tsx, whose root is aria-hidden.
import "./tape.css";

export function Tape({ cn }: { cn?: string }) {
  return (
    <div className={`tape ${cn ?? ""}`}>
      <div className="tape__top" />
      <div className="tape__bottom" />
    </div>
  );
}

export default Tape;
