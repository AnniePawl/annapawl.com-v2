import Section from "../_components/Section";
import { SECTIONS } from "../_data/sections";

const meta = SECTIONS.find((s) => s.id === "spacing")!;

const SCALE = [
  { token: "--space-1", label: "4" },
  { token: "--space-2", label: "8" },
  { token: "--space-3", label: "12" },
  { token: "--space-4", label: "16" },
  { token: "--space-5", label: "24" },
  { token: "--space-6", label: "32" },
  { token: "--space-7", label: "48" },
  { token: "--space-8", label: "64" },
];

export default function SpacingSection() {
  return (
    <Section
      id={meta.id}
      heading={meta.title}
      icon={meta.icon}
      description="Spacing is one of those quiet things that make everything feel more intentional. A single scale keeps padding, gaps, and layout rhythm consistent, with a few semantic aliases — container-pad, section-gap, stack-gap, and inline-gap — to make the right spacing easier to reach for."
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 480 }}>
        {SCALE.map(({ token, label }) => (
          <div key={token} style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <code style={{ width: 90, fontSize: 12, color: "var(--text-muted)" }}>
              {token}
            </code>
            <div
              style={{
                height: 12,
                width: `var(${token})`,
                background: "var(--accent)",
                borderRadius: "var(--radius-xs)",
              }}
            />
            <span style={{ fontSize: 12, color: "var(--text-muted)" }}>{label}px</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
