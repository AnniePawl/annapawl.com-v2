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
      lede="Cards group a short title and supporting copy into a simple, self-contained surface."
      description="Cards share the callout’s plain treatment: cream surface, a hairline border, and 4px corners, with a spaced-caps title. The only color is the small marker beside the title, which follows the page accent. There are no filled or tinted variants for now; actions are added separately only when the content needs one."
    >
      <CardExamples />
    </Section>
  );
}
