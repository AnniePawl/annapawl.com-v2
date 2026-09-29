import Section from "../_components/Section";
import { SECTIONS } from "../_data/sections";
import ModalExamples from "../_examples/ModalExamples";

const meta = SECTIONS.find((s) => s.id === "modals")!;

export default function ModalsSection() {
  return (
    <Section
      id={meta.id}
      heading={meta.title}
      icon={meta.icon}
      description="Modals create a focused little space within the page for messages that deserve attention. A card-like indigo outline keeps the surface consistent, while three action colors provide a small amount of emphasis."
    >
      <ModalExamples />
    </Section>
  );
}
