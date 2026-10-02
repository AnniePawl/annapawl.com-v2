"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Button from "../../../components/ui/Button";
import Modal, {
  MODAL_COLORWAYS,
  type ModalColorway,
} from "../../../components/ui/Modal";
import CodeBlock from "../_components/CodeBlock";
import "./ModalExamples.css";

const USAGE = `
import { useState } from "react";
import Modal from "@/components/ui/Modal";

const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Open modal</Button>

<Modal
  open={open}
  onClose={() => setOpen(false)}
  eyebrow="From the garden"
  title="Something new is growing."
  description="A short, useful message with one clear next step."
  actionLabel="Take a look"
  colorway="sky-coral"
/>
`;

const COLORWAY_EXAMPLES: Array<{
  colorway: ModalColorway;
  label: string;
  eyebrow: string;
  title: string;
  description: string;
  actionLabel: string;
}> = [
  {
    colorway: "pink-emerald",
    label: "Soft pink + emerald bold",
    eyebrow: "From the garden",
    title: "Something new is growing.",
    description: "A small update, ready for a closer look.",
    actionLabel: "Take a look",
  },
  {
    colorway: "sky-coral",
    label: "Sky soft + coral bold",
    eyebrow: "Worth noting",
    title: "A thoughtful interruption.",
    description: "Just enough contrast to earn your attention.",
    actionLabel: "Keep reading",
  },
  {
    colorway: "moss-cherry",
    label: "Moss soft + cherry bold",
    eyebrow: "A bright idea",
    title: "Save this for later.",
    description: "One clear thought, without the extra fuss.",
    actionLabel: "Got it",
  },
];

export default function ModalExamples() {
  const [activeColorway, setActiveColorway] =
    useState<ModalColorway | null>(null);
  const activeExample = COLORWAY_EXAMPLES.find(
    ({ colorway }) => colorway === activeColorway
  );

  return (
    <section>
      <h3 className='type-eyebrow' style={{ margin: "32px 0 16px" }}>Usage</h3>
      <CodeBlock code={USAGE} className="mb-8" />

      <span className="poster-label type-eyebrow">Compact previews</span>
      <div className="modal-preview-grid">
        {COLORWAY_EXAMPLES.map((example) => (
          <article
            className="modal-preview"
            style={MODAL_COLORWAYS[example.colorway]}
            key={example.colorway}
          >
            <div className="modal-preview-rail">
              <span className="modal-preview-eyebrow type-eyebrow">
                {example.eyebrow}
              </span>
            </div>
            <div className="modal-preview-content">
              <h3 className="modal-preview-title">{example.title}</h3>
              <p className="modal-preview-description">
                {example.description}
              </p>
              <Button
                className="modal-preview-action"
                size="sm"
                onClick={() => setActiveColorway(example.colorway)}
              >
                {example.actionLabel}
                <ArrowRight
                  className="modal-preview-action-icon"
                  aria-hidden="true"
                />
              </Button>
            </div>
          </article>
        ))}
      </div>

      <hr className="poster-divider" />

      <span className="poster-label type-eyebrow">Matching buttons</span>
      <div className="modal-colorway-buttons">
        {COLORWAY_EXAMPLES.map((example) => (
          <Button
            key={example.colorway}
            variant="secondary"
            className="colorway-trigger"
            style={MODAL_COLORWAYS[example.colorway]}
            onClick={() => setActiveColorway(example.colorway)}
          >
            {example.label}
            <ArrowRight
              className="colorway-trigger-icon"
              aria-hidden="true"
            />
          </Button>
        ))}
      </div>

      <Modal
        open={activeColorway !== null}
        onClose={() => setActiveColorway(null)}
        eyebrow={activeExample?.eyebrow ?? "From the garden"}
        title={activeExample?.title ?? "Something new is growing."}
        description={
          activeExample?.description ??
          "A small update, ready for a closer look."
        }
        actionLabel={activeExample?.actionLabel ?? "Take a look"}
        onAction={() => setActiveColorway(null)}
        colorway={activeColorway ?? "pink-emerald"}
      />
    </section>
  );
}
