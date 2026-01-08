import Section from "../_components/Section";
import { SECTIONS } from "../_data/sections";

const meta = SECTIONS.find((s) => s.id === "overview")!;

export default function OverviewSection() {
  return (
    <Section id={meta.id} heading={meta.title} icon={meta.icon}>
      <p>
        Welcome to my design system documentation. It captures the foundational
        visual decisions behind my portfolio UI and serves as a living record of
        how I think, learn, and evolve as a designer and developer.
      </p>
      <p>
        I’m a minimalist–maximalist (somehow). I’m drawn to crisp, simple
        structure, punctuated with bold, playful, expressive moments. I’m
        motivated by color, texture, and visual delight—the result is a system
        that feels intentionally restrained yet vibrant, using joyful color to
        reflect energy, creativity, and emotion without overwhelming the
        experience.
      </p>
      <p>
        This balance between clarity and play is central to how I design. The
        system is imperfect and always in progress: a space for exploration,
        iteration, and learning. It reflects a belief that good design can be
        professional without being sterile, expressive without being loud, and
        human at every layer.
      </p>
    </Section>
  );
}
