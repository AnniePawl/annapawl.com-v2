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
      description="Modals interrupt the page for a focused task or decision. Built on the native <dialog> element for built-in focus trapping, Escape-to-close, and backdrop dismissal — no extra JS library needed."
    >
      <ModalExamples />
    </Section>
  );
}
