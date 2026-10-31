"use client";

import { useLayoutEffect, useRef, useState } from "react";
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
}

const PARTS: Part[] = [
  { n: 1, name: "Container", desc: "The wrapper that groups everything together.", el: ".accordion" },
  { n: 2, name: "Title", desc: "An optional heading, in the section color.", el: ".accordion-title" },
  { n: 3, name: "Item", desc: "One header plus its panel, the \"drawer.\"", el: ".accordion-item" },
  {
    n: 4,
    name: "Header",
    desc: "The clickable button that toggles the item.",
    el: ".accordion-row",
    detail: (
      <>
        For an accordion, it is generally best practice to wrap each trigger
        button in a heading element such as <code>&lt;h2&gt;</code> or{" "}
        <code>&lt;h3&gt;</code>. This gives the page a meaningful outline and
        lets screen-reader users navigate between accordion sections by
        heading. Use the heading level that fits the page hierarchy.
      </>
    ),
  },
  { n: 5, name: "Number", desc: "Counts the items, with a marker in the section color.", el: ".accordion-number" },
  { n: 6, name: "Label", desc: "Tells people what's inside the drawer.", el: ".accordion-question" },
  { n: 7, name: "Icon", desc: "Turns from a plus into a minus to show open or closed.", el: ".accordion-control" },
  { n: 8, name: "Divider", desc: "A colored line between question and answer, only when open.", el: ".accordion-answer", line: true },
  { n: 9, name: "Panel", desc: "The content revealed when the item is open.", el: ".accordion-panel" },
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
          <Accordion title="Squirrel Secrets" items={ITEMS} defaultOpenId="0" />
        </div>
        <span ref={highlightRef} className="anatomy-highlight" aria-hidden="true" hidden />
        <figcaption className="sr-only">
          An open accordion item. Its parts are described in the list below.
        </figcaption>
      </figure>

      <p className="anatomy-hint">
        Hover over a part below, or tab to it, to highlight it in the example.
      </p>

      {/* Description of parts */}
      <ol className="anatomy-list">
        {PARTS.map((p) => (
          <li key={p.n}>
            <button
              type="button"
              className={`anatomy-part focus-ring${active === p.n ? " is-active" : ""}`}
              onMouseEnter={() => setActive(p.n)}
              onMouseLeave={() => setActive(DEFAULT_PART)}
              onFocus={() => setActive(p.n)}
              onBlur={() => setActive(DEFAULT_PART)}
            >
              <Tag n={p.n} />
              <span>
                <strong>{p.name}</strong> {p.desc}
              </span>
            </button>
            {p.detail && <p className="anatomy-detail">{p.detail}</p>}
          </li>
        ))}
      </ol>
    </div>
  )
}
