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
      description="Cards group related content on a raised surface. Use the default variant for most grouping, soft for nested/secondary content, and interactive when the whole card acts as a clickable target."
    >
      <CardExamples />
    </Section>
  );
}
