import Section from "../_components/Section";
import { SECTIONS } from "../_data/sections";
import CardExamples from "../_examples/CardExamples";

const meta = SECTIONS.find((s) => s.id === "cards")!;

export default function CardsSection() {
  return (
    <Section
      id={meta.id}
      heading={meta.title}
      icon={meta.icon}
      description="Cards are one of the most-used building blocks across my digital garden, so they’re designed to be consistent without feeling repetitive. A shared structure keeps them grounded, while flexible backgrounds, accents, and details give each one room to have its own vibe."
    >
      <CardExamples />
    </Section>
  );
}
