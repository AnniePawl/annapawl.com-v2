import Section from "../_components/Section";
import { SECTIONS } from "../_data/sections";
import CalloutExamples from "../_examples/CalloutExamples";

const meta = SECTIONS.find((section) => section.id === "callouts")!;

export default function CalloutsSection() {
  return (
    <Section
      id={meta.id}
      heading={meta.title}
      icon={meta.icon}
      description="Callouts add compact, non-blocking emphasis inside an article or page. I use them in posts to highlight a side note, reminder, related idea, or small update. Their two-tone treatment can combine any surface and accent colors from the palette: the surface color carries into the label rail’s text, while the accent connects the rail and optional action link. Body copy can be colored independently to remain readable on lighter or darker surfaces."
    >
      <hr className="poster-divider mt-4 mb-0" />
      <CalloutExamples />
    </Section>
  );
}
