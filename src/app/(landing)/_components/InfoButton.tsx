"use client";

import Modal from "../../../components/ui/Modal";
import { useState, type SVGProps } from "react";
import "./info-button.css";

function InfoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 7 L 11 9 L 13 9 L 13 7 L 11 7 z M 11 11 L 11 17 L 13 17 L 13 11 L 11 11 z" />
    </svg>
  );
}

// `autoplay` for the mobile and tablet layouts where the shelf animates
// on its own 

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
