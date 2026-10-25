import type { CSSProperties } from "react";
import GeometricShape from "./GeometricShape";
import { SHAPES } from "../shapes";
import "./shape-cover.css";

/**
 * The CSS Shapes cover: all 12 shapes as a grid of colored tiles under the
 * post header. Each tile is numbered and links to that shape's section
 * (#circle, #square...), so the cover doubles as the post's contents.
 * Tile colors live in ../shapes.ts.
 */
export default function ShapeCover() {
  return (
    <figure className="shape-cover">
      <div className="shape-cover-grid">
        {SHAPES.map((shape, i) => (
          <a
            key={shape.id}
            href={`#${shape.id}`}
            className="shape-tile focus-ring"
            style={
              {
                "--tile-soft": `var(--${shape.tile})`,
                "--tile-bold": `var(--${shape.fill})`,
              } as CSSProperties
            }
          >
            <span className="shape-tile-number" aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </span>
            <GeometricShape variant={shape.id} label={shape.label} />
          </a>
        ))}
      </div>
      <figcaption className="shape-cover-caption">
        Every shape here is a single div. Pick one to see how it’s made.
      </figcaption>
    </figure>
  );
}
