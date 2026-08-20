import Section from "../_components/Section";
import { SECTIONS } from "../_data/sections";
import ColorSwatchesGrid from "../_components/ColorSwatchesGrid";

const meta = SECTIONS.find((s) => s.id === "colors")!;

export default function ColorsSection() {
  return (
    <Section id={meta.id} heading={meta.title} icon={meta.icon}>
     <p>These are the colors that make me happy — a collection that brings playfulness and personality to my portfolio. The palette is intentionally expansive, shifting to set the mood of a page, project, or moment. Each hue has a bold and soft variation, creating room to experiment while keeping everything connected within the same visual world.</p>
      <ColorSwatchesGrid />
    </Section>
  );
}
