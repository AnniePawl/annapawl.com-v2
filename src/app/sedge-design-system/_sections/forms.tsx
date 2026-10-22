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
      lede="Forms should feel clear, familiar, and easy to move through."
      description="Shared styles for inputs, labels, focus, and feedback keep things consistent while leaving room for a little personality where it fits."
    >
      <h3 className="sedge-subheading">Example</h3>
      <FormExamples />
    </Section>
  );
}
