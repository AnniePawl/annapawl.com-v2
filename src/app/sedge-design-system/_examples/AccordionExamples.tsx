import { Squirrel } from "lucide-react";
import Accordion, { type AccordionItem } from "../../../components/ui/Accordion";
import CodeBlock from "../../../components/ui/CodeBlock";

const USAGE = `
import Accordion from "@/components/ui/Accordion";

const items = [
  { question: "What's your favorite animal?", answer: "A unicorn!" },
  { question: "What's your favorite food?", answer: "A bao bun!" },
];

// Markers follow the section color: bold for questions, soft for answers
<Accordion items={items} />

// Or pick a hue yourself
<Accordion items={items} tone="pink" />

// Add a title (h3 by default; titleAs changes the level)
<Accordion title="A few favorites" items={items} />
`;

const FAQ_ITEMS: AccordionItem[] = [
  {
    question: "Are squirrels secretly tiny gardeners?",
    answer: "Yes! Squirrels sometimes forget where they buried their nuts, allowing some forgotten seeds to sprout into new plants and trees.",
  },
  {
    question: "Why do squirrels flick their tails so dramatically?",
    answer: "Tail flicking helps squirrels communicate. It can signal danger, warn other squirrels, or express irritation.",
  },
  {
    question: "If squirrels had pockets, what would they keep in them?",
    answer: "Probably emergency acorns, stolen birdseed, and one extremely important pebble.",
  },
];

export default function AccordionExamples() {
  return (
    <div style={{ width: "100%", maxWidth: 640, marginRight: "auto" }}>
      <h3 className="sedge-subheading">Example</h3>
      <Accordion title="Squirrel Secrets" titleIcon={Squirrel} items={FAQ_ITEMS} defaultOpenId="1" />

      <h3 className="sedge-subheading">Usage</h3>
      <CodeBlock tone='green' code={USAGE} className="mb-8" />
    </div>
  );
}
