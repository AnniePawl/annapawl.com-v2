// Ported from v1 src/components/css-items/teacup/teacup.js. Decorative,
// no state -- stays a server component.
import "./teacup.css";

// Four little steam squiggles that drift up out of the cup, one after
// another (see .steam__squiggle in teacup.css).
const SQUIGGLES = [0, 1, 2, 3];

export function TeaCup({ cn }: { cn?: string }) {
  return (
    <div className={`teacup-container ${cn ?? ""}`} aria-hidden="true">
      <div className="teacup" />
      <div className="steam">
        {SQUIGGLES.map((i) => (
          <svg key={i} className="steam__squiggle" viewBox="0 0 8 24">
            <path d="M4 23 C 0.5 19.5, 7.5 15.5, 4 12 S 0.5 4.5, 4 1" />
          </svg>
        ))}
      </div>
    </div>
  );
}

export default TeaCup;
