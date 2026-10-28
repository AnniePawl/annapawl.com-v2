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
      lede="Answers, revealed as needed."
      description="A single-open FAQ pattern that groups questions without the visual weight of separate cards. It sits directly on the cream page with no container. Hairline rules frame and separate the rows, and a thin plus/minus opens each one. Each question number gets a bold marker and each answer a soft one, the same shape as callout and card labels. They follow the color of the section the accordion sits in, falling back to the page accent, or you can pass in a tone."
    >
      <AccordionExamples />
    </Section>
  );
}
