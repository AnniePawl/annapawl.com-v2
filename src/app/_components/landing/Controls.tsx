"use client";

// Ported from css-items/shelves/{DesktopShelves,InvertClrBtn}.js and
// code-snippets/ColorSlider.js. Desktop-only, same as the source (tablet
// and mobile never had these controls).
//
// The background-hue slider sets a CSS custom property on the desktop
// shelves wrapper instead of a React inline style recomputed on every
// render -- same visual effect (hsl(hue, 100%, 95%) background), one
// fewer render dependency.
//
// The invert toggle still reaches out with getElementById + classList,
// exactly like InvertClrBtn.js did -- kept as an imperative DOM call
// rather than rearchitected into React state/context, since it only
// ever runs inside this onClick handler (never during render), which
// keeps it SSR-safe. The clickable <div> becomes a real <button> with
// aria-pressed reflecting the current state.
import Image from "next/image";
import { useState } from "react";

export function ColorSlider({ targetId }: { targetId: string }) {
  const [hue, setHue] = useState(216);

  return (
    <div className="landing-color-slider-wrap">
      <input
        type="range"
        className="landing-color-slider"
        aria-label="Shelf background hue"
        min={0}
        max={360}
        value={hue}
        onChange={(event) => {
          const value = Number(event.target.value);
          setHue(value);
          const target = document.getElementById(targetId);
          if (target) {
            target.style.backgroundColor = `hsl(${value}, 100%, 95%)`;
          }
        }}
      />
    </div>
  );
}

export function InvertToggle({
  targets,
}: {
  /** ids of elements to toggle the invert filter on, paired with the
   * class name used on each (source used two different class names,
   * .invert-wrapper and .invert-wrapper2, for #home vs #desktopAbout --
   * kept as-is even though the two classes are visually identical, to
   * stay a faithful port rather than a silent behavior change). */
  targets: { id: string; className: string }[];
}) {
  const [inverted, setInverted] = useState(false);

  // Source also tracked a `spinning` state here (set true, then false
  // after a 1s timeout) but never actually read it anywhere in its JSX
  // or styles -- dead state with no visible effect. Not ported; the
  // rotate-the-icon animation below is driven directly by `inverted`
  // via aria-pressed + a CSS transition (landing.css), so no timer is
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
      aria-label="Invert background colors"
      title="Toggle color mode"
    >
      <Image src="/landing/arrows.png" alt="" width={28} height={28} aria-hidden="true" />
    </button>
  );
}
