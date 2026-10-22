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
      lede="After auditioning more fonts than strictly necessary, I landed on Inter across the whole system."
      description="One typeface, mostly at regular weight. Hierarchy comes from size and spacing rather than boldness: big type gets tighter, small labels get airier, and each role has its own token so every page uses type the same way."
    >
      <TypographyExamples />
    </Section>
  );
}
