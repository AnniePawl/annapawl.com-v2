import Section from "../_components/Section";
import { SECTIONS } from "../_data/sections";
import FormExamples from "../_examples/FormExamples";

const meta = SECTIONS.find((s) => s.id === "forms")!;

export default function FormsSection() {
  return (
    <Section
      id={meta.id}
      heading={meta.title}
      icon={meta.icon}
      description="Form controls share one input surface (border, radius, focus ring) so text fields, selects, and validation states stay visually consistent. FormField/FieldLabel/FieldHint/FieldError compose around any control."
    >
      <FormExamples />
    </Section>
  );
}
