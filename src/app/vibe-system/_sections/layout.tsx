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
  "Good design is structured enough to feel intuitive, expressive enough to feel alive, and human at every layer. Line length is one of the quietest levers in a layout — too wide and the eye loses its place jumping back to the start of the next line, too narrow and reading starts to feel choppy.";

export default function LayoutSection() {
  return (
    <Section
      id={meta.id}
      heading={meta.title}
      icon={meta.icon}
      description="Reading-width tokens, not breakpoints — page-level responsive layout (grid, containers, breakpoints) uses Tailwind's scale directly rather than a parallel set of tokens. These measures only govern how wide a block of text is allowed to get."
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
