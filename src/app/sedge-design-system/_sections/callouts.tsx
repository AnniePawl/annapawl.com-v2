import Section from "../_components/Section";
import { SECTIONS } from "../_data/sections";
import CalloutExamples from "../_examples/CalloutExamples";

const meta = SECTIONS.find((section) => section.id === "callouts")!;

export default function CalloutsSection() {
  return (
    <Section
      id={meta.id}
      heading={meta.title}
      icon={meta.icon}
      description="Callouts add non-blocking emphasis inside an article or page. They share the modal’s top label rail and two-tone palette, but stay embedded in the reading flow and only include an action when it genuinely helps."
    >
      <CalloutExamples />
    </Section>
  );
}
