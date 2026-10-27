import Link from "next/link";
import { WritingRow } from "./WritingRow";
import "./landing-index.css";

// Site menu below the fold. Numbered index of pages
// Writing posts in WritingRow.tsx
const PAGES = [
    {
    href: "/sedge-design-system",
    title: "Design System",
    description: "The design system I built for my digital garden",
    accent: "var(--marigold-bold)",
  },
  {
    href: "/bookshelf",
    title: "Bookshelf",
    description: "A nerdy reading log, stats and all",
    accent: "var(--blue-bold)",
  },
  {
    href: "/fiber-arts",
    title: "Fiber Arts",
    description: "Embroidery, needlepoint, and cross stitch projects",
    accent: "var(--plum-bold)",
  },
  //   {
  //   href: "/fiber-arts",
  //   title: "Kitchen Mischief",
  //   description: "Photos of food I’ve made as a highly dedicated eater learning to cook",
  //   accent: "var(--lilac-bold)",
  // },
];

export function LandingIndex() {
  return (
    <nav id="landing-index" className="landing-index" aria-labelledby="landing-index-label">
      <h2 className="landing-index-label" id="landing-index-label">
        General nerdery
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
