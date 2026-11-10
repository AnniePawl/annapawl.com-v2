"use client";

import Image from "next/image";
import { useState } from "react";
import { FIBER_TYPES, type FiberPiece } from "./data";

/**
 * The proudest pieces, shown big. A numbered index beside the feature:
 * hovering a row previews it, clicking (or tapping, or focusing) a row
 * selects it. The selected piece stays when the pointer leaves the
 * list, so you can move to the big image without it changing.
 */
export default function FavoritesFeature({ pieces }: { pieces: FiberPiece[] }) {
  const [selected, setSelected] = useState(0);
  const [preview, setPreview] = useState<number | null>(null);
  const active = preview ?? selected;
  const piece = pieces[active];
  if (!piece) return null;

  const label = [
    `No. ${String(active + 1).padStart(2, "0")}`,
    FIBER_TYPES[piece.type].label,
    piece.year,
  ]
    .filter(Boolean)
    .join(" · ");

  return (
    <section className="fiber-section" aria-labelledby="fiber-favorites">
      <div className="fiber-section-head">
        <h2 className="fiber-section-label" id="fiber-favorites">
          Favorites
        </h2>
        <span className="fiber-section-count">{pieces.length} pieces</span>
      </div>

      <div className="fiber-feature">
        <figure className="fiber-feature-image">
          <Image
            key={piece.src}
            src={piece.src}
            alt={piece.title}
            fill
            sizes="(min-width: 64rem) 50vw, 100vw"
            className="object-contain"
            priority={active === 0}
          />
        </figure>

        <div className="fiber-feature-side">
          <span className="fiber-feature-label">{label}</span>
          <h3 className="fiber-feature-title">{piece.title}</h3>
          {piece.story ? <p className="fiber-feature-story">{piece.story}</p> : null}
          {piece.materials ? (
            <p className="fiber-feature-meta">{piece.materials}</p>
          ) : null}

          <ol className="fiber-index" onMouseLeave={() => setPreview(null)}>
            {pieces.map((item, i) => (
              <li key={item.src}>
                <button
                  type="button"
                  className="fiber-index-row focus-ring"
                  aria-pressed={i === selected}
                  onMouseEnter={() => setPreview(i)}
                  onFocus={() => setSelected(i)}
                  onClick={() => {
                    setSelected(i);
                    setPreview(null);
                  }}
                >
                  <span className="fiber-index-number">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="fiber-index-thumb">
                    <Image
                      src={item.src}
                      alt=""
                      fill
                      sizes="2.5rem"
                      className="object-contain"
                    />
                  </span>
                  <span className="fiber-index-title">{item.title}</span>
                  <span className="fiber-index-type">
                    {FIBER_TYPES[item.type].label}
                  </span>
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
