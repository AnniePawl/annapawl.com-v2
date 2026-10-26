import Accordion, { type AccordionItem } from "../../../components/ui/Accordion";
import CodeBlock from "../../../components/ui/CodeBlock";

const USAGE = `
import Accordion from "@/components/ui/Accordion";

const items = [
  { question: "What's your favorite animal?", answer: "A unicorn!" },
  { question: "What's your favorite food?", answer: "A bao bun!" },
];

<Accordion items={items} />
`;

// Anna's original sample questions.
const FAQ_ITEMS: AccordionItem[] = [
  { question: "What's your favorite animal?", answer: "A unicorn!" },
  { question: "What's your favorite food?", answer: "A bao bun!" },
  { question: "What's your favorite day?", answer: "Saturday!" },
];

export default function AccordionExamples() {
  return (
    <div style={{ width: "100%", maxWidth: 640, marginRight: "auto" }}>
      <h3 className="sedge-subheading">Example</h3>
      <Accordion items={FAQ_ITEMS} defaultOpenId="1" />

      <h3 className="sedge-subheading">Usage</h3>
      <CodeBlock code={USAGE} className="mb-8" />
    </div>
  );
}
