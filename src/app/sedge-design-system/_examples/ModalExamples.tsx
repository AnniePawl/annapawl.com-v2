"use client";

import { CSSProperties, useState } from "react";
import { Cloud, Info, Leaf, Sparkles, Sun } from "lucide-react";
import Button from "../../../components/ui/Button";
import Modal, { type ModalTone } from "../../../components/ui/Modal";
import CodeBlock from "../_components/CodeBlock";

const USAGE = `
import { useState } from "react";
import { Sparkles } from "lucide-react";
import Modal from "@/components/ui/Modal";

const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Open modal</Button>

<Modal
  open={open}
  onClose={() => setOpen(false)}
  title="Modal title"
  icon={Sparkles}
  tone="pink"
>
  <p>Modal body content.</p>
</Modal>
`;

// Each trigger button below is a soft-tinted, tone-outlined swatch (see
// .tone-trigger in modal.css) previewing its own modal's tone — pick one,
// see it carried through icon, divider, and both actions.
const TONE_EXAMPLES: { tone: ModalTone; icon: typeof Sparkles; label: string }[] = [
  { tone: "yellow", icon: Sun, label: "Yellow" },
  { tone: "mint", icon: Leaf, label: "Mint" },
  { tone: "sky", icon: Cloud, label: "Sky" },
  { tone: "pink", icon: Sparkles, label: "Pink" },
  { tone: "neutral", icon: Info, label: "Neutral" },
];

export default function ModalExamples() {
  const [activeTone, setActiveTone] = useState<(typeof TONE_EXAMPLES)[number] | null>(null);

  return (
    <section style={{ maxWidth: 720 }}>
      <CodeBlock code={USAGE} className="mb-8" />

      <p className="mb-3 text-sm font-medium text-zinc-600">
        Tones — a little color for every context
      </p>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        {TONE_EXAMPLES.map((example) => (
          <Button
            key={example.tone}
            variant="secondary"
            className="tone-trigger"
            style={
              {
                "--tone-accent": `var(--${example.tone}-bold)`,
                "--tone-accent-soft": `var(--${example.tone}-soft)`,
              } as CSSProperties
            }
            onClick={() => setActiveTone(example)}
          >
            {example.label}
          </Button>
        ))}
      </div>

      <Modal
        open={activeTone !== null}
        onClose={() => setActiveTone(null)}
        title="Modal title"
        icon={activeTone?.icon}
        tone={activeTone?.tone}
      >
        <p>
          This is the modal body. Dismiss it with the close button, the
          Escape key, or by clicking the backdrop.
        </p>
        <div
          style={{
            display: "flex",
            gap: 12,
            marginTop: 24,
            justifyContent: "flex-end",
          }}
        >
          <Button variant="secondary" onClick={() => setActiveTone(null)}>
            Cancel
          </Button>
          <Button onClick={() => setActiveTone(null)}>Confirm</Button>
        </div>
      </Modal>
    </section>
  );
}
