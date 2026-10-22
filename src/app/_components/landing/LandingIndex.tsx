import Link from "next/link";

// The site's menu, below the fold: a ruled, numbered index of pages, in the
// same voice as the rest of the garden. Each marker uses that page's accent.
const PAGES = [
  {
    href: "/books",
    title: "Bookshelf",
    description: "What I’ve been reading, by year",
    accent: "var(--blue-bold)",
  },
  {
    href: "/fiber-arts",
    title: "Fiber arts",
    description: "Embroidery, needlepoint, and cross stitch",
    accent: "var(--cherry-bold)",
  },
  {
    href: "/drawing-with-code",
    title: "Drawing with Code",
    description: "CSS art, and how I make it",
    accent: "var(--red-bold)",
  },
  {
    href: "/sedge-design-system",
    title: "Sedge",
    description: "The design system behind it all",
    accent: "var(--indigo-bold)",
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
      </ol>
    </nav>
  );
}
