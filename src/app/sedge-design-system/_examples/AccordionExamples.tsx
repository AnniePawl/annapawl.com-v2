import Accordian, { type AccordionItem } from "../../../components/ui/Accordian";
import CodeBlock from "../_components/CodeBlock";

const USAGE = `
import Accordian from "@/components/ui/Accordian";

const items = [
  { question: "What's your favorite animal?", answer: "A unicorn!" },
  { question: "What's your favorite food?", answer: "A bao bun!" },
];

<Accordian items={items} />
`;

// Anna's original sample questions -- kept as-is, just moved from being
// hardcoded inside the component to being passed in as data, which is
// what makes Accordian reusable with any question/answer list.
const FAQ_ITEMS: AccordionItem[] = [
  { question: "What's your favorite animal?", answer: "A unicorn!" },
  { question: "What's your favorite food?", answer: "A bao bun!" },
  { question: "What's your favorite day?", answer: "Saturday!" },
];

export default function AccordionExamples() {
  return (
    <div style={{ maxWidth: 640 }}>
      <CodeBlock code={USAGE} className="mb-8" />
      <Accordian items={FAQ_ITEMS} />
    </div>
  );
}
