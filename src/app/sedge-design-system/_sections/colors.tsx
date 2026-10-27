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
          Yes, there are a lot of them. I’m making the rules here. I want a whole world of color to pull from as my digital garden grows.
        </p>
        <p>
         Bright, bubbly shades bring the energy, while quieter colors add a little mood. Each comes in soft and bold variations, making it easy to dial things up or down without losing cohesion. Components can mix and match them, leaving plenty of room for pages to develop a personality of their own.
        </p>
      </div>
      <ColorSwatchesGrid />
    </Section>
  );
}
