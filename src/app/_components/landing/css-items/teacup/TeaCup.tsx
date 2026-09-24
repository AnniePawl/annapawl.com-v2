// Ported from v1 src/components/css-items/teacup/teacup.js. Decorative,
// no state -- stays a server component.
import "./teacup.css";

export function TeaCup({ cn }: { cn?: string }) {
  return (
    <div className={`teacup-container ${cn ?? ""}`} aria-hidden="true">
      <div className="teacup" />
      <div className="steam" />
    </div>
  );
}

export default TeaCup;
