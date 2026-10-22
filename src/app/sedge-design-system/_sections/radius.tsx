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
      lede="Square by default, soft where it counts."
      description="Shape works in two layers: a small corner-radius scale for the few functional moments that need softening, and a set of custom accent shapes that add character where structure matters less."
    >
      <ShapeExamples />
    </Section>
  );
}
