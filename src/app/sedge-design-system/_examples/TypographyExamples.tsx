import CodeBlock from "../_components/CodeBlock";
import "./TypographyExamples.css";

const SCALE: {
  className: string;
  metaLines: string[];
  sample: string;
}[] = [
    {
      className: "h-display",
      metaLines: ["Inter", "60–112px", "680", "-0.02em tracking"],
      sample: "Squirrel",
    },
    {
      className: "h1",
      metaLines: ["Inter", "40–60px", "700", "-0.03em tracking"],
      sample: "Saucy squirrel",
    },
    {
      className: "h2",
      metaLines: ["Inter", "30–36px", "700", "-0.02em tracking"],
      sample: "Seriously saucy squirrel",
    },
    {
      className: "h3",
      metaLines: ["Inter", "20–24px", "600", "normal tracking"],
      sample: "One seriously saucy squirrel",
    },
    {
      className: "h4",
      metaLines: ["Inter", "18–20px", "600", "normal tracking"],
      sample: "One seriously saucy little squirrel",
    },
  ];

const WEIGHTS = [
  { weight: "var(--font-light)", label: "Light · 300" },
  { weight: "var(--font-regular)", label: "Regular · 400" },
  { weight: "var(--font-medium)", label: "Medium · 500" },
  { weight: "var(--font-semibold)", label: "Semibold · 600" },
  { weight: "var(--font-bold)", label: "Bold · 700" },
  { weight: "var(--font-extrabold)", label: "Extra Bold · 800" },
];

const TRACKING = [
  { value: "var(--tracking-tight)", label: "Tight" },
  { value: "var(--tracking-normal)", label: "Normal" },
  { value: "var(--tracking-wide)", label: "Wide" },
];

const USAGE = `
/* implementation classes — foundations/typography.css */
<h1 className="h-display">Sedge</h1>
<h1 className="h1">Section heading</h1>
<h2 className="h2">Subsection heading</h2>
<p>Body copy uses the global paragraph style</p>
<span className="type-eyebrow">Lil uppercase moment</span>
<p className="type-supporting">Small, compact, extra line height</p>
<span className="type-nav">Navigation label</span>
`;

export default function TypographyExamples() {
  return (
    <>
      <hr className="poster-divider" />

      {/* Typeface */}
      <div className="typo-typeface-section">
        <span className="poster-label type-eyebrow">Typeface</span>
        <p className="typo-typeface-name">Inter</p>
        <span className="typo-typeface-caption">
          Used everywhere, from display headings to body copy.
        </span>
      </div>

      <hr className="poster-divider" />

      {/* Weight */}
      <div>
        <span className="poster-label type-eyebrow">Weight</span>
        <div className="typo-weight-row">
          {WEIGHTS.map(({ weight, label }) => (
            <div className="typo-weight-item" key={label}>
              <p className="typo-weight-sample" style={{ fontWeight: weight }}>
                Petrichor
              </p>
              <span className="typo-weight-label">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <hr className="poster-divider" />

      {/* Scale */}
      <span className="poster-label type-eyebrow">Scale</span>
      <div className="typo-scale-list">
        <div className="typo-scale-rail" aria-hidden="true" />
        {SCALE.map(({ className, metaLines, sample }) => (
          <div className="typo-scale-row" key={className}>
            <div>
              <code className="typo-scale-class">.{className}</code>
              <div className="typo-scale-meta">{metaLines.join(" / ")}</div>
            </div>
            <span className="typo-scale-dot" aria-hidden="true" />
            <p className={`${className} typo-scale-sample`}>{sample}</p>
          </div>
        ))}

        <div className="typo-scale-row">
          <div>
            <code className="typo-scale-class">p · Body</code>
            <div className="typo-scale-meta">16px / 400 / Inter</div>
          </div>
          <span className="typo-scale-dot" aria-hidden="true" />
          <p className="typo-scale-sample">
            One seriously saucy little squirrel, last seen fleeing the bird feeder.
          </p>
        </div>

        <div className="typo-scale-row">
          <div>
            <code className="typo-scale-class">.type-supporting</code>
            <div className="typo-scale-meta">13px / 400 / 1.7 leading</div>
          </div>
          <span className="typo-scale-dot" aria-hidden="true" />
          <p className="type-supporting typo-scale-sample">
            One seriously saucy little squirrel, last seen fleeing the bird feeder. Armed with audacity and possibly an acorn. Do not attempt to apprehend—suspect is extremely squirrely.
          </p>
        </div>

        <div className="typo-scale-row">
          <div>
            <code className="typo-scale-class">.type-eyebrow</code>
            <div className="typo-scale-meta">12px / 600 / 0.12em tracking</div>
          </div>
          <span className="typo-scale-dot" aria-hidden="true" />
          <p className="type-eyebrow typo-scale-sample">Nut job</p>
        </div>

        <div className="typo-scale-row">
          <div>
            <code className="typo-scale-class">.type-nav</code>
            <div className="typo-scale-meta">14px / 500 / 1.5 leading</div>
          </div>
          <span className="typo-scale-dot" aria-hidden="true" />
          <p className="type-nav typo-scale-sample">Foundations</p>
        </div>
      </div>

      <hr className="poster-divider" />

      {/* Tracking + Usage */}
      <div className="typo-grid-2">
        <div>
          <span className="poster-label type-eyebrow">Tracking</span>
          <div className="typo-tracking-row">
            {TRACKING.map(({ value, label }) => (
              <div key={label}>
                <p
                  className="typo-tracking-sample"
                  style={{ fontSize: "var(--text-lg)", letterSpacing: value }}
                >
                  Rubber Ducky
                </p>
                <span className="typo-tracking-label">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className='type-eyebrow' style={{ margin: "32px 0 16px" }}>Usage</h3>
          <CodeBlock code={USAGE} />
        </div>
      </div>

    </>
  );
}
