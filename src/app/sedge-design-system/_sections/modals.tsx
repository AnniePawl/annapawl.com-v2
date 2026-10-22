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
      lede="Modals create a focused layer above the page for special moments."
      description="They appear centered against a dimmed backdrop, separating the content from the rest of the screen without taking the user somewhere new. A slim top rail gives the eyebrow a clear home, while the softer surface keeps the title and message easy to scan. Modals can be dismissed with the top-right close control, by clicking outside the dialog, or by pressing Escape. Native dialog behavior, clear labeling, and keyboard focus management help make the pattern accessible."
    >
      <ModalExamples />
    </Section>
  );
}
