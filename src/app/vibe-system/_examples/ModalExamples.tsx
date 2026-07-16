"use client";

import { useState } from "react";
import Button from "../../../components/ui/Button";
import Modal from "../../../components/ui/Modal";
import CodeBlock from "../_components/CodeBlock";

const USAGE = `
import { useState } from "react";
import Modal from "@/components/ui/Modal";

const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Open modal</Button>

<Modal open={open} onClose={() => setOpen(false)} title="Modal title">
  <p>Modal body content.</p>
</Modal>
`;

export default function ModalExamples() {
  const [open, setOpen] = useState(false);

  return (
    <section style={{ maxWidth: 720 }}>
      <CodeBlock code={USAGE} className="mb-8" />

      <Button onClick={() => setOpen(true)}>Open modal</Button>

      <Modal open={open} onClose={() => setOpen(false)} title="Modal title">
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
          <Button variant="secondary" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => setOpen(false)}>Confirm</Button>
        </div>
      </Modal>
    </section>
  );
}
