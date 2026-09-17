import { SVGAttributes } from "react";

export type ShapeVariant = "blob" | "burst" | "scallop" | "clover" | "bloom" | "flower" | "petals" | "organic" | "quatrefoil" | "circle" | "ring";

// Custom accent shapes, inspired by the idea behind Material's expressive
// shape library (decorative, non-interactive accents — not buttons) but
// drawn from scratch rather than reusing Google's actual shape set, since
// this is meant to be your own visual signature, not a borrowed one.
// All on a 200x200 viewBox so they drop in at any size via width/height.
// "bloom" is rendered separately (see bloomPetals() below) rather than
// through this table, since it needs multiple ellipses, not one path.
// Four rounded petals arranged diagonally (NE/SE/SW/NW) around a
// shared center at (100,100). Each petal is a single "raindrop": one
// smooth rounded outer tip (a circle of radius 28) joined by two
// straight tangent lines back down to a sharp point exactly at the
// shared center. That sharp taper is what gives the deep, clearly
// V-shaped gap between neighboring petals (unlike the previous
// heart-leaf pass, where each leaf had its own two-lobe notch and
// read as eight petals instead of four) -- here every petal has
// exactly one rounded lobe, tapering cleanly to a point, so the
// silhouette stays a clear four-petal clover at any size.
// Exported separately (not just baked into PATHS.clover below) so
// HeroNav.tsx's interactive logo can render each petal as its own
// <path> and recolor just the NE one on hover/focus, while the
// decorative `clover` Shape variant renders all four as a single
// currentColor path -- same shared geometry, two consumers.
export const CLOVER_LEAF_PATHS = {
  NE: "M100.00,100.00 L142.79,90.58 A28,28 0 1,0 109.42,57.21 L100.00,100.00 Z",
  SE: "M100.00,100.00 L109.42,142.79 A28,28 0 1,0 142.79,109.42 L100.00,100.00 Z",
  SW: "M100.00,100.00 L57.21,109.42 A28,28 0 1,0 90.58,142.79 L100.00,100.00 Z",
  NW: "M100.00,100.00 L90.58,57.21 A28,28 0 1,0 57.21,90.58 L100.00,100.00 Z",
};

const PATHS: Record<Exclude<ShapeVariant, "bloom" | "flower" | "petals" | "quatrefoil" | "circle" | "ring">, string> = {
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
  // Simplified from the heart-leaf pass down to four single-lobe
  // petals (see CLOVER_LEAF_PATHS above) meeting tip-to-tip at center
  // -- reads clearly as a four-petal clover with deep V gaps instead
  // of eight smaller bumps. Concatenating the four petal paths into
  // one `d` works the same way earlier clover geometries did
  // (multiple M..Z subpaths in one path, non-overlapping so
  // fill-rule doesn't matter) -- this is now also the logo mark's
  // base geometry (see HeroNav.tsx, which renders the same four
  // paths individually instead so it can recolor just one petal on
  // hover/focus).
  clover: Object.values(CLOVER_LEAF_PATHS).join(" "),
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

// "flower" — six evenly-spaced rounded petals, same radiating-ellipse
// technique as "bloom" but pulled in closer to center (distance 38 vs
// bloom's 48) and slightly plumper (rx/ry 46/24 vs 40/22) so the
// petals themselves overlap enough at the middle to read as one solid
// silhouette -- no separate center circle needed the way bloom has
// one. Petals stay clearly separated (each is narrower than the gap
// between two neighbors) so it reads as six distinct petals rather
// than collapsing into a blob.
const FLOWER_PETAL_ANGLES = [-90, -30, 30, 90, 150, 210];
const FLOWER_PETAL_DISTANCE = 38;
const FLOWER_PETAL_RX = 46;
const FLOWER_PETAL_RY = 24;

function flowerPetals() {
  return FLOWER_PETAL_ANGLES.map((angle) => {
    const rad = (angle * Math.PI) / 180;
    const cx = 100 + FLOWER_PETAL_DISTANCE * Math.cos(rad);
    const cy = 100 + FLOWER_PETAL_DISTANCE * Math.sin(rad);
    return (
      <ellipse
        key={angle}
        cx={cx}
        cy={cy}
        rx={FLOWER_PETAL_RX}
        ry={FLOWER_PETAL_RY}
        transform={`rotate(${angle} ${cx} ${cy})`}
      />
    );
  });
}

// "quatrefoil" — 4 overlapping circles centered on the diagonals
// (NE/SE/SW/NW), radius === distance-from-center so all 4 petals meet
// at one shared point with a sharp cusp between neighbors. This used
// to be the HeroNav logo mark; the logo now reuses the refined
// `clover` variant instead (see the comment on `clover` in the PATHS
// table above) so the nav mark and the hero's decorative clover stay
// the same shape on purpose, per the "soft four-leaf clover" pass --
// sharp cusps read as too pointy for that brief. Left here as its own
// standalone variant rather than deleted, in case the sharper
// diagonal look is wanted again elsewhere.
const QUATREFOIL_PETAL_R = 55;
const QUATREFOIL_CENTERS = [
  { cx: 138.9, cy: 61.1 }, // upper-right
  { cx: 138.9, cy: 138.9 }, // lower-right
  { cx: 61.1, cy: 138.9 }, // lower-left
  { cx: 61.1, cy: 61.1 }, // upper-left
];

function quatrefoilPetals() {
  return QUATREFOIL_CENTERS.map(({ cx, cy }, i) => (
    <circle key={i} cx={cx} cy={cy} r={QUATREFOIL_PETAL_R} />
  ));
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
      ) : variant === "flower" ? (
        <>{flowerPetals()}</>
      ) : variant === "petals" ? (
        <>{loosePetals()}</>
      ) : variant === "quatrefoil" ? (
        <>{quatrefoilPetals()}</>
      ) : variant === "circle" ? (
        // Plain filled dot -- small, evenly-round accent for pairing
        // with the bigger blob/scallop shapes (see the Sedge hero
        // cluster).
        <circle cx={100} cy={100} r={88} />
      ) : variant === "ring" ? (
        // Outlined circle. Overrides the svg's inherited fill (set via
        // the `fill="currentColor"` attribute below) with fill="none",
        // then re-applies currentColor as the stroke -- same
        // color-via-currentColor convention as every other variant,
        // just drawn hollow instead of solid.
        <circle
          cx={100}
          cy={100}
          r={70}
          fill="none"
          stroke="currentColor"
          strokeWidth={20}
        />
      ) : (
        <path d={PATHS[variant]} />
      )}
    </svg>
  );
}
