"use client";

import Image from "next/image";
import { useState } from "react";
import Modal from "../../components/ui/Modal";
import {
  FIBER_TYPES,
  FIBER_TYPE_ORDER,
  type FiberPiece,
  type FiberType,
} from "./data";

/**
 * "The rest of the pile": every non-favorite as a flat swatch. The swatch
 * color says what kind of piece it is, and the filter uses the same
 * markers. Tapping a swatch opens a larger photo in the notecard modal.
 */
export default function SwatchBrowser({ pieces }: { pieces: FiberPiece[] }) {
  const [filter, setFilter] = useState<FiberType | null>(null);
  const [open, setOpen] = useState<FiberPiece | null>(null);

  const types = FIBER_TYPE_ORDER.map((type) => ({
    type,
    count: pieces.filter((piece) => piece.type === type).length,
  })).filter(({ count }) => count > 0);

  const shown = filter ? pieces.filter((piece) => piece.type === filter) : pieces;

  return (
    <section className="fiber-section" aria-labelledby="fiber-rest">
      <div className="fiber-section-head">
        <h2 className="fiber-section-label" id="fiber-rest">
          The rest of the pile
        </h2>
        <span className="fiber-section-count">{shown.length} pieces</span>
      </div>

      {types.length > 1 ? (
        <div className="fiber-filter" role="group" aria-label="Filter by type">
          <button
            type="button"
            className="fiber-filter-button focus-ring"
            aria-pressed={filter === null}
            onClick={() => setFilter(null)}
          >
            All
          </button>
          {types.map(({ type, count }) => (
            <button
              key={type}
              type="button"
              className="fiber-filter-button focus-ring"
              data-type={type}
              aria-pressed={filter === type}
              onClick={() => setFilter((current) => (current === type ? null : type))}
            >
              <span className="fiber-filter-mark" aria-hidden="true" />
              {FIBER_TYPES[type].label}
              <span className="fiber-filter-count">{count}</span>
            </button>
          ))}
        </div>
      ) : null}

      <ul className="fiber-swatches">
        {shown.map((piece) => (
          <li key={piece.src}>
            <button
              type="button"
              className="fiber-swatch focus-ring"
              data-type={piece.type}
              onClick={() => setOpen(piece)}
            >
              <span className="fiber-swatch-image">
                <Image
                  src={piece.src}
                  alt={piece.title}
                  fill
                  sizes="(min-width: 64rem) 18vw, (min-width: 40rem) 30vw, 45vw"
                  className="object-contain"
                />
              </span>
              <span className="fiber-swatch-caption">
                <span>{piece.title}</span>
                {piece.year ? <span className="fiber-swatch-year">{piece.year}</span> : null}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <Modal
        open={open !== null}
        onClose={() => setOpen(null)}
        eyebrow={
          open
            ? [FIBER_TYPES[open.type].label, open.year].filter(Boolean).join(" · ")
            : ""
        }
        title={open?.title ?? ""}
        size="lg"
      >
        {open ? (
          <div className="fiber-modal-image" data-type={open.type}>
            <Image
              src={open.src}
              alt={open.title}
              fill
              sizes="(min-width: 48rem) 42rem, 90vw"
              className="object-contain"
            />
          </div>
        ) : null}
      </Modal>
    </section>
  );
}
