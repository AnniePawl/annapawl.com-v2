import Section from "../_components/Section";
import { SECTIONS } from "../_data/sections";

const meta = SECTIONS.find((s) => s.id === "radius")!;

export default function RadiusDocsSection() {
  return (
       <Section id={meta.id} heading={meta.title} icon={meta.icon}>
         <p>Inter is used as the primary typeface across the system.</p>
       </Section>
  );
}
