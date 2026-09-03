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
      description="Modals create a focused little space within the page — useful for tasks, decisions, or moments that deserve a bit more attention. Built on the native <dialog> element, a flexible tone prop sets the modal’s --modal-accent, bringing coordinated color to the icon, divider, and actions while keeping the underlying structure consistent."
    >
      <ModalExamples />
    </Section>
  );
}
