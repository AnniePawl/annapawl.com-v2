import Section from "../_components/Section";
import { SECTIONS } from "../_data/sections";
import "./layout.css";

const meta = SECTIONS.find((s) => s.id === "layout")!;

// Where each measure is actually used — keep in sync with the CSS.
const MEASURES = [
  { token: "--measure-sm", value: "60ch", usedFor: "Short intros and pattern descriptions" },
  { token: "--measure-md", value: "65ch", usedFor: "Reading-width page shell, header copy" },
  { token: "--measure-lg", value: "75ch", usedFor: "Article body in the post layout" },
  { token: "--measure-xs", value: "45ch", usedFor: "Captions, narrow columns — not in use yet" },
];

const BREAKPOINTS = [
  {
    value: "< 40rem",
    px: "640px",
    usedFor: "The main switch: rails become a sticky strip, grids stack, headers tighten",
  },
  {
    value: "Tailwind sm / md / lg",
    px: "640 / 768 / 1024",
    usedFor: "Column counts in one-off grids (covers, swatches)",
  },
];

const SAMPLE =
  "This paragraph has one job: be easy to read. Not too wide, not too cramped, and ideally no losing your place halfway through. Turns out even paragraphs like a little breathing room.";

export default function LayoutSection() {
  return (
    <Section
      id={meta.id}
      heading={meta.title}
      icon={meta.icon}
      lede="Every page sits in the same frame, and almost every page uses one of two shapes inside it."
      description="The page shell sets the outer width and gutters. Inside, a full-width header comes first, then either a sticky rail beside a main column or a sidebar beside content. Measures keep text at a comfortable reading width."
    >
      {/* Page frame */}
      <h3 className="sedge-subheading">Page frame</h3>
      <figure className="layout-figure">
        <div className="layout-frame" aria-hidden="true">
          <span className="layout-gutter" />
          <span className="layout-frame-inner">
            <span className="layout-frame-label">--page-max-width · 80rem</span>
          </span>
          <span className="layout-gutter" />
        </div>
        <figcaption className="layout-caption">
          <span>
            <code>--page-max-width</code> 80rem · shared outer width
          </span>
          <span>
            <code>--page-gutter</code> 16–24px · side padding, grows with the screen
          </span>
        </figcaption>
      </figure>

      {/* Layouts */}
      <h3 className="sedge-subheading">Two shapes</h3>
      <div className="layout-shapes">
        <figure className="layout-figure">
          <div className="layout-wire" aria-hidden="true">
            <span className="layout-wire-header">Header</span>
            <span className="layout-wire-rule" />
            <span className="layout-wire-body">
              <span className="layout-wire-rail">Rail</span>
              <span className="layout-wire-gap" />
              <span className="layout-wire-main">Main column</span>
            </span>
          </div>
          <figcaption className="layout-caption">
            <span className="layout-caption-title">Header + rail</span>
            <span>
              Bookshelf, Drawing with Code. The rail is sticky;{" "}
              <code>--column-gap</code> (48–96px) separates it from the main
              column. Under 40rem the rail becomes a sticky strip or stacks on
              top.
            </span>
          </figcaption>
        </figure>

        <figure className="layout-figure">
          <div className="layout-wire" aria-hidden="true">
            <span className="layout-wire-nav">Top bar</span>
            <span className="layout-wire-body">
              <span className="layout-wire-rail layout-wire-rail--sidebar">Sidebar</span>
              <span className="layout-wire-gap" />
              <span className="layout-wire-main">Sections</span>
            </span>
          </div>
          <figcaption className="layout-caption">
            <span className="layout-caption-title">Sidebar + content</span>
            <span>
              Sedge. Grouped section links on the left, long scrolling content
              on the right. Under 40rem the sidebar becomes a section switcher
              at the top.
            </span>
          </figcaption>
        </figure>
      </div>

      {/* Measures */}
      <h3 className="sedge-subheading">Reading measures</h3>
      <div className="layout-table">
        {MEASURES.map(({ token, value, usedFor }) => (
          <div className="layout-row" key={token}>
            <code className="layout-token">{token}</code>
            <span className="layout-value">{value}</span>
            <span className="layout-used">{usedFor}</span>
          </div>
        ))}
      </div>
      <div className="layout-measure-demo">
        <span className="layout-measure-label">
          <code>--measure-lg</code> · 75ch
        </span>
        <p style={{ maxWidth: "var(--measure-lg)" }}>{SAMPLE}</p>
        <span className="layout-measure-label">
          <code>--measure-sm</code> · 60ch
        </span>
        <p style={{ maxWidth: "var(--measure-sm)" }}>{SAMPLE}</p>
      </div>

      {/* Breakpoints */}
      <h3 className="sedge-subheading">Breakpoints</h3>
      <div className="layout-table">
        {BREAKPOINTS.map(({ value, px, usedFor }) => (
          <div className="layout-row" key={value}>
            <code className="layout-token">{value}</code>
            <span className="layout-value">{px}</span>
            <span className="layout-used">{usedFor}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
