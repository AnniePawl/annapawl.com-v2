import "./geometric-shape.css";

/**
 * One pure-CSS shape: a single empty div, drawn entirely by the
 * `.shape--*` rules in geometric-shape.css (borders, radii, transforms).
 * Moved here from Drawing with Code. Colors come from --shape-fill and
 * --tile-bg on the parent (see ShapeCover.tsx).
 */

export type ShapeVariant =
  | "circle"
  | "square"
  | "triangle"
  | "pentagon"
  | "oval"
  | "trapezoid"
  | "octagon"
  | "parallelogram"
  | "rectangle"
  | "hexagon"
  | "star"
  | "heart";

export default function GeometricShape({
  variant,
  label,
}: {
  variant: ShapeVariant;
  label: string;
}) {
  return <div className={`shape shape--${variant}`} role="img" aria-label={label} />;
}
