"use client";

import { useState } from "react";
import Button from "../../../components/ui/Button";
import Modal from "../../../components/ui/Modal";
import Drawer from "../../../components/ui/Drawer";
import CodeBlock from "../../../components/ui/CodeBlock";
import "./ModalExamples.css";

const MODAL_USAGE = `
import Modal from "@/components/ui/Modal";

const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>About this page</Button>

<Modal
  open={open}
  onClose={() => setOpen(false)}
  eyebrow="About this page"
  title="Made with CSS"
  actions={<Button onClick={() => setOpen(false)}>Got it</Button>}
>
  <p>Hover over the knick-knacks for some mini surprises.</p>
</Modal>
`;

const DRAWER_USAGE = `
import Drawer from "@/components/ui/Drawer";

<Drawer
  open={open}
  onClose={() => setOpen(false)}
  eyebrow="Reading stats"
  title="The shelf, in numbers"
  accent="var(--page-accent)"
>
  <dl className="drawer-list">
    <div><dt>Books</dt><dd>18</dd></div>
  </dl>
</Drawer>
`;

export default function ModalExamples() {
  const [modalOpen, setModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <section>
      <h3 className="sedge-subheading">Which one to use</h3>
      <ol className="sedge-numbered-list modal-guidance">
        <li>
          <span>
            <strong className="modal-guidance-name">Modal</strong> for short
            moments: a note, a confirmation, a small form. A few lines and one
            or two actions.
          </span>
        </li>
        <li>
          <span>
            <strong className="modal-guidance-name">Drawer</strong> for longer,
            browsable content that benefits from keeping the page in view, like
            the bookshelf’s reading stats.
          </span>
        </li>
      </ol>

      <h3 className="sedge-subheading">Modal</h3>
      <div className="modal-demo-row">
        <Button onClick={() => setModalOpen(true)}>Open the modal</Button>
      </div>
      <CodeBlock code={MODAL_USAGE} className="mb-8" />

      <h3 className="sedge-subheading">Drawer</h3>
      <div className="modal-demo-row">
        <Button onClick={() => setDrawerOpen(true)}>Open the drawer</Button>
      </div>
      <CodeBlock code={DRAWER_USAGE} className="mb-8" />

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        eyebrow="About this page"
        title="Made with CSS"
        actions={
          <>
            <a href="#modals" className="text-link text-link--quiet focus-ring">
              Source code
            </a>
            <Button size="sm" onClick={() => setModalOpen(false)}>
              Got it
            </Button>
          </>
        }
      >
        <p>
          I’ve fallen for CSS and love exploring what it can do through
          illustrations and animations. Hover over the knick-knacks for small
          surprises — everything here is pure CSS.
        </p>
      </Modal>

      <Drawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        eyebrow="Reading stats"
        title="The shelf, in numbers"
        accent="var(--page-accent)"
      >
        <dl className="drawer-list">
          <div><dt>Books</dt><dd>18</dd></div>
          <div><dt>Authors</dt><dd>15</dd></div>
          <div><dt>Favorites</dt><dd>5</dd></div>
          <div><dt>Oldest</dt><dd>1818</dd></div>
        </dl>
      </Drawer>
    </section>
  );
}
