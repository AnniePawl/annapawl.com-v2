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
      lede="Links keep the voice of the text around them — the color lives in the underline."
      description="Link text stays charcoal and regular weight; the color lives in a 1.5px underline that thickens on hover. Quieter links use a dotted line that turns solid. Semantic anchors, visible focus, visited states, and external-link announcements keep the pattern useful beyond its appearance. It remains opt-in so navigation and other complex links can keep their own behavior."
    >
      <LinkExamples />
    </Section>
  );
}
