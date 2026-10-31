import TextLink from "../../../components/ui/TextLink";
import Section from "../_components/Section";
import { SECTIONS } from "../_data/sections";
import AccordionExamples from "../_examples/AccordionExamples";

const meta = SECTIONS.find((section) => section.id === "accordion")!;

export default function AccordionSection() {
  return (
    <Section
      id={meta.id}
      heading={meta.title}
      icon={meta.icon}
      lede="Answers, revealed as needed."
      description={[
        "A stack of expandable sections that open like drawers, revealing only what you need while keeping the rest tucked away. This single-open pattern allows one item to remain open at a time.",
        "Hairline rules separate the rows, while a thin plus-and-minus icon communicates each item’s state. Open items get a colored divider between the question and answer. Question numbers use bold markers, answers use softer ones, and an optional title sits above the collection. The component inherits the color of its section, falls back to the page accent, or accepts a custom tone.",
        "Each trigger is a button inside a heading, giving the accordion a clear structure and allowing screen-reader users to navigate between questions.",
        <>
          Want to see how it works? Check out the{" "}
          <TextLink tone='green' href="/accordion">accessible accordion post</TextLink> from my
          Building Blocks series to learn how to build one from scratch.
        </>,
      ]}
    >
      <AccordionExamples />
    </Section>
  );
}
