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

type HeadingLevel = "h2" | "h3" | "h4" | "h5" | "h6";

const NEXT_LEVEL: Record<HeadingLevel, HeadingLevel> = {
  h2: "h3",
  h3: "h4",
  h4: "h5",
  h5: "h6",
  h6: "h6",
};

export interface AccordionProps {
  items: AccordionItem[];
  /** Optional heading above the rows, in the accordion's tone (the
   *  section color by default, or `tone` when one is passed). */
  title?: string;
  /** Heading level for `title`, so it fits the page's outline.
   *  Defaults to h3. */
  titleAs?: HeadingLevel;
  /** Heading level wrapping each item's button, so screen-reader users
   *  can jump between items by heading. Defaults to one level below
   *  `titleAs` when there's a title (h4 under an h3), otherwise h3.
   *  Visually it adds nothing; the row looks the same at any level. */
  itemHeadingAs?: HeadingLevel;
  /** id (or index, as a string) of the item open on first render.
   * Nothing is open by default. */
  defaultOpenId?: string;
  /** Accent color for the title, the markers and the open-item line.
   *  Questions get the hue's bold shade, answers its soft shade ("green",
   *  "green-bold" and "green-soft" all mean green). Defaults to the
   *  section color, then the page accent. */
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
 * the section color by default. An optional title sits above the rows,
 * and an open item gets a colored hairline between question and answer.
 * No container box; it sits on the page.
 */
export default function Accordion({
  items,
  title,
  titleAs: TitleTag = "h3",
  itemHeadingAs,
  defaultOpenId,
  tone,
  className,
}: AccordionProps) {
  const ItemHeading: HeadingLevel =
    itemHeadingAs ?? (title ? NEXT_LEVEL[TitleTag] : "h3");
  const [openId, setOpenId] = useState<string | null>(defaultOpenId ?? null);

  function toggle(id: string) {
    setOpenId((current) => (current === id ? null : id));
  }

  return (
    <div className={cx("accordion", className)} style={toneStyle(tone)}>
      {title && <TitleTag className="accordion-title">{title}</TitleTag>}
      {items.map((item, index) => {
        const id = resolveId(item, index);
        const isOpen = openId === id;
        const number = String(index + 1).padStart(2, "0");
        const panelId = `accordion-panel-${id}`;

        return (
          <div key={id} className={cx("accordion-item", isOpen && "is-open")}>
            {/* Each button sits in a heading so the items show up in the
                page outline. .accordion-heading resets it to look like
                nothing, so the row is styled by the button alone. */}
            <ItemHeading className="accordion-heading">
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
            </ItemHeading>
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
