"use client";

import Link from "next/link";

export type PostNext = { href: string; label: string };

/** The row that closes a post: back to top, and an optional next post. */
export default function PostEnd({ next }: { next?: PostNext }) {
  function toTop(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    const title = document.querySelector<HTMLElement>(".post-header-title");
    if (title) {
      title.setAttribute("tabindex", "-1");
      title.focus({ preventScroll: true });
    }
  }

  return (
    <div className="post-end">
      <a href="#top" className="post-end-link focus-ring" onClick={toTop}>
        <span className="post-end-label">
          Back to top
          <span className="post-end-arrow" aria-hidden="true">↑</span>
        </span>
      </a>
      {next ? (
        <Link href={next.href} className="post-end-link post-end-link--next focus-ring">
          <span className="post-end-label">
            Next · {next.label}
            <span className="post-end-arrow" aria-hidden="true">→</span>
          </span>
        </Link>
      ) : null}
    </div>
  );
}
