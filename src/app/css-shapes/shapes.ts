import type { PaletteColor } from "../../components/ui/colorTokens";
import type { ShapeVariant } from "./_components/GeometricShape";

/**
 * The 12 shapes, in order. One list feeds the cover grid, the contents
 * list and the section colors, so they always match.
 *   tile -- the tile's soft background
 *   fill -- the shape's bold color (also the section's marker tone)
 */
export const SHAPES: {
  id: ShapeVariant;
  label: string;
  tile: PaletteColor;
  fill: PaletteColor;
}[] = [
  { id: "circle", label: "Circle", tile: "marigold-soft", fill: "pink-bold" },
  { id: "square", label: "Square", tile: "coral-soft", fill: "green-bold" },
  { id: "triangle", label: "Triangle", tile: "teal-soft", fill: "periwinkle-bold" },
  { id: "pentagon", label: "Pentagon", tile: "lilac-soft", fill: "marigold-soft" },
  { id: "oval", label: "Oval", tile: "sky-soft", fill: "coral-bold" },
  { id: "trapezoid", label: "Trapezoid", tile: "lime-soft", fill: "teal-bold" },
  { id: "octagon", label: "Octagon", tile: "green-soft", fill: "lilac-bold" },
  { id: "parallelogram", label: "Parallelogram", tile: "periwinkle-soft", fill: "blue-bold" },
  { id: "rectangle", label: "Rectangle", tile: "lemon-soft", fill: "emerald-bold" },
  { id: "hexagon", label: "Hexagon", tile: "pink-soft", fill: "red-bold" },
  { id: "star", label: "Star", tile: "mint-soft", fill: "iris-bold" },
  { id: "heart", label: "Heart", tile: "iris-soft", fill: "cherry-bold" },
];
