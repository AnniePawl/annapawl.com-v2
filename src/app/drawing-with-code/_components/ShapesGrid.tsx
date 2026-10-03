import GeometricShape, { ShapeVariant } from "./GeometricShape";

/**
 * Reverted to the original ShapesGrid.js's exact design per Anna's request
 * — same 12 shapes, same order, same hardcoded box/shape colors as the old
 * shapegrid.scss + css-shapes.scss (kept as a reference palette in
 * claude/project-status.md). Colors now live in drawing-with-code.css as
 * literal hex, indexed by dwc-shapebox-1..12, mirroring the old page's own
 * shapebox-1..12 classes. Still fixes the real bug in the original: it
 * imported `Octagon` twice, once aliased as `Heart`
 * ("import Heart from './shapes/Octagon'"), so the grid never actually
 * rendered the Heart component or its `.heart` CSS. This renders the real
 * heart shape instead.
 */
const SHAPES: { variant: ShapeVariant; label: string }[] = [
  { variant: "circle", label: "Circle" },
  { variant: "square", label: "Square" },
  { variant: "triangle", label: "Triangle" },
  { variant: "pentagon", label: "Pentagon" },
  { variant: "oval", label: "Oval" },
  { variant: "trapezoid", label: "Trapezoid" },
  { variant: "octagon", label: "Octagon" },
  { variant: "parallelogram", label: "Parallelogram" },
  { variant: "rectangle", label: "Rectangle" },
  { variant: "hexagon", label: "Hexagon" },
  { variant: "star", label: "Star" },
  { variant: "heart", label: "Heart" },
];

export default function ShapesGrid() {
  return (
    <div className="dwc-shapes-grid">
      {SHAPES.map((shape, i) => (
        <div className={`dwc-shapebox dwc-shapebox-${i + 1}`} key={shape.variant}>
          <GeometricShape variant={shape.variant} label={shape.label} />
        </div>
      ))}
    </div>
  );
}
