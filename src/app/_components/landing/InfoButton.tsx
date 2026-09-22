"use client";

// Ported from src/components/modal/Modal.js plus the three call sites
// that opened it (DesktopHome.js, Tablet.js, Mobile.js). The source
// rolled its own portal (document.getElementById("modal-root") +
// ReactDOM.createPortal) with no dialog semantics at all -- no role, no
// Escape handling, no focus trap, no focus restore. Swapped for this
// repo's existing ui/Modal, which is built on the native <dialog>
// element and gets all of that for free (see components/ui/Modal.tsx).
//
// "More on css art" pointed at /dwc, which doesn't exist in this site
// yet -- rendered as inert text (see LegacyLink) rather than a link to
// nowhere, flagged in the port report as an outstanding legacy link.
import Modal from "../../../components/ui/Modal";
import { useState } from "react";
import { InfoIcon, CodepenIcon } from "./icons";
import { LegacyLink } from "./LegacyLink";

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

      <Modal open={open} onClose={() => setOpen(false)} title="About this page" tone="blue">
        <p>
          I&apos;ve fallen for CSS and love exploring its potential through
          illustrations and animations.
        </p>
        <p>
          <strong>Hover over (or tap) the knick-knacks</strong> for some mini
          surprises. I made everything with pure CSS ♥
        </p>
        <div className="landing-modal-actions">
          <LegacyLink className="btn btn--secondary btn--sm focus-ring">
            More on css art
          </LegacyLink>
          <a
            href="https://codepen.io/annampawl"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--secondary btn--sm focus-ring"
          >
            Source code
            <CodepenIcon />
          </a>
        </div>
      </Modal>
    </>
  );
}
