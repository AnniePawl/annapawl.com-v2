import Section from "../_components/Section";
import { SECTIONS } from "../_data/sections";
import ButtonStates from "../_examples/ButtonStates";

const meta = SECTIONS.find((s) => s.id === "buttons")!;

export default function ButtonsSection() {
  return (
    <Section id={meta.id}
      heading={meta.title}
      icon={meta.icon}
      lede="One button to reach for first, with a few more when you need them."
      description="Buttons take the page’s accent color and come in three roles. Primary does almost everything; links can look like buttons too.">
      <ButtonStates />
    </Section>
  );
}
