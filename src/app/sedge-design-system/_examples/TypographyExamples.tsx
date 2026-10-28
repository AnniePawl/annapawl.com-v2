import CodeBlock from "../../../components/ui/CodeBlock";
import "./TypographyExamples.css";

// Every role here mirrors the ROLES tokens in foundations/typography.css —
// the specs below are documentation, so keep them in sync if a token moves.
const SCALE: {
  role: string;
  className: string;
  spec: string;
  usedIn: string;
  sample: string;
  mark?: boolean;
}[] = [
  {
    role: "Page title",
    className: "type-title",
    spec: "64–140px · 400 · −0.065em · 0.82",
    usedIn: "Bookshelf, Drawing with Code headers",
    sample: "Squirrel",
    mark: true,
  },
  {
    role: "Section heading",
    className: "type-section",
    spec: "36–60px · 400 · −0.055em · 0.88",
    usedIn: "Every Sedge section",
    sample: "Saucy squirrel",
    mark: true,
  },
  {
    role: "Lede",
    className: "type-lede",
    spec: "22–32px · 400 · −0.03em · 1.12",
    usedIn: "Header + section intros",
    sample: "One seriously saucy squirrel, last seen fleeing the bird feeder.",
  },
  {
    role: "Heading",
    className: "type-heading",
    spec: "22–28px · 400 · −0.025em · 1.15",
    usedIn: "Article sections, years, principles",
    sample: "Seriously saucy squirrel",
  },
  {
    role: "Subheading",
    className: "type-subheading",
    spec: "17–19px · 500 · −0.015em · 1.3",
    usedIn: "Post subsections (with a marker)",
    sample: "Squirrel sightings",
  },
  {
    role: "Body",
    className: "type-body",
    spec: "16px · 400 · 1.7",
    usedIn: "Descriptions, article copy",
    sample:
      "One seriously saucy little squirrel, last seen fleeing the bird feeder. Armed with audacity and possibly an acorn.",
  },
  {
    role: "Supporting",
    className: "type-supporting",
    spec: "13px · 400 · 1.7 · secondary",
    usedIn: "Principle notes, small explanations",
    sample:
      "Do not attempt to apprehend — suspect is extremely squirrely and may be carrying snacks.",
  },
  {
    role: "Label",
    className: "type-label",
    spec: "11.5px · 600 · caps · +0.16em",
    usedIn: "Subheadings",
    sample: "Nut job",
  },
  {
    role: "Meta",
    className: "type-meta",
    spec: "12px · 400 · 1.35",
    usedIn: "Details rules, captions, counts",
    sample: "Oct 3, 2026 · 5 min read · 18 books",
  },
  {
    role: "Note",
    className: "type-note",
    spec: "13px · 400 · italic · 1.35",
    usedIn: "Header descriptions, drawer notes",
    sample: "Last seen near the bird feeder, possibly plotting.",
  },
  {
    role: "Note label",
    className: "type-note-label",
    spec: "13px · 700 · italic · 1.35",
    usedIn: "Contents, Filter by tag, drawer sections",
    sample: "Known accomplices",
  },
  {
    role: "Code",
    className: "type-mono",
    spec: "13px · mono · 1.6",
    usedIn: "Tokens, code blocks",
    sample: "var(--squirrel-bold) · #8B87F5",
  },
];

const WEIGHTS = [
  { weight: "var(--font-regular)", label: "Regular · 400", note: "The default. Titles, headings, ledes, body." },
  { weight: "var(--font-medium)", label: "Medium · 500", note: "Nav, small titles, emphasis in UI." },
  { weight: "var(--font-semibold)", label: "Semibold · 600", note: "Spaced-caps labels only." },
  { weight: "var(--font-bold)", label: "Bold · 700", note: "Reserved. Use sparingly, on purpose.", muted: true },
];

