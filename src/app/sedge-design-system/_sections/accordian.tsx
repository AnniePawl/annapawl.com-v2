import Section from '../_components/Section';
import { SECTIONS } from '../_data/sections';
import AccordionExamples from '../_examples/AccordionExamples';

const meta = SECTIONS.find((s) => s.id === 'accordian')!;

export default function AccordianSection() {
  return (
    <Section
      id={meta.id}
      heading={meta.title}
      icon={meta.icon}
      description="A single-open FAQ pattern for grouping related questions without the visual weight of separate cards -- one soft, pale-lavender container with thin dividers between rows. Reusable with any list of questions and answers."
    >
      <AccordionExamples />
    </Section>
  );
}
