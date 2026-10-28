import HomeLogo, { type HomeLogoColors } from "../../../components/ui/HomeLogo";
import CodeBlock from "../../../components/ui/CodeBlock";
import Section from "../_components/Section";
import { SECTIONS } from "../_data/sections";
import "./logo.css";

const meta = SECTIONS.find((section) => section.id === "logo")!;

// A few fun petal mixes for "Across the garden" — any palette tokens work.
const PETAL_MIXES: HomeLogoColors[] = [
  {
    northwest: "var(--pink-bold)",
    northeast: "var(--marigold-bold)",
    southwest: "var(--pink-bold)",
    southeast: "var(--pink-bold)",
    hoverAccent: "var(--pink-bold)",
  },
  {
    northwest: "light-dark(var(--charcoal), var(--sand-soft))",
    northeast: "light-dark(var(--cocoa-bold), var(--clay-soft))",
    southeast: "light-dark(var(--cocoa-soft), var(--taupe-soft))",
    southwest: "var(--sand-bold)",
    hoverAccent: "var(--cherry-bold)",
  },
  {
    northwest: "var(--emerald-bold)",
    northeast: "var(--lime-bold)",
    southwest: "var(--sage-soft)",
    southeast: "var(--moss-bold)",
    hoverAccent: "var(--pink-bold)",
  },
  {
    northwest: "var(--cherry-bold)",
    northeast: "var(--pink-soft)",
    southwest: "var(--red-bold)",
    southeast: "var(--sand-bold)",
    hoverAccent: "var(--sky-bold)",
  },
];

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
    northeast: "var(--periwinkle-soft)",
    southeast: "var(--moss-soft)",
    southwest: "var(--cherry-soft)",
    northwest: "var(--lemon-bold)",
    hoverAccent: "var(--iris-bold)",
  }}
/>`;

export default function LogoSection() {
  return (
    <Section
      id={meta.id}
      heading={meta.title}
      icon={meta.icon}
      lede="A persistent route home from anywhere in the garden."
      description="Its silhouette, placement, and motion stay consistent, while its resting and hover colors can adapt to the personality of each page."
    >
      <h3 className="sedge-subheading">States</h3>
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

      <h3 className="sedge-subheading">Across the garden</h3>
      <p>
        The clover silhouette always stays the same, but the petals are totally
        customizable. Each page can dress the logo in colors that match its
        own palette and vibe.
      </p>
      <div className="logo-variant-grid">
        {PETAL_MIXES.map((colors, i) => (
          <div className="logo-state-example" key={i}>
            <HomeLogo size="3.5rem" colors={colors} />
          </div>
        ))}
      </div>

      <h3 className="sedge-subheading">Conventions</h3>
      <ol className="sedge-numbered-list">
        <li>The complete mark always links to the home page.</li>
        <li>Keep its silhouette, size, placement, and motion consistent.</li>
        <li>Use page-specific colors with enough contrast against the surface.</li>
        <li>The hover flourish is removed automatically for reduced motion.</li>
      </ol>

      <h3 className="sedge-subheading">Usage</h3>
      <CodeBlock tone='sky' code={USAGE} />
    </Section>
  );
}
