import Section from "../_components/Section";
import { SECTIONS } from "../_data/sections";
import CardExamples from "../_examples/CardExamples";

const meta = SECTIONS.find((s) => s.id === "cards")!;

export default function CardsSection() {
  return (
    <Section
      id={meta.id}
      heading={meta.title}
      icon={meta.icon}
      lede="A simple surface for a title and a few lines."
      description="Cards group a short title and supporting copy into one self-contained surface. They look like callouts, with a cream surface, a hairline border, 4px corners, and a spaced-caps title whose marker follows the page accent or a tone you pass in. The difference is what they are. A card is part of the content, one item in a set that sits next to others. Its title is a real heading, so it shows up in the page outline, and the card stretches to fill whatever grid it’s placed in. Callouts are for asides, and cards are for things that belong to the page."
    >
      <CardExamples />
    </Section>
  );
}
