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
      description="Thin dividers keep each row distinct, while one tone prop coordinates the divider, number, and control colors to suit each page."
    >
      <AccordionExamples />
    </Section>
  );
}
