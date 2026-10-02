import { TrafficCone, Puzzle, Bug } from "lucide-react";
import CodeBlock from "../_components/CodeBlock";
import Section from "../_components/Section";
import { SECTIONS } from "../_data/sections";

const meta = SECTIONS.find((section) => section.id === "icons")!;

const SIZES = [
  { className: "icon-sm", label: "Small", value: "16px", Icon: Puzzle },
  { className: "icon-md", label: "Medium", value: "20px", Icon: TrafficCone },
  { className: "icon-lg", label: "Large", value: "24px", Icon: Bug },
];

const USAGE = `import { BookOpen } from "lucide-react";

{/* Decorative or paired with visible text */}
<BookOpen className="icon-md" aria-hidden="true" />

{/* Icon-only control */}
<button aria-label="Open library">
  <BookOpen className="icon-md" aria-hidden="true" />
</button>`;

export default function IconsSection() {
  return (
    <Section
      id={meta.id}
      heading={meta.title}
      icon={meta.icon}
      description="Icons come from Lucide: simple, friendly, and consistent without asking me to draw hundreds of tiny pictures. They inherit the color around them and use three shared sizes to stay aligned across labels, buttons, and controls."
    >
      <hr className="poster-divider mt-4 mb-0" />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
          gap: "var(--space-4)",
        }}
      >
        {SIZES.map(({ className, label, value, Icon }) => (
          <div
            key={className}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "var(--space-3)",
              minHeight: 120,
              padding: "var(--space-4)",
              border: "var(--border-thin) solid var(--border-subtle)",
              borderRadius: "var(--radius-md)",
            }}
          >
            <Icon
              className={className}
              style={{ color: "var(--indigo-bold)" }}
              aria-hidden="true"
            />
            <div style={{ textAlign: "center" }}>
              <p style={{ margin: 0, fontWeight: "var(--font-semibold)" }}>
                {label}
              </p>
              <code style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>
                {className} · {value}
              </code>
            </div>
          </div>
        ))}
      </div>

      <hr className="poster-divider" />
      <h3 className='type-eyebrow' style={{ margin: "32px 0 16px" }}>Usage</h3>
      <CodeBlock code={USAGE} />
      <p className="type-supporting pt-5" style={{ margin: "0 0 var(--space-5)" }}>

        <a
          href="https://lucide.dev/icons/"
          target="_blank"
          rel="noreferrer"
          style={{ color: "var(--indigo-bold)", textDecoration: "underline" }}
        >
          Browse the Lucide icon library
        </a>
      </p>
    </Section>
  );
}
