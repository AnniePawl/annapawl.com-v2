"use client";

import { CSSProperties, useState } from "react";
import Button from "../../../components/ui/Button";
import Modal, { type ModalTone } from "../../../components/ui/Modal";
import CodeBlock from "../_components/CodeBlock";

const USAGE = `
import { useState } from "react";
import Modal from "@/components/ui/Modal";

const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Open modal</Button>

<Modal
  open={open}
  onClose={() => setOpen(false)}
  eyebrow="Just so you know"
  title="Modal title"
  description="A short explanation of what needs your attention."
  actionLabel="Got it"
  tone="lemon"
/>
`;

const TONE_EXAMPLES: Array<{
  tone: ModalTone;
  color: string;
  label: string;
}> = [
  { tone: "lemon", color: "var(--lemon-bold)", label: "Lemon" },
  { tone: "coral", color: "var(--coral-bold)", label: "Coral" },
  { tone: "mint", color: "var(--mint-soft)", label: "Mint" },
];

export default function ModalExamples() {
  const [activeTone, setActiveTone] = useState<ModalTone | null>(null);

  return (
    <section style={{ maxWidth: 720 }}>
      <CodeBlock code={USAGE} className="mb-8" />

      <p className="mb-3 text-sm font-medium text-[var(--text-secondary)]">
        Action colors
      </p>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        {TONE_EXAMPLES.map(({ tone, color, label }) => (
          <Button
            key={tone}
            variant="secondary"
            className="tone-trigger"
            style={{ "--tone-color": color } as CSSProperties}
            onClick={() => setActiveTone(tone)}
          >
            {label}
          </Button>
        ))}
      </div>

      <Modal
        open={activeTone !== null}
        onClose={() => setActiveTone(null)}
        eyebrow="Just so you know"
        title="Modal title"
        description="This focused little space keeps the message short, clear, and easy to act on."
        actionLabel="Got it"
        onAction={() => setActiveTone(null)}
        tone={activeTone ?? "lemon"}
      />
    </section>
  );
}
