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
      description="Tooltips add a short hint on hover or keyboard focus. CSS-only for now — revisit with collision-aware positioning if a tooltip ever needs to avoid the viewport edge."
    >
      <TooltipExamples />
    </Section>
  );
}
