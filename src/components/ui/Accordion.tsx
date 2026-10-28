"use client";

import { useState, type CSSProperties } from "react";
import { cx } from "../../lib/cx";
import { markerColor, toneShades, type PaletteColor, type PaletteHue } from "./colorTokens";

/**
 * A single question/answer entry. `id` is optional -- when omitted, the
 * item's index in the `items` array is used instead (fine for static
 * content; pass a stable `id` if items can be reordered/filtered).
 */
export type AccordionItem = {
  id?: string;
  question: string;
  answer: string;
};

export interface AccordionProps {
  items: AccordionItem[];
  /** id (or index, as a string) of the item open on first render.
   * Nothing is open by default. */
  defaultOpenId?: string;
  /** Marker color. Questions get the hue's bold shade, answers its soft
   *  shade ("green", "green-bold" and "green-soft" all mean green).
   *  Defaults to the section color, then the page accent. */
  tone?: PaletteHue | PaletteColor;
  className?: string;
}

function toneStyle(tone: AccordionProps["tone"]): CSSProperties | undefined {
  if (!tone) return undefined;
  const { bold, soft } = toneShades(tone);
  return {
    "--accordion-marker": markerColor(tone.endsWith("-soft") ? bold : tone),
    "--accordion-marker-soft": `var(--${soft})`,
  } as CSSProperties;
}

function resolveId(item: AccordionItem, index: number): string {
  return item.id ?? String(index);
}

/**
 * Single-open FAQ accordion on cream. Hairline rules separate the rows.
 * Each question number has a bold marker and each answer a soft one, in
 * the section color by default. No container box; it sits on the page.
 */
export default function Accordion({
  items,
  defaultOpenId,
  tone,
  className,
}: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId ?? null);

  function toggle(id: string) {
    setOpenId((current) => (current === id ? null : id));
  }

  return (
    <div className={cx("accordion", className)} style={toneStyle(tone)}>
      {items.map((item, index) => {
        const id = resolveId(item, index);
        const isOpen = openId === id;
        const number = String(index + 1).padStart(2, "0");
        const panelId = `accordion-panel-${id}`;

        return (
          <div key={id} className={cx("accordion-item", isOpen && "is-open")}>
            <button
              type="button"
              className="accordion-row focus-ring"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(id)}
            >
              <span className="accordion-number" aria-hidden="true">
                {number}
              </span>
              <span className="accordion-question">{item.question}</span>
              {/* Decorative; the plus/minus glyph itself is a pure-CSS
                  pair of lines (see .accordion-control in accordion.css)
                  so switching states never swaps icon components. */}
              <span className="accordion-control" aria-hidden="true" />
            </button>
            <div id={panelId} className="accordion-panel" aria-hidden={!isOpen}>
              <div className="accordion-panel-inner">
                <p className="accordion-answer">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
