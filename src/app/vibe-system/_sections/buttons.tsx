import Section from "../_components/Section";
import { SECTIONS } from "../_data/sections";
import ButtonStates from "../_examples/ButtonStates";

const meta = SECTIONS.find((s) => s.id === "buttons")!;

export default function ButtonsSection() {
  return (
    <Section id={meta.id} heading={meta.title} icon={meta.icon}>
      <ButtonStates />
    </Section>
  );
}
