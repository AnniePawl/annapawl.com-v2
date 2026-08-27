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
      description="Layout tokens here are focused on reading width rather than page structure. They keep text blocks comfortable to read across different contexts, while the larger responsive layout is handled directly with Tailwind.
"
    >
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
