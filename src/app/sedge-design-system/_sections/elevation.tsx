import Section from "../_components/Section";
import { SECTIONS } from "../_data/sections";
import "./elevation.css";

const meta = SECTIONS.find((s) => s.id === "elevation")!;

const TOKENS = [
  {
    token: "--shadow-drawer",
    value: "−24px 0 60px · 12%",
    usedFor: "Side drawers (Reading stats)",
    preview: "var(--shadow-drawer)",
  },
  {
    token: "--shadow-overlay",
    value: "0 24px 60px · 14%",
    usedFor: "Centered dialogs (modals)",
    preview: "var(--shadow-overlay)",
  },
  {
    token: "--shadow-card · pill · button",
    value: "none",
    usedFor: "Resting surfaces stay flat",
    preview: "none",
  },
  {
    token: "--shadow-xs → lg",
    value: "raw scale",
    usedFor: "Still available — avoid on anything that sits on the page",
    preview: "var(--shadow-md)",
  },
];

export default function ElevationSection() {
  return (
    <Section
      id={meta.id}
      heading={meta.title}
      icon={meta.icon}
      lede="Flat by default. Shadows are for things that float."
      description="On the page, rules, color, and space do the separating — cards, covers, and buttons sit flat. A shadow only appears when something genuinely lifts above the page, like a drawer or a dialog, so it means something when you see one."
    >
      <h3 className="sedge-subheading">On the page</h3>
      <div className="elev-grid">
        <figure className="elev-cell">
          <div className="elev-plate">
            <div className="elev-surface elev-surface--rule">A hairline</div>
          </div>
          <figcaption>
            <span className="elev-label">Separate with a rule</span>
            <span className="elev-note">1px border, charcoal at low opacity</span>
          </figcaption>
        </figure>
        <figure className="elev-cell">
          <div className="elev-plate">
            <div className="elev-surface elev-surface--tint">A tint</div>
          </div>
          <figcaption>
            <span className="elev-label">Or with a tint</span>
            <span className="elev-note">Ivory or a soft palette color</span>
          </figcaption>
        </figure>
        <figure className="elev-cell elev-cell--avoid">
          <div className="elev-plate">
            <div className="elev-surface elev-surface--shadow">A shadow</div>
          </div>
          <figcaption>
            <span className="elev-label">Not with a shadow</span>
            <span className="elev-note">Resting surfaces don’t lift</span>
          </figcaption>
        </figure>
      </div>

      <h3 className="sedge-subheading">When things float</h3>
      <div className="elev-float-grid">
        <figure className="elev-figure">
          <div className="elev-page" aria-hidden="true">
            <span className="elev-page-line elev-page-line--title" />
            <span className="elev-page-line" />
            <span className="elev-page-line elev-page-line--short" />
            <span className="elev-drawer">
              <span className="elev-page-line elev-page-line--title" />
              <span className="elev-page-line" />
              <span className="elev-page-line" />
            </span>
          </div>
          <figcaption>
            <span className="elev-label">Drawer</span>
            <span className="elev-note">
              <code>--shadow-drawer</code> · cast to the left, onto the page
            </span>
          </figcaption>
        </figure>
        <figure className="elev-figure">
          <div className="elev-page elev-page--dim" aria-hidden="true">
            <span className="elev-page-line elev-page-line--title" />
            <span className="elev-page-line" />
            <span className="elev-page-line elev-page-line--short" />
            <span className="elev-dialog">
              <span className="elev-page-line elev-page-line--title" />
              <span className="elev-page-line" />
            </span>
          </div>
          <figcaption>
            <span className="elev-label">Dialog</span>
            <span className="elev-note">
              <code>--shadow-overlay</code> · over a dimmed page
            </span>
          </figcaption>
        </figure>
      </div>

      <h3 className="sedge-subheading">Tokens</h3>
      <div className="elev-table">
        {TOKENS.map(({ token, value, usedFor, preview }) => (
          <div className="elev-row" key={token}>
            <code className="elev-token">{token}</code>
            <span className="elev-value">{value}</span>
            <span className="elev-swatch-cell">
              <span className="elev-swatch" style={{ boxShadow: preview }} aria-hidden="true" />
            </span>
            <span className="elev-used">{usedFor}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
