import Section from "../_components/Section";
import ColorSwatchesGrid from "../_components/ColorSwatchesGrid";
import { SECTIONS } from "../_data/sections";

const meta = SECTIONS.find((s) => s.id === "colors")!;

export default function ColorsSection() {
  return (
    <Section id={meta.id} heading={meta.title} icon={meta.icon}>
      <div className="sedge-section-intro" style={{ position: "relative" }}>
        <p>
        These are the colors that make me happy. Yes, there are a lot of them—I’m making the rules here. This is my digital garden, and I want a whole world of color to pull from as it grows. Bright, bubbly shades bring the energy, while a quieter palette is reserved for moments that call for more restraint. Soft and bold variations make it easy to dial the energy up or down without losing cohesion.
        </p>

      </div>

      <div style={{ marginTop: "var(--space-6)" }}>
        <ColorSwatchesGrid />
      </div>
    </Section>
  );
}
