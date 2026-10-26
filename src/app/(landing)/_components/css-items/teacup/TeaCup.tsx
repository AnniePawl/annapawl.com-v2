import "./teacup.css";

// Steam squiggles that drift out of the cup
// see .steam__squiggle in teacup.css
const SQUIGGLES = [0, 1, 2, 3];

export function TeaCup({ cn }: { cn?: string }) {
  return (
    <div className={`teacup-container ${cn ?? ""}`} aria-hidden="true">
      <div className="teacup__cup" />
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
