import Section from "../_components/Section";
import { SECTIONS } from "../_data/sections";

const meta = SECTIONS.find((s) => s.id === "overview")!;

export default function OverviewSection() {
  return (
    <Section id={meta.id} heading={meta.title} icon={meta.icon}>
      <p>This design system is a living record of the UI decisions behind my digital garden and a playground for developing a visual language that feels distinctly ✴me✴.
      </p>

<p>
As a frontend developer with a deep love of design, I’ve become increasingly curious, intentional, and sometimes obsessive about how things look, feel, and respond. This system gives structure to that curiosity and my own visual instincts: thoughtful and precise at its core, with plenty of room for color, weird little details, and moments of delight.
</p>
<p>
It’s a space to experiment, break a few rules, and occastionally change my mind entirely. Nothing here is too precious to change or ever really finished. Like any garden, it’s meant to be tended to and grown over time — evolving as I learn, noodle, refine my taste, and sometimes fall victim to a design trend. 🌱
      </p>
    </Section>
  );
}