const TRACKING = [
  {
    label: "Tight · −0.065 to −0.025em",
    note: "Anything 22px and up. The bigger, the tighter.",
    className: "typo-tracking-sample--tight",
  },
  {
    label: "Normal · 0",
    note: "Body, supporting, meta.",
    className: "typo-tracking-sample--normal",
  },
  {
    label: "Wide · +0.16em",
    note: "Spaced-caps labels only.",
    className: "type-label typo-tracking-sample--wide",
  },
];

const USAGE = `
/* foundations/typography.css — one class per role */
<h1 className="type-title">Bookshelf</h1>
<h2 className="type-section">Colors</h2>
<p className="type-lede">These are the colors that make me happy.</p>
<h3 className="type-heading">Playful, with purpose</h3>
<h4 className="type-subheading">Parent div</h4>
<p className="type-body">Body copy</p>
<p className="type-supporting">A small explanation</p>
<span className="type-label">Usage</span>
<span className="type-meta">Oct 3, 2026 · 5 min read</span>
<span className="type-note-label">Contents</span>
<p className="type-note">A small italic aside</p>
<code className="inline-code">border-radius</code>
`;

export default function TypographyExamples() {
  return (
    <>
      {/* Typeface */}
      <h3 className="sedge-subheading">Typeface</h3>
      <div className="typo-typeface">
        <span className="typo-typeface-aa" aria-hidden="true">
          Aa
        </span>
        <div>
          <p className="typo-typeface-name">Inter</p>
          <p className="typo-typeface-alphabet">
            ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789 &amp;!?@
          </p>
          <span className="type-meta typo-muted">
            Used everywhere, from page titles to captions. Monospace only for
            code and token values.
          </span>
        </div>
      </div>

      {/* Weight */}
      <h3 className="sedge-subheading">Weight</h3>
      <div className="typo-weight-row">
        {WEIGHTS.map(({ weight, label, note, muted }) => (
          <div className={muted ? "typo-weight-item is-muted" : "typo-weight-item"} key={label}>
            <p className="typo-weight-sample" style={{ fontWeight: weight }}>
              Petrichor
            </p>
            <span className="typo-weight-label">{label}</span>
            <span className="type-meta typo-muted">{note}</span>
          </div>
        ))}
      </div>

      {/* Scale */}
      <h3 className="sedge-subheading">Scale · by role</h3>
      <div className="typo-scale-list">
        {SCALE.map(({ role, className, spec, usedIn, sample, mark }) => (
          <div className="typo-scale-row" key={className}>
            <div className="typo-scale-info">
              <span className="typo-scale-role">{role}</span>
              <code className="typo-scale-class">.{className}</code>
              <span className="typo-scale-meta">{spec}</span>
              <span className="typo-scale-used">{usedIn}</span>
            </div>
            <div className="typo-scale-sample-cell">
              {className === "type-label" ? (
                <span className="sedge-subheading typo-scale-label-sample">{sample}</span>
              ) : (
                <p className={`${className} typo-scale-sample`}>
                  {sample}
                  {mark ? <span className="typo-scale-mark" aria-hidden="true" /> : null}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Inline code */}
      <h3 className="sedge-subheading">Inline code</h3>
      <p className="type-body typo-inline-code-sample">
        Property and class names in running text, like{" "}
        <code className="inline-code">border-radius</code> or{" "}
        <code className="inline-code">circle__inner</code>. Automatic inside
        post bodies; add <code className="inline-code">.inline-code</code>{" "}
        anywhere else.
      </p>

      {/* Tracking */}
      <h3 className="sedge-subheading">Tracking · size sets the spacing</h3>
      <div className="typo-tracking-row">
        {TRACKING.map(({ label, note, className }) => (
          <div key={label}>
            <p className={`typo-tracking-sample ${className}`}>Rubber ducky</p>
            <span className="typo-weight-label">{label}</span>
            <span className="type-meta typo-muted">{note}</span>
          </div>
        ))}
      </div>

      {/* Usage */}
      <h3 className="sedge-subheading">Usage</h3>
      <CodeBlock tone='pink' code={USAGE} />
    </>
  );
}
