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
      description="Forms should feel clear, familiar, and easy to move through. Shared styles for inputs, labels, focus, and feedback keep things consistent while leaving room for a little personality where it fits."
    >
      <FormExamples />
    </Section>
  );
}
