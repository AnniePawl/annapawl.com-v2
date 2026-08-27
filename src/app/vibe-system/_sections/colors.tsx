import Section from "../_components/Section";
import { SECTIONS } from "../_data/sections";
import ColorSwatchesGrid from "../_components/ColorSwatchesGrid";

const meta = SECTIONS.find((s) => s.id === "colors")!;

export default function ColorsSection() {
  return (
    <Section id={meta.id} heading={meta.title} icon={meta.icon}>
     <p>These are the colors that make me happy. Yes, I realize there are probably more than a traditional design system would recommend, but that’s kind of the point — I’m making the rules here. The palette is intentionally expansive: less about limiting what I can use and more about giving me a whole world of color to pull from. Bold and soft variations let the mood shift from moment to moment while keeping everything part of the same visual world.</p>
      <ColorSwatchesGrid />
    </Section>
  );
}
