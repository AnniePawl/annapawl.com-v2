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
      lede="Badges are compact labels for topics, categories, and small bits of garden metadata."
      description="They use cream and charcoal by default, while optional background and foreground colors allow lighter or darker treatments. The foreground color is shared by the text and border."
    >

      <BadgeExamples />
    </Section>
  );
}

