import Section from "../_components/Section";
import { SECTIONS } from "../_data/sections";

const meta = SECTIONS.find((s) => s.id === "overview")!;

export default function OverviewSection() {
  return (
    <Section id={meta.id} heading={meta.title} icon={meta.icon}>
      <p>This design system is a living record of the UI decisions behind my personal portfolio — and a playground for developing a visual language that feels distinctly my own ✨
      </p>

<p>
As a frontend developer with a passion for design, I’ve become increasingly curious and intentional about how things look, feel, and respond. This system gives structure to that curiosity and my personal aesthetic: thoughtful and precise at its core, with plenty of room for color, playfulness, personality, and the unexpected.
</p>
<p>
It’s a space to experiment, break a few rules, and create moments of delight without losing sight of the details. Like the digital garden it supports, it’s never really finished — it’s meant to be tended to, experimented with, and grown over time, evolving alongside my taste, ideas, and the way I build.
      </p>
    </Section>
  );
}
