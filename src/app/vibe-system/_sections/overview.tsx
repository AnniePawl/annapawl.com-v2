import Section from "../_components/Section";
import { SECTIONS } from "../_data/sections";

const meta = SECTIONS.find((s) => s.id === "overview")!;

export default function OverviewSection() {
  return (
    <Section id={meta.id} heading={meta.title} icon={meta.icon}>
      <p>
        Welcome to my design system documentation — a living record of the UI
        foundations behind my personal portfolio. It reflects my evolution from
        frontend developer to UX engineer, capturing how I think about building
        thoughtful interfaces at the intersection of design and code. The system
        embodies my minimalist–maximalist aesthetic: clear, simple structure
        punctuated by bold, playful, expressive moments. Elements of delight are
        central to how I design, resulting in a system that aims to feel both
        restrained and vibrant. It’s also an ongoing space for experimentation and
        iteration — a place where ideas are tested, refined, and expanded over time —
        guided by the belief that good design is structured enough to feel intuitive, expressive enough to feel alive, and human at every layer.
      </p>
    </Section>
  );
}
