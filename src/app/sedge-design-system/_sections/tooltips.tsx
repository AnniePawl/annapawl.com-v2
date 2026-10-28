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
      lede="Add context without clutter."
      description="They share the callout and badge anatomy: a hairline border, 4px corners, and a small marker before the label. Plain tooltips are cream with a page-accent marker. Tinted ones use the soft page tint behind the same marker, which on Sedge is soft sky with dark cherry. For anything else, pass your own background, marker, and text colors from the palette."
    >
      <TooltipExamples />
    </Section>
  );
}
