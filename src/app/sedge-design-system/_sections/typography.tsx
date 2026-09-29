import Section from "../_components/Section";
import { SECTIONS } from "../_data/sections";
import TypographyExamples from "../_examples/TypographyExamples";
import "./typography-poster.css";

const meta = SECTIONS.find((s) => s.id === "typography")!;

export default function TypographySection() {
  return (
    <Section id={meta.id} heading={meta.title} icon={meta.icon}>
      <TypographyExamples />
    </Section>
  );
}
