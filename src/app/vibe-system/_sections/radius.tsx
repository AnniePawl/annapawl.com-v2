import Section from "../_components/Section";
import { SECTIONS } from "../_data/sections";

const meta = SECTIONS.find((s) => s.id === "shape")!;

export default function RadiusDocsSection() {
  return (
       <Section id={meta.id} heading={meta.title} icon={meta.icon}>
         <p>Use abtract shapes throughfully to add emphasis and decorative flair.</p>
        <p>Shape Library : from material design - very sunny, 4-sides cookie, 12 sided cookie,  </p>
       <p> Create tension by using combination of round and square shapes</p>
       </Section>
  );
}
