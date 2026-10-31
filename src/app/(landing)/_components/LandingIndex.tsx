import Link from "next/link";
import { GroupRow, type GroupItem } from "./GroupRow";
import "./landing-index.css";

// Site menu below the fold. Numbered index of pages, then rows that
// open to list their posts (GroupRow.tsx).
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

const CREATIVE_CODING: GroupItem[] = [
  {
    href: "/drawing-with-code",
    title: "Drawing with Code",
    description: "An intro to CSS art",
    accent: "var(--red-bold)",
  },
  {
    href: "/css-shapes",
    title: "CSS Shapes",
    description: "How to make basic shapes using CSS",
    accent: "var(--marigold-bold)",
  },
];

const BUILDING_BLOCKS: GroupItem[] = [
  {
    href: "/accordion",
    title: "Accordion",
    description: "An accessible accordion, in vanilla JS and React",
    accent: "var(--teal-bold)",
  },
  {
    title: "Tabs",
    description: "Keyboard-friendly tabs and a clean component API",
    accent: "var(--coral-bold)",
  },
  // {
  //   title: "Modal",
  //   description: "A dialog that handles focus on its own",
  //   accent: "var(--coral-bold)",
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
        <GroupRow
          number={PAGES.length + 1}
          title="Creative Coding"
          description="Playful CSS experiments, how-tos, and mini projects"
          accent="var(--mint-bold)"
          items={CREATIVE_CODING}
        />
        <GroupRow
          number={PAGES.length + 2}
          title="Building Blocks"
          description="Accessible components, built from scratch"
          accent="var(--pink-bold)"
          items={BUILDING_BLOCKS}
        />
      </ol>
    </nav>
  );
}
