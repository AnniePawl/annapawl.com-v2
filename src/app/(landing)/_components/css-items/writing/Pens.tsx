// Ported from v1 src/components/css-items/writing/Pens.js (the cup of
// pens/pencils/ruler). v1's writing.js (paper + cup) was never used on
// the landing page, so it isn't ported. Decorative, no state -- stays a
// server component.
import "./pens.css";

export function Pens({ cn }: { cn?: string }) {
  return (
    <div className={`cup-container ${cn ?? ""}`} aria-hidden="true">
      <div className="cup-contents">
        <div className="ruler" />
        <div className="pen" />
        <div className="pencil pencil--1" />
        <div className="pencil pencil--2" />
      </div>
      <div className="cup" />
    </div>
  );
}

export default Pens;
