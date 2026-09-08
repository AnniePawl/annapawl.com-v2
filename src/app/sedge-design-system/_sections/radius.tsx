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
      description="Shape works in two layers: a consistent corner-radius scale for functional UI, and a small set of custom accent shapes for more expressive moments. Decorative shapes add a little character where structure matters less."
    >
      <ShapeExamples />
    </Section>
  );
}
