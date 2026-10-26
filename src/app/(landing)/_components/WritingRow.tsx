"use client";

import { useId, useState } from "react";
import Link from "next/link";

// "Writing" row in menu opens to list the posts under it
// All other menu items in LandingIndex.tsx
const POSTS = [
  {
    href: "/drawing-with-code",
    title: "Drawing with Code",
    description: "An intro to CSS art",
    accent: "var(--red-bold)",
  },
  {
    href:"/css-shapes", 
    title:"CSS Shapes", 
    description:"How to make basic shapes using CSS", 
    accent:"var(--marigold-bold)"
  },

];

export function WritingRow({ number }: { number: number }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <li
      className="landing-index-group"
      data-open={open || undefined}
      style={{ "--index-accent": "var(--mint-bold)" } as React.CSSProperties}
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
        <span className="landing-index-title">Writing</span>
        <span className="landing-index-description">
          Musings, how-tos, and half-baked ideas
        </span>
        <span className="landing-index-arrow landing-index-toggle" aria-hidden="true">
          →
        </span>
      </button>

      <div className="landing-index-sub" id={panelId}>
        <ul className="landing-index-sub-list" inert={!open}>
          {POSTS.map((post) => (
            <li key={post.href}>
              <Link
                href={post.href}
                className="landing-index-sub-row focus-ring"
                style={{ "--index-accent": post.accent } as React.CSSProperties}
              >
                <span className="landing-index-sub-title">{post.title}</span>
                <span className="landing-index-description">{post.description}</span>
                <span className="landing-index-arrow" aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
          <li className="landing-index-sub-soon">More soon</li>
        </ul>
      </div>
    </li>
  );
}
