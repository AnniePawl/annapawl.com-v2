"use client";

import { useId, useState } from "react";
import Link from "next/link";

export type GroupItem = {
  title: string;
  description: string;
  accent: string;
  /** Leave out for a "Coming soon" entry that isn't linked yet. */
  href?: string;
};

/** A menu row that opens to list the pages under it (Creative Coding, Building Blocks). */
export function GroupRow({
  number,
  title,
  description,
  accent,
  items,
}: {
  number: number;
  title: string;
  description: string;
  accent: string;
  items: GroupItem[];
}) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <li
      className="landing-index-group"
      data-open={open || undefined}
      style={{ "--index-accent": accent } as React.CSSProperties}
    >
      <button
        type="button"
        className="landing-index-row focus-ring"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="landing-index-number">
          {String(number).padStart(2, "0")}
        </span>
        <span className="landing-index-title">{title}</span>
        <span className="landing-index-description">{description}</span>
        <span className="landing-index-arrow landing-index-toggle" aria-hidden="true">
          →
        </span>
      </button>

      <div className="landing-index-sub" id={panelId}>
        <ul className="landing-index-sub-list" inert={!open}>
          {items.map((item) => (
            <li key={item.title}>
              {item.href ? (
                <Link
                  href={item.href}
                  className="landing-index-sub-row focus-ring"
                  style={{ "--index-accent": item.accent } as React.CSSProperties}
                >
                  <span className="landing-index-sub-title">{item.title}</span>
                  <span className="landing-index-description">{item.description}</span>
                  <span className="landing-index-arrow" aria-hidden="true">→</span>
                </Link>
              ) : (
                <span
                  className="landing-index-sub-row landing-index-sub-row--soon"
                  style={{ "--index-accent": item.accent } as React.CSSProperties}
                >
                  <span className="landing-index-sub-title">{item.title}</span>
                  <span className="landing-index-description">{item.description}</span>
                  <span className="landing-index-sub-tag">Coming soon</span>
                </span>
              )}
            </li>
          ))}
          <li className="landing-index-sub-soon">More soon</li>
        </ul>
      </div>
    </li>
  );
}
