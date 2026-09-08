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
      description="Badges keep small bits of information easy to spot — whether it’s a status, category, or count. Neutral works for everyday labels, accent adds a little emphasis, and semantic colors make states clear at a glance."
    >
      <BadgeExamples />
    </Section>
  );
}
