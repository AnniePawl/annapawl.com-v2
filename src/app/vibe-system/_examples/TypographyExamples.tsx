import CodeBlock from "../_components/CodeBlock";

// Reused from the Overview section's own copy rather than a generic
// pangram — the specimens should sound like the site, not a font-testing
// cliché.
const VOICE_LINE =
  "Structured enough to feel intuitive, expressive enough to feel alive.";

const SCALE: {
  className: string;
  label: string;
  meta: string;
  sample: string;
}[] = [
  {
    className: "h-display",
    label: "Display",
    meta: "80px · Space Grotesk · uppercase",
    sample: "Vibe System",
  },
  { className: "h1", label: "H1", meta: "60px · Space Grotesk", sample: VOICE_LINE },
  { className: "h2", label: "H2", meta: "36px · Space Grotesk", sample: VOICE_LINE },
  { className: "h3", label: "H3", meta: "24px · Inter", sample: VOICE_LINE },
  { className: "h4", label: "H4", meta: "20px · Inter", sample: VOICE_LINE },
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
<p className="p-display">Body copy set in the display family.</p>
`;

export default function TypographyExamples() {
  return (
    <section style={{ maxWidth: 720 }}>
      

      {/* Scale */}
      <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        {SCALE.map(({ className, label, meta, sample }) => (
          <div key={className}>
            <div
              style={{
                display: "flex",
                gap: 12,
                marginBottom: 6,
                alignItems: "baseline",
              }}
            >
              <code style={{ fontSize: 12, color: "var(--text-muted)" }}>
                .{className}
              </code>
              <span style={{ fontSize: 12, color: "var(--text-secondary)" }}>
                {label} — {meta}
              </span>
            </div>
            <p
              className={className}
              style={{ margin: 0, color: "var(--text-primary)" }}
            >
              {sample}
            </p>
          </div>
        ))}

        <div>
          <div
            style={{
              display: "flex",
              gap: 12,
              marginBottom: 6,
              alignItems: "baseline",
            }}
          >
            <code style={{ fontSize: 12, color: "var(--text-muted)" }}>p</code>
            <span style={{ fontSize: 12, color: "var(--text-secondary)" }}>
              Body — 16px · Inter
            </span>
          </div>
          <p style={{ margin: 0, color: "var(--text-primary)" }}>{VOICE_LINE}</p>
        </div>

        <div>
          <div
            style={{
              display: "flex",
              gap: 12,
              marginBottom: 6,
              alignItems: "baseline",
            }}
          >
            <code style={{ fontSize: 12, color: "var(--text-muted)" }}>
              .p-display
            </code>
            <span style={{ fontSize: 12, color: "var(--text-secondary)" }}>
              Body, display family — 16px · Space Grotesk
            </span>
          </div>
          <p className="p-display" style={{ margin: 0, color: "var(--text-primary)" }}>
            {VOICE_LINE}
          </p>
        </div>
      </div>

      {/* Font pairing */}
      <div style={{ marginTop: 40 }}>
        <h4 style={{ marginBottom: 12, fontSize: 14, fontWeight: 600 }}>
          Font pairing
        </h4>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-2xl)",
                margin: 0,
                color: "var(--text-primary)",
              }}
            >
              Space Grotesk
            </p>
            <span style={{ fontSize: 12, color: "var(--text-muted)" }}>
              --font-display — display &amp; headings
            </span>
          </div>
          <div>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "var(--text-2xl)",
                margin: 0,
                color: "var(--text-primary)",
              }}
            >
              Inter
            </p>
            <span style={{ fontSize: 12, color: "var(--text-muted)" }}>
              --font-sans — body &amp; UI text
            </span>
          </div>
        </div>
      </div>

      {/* Weight ramp */}
      <div style={{ marginTop: 40 }}>
        <h4 style={{ marginBottom: 12, fontSize: 14, fontWeight: 600 }}>Weight</h4>
        <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
          {WEIGHTS.map(({ weight, label }) => (
            <div key={label}>
              <p
                style={{
                  fontSize: "var(--text-xl)",
                  fontWeight: weight,
                  margin: 0,
                  color: "var(--text-primary)",
                }}
              >
                Playful
              </p>
              <span style={{ fontSize: 12, color: "var(--text-muted)" }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Tracking */}
      <div style={{ marginTop: 40 }}>
        <h4 style={{ marginBottom: 12, fontSize: 14, fontWeight: 600 }}>
          Tracking
        </h4>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {TRACKING.map(({ value, label }) => (
            <div key={label}>
              <p
                style={{
                  fontSize: "var(--text-lg)",
                  letterSpacing: value,
                  margin: 0,
                  color: "var(--text-primary)",
                }}
              >
                VIBE SYSTEM
              </p>
              <span style={{ fontSize: 12, color: "var(--text-muted)" }}>
                {label}
              </span>
            </div>
          ))}
        </div>
        <CodeBlock code={USAGE} className="mb-8" />
      </div>
    </section>
  );
}
