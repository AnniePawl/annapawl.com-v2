import Section from "../_components/Section";
import { SECTIONS } from "../_data/sections";
import ButtonStates from "../_examples/ButtonStates";

const meta = SECTIONS.find((s) => s.id === "buttons")!;

export default function ButtonsSection() {
  return (
    <Section id={meta.id}
      heading={meta.title}
      icon={meta.icon}
      lede="Soft corners for the everyday, pill shapes for emphasis."
      description="By default, buttons inherit the page accent and use one of three roles, without separate colors for danger or success. Primary and secondary buttons don’t add a pressed style: hover already signals interactivity, and the interface responds immediately after a click, making another visual state unnecessary. Quiet buttons and links have no fill to shift, so they dim briefly when pressed. Every part of a button can also be customized when the default system isn’t the right fit.">
      <ButtonStates />
    </Section>
  );
}
