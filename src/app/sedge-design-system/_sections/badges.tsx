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
      lede="Badges are compact labels for topics, categories, and small bits of garden metadata."
      description="They share the bookshelf tag anatomy: a small upright marker beside charcoal text, with no pill, border, or fill. The marker follows the page accent by default, or takes any palette color when a set of labels needs to be told apart, like the bookshelf genres."
    >

      <BadgeExamples />
    </Section>
  );
}

