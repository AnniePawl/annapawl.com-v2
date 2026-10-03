import Section from "../_components/Section";
import { SECTIONS } from "../_data/sections";
import TooltipExamples from "../_examples/TooltipExamples";

const meta = SECTIONS.find((s) => s.id === "tooltips")!;

export default function TooltipsSection() {
  return (
    <Section
      id={meta.id}
      heading={meta.title}
      icon={meta.icon}
      description="Tooltips provide a little extra context without cluttering the interface. They use cream and charcoal by default, while optional background and foreground colors allow lighter or darker treatments. The foreground color is shared by the text and border."
    >
      <hr className="poster-divider mt-4 mb-0" />
      <TooltipExamples />
    </Section>
  );
}
