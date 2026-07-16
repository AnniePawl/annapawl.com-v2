import Section from "../_components/Section";
import { SECTIONS } from "../_data/sections";
import ColorSwatchesGrid from "../_components/ColorSwatchesGrid";

const meta = SECTIONS.find((s) => s.id === "colors")!;

export default function ColorsSection() {
  return (
    <Section id={meta.id} heading={meta.title} icon={meta.icon}>
     <p>These are the colors that make me happy. My palette is intentionally wide-ranging and borderline maximalist, reflecting the playful aesthetic I want to capture in my creative portfolio. Not every hue appears at once, but each helps shape the mood of a moment. Every color has both a softer and bolder variation, giving the system flexibility while still keeping the palette cohesive.</p>
      <ColorSwatchesGrid />
    </Section>
  );
}
