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
      description="Cards group a short title and supporting copy into a simple, self-contained surface. Two variants keep the pattern focused: an outlined card for quieter grouping and a filled card for stronger emphasis. Background, foreground, and border colors can use any palette tokens, while actions are added separately only when the content needs one."
    >
      <hr className="poster-divider mt-4 mb-0" />
      <CardExamples />
    </Section>
  );
}
