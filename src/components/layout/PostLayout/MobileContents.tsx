"use client";

import { useEffect, useId, useState, type CSSProperties } from "react";
import type { PostContentsItem } from "./PostLayout";

type Segment = { id: string; weight: number; progress: number };

/**
 * Phones only (CSS hides it on wider screens). Once the contents list
 * scrolls out of view, a strip of section colors pins to the top: each
 * segment is as long as its section and fills as you read. The label
 * under it names the current section; tap it to jump anywhere.
 */
export default function MobileContents({
  items,
  label = "Contents",
}: {
  items: PostContentsItem[];
  label?: string;
}) {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const [segments, setSegments] = useState<Segment[]>(
    items.map((item) => ({ id: item.id, weight: 1, progress: 0 })),
  );
  const listId = useId();

  // Show the bar once the page's own contents list has scrolled away.
  useEffect(() => {
    const nav = document.querySelector(".post-contents");
    if (!nav) return;
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(!entry.isIntersecting && entry.boundingClientRect.top < 0);
    });
    observer.observe(nav);
    return () => observer.disconnect();
  }, []);

  // Size each segment by its section's height, and fill it as you read.
  useEffect(() => {
    let frame = 0;
    const measure = () => {
      frame = 0;
      const line = window.scrollY + window.innerHeight * 0.3;
      let active = 0;
      const next = items.map((item, i) => {
        const el = document.getElementById(item.id);
        if (!el) return { id: item.id, weight: 1, progress: 0 };
        const top = el.getBoundingClientRect().top + window.scrollY;
        const height = el.offsetHeight || 1;
        if (line >= top) active = i;
        const progress = Math.min(1, Math.max(0, (line - top) / height));
        return { id: item.id, weight: height, progress };
      });
      setSegments(next);
      setCurrent(active);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [items]);

  // Escape closes the list.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const tone = (i: number) => `var(--${items[i]?.tone ?? "iris-bold"})`;

  return (
    <div
      className="mobile-contents"
      data-visible={visible || open ? "" : undefined}
      aria-hidden={visible || open ? undefined : true}
    >
      <div className="mobile-contents-strip" aria-hidden="true">
        {segments.map((seg, i) => (
          <span
            key={seg.id}
            style={
              {
                flexGrow: seg.weight,
                "--seg-color": tone(i),
                "--seg-fill": `${seg.progress * 100}%`,
              } as CSSProperties
            }
          />
        ))}
      </div>

      <button
        type="button"
        className="mobile-contents-toggle focus-ring"
        aria-expanded={open}
        aria-controls={listId}
        tabIndex={visible || open ? 0 : -1}
        onClick={() => setOpen((o) => !o)}
      >
        <span
          className="mobile-contents-mark"
          style={{ background: tone(current) }}
          aria-hidden="true"
        />
        <span className="mobile-contents-current">
          <span className="sr-only">{label}: </span>
          {items[current]?.label}
        </span>
        <span className="mobile-contents-caret" aria-hidden="true">
          {open ? "▴" : "▾"}
        </span>
      </button>

      {open ? (
        <>
          <button
            type="button"
            className="mobile-contents-scrim"
            aria-label="Close contents"
            onClick={() => setOpen(false)}
          />
          <nav id={listId} className="mobile-contents-panel" aria-label={label}>
            <ol>
              {items.map((item, i) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={i === current ? "location" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    <span style={{ background: tone(i) }} aria-hidden="true" />
                    {item.label}
                    {i === current ? (
                      <em className="mobile-contents-here">You&rsquo;re here</em>
                    ) : null}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </>
      ) : null}
    </div>
  );
}
