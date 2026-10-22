"use client";

// Ported from src/components/modal/Modal.js plus the three call sites
// that opened it (DesktopHome.js, Tablet.js, Mobile.js). The source
// rolled its own portal (document.getElementById("modal-root") +
// ReactDOM.createPortal) with no dialog semantics at all -- no role, no
// Escape handling, no focus trap, no focus restore. Swapped for this
// repo's existing ui/Modal, which is built on the native <dialog>
// element and gets all of that for free (see components/ui/Modal.tsx).
//
// "More on css art" originally pointed at /dwc; it now links to the
// Drawing with Code page, which is where that content lives on this site.
import Modal from "../../../components/ui/Modal";
import { useState } from "react";
import { InfoIcon } from "./icons";

export function InfoButton({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className={`landing-info-btn focus-ring ${className ?? ""}`}
        onClick={() => setOpen(true)}
        aria-label="About this page"
      >
        <InfoIcon />
      </button>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        eyebrow="About this page"
        title="Made with CSS"
        actions={
          <>
            <a
              href="https://codepen.io/annampawl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link text-link--quiet focus-ring"
            >
              Source code
            </a>
            <a
              href="/drawing-with-code"
              className="btn btn--primary btn--sm focus-ring"
            >
              <span className="btn-label">More on CSS art</span>
            </a>
          </>
        }
      >
        <p>
          I&apos;ve fallen for CSS and love exploring its potential through
          illustrations and animations.
        </p>
        <p>
          Hover over (or tap) the knick-knacks for some mini surprises. I made
          everything with pure CSS ♥
        </p>
      </Modal>
    </>
  );
}
