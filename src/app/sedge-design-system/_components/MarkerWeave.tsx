/**
 * Hero visual: a grid of the small upright markers used throughout Sedge
 * (subheadings, callouts, badges), in many palette colors with gaps, like
 * a cross-stitch or a weave. Each marker floats gently on its own rhythm;
 * hovering one lifts it a little further.
 *
 * The pattern is generated from a fixed seed, so server and client render
 * the same markup (no hydration mismatch) and it never reshuffles.
 */

// Every family in the palette, bold and soft.
const TONES = [
  "pink-bold",
  "pink-soft",
  "red-bold",
  "red-soft",
  "cherry-bold",
  "cherry-soft",
  "coral-bold",
  "coral-soft",
  "orange-bold",
  "orange-soft",
  "marigold-bold",
  "marigold-soft",
  "lemon-bold",
  "lemon-soft",
  "lime-bold",
  "lime-soft",
  "sage-bold",
  "sage-soft",
  "moss-bold",
  "moss-soft",
  "mint-bold",
  "mint-soft",
  "emerald-bold",
  "emerald-soft",
  "sky-bold",
  "periwinkle-soft",
  "blue-bold",
  "blue-soft",
  "slate-bold",
  "slate-soft",
  "iris-bold",
  "iris-soft",
  "lilac-bold",
  "lilac-soft",
  "plum-bold",
  "plum-soft",
  "mauve-bold",
  "mauve-soft",
  "clay-bold",
  "clay-soft",
];

const COLUMNS = 10;
const ROWS = 11;
const DENSITY = 0.7;

// Small deterministic PRNG (mulberry32).
function seeded(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type Cell = { tone: string | null; delay: number; duration: number };

const CELLS: Cell[] = (() => {
  const random = seeded(4);
  return Array.from({ length: COLUMNS * ROWS }, () => {
    const filled = random() < DENSITY;
    const tone = TONES[Math.floor(random() * TONES.length)];
    return {
      tone: filled ? tone : null,
      delay: Math.round(random() * 4000) / 1000,
      duration: Math.round((3.6 + random() * 2.8) * 100) / 100,
    };
  });
})();

export default function MarkerWeave({ className }: { className?: string }) {
  return (
    <div
      className={`marker-weave ${className ?? ""}`}
      style={{ gridTemplateColumns: `repeat(${COLUMNS}, minmax(0, 1fr))` }}
      aria-hidden="true"
    >
      {CELLS.map((cell, i) =>
        cell.tone ? (
          <span key={i} className="marker-weave-cell">
            <i
              className="marker-weave-marker"
              style={
                {
                  background: `var(--${cell.tone})`,
                  animationDelay: `-${cell.delay}s`,
                  animationDuration: `${cell.duration}s`,
                } as React.CSSProperties
              }
            />
          </span>
        ) : (
          <span key={i} className="marker-weave-cell" />
        )
      )}
    </div>
  );
}
