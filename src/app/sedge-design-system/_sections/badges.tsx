import Section from "../_components/Section";
import { SECTIONS } from "../_data/sections";
import BadgeExamples from "../_examples/BadgeExamples";

const meta = SECTIONS.find((s) => s.id === "badges")!;

export default function BadgesSection() {
  return (
    <Section
      id={meta.id}
      heading={meta.title}
      icon={meta.icon}
      description="Badges are compact labels for topics, categories, and small bits of garden metadata. They use cream and charcoal by default, while optional background and foreground colors allow lighter or darker treatments. The foreground color is shared by the text and border."
    >
      <hr className="poster-divider mt-4 mb-0" />

      <BadgeExamples />
    </Section>
  );
}

