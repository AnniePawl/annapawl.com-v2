import Section from "../_components/Section";
import { SECTIONS } from "../_data/sections";
import "./spacing.css";

const meta = SECTIONS.find((s) => s.id === "spacing")!;

const SCALE = [
  { token: "--space-0", label: "0" },
  { token: "--space-1", label: "4" },
  { token: "--space-2", label: "8" },
  { token: "--space-3", label: "12" },
  { token: "--space-4", label: "16" },
  { token: "--space-5", label: "24" },
  { token: "--space-6", label: "32" },
  { token: "--space-7", label: "48" },
  { token: "--space-8", label: "64" },
  { token: "--space-9", label: "80" },
  { token: "--space-10", label: "96" },
  { token: "--space-11", label: "128" },
];

const SEMANTIC_SPACING = [
  {
    token: "--page-gutter",
    value: "16–24px",
    purpose: "Responsive left and right page padding",
  },
  {
    token: "--section-gap",
    value: "48px",
    purpose: "Vertical space between major page sections",
  },
];

export default function SpacingSection() {
  return (
    <Section
      id={meta.id}
      heading={meta.title}
      icon={meta.icon}
      description="Spacing is one of those quiet things that makes everything feel more intentional. A shared scale keeps padding, gaps, and layout rhythm consistent, while a small semantic layer handles the page gutter and space between major sections."
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-3)",
          maxWidth: 480,
        }}
      >
        {SCALE.map(({ token, label }) => (
          <div
            key={token}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--space-4)",
            }}
          >
            <code
              style={{
                width: 90,
                fontSize: "var(--text-xs)",
                color: "var(--text-muted)",
              }}
            >
              {token}
            </code>
            <div
              className="spacing-bar"
              style={{
                height: "var(--space-3)",
                width: `var(${token})`,
                borderRadius: "var(--radius-xs)",
              }}
            />
            <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>
              {label}px
            </span>
          </div>
        ))}
      </div>

      <hr className="poster-divider" />

      <span className="poster-label type-eyebrow">Layout aliases</span>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-4)",
        }}
      >
        {SEMANTIC_SPACING.map(({ token, value, purpose }) => (
          <div key={token}>
            <code
              style={{ fontSize: "var(--text-xs)", color: "var(--text-primary)" }}
            >
              {token}
            </code>
            <p
              className="type-supporting"
              style={{ margin: "4px 0 0", color: "var(--text-secondary)" }}
            >
              {value} · {purpose}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
