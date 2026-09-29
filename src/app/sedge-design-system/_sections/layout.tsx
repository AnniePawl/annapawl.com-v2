import Section from "../_components/Section";
import { SECTIONS } from "../_data/sections";

const meta = SECTIONS.find((s) => s.id === "layout")!;

const MEASURES = [
  { token: "--measure-xs", label: "45ch — captions, narrow columns" },
  { token: "--measure-sm", label: "60ch — body text" },
  { token: "--measure-md", label: "65ch — long-form reading" },
  { token: "--measure-lg", label: "75ch — editorial layouts" },
];

const SAMPLE =
  "This paragraph has one job: be easy to read. Not too wide, not too cramped, and ideally no losing your place halfway through. Turns out even paragraphs like a little breathing room.";

export default function LayoutSection() {
  return (
    <Section
      id={meta.id}
      heading={meta.title}
      icon={meta.icon}
      description="Layout starts with a consistent page frame and comfortable reading widths. The page shell handles the shared maximum width and responsive gutters, measure tokens keep text easy to read, and Tailwind handles one-off responsive grids."
    >
      <span className="poster-label type-eyebrow">Page frame</span>
      <div style={{ display: "flex", gap: "var(--space-3)" }}>
        <code style={{ fontSize: "var(--text-xs)", color: "var(--text-primary)" }}>
          --page-max-width
        </code>
        <span style={{ fontSize: "var(--text-xs)", color: "var(--text-secondary)" }}>
          80rem — shared outer page width
        </span>
      </div>

      <hr className="poster-divider" />

      <span className="poster-label type-eyebrow">Reading measures</span>
      <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        {MEASURES.map(({ token, label }) => (
          <div key={token}>
            <div style={{ display: "flex", gap: 12, marginBottom: 6 }}>
              <code style={{ fontSize: 12, color: "var(--text-muted)" }}>{token}</code>
              <span style={{ fontSize: 12, color: "var(--text-secondary)" }}>{label}</span>
            </div>
            <p
              style={{
                maxWidth: `var(${token})`,
                fontSize: "var(--text-sm)",
                lineHeight: "var(--leading-relaxed)",
                color: "var(--text-secondary)",
                margin: 0,
              }}
            >
              {SAMPLE}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
