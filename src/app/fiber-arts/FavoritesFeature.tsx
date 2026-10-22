"use client";

import Image from "next/image";
import { useState } from "react";
import { FIBER_TYPES, type FiberPiece } from "./data";

/**
 * The proudest pieces, shown big. A numbered index beside the feature
 * swaps it on hover, focus, or tap.
 */
export default function FavoritesFeature({ pieces }: { pieces: FiberPiece[] }) {
  const [active, setActive] = useState(0);
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

          <ol className="fiber-index">
            {pieces.map((item, i) => (
              <li key={item.src}>
                <button
                  type="button"
                  className="fiber-index-row focus-ring"
                  aria-pressed={i === active}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
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
