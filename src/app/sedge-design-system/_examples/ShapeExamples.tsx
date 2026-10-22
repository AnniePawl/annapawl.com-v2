import Shape, { type ShapeVariant } from "../../../components/ui/Shape";
import CodeBlock from "../_components/CodeBlock";
import "./ShapeExamples.css";

// "Used for" reflects where each radius actually appears today — the
// editorial pages are mostly square, so radius is saved for small, soft
// moments. Keep this honest as components change.
const RADIUS_SCALE = [
  { token: "--radius-none", px: "0", usedFor: "The default — page surfaces, covers, swatches, drawer, rules" },
  { token: "--radius-xs", px: "4", usedFor: "Tooltips" },
  { token: "--radius-sm", px: "8", usedFor: "Code blocks" },
  { token: "--radius-md", px: "12", usedFor: "Focus rings, mobile section switcher" },
  { token: "--radius-lg", px: "16", usedFor: "Callouts, code-art demos" },
  { token: "--radius-xl", px: "20", usedFor: "Post layout on phones" },
  { token: "--radius-2xl", px: "24", usedFor: "Cards" },
  { token: "--radius-pill", px: "9999", usedFor: "Badges, buttons, toggles" },
];

const ALIASES = [
  { token: "--radius-card", value: "→ 2xl · 24px" },
  { token: "--radius-button", value: "→ pill" },
  { token: "--radius-modal", value: "→ lg · 16px" },
  { token: "--radius-input", value: "→ lg · 16px" },
];

const ACCENT_SHAPES: { variant: ShapeVariant; color: string }[] = [
  { variant: "blob", color: "var(--coral-bold)" },
  { variant: "burst", color: "var(--cherry-soft)" },
  { variant: "scallop", color: "var(--lime-soft)" },
  { variant: "arch", color: "var(--lemon-bold)" },
  { variant: "clover", color: "var(--blue-soft)" },
  { variant: "flower", color: "var(--indigo-soft)" },
  { variant: "circle", color: "var(--pink-bold)" },
  { variant: "ring", color: "var(--lilac-soft)" },
];

const USAGE = `
import Shape from "@/components/ui/Shape";

// Decorative only — not a button, not clickable. Color follows
// currentColor, same as lucide-react icons.
<Shape variant="arch" className="h-16 w-16" style={{ color: "var(--lemon-bold)" }} />
`;

export default function ShapeExamples() {
  return (
    <>
      <h3 className="sedge-subheading">Corner radius</h3>
      <div className="shape-table">
        {RADIUS_SCALE.map(({ token, px, usedFor }) => (
          <div className="shape-row" key={token}>
            <code className="shape-token">{token}</code>
            <span className="shape-px">{px}</span>
            <span className="shape-sample-cell">
              <span
                className="shape-corner"
                style={{ borderTopLeftRadius: `var(${token})` }}
                aria-hidden="true"
              />
            </span>
            <span className="shape-used">{usedFor}</span>
          </div>
        ))}
      </div>
      <div className="shape-aliases">
        {ALIASES.map(({ token, value }) => (
          <span className="type-meta" key={token}>
            <code>{token}</code> {value}
          </span>
        ))}
      </div>

      <h3 className="sedge-subheading">Accent shapes</h3>
      <p>
        Accent shapes are decorative by design — image crops, avatar masks,
        and background details rather than interactive controls. Their
        irregularity adds personality without changing how anything is
        expected to behave.
      </p>
      <div className="shape-grid">
        {ACCENT_SHAPES.map(({ variant, color }) => (
          <figure className="shape-cell" key={variant}>
            <Shape
              variant={variant}
              className="shape-accent"
              style={{ color }}
            />
            <figcaption className="shape-name">{variant}</figcaption>
          </figure>
        ))}
      </div>

      <h3 className="sedge-subheading">Usage</h3>
      <CodeBlock code={USAGE} />
    </>
  );
}
