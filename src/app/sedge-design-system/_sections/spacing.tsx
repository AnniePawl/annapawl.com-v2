import Section from "../_components/Section";
import { SECTIONS } from "../_data/sections";
import "./spacing.css";

const meta = SECTIONS.find((s) => s.id === "spacing")!;

// "Used for" reflects where each step actually shows up across the garden
// (post-layout.css, books.css, section.css, drawer.css…). Keep it honest
// when layouts change.
const SCALE = [
  { token: "--space-1", px: 4, usedFor: "Icon ↔ label, tight inline gaps" },
  { token: "--space-2", px: 8, usedFor: "Marker ↔ text, small label gaps", everyday: true },
  { token: "--space-3", px: 12, usedFor: "Label → content, list rows", everyday: true },
  { token: "--space-4", px: 16, usedFor: "Grid gaps, mobile page gutter", everyday: true },
  { token: "--space-5", px: 24, usedFor: "Desktop page gutter, heading → body", everyday: true },
  { token: "--space-6", px: 32, usedFor: "Lede spacing, below subheadings, drawer padding", everyday: true },
  { token: "--space-7", px: 48, usedFor: "Content top, between blocks, min column gap" },
  { token: "--space-8", px: 64, usedFor: "Bookshelf content top, mobile page end" },
  { token: "--space-9", px: 80, usedFor: "Above subheadings, end of an article" },
  { token: "--space-10", px: 96, usedFor: "Max column gap on wide screens" },
  { token: "--space-11", px: 128, usedFor: "End of the Bookshelf page" },
];

const ALIASES = [
  {
    token: "--page-gutter",
    value: "16–24px",
    usedFor: "Left and right page padding; grows with the screen",
  },
  {
    token: "--section-gap",
    value: "48px",
    usedFor: "Vertical space between major page sections",
  },
  {
    token: "--column-gap",
    value: "48–96px",
    usedFor: "Sticky rail ↔ main column (Bookshelf, posts)",
  },
];

// The vertical rhythm of a Sedge section, top to bottom.
const ANATOMY = [
  { label: "Section heading", gap: null },
  { label: "Lede", gap: "32 · space-6" },
  { label: "Description", gap: "24 · space-5" },
  { label: "Subheading", gap: "80 · space-9" },
  { label: "Examples", gap: "32 · space-6" },
];

export default function SpacingSection() {
  return (
    <Section
      id={meta.id}
      heading={meta.title}
      icon={meta.icon}
      lede="Quiet spacing makes everything feel intentional."
      description="Five everyday steps (8–32px) handle almost everything inside components. The larger steps are saved for layout, like the top and end of a page, the gap beside a rail, and the air above a subheading."
    >
      <h3 className="sedge-subheading">Scale</h3>
      <div className="spacing-table" role="table" aria-label="Spacing scale">
        {SCALE.map(({ token, px, usedFor, everyday }) => (
          <div className="spacing-row" role="row" key={token}>
            <code className="spacing-token" role="cell">
              {token}
            </code>
            <span className="spacing-px" role="cell">
              {px}
            </span>
            <span className="spacing-bar-cell" role="cell">
              <span
                className="spacing-bar"
                style={{ width: `var(${token})` }}
                aria-hidden="true"
              />
            </span>
            <span className="spacing-used" role="cell">
              {usedFor}
              {everyday ? <span className="spacing-everyday">Everyday</span> : null}
            </span>
          </div>
        ))}
      </div>

      <h3 className="sedge-subheading">Layout aliases</h3>
      <div className="spacing-table" role="table" aria-label="Layout spacing aliases">
        {ALIASES.map(({ token, value, usedFor }) => (
          <div className="spacing-row spacing-row--alias" role="row" key={token}>
            <code className="spacing-token" role="cell">
              {token}
            </code>
            <span className="spacing-px" role="cell">
              {value}
            </span>
            <span className="spacing-used" role="cell">
              {usedFor}
            </span>
          </div>
        ))}
      </div>

      <h3 className="sedge-subheading">In practice</h3>
      <p>The vertical rhythm of every section on this page, top to bottom.</p>
      <ol className="spacing-anatomy">
        {ANATOMY.map(({ label, gap }) => (
          <li key={label}>
            {gap ? (
              <span className="spacing-anatomy-gap">
                <span className="spacing-anatomy-measure" aria-hidden="true" />
                {gap}
              </span>
            ) : null}
            <span className="spacing-anatomy-block">{label}</span>
          </li>
        ))}
      </ol>
    </Section>
  );
}
