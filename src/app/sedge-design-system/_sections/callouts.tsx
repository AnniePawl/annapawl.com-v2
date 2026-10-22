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
      lede="Callouts add compact, non-blocking emphasis inside an article or page."
      description="I use them in posts for a side note, reminder, related idea, or small update. They stay plain on purpose: cream surface, a hairline border, and 4px corners, with a short spaced-caps label. The only color is the small marker beside the label, which follows the page accent, so a callout on the Bookshelf and one in Drawing with Code each feel at home. An optional action uses the standard text link."
    >
      <CalloutExamples />
    </Section>
  );
}
