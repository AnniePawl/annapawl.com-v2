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
      description="Modals create a focused little space for messages that deserve attention. A slim top rail gives the eyebrow a clear home, while the softer surface keeps the title, message, and one action easy to scan."
    >
      <ModalExamples />
    </Section>
  );
}
