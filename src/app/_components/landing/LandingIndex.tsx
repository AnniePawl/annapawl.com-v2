import Link from "next/link";
import { WritingRow } from "./WritingRow";

// The site's menu, below the fold: a ruled, numbered index of pages, in the
// same voice as the rest of the garden. Each marker uses that page's accent.
const PAGES = [
    {
    href: "/sedge-design-system",
    title: "Design System",
    description: "The design system I built for my garden",
    accent: "var(--coral-bold)",
  },
  {
    href: "/books",
    title: "Bookshelf",
    description: "A nerdy reading log, stats and all",
    accent: "var(--emerald-soft)",
  },
  {
    href: "/fiber-arts",
    title: "Fiber Arts",
    description: "Embroidery, needlepoint, and cross stitch projects",
    accent: "var(--pink-bold)",
  },
];

export function LandingIndex() {
  return (
    <nav className="landing-index" aria-labelledby="landing-index-label">
      <h2 className="landing-index-label" id="landing-index-label">
        In the garden
      </h2>
      <ol className="landing-index-list">
        {PAGES.map((page, i) => (
          <li key={page.href}>
            <Link
              href={page.href}
              className="landing-index-row focus-ring"
              style={{ "--index-accent": page.accent } as React.CSSProperties}
            >
              <span className="landing-index-number">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="landing-index-title">{page.title}</span>
              <span className="landing-index-description">{page.description}</span>
              <span className="landing-index-arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </li>
        ))}
        <WritingRow number={PAGES.length + 1} />
      </ol>
    </nav>
  );
}
