"use client";

import Modal from "../../../components/ui/Modal";
import { useState } from "react";
import { InfoIcon } from "./icons";
import "./info-button.css";

// `autoplay` is for the mobile and tablet layouts, where the shelf animates
// on its own -- there's nothing to hover, so the copy skips that part.

export function InfoButton({
  className,
  autoplay = false,
}: {
  className?: string;
  autoplay?: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className={`landing-info-btn  focus-ring ${className ?? ""}`}
        onClick={() => setOpen(true)}
        aria-label="About this page"
      >
        <InfoIcon />
      </button>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        className='landing-info-modal'
        eyebrow="About this page"
        title="CSS knick-knacks"
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
        {autoplay ? (
          <p>I made everything on the shelf with pure CSS ♥</p>
        ) : (
          <p>
            <span className="landing-float-word">Hover</span> over (or tap) the knick-knacks for some mini surprises. I made
            everything with pure CSS ♥
          </p>
        )}
        <p className="landing-modal-note">
          Prefer less motion? If reduced motion is turned on in your device
          settings, everything on the shelf stays still.
        </p>
      </Modal>
    </>
  );
}
