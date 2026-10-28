import Section from "../_components/Section";
import { SECTIONS } from "../_data/sections";
import TypographyExamples from "../_examples/TypographyExamples";

const meta = SECTIONS.find((s) => s.id === "typography")!;

export default function TypographySection() {
  return (
    <Section
      id={meta.id}
      heading={meta.title}
      icon={meta.icon}
      lede="One typeface across the whole system."
      description="After auditioning more fonts than strictly necessary, I landed on Inter, used mostly at regular weight. Hierarchy comes from size and spacing rather than boldness. Big type gets tighter, small labels get airier, and each role has its own token so every page uses type the same way."
    >
      <TypographyExamples />
    </Section>
  );
}
