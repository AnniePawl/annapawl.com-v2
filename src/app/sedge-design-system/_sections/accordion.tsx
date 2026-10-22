import Section from "../_components/Section";
import { SECTIONS } from "../_data/sections";
import AccordionExamples from "../_examples/AccordionExamples";

const meta = SECTIONS.find((section) => section.id === "accordion")!;

export default function AccordionSection() {
  return (
    <Section
      id={meta.id}
      heading={meta.title}
      icon={meta.icon}
      lede="A single-open FAQ pattern for grouping related questions without the visual weight of separate cards."
      description="It sits directly on the cream page with no container: hairline rules frame and separate the rows, and a thin plus/minus opens each one. Every number carries the same small marker as callout and card labels, in the soft page tint; when an item opens, its marker turns the full page accent."
    >
      <AccordionExamples />
    </Section>
  );
}
