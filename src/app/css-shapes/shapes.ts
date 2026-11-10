import type { PaletteColor } from "../../components/ui/colorTokens";
import type { ShapeVariant } from "./_components/GeometricShape";

/**
 * The 12 shapes in teaching order. Every shape uses concepts from the
 * shapes before it. One list feeds the cover grid, the contents list and
 * the section colors, so they always match. Colors go by position, so
 * the first tile is always yellow and pink whatever shape sits there.
 */
export const SHAPES: {
  id: ShapeVariant;
  label: string;
  tile: PaletteColor;
  fill: PaletteColor;
}[] = [
  { id: "square", label: "Square", tile: "marigold-soft", fill: "pink-bold" },
  { id: "rectangle", label: "Rectangle", tile: "coral-soft", fill: "green-bold" },
  { id: "circle", label: "Circle", tile: "teal-soft", fill: "periwinkle-bold" },
  { id: "oval", label: "Oval", tile: "lilac-soft", fill: "marigold-soft" },
  { id: "parallelogram", label: "Parallelogram", tile: "sky-soft", fill: "coral-bold" },
  { id: "triangle", label: "Triangle", tile: "lime-soft", fill: "teal-bold" },
  { id: "trapezoid", label: "Trapezoid", tile: "green-soft", fill: "lilac-bold" },
  { id: "pentagon", label: "Pentagon", tile: "periwinkle-soft", fill: "blue-bold" },
  { id: "hexagon", label: "Hexagon", tile: "lemon-soft", fill: "emerald-bold" },
  { id: "octagon", label: "Octagon", tile: "pink-soft", fill: "red-bold" },
  { id: "star", label: "Star", tile: "mint-soft", fill: "iris-bold" },
  { id: "heart", label: "Heart", tile: "iris-soft", fill: "cherry-bold" },
];
