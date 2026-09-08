import Section from "../_components/Section";
import { SECTIONS } from "../_data/sections";

const meta = SECTIONS.find((s) => s.id === "elevation")!;

const SHADOWS = [
  { token: "--shadow-xs", label: "xs — pill" },
  { token: "--shadow-sm", label: "sm — card" },
  { token: "--shadow-md", label: "md — button" },
  { token: "--shadow-lg", label: "lg — modal" },
];

export default function ElevationSection() {
  return (
    <Section
      id={meta.id}
      heading={meta.title}
      icon={meta.icon}
      description="Elevation adds depth and helps establish hierarchy without making the interface feel overly layered. I keep shadows fairly subtle, using more lift as elements move from resting surfaces to interactive elements and overlays."
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 24,
          maxWidth: 720,
        }}
      >
        {SHADOWS.map(({ token, label }) => (
          <div key={token} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div
              style={{
                height: 88,
                borderRadius: "var(--radius-md)",
                background: "var(--bg-default)",
                boxShadow: `var(${token})`,
              }}
            />
            <code style={{ fontSize: 12, color: "var(--text-muted)" }}>{token}</code>
            <span style={{ fontSize: 12, color: "var(--text-secondary)" }}>{label}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
