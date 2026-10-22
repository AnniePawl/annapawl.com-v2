"use client";

import { CSSProperties, useState } from "react";
import Accordion, { type AccordionItem } from "../../../components/ui/Accordion";
import type { PaletteColor } from "../../../components/ui/colorTokens";
import CodeBlock from "../_components/CodeBlock";
import Radio from "../../../components/ui/Radio";
import "./AccordionExamples.css";

const USAGE = `
import Accordion from "@/components/ui/Accordion";

const items = [
  { question: "What's your favorite animal?", answer: "A unicorn!" },
  { question: "What's your favorite food?", answer: "A bao bun!" },
];

<Accordion items={items} tone="plum-bold" />
`;

const TONE_OPTIONS: Array<{ label: string; value: PaletteColor }> = [
  { label: "Indigo", value: "indigo-bold" },
  { label: "Cherry", value: "cherry-soft" },
  { label: "Emerald", value: "emerald-soft" },
  { label: "Pink", value: "pink-bold" },
];

// Anna's original sample questions -- kept as-is, just moved from being
// hardcoded inside the component to being passed in as data, which is
// what makes Accordion reusable with any question/answer list.
const FAQ_ITEMS: AccordionItem[] = [
  { question: "What's your favorite animal?", answer: "A unicorn!" },
  { question: "What's your favorite food?", answer: "A bao bun!" },
  { question: "What's your favorite day?", answer: "Saturday!" },
];

export default function AccordionExamples() {
  const [tone, setTone] = useState<PaletteColor>("indigo-bold");

  return (
    <div
      style={{
        width: "100%",
        maxWidth: 640,
        marginRight: "auto",
        alignSelf: "flex-start",
      }}
    >

      <h3 className="sedge-subheading">Example</h3>

      <Accordion items={FAQ_ITEMS} className="accordion-demo" tone={tone} />

      <fieldset className="accordion-tone-picker">
        <legend className="type-eyebrow">Tone</legend>
        <div className="accordion-tone-options">
          {TONE_OPTIONS.map((option) => (
            <span
              key={option.value}
              className="accordion-tone-option"
              style={
                {
                  "--tone-option-color": `var(--${option.value})`,
                } as CSSProperties
              }
            >
              <Radio
                id={`accordion-tone-${option.value}`}
                name="accordion-tone"
                label={option.label}
                value={option.value}
                checked={tone === option.value}
                onChange={() => setTone(option.value)}
              />
            </span>
          ))}
        </div>
      </fieldset>

      <h3 className="sedge-subheading">Usage</h3>
      <CodeBlock code={USAGE} className="mb-8" />
    </div>
  );
}
