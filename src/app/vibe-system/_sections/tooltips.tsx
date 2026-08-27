import Section from "../_components/Section";
import { SECTIONS } from "../_data/sections";
import TooltipExamples from "../_examples/TooltipExamples";

const meta = SECTIONS.find((s) => s.id === "tooltips")!;

export default function TooltipsSection() {
  return (
    <Section
      id={meta.id}
      heading={meta.title}
      icon={meta.icon}
      description="Tooltips provide a little extra context when it’s helpful, appearing on hover or keyboard focus without cluttering the interface."
    >
      <TooltipExamples />
    </Section>
  );
}
