import Section from "../_components/Section";
import { SECTIONS } from "../_data/sections";
import BadgeExamples from "../_examples/BadgeExamples";

const meta = SECTIONS.find((s) => s.id === "badges")!;

export default function BadgesSection() {
  return (
    <Section
      id={meta.id}
      heading={meta.title}
      icon={meta.icon}
      lede="Labels for quick context."
      description="Badges are compact labels for topics, categories, and garden metadata. Each pairs a small marker with charcoal text. The marker uses the page accent by default, but can take on any palette color when labels need to be distinguished, like the genre tags on the bookshelf page."
    >
      <BadgeExamples />
    </Section>
  );
}

