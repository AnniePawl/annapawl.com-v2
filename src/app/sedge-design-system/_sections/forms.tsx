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
      lede="Forms should feel clear and familiar."
      description="Fields are drawn as ruled lines rather than boxes, like writing on a ruled page; the textarea becomes a few lines of ruled paper. Labels use spaced caps. Focus thickens the line to 2px in the page accent, and checked radios and checkboxes use the same accent. Red is reserved for errors, shown on the line and in a message with the small marker."
    >
      <h3 className="sedge-subheading">Example</h3>
      <FormExamples />
    </Section>
  );
}
