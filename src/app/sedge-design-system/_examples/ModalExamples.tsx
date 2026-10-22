"use client";

import { useState } from "react";
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
  description="A short, useful message that can be dismissed from the top-right corner."
  colorway="sky-coral"
/>
`;

const COLORWAY_EXAMPLES: Array<{
  colorway: ModalColorway;
  label: string;
  eyebrow: string;
  title: string;
  description: string;
}> = [
  {
    colorway: "pink-emerald",
    label: "Pink + emerald",
    eyebrow: "From the garden",
    title: "Something new is growing.",
    description: "A small update, ready for a closer look.",
  },
  {
    colorway: "sky-coral",
    label: "Sky + coral",
    eyebrow: "Worth noting",
    title: "A thoughtful interruption.",
    description: "Just enough contrast to earn your attention.",
  },
  {
    colorway: "moss-cherry",
    label: "Moss + cherry",
    eyebrow: "A bright idea",
    title: "Save this for later.",
    description: "One clear thought, without the extra fuss.",
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
      <span className="sedge-subheading">Try the modal</span>
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
        colorway={activeColorway ?? "pink-emerald"}
      />
      <h3 className="sedge-subheading">Usage</h3>

      <CodeBlock code={USAGE} className="mb-8" />
    </section>
  );
}
