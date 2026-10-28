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
      lede="Subtle emphasis without interrupting the flow."
      description="I use them in posts for a side note, reminder, related idea, or small update. They stay plain on purpose, with a cream surface, a hairline border, 4px corners, and a short spaced-caps label. The only color is the small marker beside the label, which follows the page accent unless you pass in a tone. Under the hood a callout is an aside, so screen readers know it sits outside the main story. Its label is decorative rather than a heading, it takes an optional action link, and it stays narrow at 40rem so it reads like a note in the margin."
    >
      <CalloutExamples />
    </Section>
  );
}
