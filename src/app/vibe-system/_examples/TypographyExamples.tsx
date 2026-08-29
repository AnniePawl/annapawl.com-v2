import { Asterisk } from "lucide-react";
import CodeBlock from "../_components/CodeBlock";
import { Squiggle } from "../_components/Doodle";

// Reused from the Overview section's own copy rather than a generic
// pangram — the specimens should sound like the site, not a font-testing
// cliché.
const VOICE_LINE =
  "Structured enough to feel intuitive, expressive enough to feel alive.";

const SCALE: {
  className: string;
  metaLines: string[];
  sample: string;
}[] = [
  {
    className: "h-display",
    metaLines: ["Roboto", "64px", "700", "-0.03em tracking"],
    sample: "Vibe System",
  },
  {
    className: "h1",
    metaLines: ["Roboto", "60px", "700", "-0.03em tracking"],
    sample: VOICE_LINE,
  },
  {
    className: "h2",
    metaLines: ["Roboto", "36px", "700", "-0.02em tracking"],
    sample: VOICE_LINE,
  },
  {
    className: "h3",
    metaLines: ["Inter", "24px", "600", "normal tracking"],
    sample: VOICE_LINE,
  },
  {
    className: "h4",
    metaLines: ["Inter", "20px", "600", "normal tracking"],
    sample: VOICE_LINE,
  },
];

const WEIGHTS = [
  { weight: "var(--font-regular)", label: "Regular · 400" },
  { weight: "var(--font-medium)", label: "Medium · 500" },
  { weight: "var(--font-semibold)", label: "Semibold · 600" },
  { weight: "var(--font-bold)", label: "Bold · 700" },
];

const TRACKING = [
  { value: "var(--tracking-tight)", label: "Tight" },
  { value: "var(--tracking-normal)", label: "Normal" },
  { value: "var(--tracking-wide)", label: "Wide" },
];

const USAGE = `
/* implementation classes — foundations/typography.css */
<h1 className="h-display">Vibe System</h1>
<h1 className="h1">Section heading</h1>
<h2 className="h2">Subsection heading</h2>
<p>Body copy — the base <p> style, no class needed.</p>
`;

export default function TypographyExamples() {
  return (
    <>
      {/* Intro */}
      <p>
        I agonize over fonts more than I&rsquo;d like to admit. The right
        typeface can completely change the personality of a page, so
        choosing one somehow feels like a v big d. Right now I&rsquo;m
        drawn to clean, modern sans serifs with just enough character to
        keep things interesting — but I&rsquo;ll probably change my mind
        next week.
      </p>
      <p>
        Right now that&rsquo;s Roboto for headings, paired with Inter for
        body copy, which stays quiet and does the reading work. Still
        testing — no promises this sticks.
      </p>

      <hr className="poster-divider" />

      {/* Scale */}
      <span className="poster-label">Scale</span>
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
          <p className="typo-scale-sample">{VOICE_LINE}</p>
        </div>
      </div>

      <hr className="poster-divider" />

      {/* Typeface + Weight */}
      <div className="typo-grid-2">
        <div>
          <span className="poster-label">Typeface</span>
          <p className="typo-typeface-name">Roboto</p>
          <span className="typo-typeface-caption">
            — headings only (Display, H1, H2).
          </span>
          <p className="typo-typeface-name" style={{ marginTop: "var(--space-2)" }}>
            Inter
          </p>
          <span className="typo-typeface-caption">
            — everything else.
            <Squiggle />
          </span>
        </div>

        <div style={{ position: "relative" }}>
          <span className="poster-label">Weight</span>
          <div className="typo-weight-row">
            {WEIGHTS.map(({ weight, label }) => (
              <div key={label}>
                <p className="typo-weight-sample" style={{ fontWeight: weight }}>
                  Playful
                </p>
                <span className="typo-weight-label">{label}</span>
              </div>
            ))}

            <svg
              className="typo-burst"
              viewBox="0 0 200 200"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M100,10 L117.2,58.4 L163.6,36.4 L141.6,82.8 L190,100 L141.6,117.2 L163.6,163.6 L117.2,141.6 L100,190 L82.8,141.6 L36.4,163.6 L58.4,117.2 L10,100 L58.4,82.8 L36.4,36.4 L82.8,58.4 Z"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinejoin="round"
              />
            </svg>
            <span className="typo-burst-label">for now!</span>
          </div>
        </div>
      </div>

      <hr className="poster-divider" />

      {/* Tracking + Usage */}
      <div className="typo-grid-2">
        <div>
          <span className="poster-label">Tracking</span>
          <div className="typo-tracking-row">
            {TRACKING.map(({ value, label }) => (
              <div key={label}>
                <p
                  className="typo-tracking-sample"
                  style={{ fontSize: "var(--text-lg)", letterSpacing: value }}
                >
                  VIBE SYSTEM
                </p>
                <span className="typo-tracking-label">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <span className="poster-label">Usage</span>
          <CodeBlock code={USAGE} />
        </div>
      </div>

      <hr className="poster-divider" />

      {/* Footer */}
      <div className="typo-poster-footer">
        <p className="typo-poster-footer-note">
          <Asterisk size={14} />
          This is a living system. Type choices, sizes, and scales will
          evolve as the site (and my taste) evolves.
        </p>

        <span className="typo-poster-aside">
          ask me again next week
          <Squiggle />
        </span>
      </div>
    </>
  );
}
