import "./geometric-shape.css";

// Pure CSS shapes

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
