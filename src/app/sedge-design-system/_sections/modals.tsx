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
      lede="Two dialogs for two jobs."
      description="A small centered modal handles short moments, and a side drawer holds longer content. Both share the same voice, with cream, charcoal text, a hairline edge, the page-accent marker, and a light charcoal backdrop with no shadows. The modal is a notecard with 4px corners, a spaced-caps label, a modest title, and a plain × in the corner. The drawer slides in from the right like a page margin and keeps a big title for content worth settling into. Both are built on the native dialog element, so focus is trapped, Escape closes them, and so does clicking the backdrop."
    >
      <ModalExamples />
    </Section>
  );
}
