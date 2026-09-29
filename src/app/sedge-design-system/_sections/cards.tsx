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
      description="Cards are one of the most-used building blocks across my digital garden. Two quiet variants keep them consistent: an outlined card for the default surface and a soft indigo card for a little more emphasis."
    >
      <CardExamples />
    </Section>
  );
}
