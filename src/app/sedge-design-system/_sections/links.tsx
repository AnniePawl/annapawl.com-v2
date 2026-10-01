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
      description="Links stay recognizably link-like: color and a visible underline do the practical work, while a small shift on hover adds just enough personality. The pattern is opt-in so navigation and other complex links can keep their own behavior."
    >
      <LinkExamples />
    </Section>
  );
}
