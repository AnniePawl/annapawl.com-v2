"use client";

// Ported from v1 src/components/css-items/shelves/InvertClrBtn.js (moved
// out of the former landing/Controls.tsx). Desktop-only, same as the
// source.
//
// Still reaches out with getElementById + classList, exactly like
// InvertClrBtn.js did -- kept as an imperative DOM call rather than
// rearchitected into React state/context, since it only ever runs inside
// this onClick handler (never during render), which keeps it SSR-safe.
// The clickable <div> becomes a real <button> with aria-pressed
// reflecting the current state.
import Image from "next/image";
import { useState } from "react";
import "./invert-clr-btn.css";

export function InvertClrBtn({
  targets,
}: {
  /** Only the supplied shelf area receives the color filter. */
  targets: { id: string; className: string }[];
}) {
  const [inverted, setInverted] = useState(false);

  // Source also tracked a `spinning` state here (set true, then false
  // after a 1s timeout) but never actually read it anywhere in its JSX
  // or styles -- dead state with no visible effect. Not ported; the
  // rotate-the-icon animation below is driven directly by `inverted`
  // via aria-pressed + a CSS transition (invert-clr-btn.css), so no timer is
  // needed to get the same "flips once" look.
  const toggle = () => {
    const next = !inverted;
    setInverted(next);
    for (const { id, className } of targets) {
      document.getElementById(id)?.classList.toggle(className, next);
    }
  };

  return (
    <button
      type="button"
      className="landing-invert-btn focus-ring"
      onClick={toggle}
      aria-pressed={inverted}
      aria-label="Invert shelf colors"
      title="Invert shelf colors"
    >
      <Image src="/landing/arrows.png" alt="" width={28} height={28} aria-hidden="true" />
    </button>
  );
}

export default InvertClrBtn;
