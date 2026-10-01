import Section from "../_components/Section";
import { SECTIONS } from "../_data/sections";
import ButtonStates from "../_examples/ButtonStates";

const meta = SECTIONS.find((s) => s.id === "buttons")!;

export default function ButtonsSection() {
  return (
    <Section id={meta.id}
      heading={meta.title}
      icon={meta.icon}
      description="Buttons use a shared pill shape and playful color pairings to feel consistent without becoming too buttoned-up. Dark cherry with soft moss leads the way, while soft cherry with soft blue offers a lighter alternative.">
      <ButtonStates />
    </Section>
  );
}
