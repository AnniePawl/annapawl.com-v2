import Section from "../_components/Section";
import { SECTIONS } from "../_data/sections";
import LinkExamples from "../_examples/LinkExamples";

const meta = SECTIONS.find((section) => section.id === "links")!;

export default function LinksSection() {
  return (
    <Section
      id={meta.id}
      heading={meta.title}
      icon={meta.icon}
      lede="Links pair bold indigo text with a matching underline, shifting to plum on hover while remaining recognizable without relying on color alone."
      description="Accessibility has been considered throughout: links use semantic anchors, retain a visible keyboard focus state, respect reduced-motion preferences, distinguish previously visited destinations, and announce when an external link opens in a new tab. The pattern remains opt-in so navigation and other complex links can keep their own behavior."
    >
      <LinkExamples />
    </Section>
  );
}
