import Section from '../_components/Section';
import { SECTIONS } from '../_data/sections';
import Accordian from '@/src/components/ui/Accordian';

const meta = SECTIONS.find((s) => s.id === 'accordian')!;


export default function AccordianSection() {
  return (
    <Section
      id={meta.id}
      heading={meta.title}
      icon={meta.icon}
      description="WIP"
    >
        <div>
            <Accordian />
        </div>
 
    </Section>
  );
}

