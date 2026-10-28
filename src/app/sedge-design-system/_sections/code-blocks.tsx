import type { CSSProperties } from "react";
import CodeBlock from "../../../components/ui/CodeBlock";
import Section from "../_components/Section";
import { SECTIONS } from "../_data/sections";
import "./code-blocks.css";

const meta = SECTIONS.find((s) => s.id === "code-blocks")!;

const SAMPLE = `.circle__outer {
  width: 180px;
  border-radius: 50%;
}`;

// Stand-ins for post sections: a PostSection sets this variable for you.
const SECTION_SAMPLES = [
  { label: "In a blue section", soft: "var(--sky-soft)" },
  { label: "In a yellow section", soft: "var(--lemon-soft)" },
  { label: "In a pink section", soft: "var(--pink-soft)" },
];

const USAGE = `import CodeBlock from "@/components/ui/CodeBlock";

// Inside a PostSection: text takes the section's soft color
<CodeBlock code={\`.circle { border-radius: 50%; }\`} />

// Pick a hue yourself. It always uses the soft version.
<CodeBlock code={…} tone="marigold" />

// No copy button
<CodeBlock code={…} copyable={false} />

// Code inside a sentence uses inline code instead
<p>Set <code>border-radius</code> to 50%.</p>`;

export default function CodeBlocksSection() {
  return (
    <Section
      id={meta.id}
      heading={meta.title}
      icon={meta.icon}
      lede="Code blocks match their section color."
      description="One charcoal block with 4px corners and a copy button, used for every snippet on the site. Inside a post section, the code text takes the soft version of that section’s color, so each block matches the heading and markers around it. Outside a section it falls back to iris soft, and a tone prop picks any color by hand. The darkest soft colors (cherry, emerald and cocoa) are lightened automatically so they stay readable. Comments are always cream, whatever the tone, so they stand apart from the code around them."
    >
      <h3 className="sedge-subheading">Follows its section</h3>
      <div className="code-blocks-grid">
        {SECTION_SAMPLES.map(({ label, soft }) => (
          <div
            key={label}
            className="code-blocks-sample"
            style={{ "--post-section-tone-soft": soft } as CSSProperties}
          >
            <span className="type-note-label">{label}</span>
            <CodeBlock code={SAMPLE} copyable={false} />
          </div>
        ))}
      </div>

      <h3 className="sedge-subheading">Default and override</h3>
      <div className="code-blocks-grid code-blocks-grid--two">
        <div className="code-blocks-sample">
          <span className="type-note-label">Outside a section</span>
          <CodeBlock code={SAMPLE} />
        </div>
        <div className="code-blocks-sample">
          <span className="type-note-label">tone=&quot;mint&quot;</span>
          <CodeBlock code={SAMPLE} tone="mint" />
        </div>
      </div>

      <h3 className="sedge-subheading">Usage</h3>
      <CodeBlock tone='green' code={USAGE} className="mb-8" />
    </Section>
  );
}
