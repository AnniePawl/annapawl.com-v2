import Image from "next/image";
import { TILE_COLORS, rowImages } from "./data";
import "./embroidery.css";

type Direction = "left" | "right";

interface Row {
  images: string[];
  direction: Direction;
  duration: number;
  mobileOnly?: boolean;
}

// Three rotations of the same 36 images, each scrolling at its own speed and
// direction. Row 3 only shows on mobile — on desktop the tiles are bigger and
// two rows already fill the page.
const ROWS: Row[] = [
  { images: rowImages(0), direction: "left", duration: 100 },
  { images: rowImages(13), direction: "right", duration: 85 },
  { images: rowImages(26), direction: "left", duration: 90, mobileOnly: true },
];

function Tile({ filename, index }: { filename: string; index: number }) {
  const color = TILE_COLORS[index % TILE_COLORS.length];

  return (
    <div className={`embroidery-tile ${color}`}>
      <div className="embroidery-tile-image">
        <Image
          src={`/embroidery/${filename}`}
          alt={`Embroidery piece ${index + 1}`}
          fill
          sizes="(min-width: 768px) 256px, 176px"
          className="object-contain"
        />
      </div>
    </div>
  );
}

function MarqueeRow({ images, direction, duration, mobileOnly }: Row) {
  // Render the row twice back-to-back so a 50% translate loops seamlessly.
  const track = [...images, ...images];

  return (
    <div className={`embroidery-row ${mobileOnly ? "md:hidden" : ""}`}>
      <div
        className={`embroidery-track ${
          direction === "right" ? "embroidery-track--reverse" : ""
        }`}
        style={{ animationDuration: `${duration}s` }}
      >
        {track.map((filename, i) => (
          <Tile key={`${filename}-${i}`} filename={filename} index={i} />
        ))}
      </div>
    </div>
  );
}

export default function EmbroideryPage() {
  return (
    <main className="embroidery-page flex min-h-screen w-full flex-col items-center pb-8 pt-16 md:pb-12">
      <h1 className="h1 text-center">Embroidery</h1>

      <div className="mt-10 flex w-full flex-col gap-2 md:mt-12 md:gap-4">
        {ROWS.map((row, i) => (
          <MarqueeRow key={i} {...row} />
        ))}
      </div>
    </main>
  );
}
