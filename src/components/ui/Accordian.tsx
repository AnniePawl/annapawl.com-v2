"use client";

import { useState } from "react";
import { cx } from "../../lib/cx";

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
  className?: string;
}

function resolveId(item: AccordionItem, index: number): string {
  return item.id ?? String(index);
}

/**
 * Soft-editorial, single-open FAQ accordion. One continuous pale-lavender
 * container (see foundations/../components/accordion.css) rather than a
 * card per row -- rows are separated by thin dividers, not their own
 * background/radius. Deliberately stays in its own fixed light palette
 * regardless of the surrounding page's theme; see accordion.css.
 */
export default function Accordian({
  items,
  defaultOpenId,
  className,
}: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId ?? null);

  function toggle(id: string) {
    setOpenId((current) => (current === id ? null : id));
  }

  return (
    <div className={cx("accordion", className)}>
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
