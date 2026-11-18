"use client";

import { useLayoutEffect, useRef, useState, type ReactNode } from "react";

export type AnatomyPart = {
  n: number;
  name: string;
  desc: string;
  /** Selector for the element to outline, inside the figure. */
  el: string;
  /** Outline just the element's top edge (for lines drawn with CSS). */
  line?: boolean;
  detail?: ReactNode;
  optional?: boolean;
};

type AnatomyProps = {
  parts: AnatomyPart[];
  /** Outlined when nothing is hovered or focused. */
  defaultPart: number;
  /** The example. Gets the active part, so it can change to show it. */
  figure: (active: number) => ReactNode;
  caption: string;
  className?: string;
};

const PAD = 6;

export default function Anatomy({ parts, defaultPart, figure, caption, className }: AnatomyProps) {
  const figureRef = useRef<HTMLElement>(null);
  const highlightRef = useRef<HTMLSpanElement>(null);
  const [active, setActive] = useState(defaultPart);

  // Moves the outline straight on the element, so it never re-renders.
  useLayoutEffect(() => {
    const fig = figureRef.current;
    const highlight = highlightRef.current;
    const part = parts.find((p) => p.n === active);
    if (!fig || !highlight) return;
    const measure = () => {
      const target = part && fig.querySelector<HTMLElement>(part.el);
      highlight.hidden = !target;
      if (!part || !target) return;
      const origin = fig.getBoundingClientRect();
      const rect = target.getBoundingClientRect();
      highlight.style.left = `${rect.left - origin.left - PAD}px`;
      highlight.style.top = `${rect.top - origin.top - PAD}px`;
      highlight.style.width = `${rect.width + PAD * 2}px`;
      highlight.style.height = `${part.line ? PAD * 2 : rect.height + PAD * 2}px`;
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(fig);
    return () => observer.disconnect();
  }, [active, parts]);

  return (
    <div className={["anatomy", className].filter(Boolean).join(" ")}>
      <figure ref={figureRef} className="anatomy-figure">
        {/* A picture of the component, not a working one. */}
        <div inert>{figure(active)}</div>
        <span ref={highlightRef} className="anatomy-highlight" aria-hidden="true" hidden />
        <figcaption className="sr-only">{caption}</figcaption>
      </figure>

      <p className="anatomy-hint">
        <span className="anatomy-hint--hover">
          Hover over a part below, or tab to it, to highlight it in the example.
        </span>
        <span className="anatomy-hint--touch">Click a part below to highlight it in the example.</span>
      </p>

      <ol className="anatomy-list">
        {parts.map((p) => (
          <li key={p.n}>
            <button
              type="button"
              className={`anatomy-part focus-ring${active === p.n ? " is-active" : ""}`}
              aria-pressed={active === p.n}
              onMouseEnter={() => setActive(p.n)}
              onMouseLeave={() => setActive(defaultPart)}
              onFocus={() => setActive(p.n)}
              // iOS Safari doesn't focus a tapped button, so a click selects it too.
              onClick={() => setActive(p.n)}
              onBlur={() => setActive(defaultPart)}
            >
              <span className="anatomy-tag" aria-hidden="true">
                {p.n}
              </span>
              <span>
                <strong>{p.name}</strong>
                {p.optional && <span className="anatomy-optional">Optional</span>} {p.desc}
              </span>
            </button>
            {p.detail && <p className="anatomy-detail">{p.detail}</p>}
          </li>
        ))}
      </ol>
    </div>
  );
}
