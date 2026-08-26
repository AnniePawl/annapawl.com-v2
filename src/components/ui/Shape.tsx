import { SVGAttributes } from "react";

export type ShapeVariant = "blob" | "burst" | "scallop" | "clover" | "star";

// Custom accent shapes, inspired by the idea behind Material's expressive
// shape library (decorative, non-interactive accents — not buttons) but
// drawn from scratch rather than reusing Google's actual shape set, since
// this is meant to be your own visual signature, not a borrowed one.
// All on a 200x200 viewBox so they drop in at any size via width/height.
const PATHS: Record<ShapeVariant, string> = {
  blob: "M40,100 C40,60 60,30 110,35 C160,40 175,60 170,110 C165,165 130,175 85,170 C45,165 40,140 40,100 Z",
  burst:
    "M100,10 L117.2,58.4 L163.6,36.4 L141.6,82.8 L190,100 L141.6,117.2 L163.6,163.6 L117.2,141.6 L100,190 L82.8,141.6 L36.4,163.6 L58.4,117.2 L10,100 L58.4,82.8 L36.4,36.4 L82.8,58.4 Z",
  scallop:
    "M170,100 Q182.1,122 160.6,135 Q160.1,160.1 135,160.6 Q122,182.1 100,170 Q78,182.1 65,160.6 Q39.9,160.1 39.4,135 Q17.9,122 30,100 Q17.9,78 39.4,65 Q39.9,39.9 65,39.4 Q78,17.9 100,30 Q122,17.9 135,39.4 Q160.1,39.9 160.6,65 Q182.1,78 170,100 Z",
  clover:
    "M52,58 A48,48 0 1,0 148,58 A48,48 0 1,0 52,58 Z M94,100 A48,48 0 1,0 190,100 A48,48 0 1,0 94,100 Z M52,142 A48,48 0 1,0 148,142 A48,48 0 1,0 52,142 Z M10,100 A48,48 0 1,0 106,100 A48,48 0 1,0 10,100 Z",
  // Five-point star, same hand-drawn-polygon approach as `burst` (straight
  // segments alternating an outer and inner radius) rather than a
  // perfectly regular icon-font star — for marking favorites on the
  // Bookshelf page.
  star:
    "M100,15 L119.98,72.49 L180.84,73.73 L132.34,110.51 L149.96,168.77 L100,134 L50.04,168.77 L67.66,110.51 L19.16,73.73 L80.02,72.49 Z",
};

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
      <path d={PATHS[variant]} />
    </svg>
  );
}
