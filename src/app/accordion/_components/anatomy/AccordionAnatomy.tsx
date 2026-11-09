"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { Squirrel } from "lucide-react";
import Accordion, { type AccordionItem } from "../../../../components/ui/Accordion";
import "./anatomy.css";

// Just one item, open, so every part is easy to see.
const ITEMS: AccordionItem[] = [
  {
    question: "Are squirrels secretly tiny gardeners?",
    answer: "Yes! Squirrels sometimes forget where they buried their nuts. The forgotten seeds can eventually sprout into new plants and trees.",
  },
]

// Each part points at an element in the real accordion (`el`, a CSS
// selector; the first match is used). Hovering or focusing a part in
// the list outlines that element in the example. `line: true` outlines
// just the element's top edge, for the divider, which is drawn with CSS
// and can't be selected on its own.
type Part = {
  n: number;
  name: string;
  desc: string;
  el: string;
  line?: boolean;
  /** Optional extra copy shown under the description. */
  detail?: React.ReactNode;
  /** A feature of this design rather than essential accordion anatomy.
   *  Shown with an "Optional" badge in the list. */
  optional?: boolean;
}

const PARTS: Part[] = [
  {
    n: 1,
    name: "Container",
    desc: "Groups the accordion items and optional title.",
    el: ".accordion",
  },
  {
    n: 2,
    name: "Title",
    desc: "Introduces the accordion and its contents.",
    el: ".accordion-title",
    optional: true,
  },
  {
    n: 3,
    name: "Item",
    desc: "Pairs one header with its associated panel.",
    el: ".accordion-item",
  },
  {
    n: 4,
    name: "Heading",
    desc: "Gives each item a place in the page outline and holds its button.",
    // The heading that wraps the button, not the button itself.
    el: ".accordion-heading",
    detail: (
      <>
        Wrap the button in a heading, like <code>&lt;h3&gt;</code>, so
        screen-reader users can jump between items. Pick the level that fits
        the page, and keep the button as the only thing inside it.
      </>
    ),
  },
  {
    n: 5,
    name: "Button",
    desc: "The trigger. Expands or collapses its panel, and holds the number, label and icon.",
    el: ".accordion-row",
  },
  {
    n: 6,
    name: "Number",
    desc: "Identifies the item with an index and section-colored marker.",
    el: ".accordion-number",
    optional: true,
  },
  {
    n: 7,
    name: "Label",
    desc: "Names the button and describes what its panel contains.",
    el: ".accordion-question",
  },
  {
    n: 8,
    name: "Icon",
    desc: "Changes from a plus to a minus to reflect the item’s state.",
    el: ".accordion-control",
    optional: true,
  },
  {
    n: 9,
    name: "Divider",
    desc: "Adds visual separation between the header and expanded panel.",
    el: ".accordion-answer",
    line: true,
    optional: true,
  },
  {
    n: 10,
    name: "Panel",
    desc: "Contains the content revealed when its button is expanded.",
    el: ".accordion-panel",
  },
]

// The part highlighted when nothing is hovered or focused: Container.
const DEFAULT_PART = 1;

// How far the outline sits outside the part it highlights (px).
const PAD = 6;

type Box = { left: number; top: number; width: number; height: number }

function boxFor(part: Part, figure: HTMLElement): Box | null {
  const target = figure.querySelector<HTMLElement>(part.el);
  if (!target) return null;
  const origin = figure.getBoundingClientRect();
  const rect = target.getBoundingClientRect();
  const top = rect.top - origin.top;
  return {
    left: rect.left - origin.left - PAD,
    top: top - PAD,
    width: rect.width + PAD * 2,
    height: part.line ? PAD * 2 : rect.height + PAD * 2,
  };
}

function Tag({ n }: { n: number }) {
  return <span className='anatomy-tag' aria-hidden='true'>{n}</span>
}
// Renders the real Accordion, so any change to the component shows up
// here too. Hover or focus a part in the list to outline it.
export default function AccordionAnatomy() {
  const figureRef = useRef<HTMLElement>(null);
  const highlightRef = useRef<HTMLSpanElement>(null);
  // Starts on the container, and returns there when nothing is hovered
  // or focused, so the example always shows one part outlined.
  const [active, setActive] = useState(DEFAULT_PART);

  // Positions the outline straight on the element (no state), so moving
  // it never causes an extra render.
  useLayoutEffect(() => {
    const figure = figureRef.current;
    const highlight = highlightRef.current;
    const part = PARTS.find((p) => p.n === active);
    if (!figure || !highlight) return;
    if (!part) {
      highlight.hidden = true;
      return;
    }
    const measure = () => {
      const box = boxFor(part, figure);
      highlight.hidden = !box;
      if (!box) return;
      highlight.style.left = `${box.left}px`;
      highlight.style.top = `${box.top}px`;
      highlight.style.width = `${box.width}px`;
      highlight.style.height = `${box.height}px`;
    };
    measure();
    // Re-measure if the layout changes while a part is highlighted.
    const observer = new ResizeObserver(measure);
    observer.observe(figure);
    return () => observer.disconnect();
  }, [active]);

  return (
    <div className='anatomy'>
      <figure ref={figureRef} className="anatomy-figure">
        {/* not clickable, not focusable, hidden from screen readers.
        It's a picture of an accordion, not a working one. */}
        <div inert>
          <Accordion title="Squirrel Secrets" titleIcon={Squirrel} items={ITEMS} defaultOpenId="0" />
        </div>
        <span ref={highlightRef} className="anatomy-highlight" aria-hidden="true" hidden />
        <figcaption className="sr-only">
          An open accordion item. Its parts are described in the list below.
        </figcaption>
      </figure>

      {/* Mouse users hover; on touch screens there's no hover, so the
          hint asks for a click instead (see .anatomy-hint in anatomy.css). */}
      <p className="anatomy-hint">
        <span className="anatomy-hint--hover">
          Hover over a part below, or tab to it, to highlight it in the example.
        </span>
        <span className="anatomy-hint--touch">
          Click a part below to highlight it in the example.
        </span>
      </p>

      {/* Description of parts */}
      <ol className="anatomy-list">
        {PARTS.map((p) => (
          <li key={p.n}>
            <button
              type="button"
              className={`anatomy-part focus-ring${active === p.n ? " is-active" : ""}`}
              // Tells screen readers which part is currently highlighted.
              aria-pressed={active === p.n}
              onMouseEnter={() => setActive(p.n)}
              onMouseLeave={() => setActive(DEFAULT_PART)}
              onFocus={() => setActive(p.n)}
              // Touch screens don't always focus a tapped button (iOS
              // Safari doesn't), so a click selects the part too.
              onClick={() => setActive(p.n)}
              onBlur={() => setActive(DEFAULT_PART)}
            >
              <Tag n={p.n} />
              <span>
                <strong>{p.name}</strong>
                {p.optional && <span className="anatomy-optional">Optional</span>}{" "}
                {p.desc}
              </span>
            </button>
            {p.detail && <p className="anatomy-detail">{p.detail}</p>}
          </li>
        ))}
      </ol>
    </div>
  )
}
