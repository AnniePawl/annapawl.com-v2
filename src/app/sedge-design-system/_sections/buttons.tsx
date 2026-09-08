import Section from "../_components/Section";
import { SECTIONS } from "../_data/sections";
import ButtonStates from "../_examples/ButtonStates";

const meta = SECTIONS.find((s) => s.id === "buttons")!;

export default function ButtonsSection() {
  return (
    <Section id={meta.id}
      heading={meta.title}
      icon={meta.icon}
      description="Buttons show up everywhere, so they need to feel consistent without all looking the same. Shared structure and interaction states keep them familiar and predictable, while flexible colors, shapes, and details leave room for the occasional quirky one.">
      <ButtonStates />
    </Section>
  );
}
