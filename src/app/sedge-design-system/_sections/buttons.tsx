import Section from "../_components/Section";
import { SECTIONS } from "../_data/sections";
import ButtonStates from "../_examples/ButtonStates";

const meta = SECTIONS.find((s) => s.id === "buttons")!;

export default function ButtonsSection() {
  return (
    <Section id={meta.id}
      heading={meta.title}
      icon={meta.icon}
      lede="Buttons use a compact pill shape and come in three sizes."
      description="The default pairs soft indigo with charcoal and can include an optional icon, such as an arrow. Like other components in the system, buttons can be customized with background and foreground color tokens, offering the flexibility to match the mood of each page or experience.">
      <ButtonStates />
    </Section>
  );
}
