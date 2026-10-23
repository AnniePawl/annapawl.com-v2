import Section from "../_components/Section";
import ColorSwatchesGrid from "../_components/ColorSwatchesGrid";
import { Laugh } from "lucide-react";
import { SECTIONS } from "../_data/sections";


const meta = SECTIONS.find((s) => s.id === "colors")!;

export default function ColorsSection() {
  return (
    <Section
      id={meta.id}
      heading={meta.title}
      icon={meta.icon}
      lede="These are the colors that make me happy."
    >
      <div className="sedge-section-intro">
        <p>
          Yes, there are a lot of
          them... I’m making the rules here{" "}
          <Laugh
            aria-hidden="true"
            className="icon-sm inline-block align-[-0.125em] text-[var(--iris-bold)]"
          />
          <br />I want a whole world of color to pull from as my digital garden
          grows.
        </p>
        <p>
          Bright, bubbly shades bring the energy, while a more subdued palette
          adds a little moodiness. Throughout the system, colors mix and match
          in playful duets, and many components include a tone option for extra
          flexibility—leaving room for special moments and a bit of
          choose-your-own-adventure energy. Each color comes in soft and bold
          variations, making it easy to dial things up or down without losing
          cohesion.
        </p>
      </div>
      <ColorSwatchesGrid />
    </Section>
  );
}
