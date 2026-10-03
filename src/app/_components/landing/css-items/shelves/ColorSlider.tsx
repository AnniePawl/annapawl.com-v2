"use client";

// Ported from v1 src/components/code-snippets/ColorSlider.js (moved out of
// the former landing/Controls.tsx). Desktop-only, same as the source --
// rendered in the visible desktop shelf viewport by Landing.tsx.
//
// Sets the desktop shelves wrapper's background directly from the
// onChange handler (hsl(hue, 100%, 95%)), same visual effect as the
// source's React inline style, one fewer render dependency.
import { useState } from "react";
import "./color-slider.css";

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

export default ColorSlider;
