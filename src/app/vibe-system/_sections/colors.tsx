import Section from "../_components/Section";
import { SECTIONS } from "../_data/sections";
import ColorSwatchesGrid from "../_components/ColorSwatchesGrid";

const meta = SECTIONS.find((s) => s.id === "colors")!;

export default function ColorsSection() {
  return (
    <Section id={meta.id} heading={meta.title} icon={meta.icon}>
      <p>
        These are the colors that make me happy. The palette spans a wide range
        of hues—not because the interface needs them all at once, but because
        different moments across the site call for different emotional tones.
        Color here is used as a storytelling tool: to create warmth, guide
        attention, and make the experience feel alive.
      </p>
      <p>
        Each hue is intentionally softened and slightly muted, allowing it to be
        used generously without overwhelming the interface. There’s an element
        of playfulness throughout, but it’s grounded—meant to invite curiosity
        and delight rather than visual fatigue.
      </p>

      <ColorSwatchesGrid />
    </Section>
  );
}
