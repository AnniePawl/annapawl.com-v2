import Section from "../_components/Section";
import { SECTIONS } from "../_data/sections";
import ButtonStates from "../_examples/ButtonStates";

const meta = SECTIONS.find((s) => s.id === "buttons")!;

export default function ButtonsSection() {
  return (
    <Section id={meta.id}
      heading={meta.title}
      icon={meta.icon}
      lede="Soft corners for everyday actions, a pill for the big moment."
      description="Buttons know their role, not their color: the page sets an accent once and every button follows. Three roles cover everything — no special colors for danger or success.">
      <ButtonStates />
    </Section>
  );
}
