import Section from "../_components/Section";
import { SECTIONS } from "../_data/sections";
import ShapeExamples from "../_examples/ShapeExamples";

const meta = SECTIONS.find((s) => s.id === "shape")!;

export default function RadiusDocsSection() {
  return (
    <Section
      id={meta.id}
      heading={meta.title}
      icon={meta.icon}
      description="Two tiers: a systematic corner-radius scale used everywhere (buttons, cards, modals, inputs), and a small set of custom accent shapes for decorative moments — inspired by the idea behind Material's expressive shape library, not copied from it."
    >
      <ShapeExamples />
    </Section>
  );
}
