import Section from "../_components/Section";
import { SECTIONS } from "../_data/sections";
import TypographyExamples from "../_examples/TypographyExamples";

const meta = SECTIONS.find((s) => s.id === "typography")!;

export default function TypographySection() {
  return (
    <Section
      id={meta.id}
      heading={meta.title}
      icon={meta.icon}
      description="Two families split the work: Space Grotesk for display type and headings, Inter for body copy and UI. Every size below is one of the implementation classes from foundations/typography.css, not a one-off style."
    >
      <TypographyExamples />
    </Section>
  );
}
