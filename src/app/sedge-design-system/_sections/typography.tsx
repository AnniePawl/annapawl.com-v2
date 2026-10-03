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
      description="After auditioning more fonts than strictly necessary, I landed on Inter across the whole system. One typeface gives everything a steady foundation, while clamped display and heading sizes scale smoothly across smaller screens. Shifts in weight and spacing keep the hierarchy clear, and special text tokens—like eyebrows and supporting copy—give the smaller moments their own voice without disrupting the system."
    >
      <TypographyExamples />
    </Section>
  );
}
