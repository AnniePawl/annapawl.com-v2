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
      description="Badges label status, category, or count. Use neutral for general tags, accent to tie into the primary interactive color, and success/warning/danger for state."
    >
      <BadgeExamples />
    </Section>
  );
}
