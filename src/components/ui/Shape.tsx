import { SVGAttributes } from "react";

export type ShapeVariant = "blob" | "burst" | "scallop" | "clover" | "bloom" | "petals" | "organic";

// Custom accent shapes, inspired by the idea behind Material's expressive
// shape library (decorative, non-interactive accents — not buttons) but
// drawn from scratch rather than reusing Google's actual shape set, since
// this is meant to be your own visual signature, not a borrowed one.
// All on a 200x200 viewBox so they drop in at any size via width/height.
// "bloom" is rendered separately (see bloomPetals() below) rather than
// through this table, since it needs multiple ellipses, not one path.
const PATHS: Record<Exclude<ShapeVariant, "bloom" | "petals">, string> = {
  blob: "M40,100 C40,60 60,30 110,35 C160,40 175,60 170,110 C165,165 130,175 85,170 C45,165 40,140 40,100 Z",
  // "organic" is Card's "organic oval" example (see the Card redesign's
  // card.css .card-accent--organic) — same path as `blob`, just given a
  // non-uniform box + rotation there so it reads as a stretched oval
  // instead of blob's rounder upper-right placement. Kept as its own
  // named variant (not a className hack on top of "blob") so the
  // accent={ShapeVariant} API stays the single source of truth for both
  // which Shape renders and which .card-accent--* placement rule
  // applies.
  organic: "M40,100 C40,60 60,30 110,35 C160,40 175,60 170,110 C165,165 130,175 85,170 C45,165 40,140 40,100 Z",
  burst:
    "M100,10 L117.2,58.4 L163.6,36.4 L141.6,82.8 L190,100 L141.6,117.2 L163.6,163.6 L117.2,141.6 L100,190 L82.8,141.6 L36.4,163.6 L58.4,117.2 L10,100 L58.4,82.8 L36.4,36.4 L82.8,58.4 Z",
  scallop:
    "M170,100 Q182.1,122 160.6,135 Q160.1,160.1 135,160.6 Q122,182.1 100,170 Q78,182.1 65,160.6 Q39.9,160.1 39.4,135 Q17.9,122 30,100 Q17.9,78 39.4,65 Q39.9,39.9 65,39.4 Q78,17.9 100,30 Q122,17.9 135,39.4 Q160.1,39.9 160.6,65 Q182.1,78 170,100 Z",
  clover:
    "M52,58 A48,48 0 1,0 148,58 A48,48 0 1,0 52,58 Z M94,100 A48,48 0 1,0 190,100 A48,48 0 1,0 94,100 Z M52,142 A48,48 0 1,0 148,142 A48,48 0 1,0 52,142 Z M10,100 A48,48 0 1,0 106,100 A48,48 0 1,0 10,100 Z",
  // "bloom" isn't in this table — a single overlapping-circle path (the
  // same technique as `clover` above, just with 6 circles) read as just
  // another rounded blob rather than a flower once actually rendered
  // (radius had to exceed the offset for the petals to connect into one
  // shape at all, which flattens out any petal/notch definition). It's
  // rendered as a small cluster of ellipses instead — see BLOOM_PETALS
  // and the variant check in the component below.
};

// Six elongated petal ellipses radiating from center (100,100) at 60°
// apart, plus a center circle so the hub has no gap — this is what
// actually reads as a flower/bloom (unlike the circle-union attempt
// above, real petals need to be narrower than they are long). Angles
// start at -90° (petal pointing straight up) and go clockwise in SVG's
// y-down coordinate space.
const BLOOM_PETAL_ANGLES = [-90, -30, 30, 90, 150, 210];
const BLOOM_PETAL_DISTANCE = 48;
const BLOOM_PETAL_RX = 40;
const BLOOM_PETAL_RY = 22;
const BLOOM_CENTER_R = 26;

function bloomPetals() {
  return BLOOM_PETAL_ANGLES.map((angle) => {
    const rad = (angle * Math.PI) / 180;
    const cx = 100 + BLOOM_PETAL_DISTANCE * Math.cos(rad);
    const cy = 100 + BLOOM_PETAL_DISTANCE * Math.sin(rad);
    return (
      <ellipse
        key={angle}
        cx={cx}
        cy={cy}
        rx={BLOOM_PETAL_RX}
        ry={BLOOM_PETAL_RY}
        transform={`rotate(${angle} ${cx} ${cy})`}
      />
    );
  });
}

// "petals" — 2-3 loose petal ellipses for Card's decorative accent (see
// the Card redesign's "Violet / petals" example), not radiating evenly
// around one center the way bloomPetals() does — hand-placed instead so
// they read as a few petals drifting near the edge rather than a tight
// flower. No center hub circle, unlike "bloom".
const LOOSE_PETALS = [
  { cx: 72, cy: 58, rx: 46, ry: 24, rotate: -25 },
  { cx: 132, cy: 104, rx: 40, ry: 21, rotate: 20 },
  { cx: 88, cy: 152, rx: 34, ry: 18, rotate: 75 },
];

function loosePetals() {
  return LOOSE_PETALS.map(({ cx, cy, rx, ry, rotate }, i) => (
    <ellipse
      key={i}
      cx={cx}
      cy={cy}
      rx={rx}
      ry={ry}
      transform={`rotate(${rotate} ${cx} ${cy})`}
    />
  ));
}

export interface ShapeProps
  extends Omit<SVGAttributes<SVGSVGElement>, "viewBox"> {
  variant: ShapeVariant;
}

/**
 * Decorative accent shape — not a clickable target. Color comes from
 * `currentColor`, same convention as lucide-react icons, so it's
 * controlled the normal way: `<Shape variant="blob" className="text-lime-bold" />`
 * or `style={{ color: "var(--pink-soft)" }}`.
 */
export default function Shape({ variant, ...rest }: ShapeProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="currentColor"
      aria-hidden="true"
      {...rest}
    >
      {variant === "bloom" ? (
        <>
          {bloomPetals()}
          <circle cx={100} cy={100} r={BLOOM_CENTER_R} />
        </>
      ) : variant === "petals" ? (
        <>{loosePetals()}</>
      ) : (
        <path d={PATHS[variant]} />
      )}
    </svg>
  );
}
