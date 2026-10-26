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
      description="Link text stays charcoal and regular weight; a 1.5px underline marks it in the color of the post section it sits in (or the page accent elsewhere), thickening on hover. Quieter links use a dotted line that goes solid. Accessibility has been considered throughout: links use semantic anchors, retain a visible keyboard focus state, respect reduced-motion preferences, distinguish previously visited destinations, and announce when an external link opens in a new tab. The pattern remains opt-in so navigation and other complex links can keep their own behavior."
    >
      <LinkExamples />
    </Section>
  );
}
