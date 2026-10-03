import HomeLogo from "../../../components/ui/HomeLogo";
import CodeBlock from "../_components/CodeBlock";
import Section from "../_components/Section";
import { SECTIONS } from "../_data/sections";
import "./logo.css";

const meta = SECTIONS.find((section) => section.id === "logo")!;

const USAGE = `import HomeLogo from "@/components/ui/HomeLogo";

<HomeLogo
  colors={{
    base: "var(--cherry-bold)",
    hoverAccent: "var(--moss-soft)",
  }}
/>

{/* Optional: give individual petals their own resting colors. */}
<HomeLogo
  colors={{
    northeast: "var(--sky-soft)",
    southeast: "var(--moss-soft)",
    southwest: "var(--cherry-soft)",
    northwest: "var(--lemon-bold)",
    hoverAccent: "var(--indigo-bold)",
  }}
/>`;

export default function LogoSection() {
  return (
    <Section
      id={meta.id}
      heading={meta.title}
      icon={meta.icon}
      description="The clover is a persistent route home from anywhere in the garden. Its silhouette, placement, and motion stay consistent, while its resting and hover colors can adapt to the personality of each page."
    >
      <hr className="poster-divider mt-4 mb-0" />
      <span className="poster-label type-eyebrow">States</span>
      <div className="logo-state-grid">
        <div className="logo-state-example">
          <HomeLogo size="5rem" />
          <span className="logo-state-label type-supporting">Default</span>
        </div>
        <div className="logo-state-example">
          <HomeLogo size="5rem" previewState="hover" />
          <span className="logo-state-label type-supporting">Hover</span>
        </div>
      </div>

      <hr className="poster-divider" />
      <span className="poster-label type-eyebrow">Conventions</span>
      <ul className="logo-conventions type-supporting">
        <li>The complete mark always links to the home page.</li>
        <li>Keep its silhouette, size, placement, and motion consistent.</li>
        <li>Use page-specific colors with enough contrast against the surface.</li>
        <li>The hover flourish is removed automatically for reduced motion.</li>
      </ul>

      <hr className="poster-divider" />
      <h3 className='type-eyebrow' style={{ margin: "32px 0 16px" }}>Usage</h3>
      <CodeBlock code={USAGE} />
    </Section>
  );
}
