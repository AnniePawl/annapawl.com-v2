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
      description="I agonize over fonts more than I’d like to admit. The right typeface can completely change the personality of a page, so choosing one somehow feels like a v big d. Right now I’m drawn to clean, modern sans serifs with just enough character to keep things interesting — but I’ll probably change my mind next week.

I’m using Inter right now because of option paralysis. Please stand by."
    >
      <TypographyExamples />
    </Section>
  );
}
