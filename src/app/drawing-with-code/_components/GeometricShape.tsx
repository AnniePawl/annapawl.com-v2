/**
 * One pure-CSS shape, ported from the old annapawl.com "dwc" page — where
 * each shape lived as its own near-identical file (Circle.tsx, Square.tsx,
 * ...) that just rendered a styled empty div. Collapsed here into a single
 * component with a `variant` prop instead, since all 12 were byte-for-byte
 * the same wrapper around a different CSS class — the geometry itself
 * (border tricks, mostly) lives in drawing-with-code.css's
 * `.dwc-shape--*` rules, faithfully ported from the old css-shapes.scss.
 *
 * Color comes entirely from the `--shape-fill` custom property set by the
 * parent `.dwc-shapebox` (see ShapesGrid.tsx) — this component doesn't
 * know or care which hue it's rendering.
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
  return (
    <div
      className={`dwc-shape dwc-shape--${variant}`}
      role="img"
      aria-label={label}
    />
  );
}
