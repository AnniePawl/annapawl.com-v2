"use client";

// Ported from src/components/css-items/radio/radio.js. The source
// already used real <button> elements for the tune controls (good
// baseline accessibility) -- this just adds accessible names and an
// aria-live region for the station readout, and keeps everything else
// (including the station math) unchanged. Decorative frame/body marked
// aria-hidden; the interactive controls are not.
import { useState } from "react";

export default function Radio({ cn }: { cn?: string }) {
  const [station, setStation] = useState(105.9);

  return (
    <div className={`radio-container ${cn ?? ""}`}>
      <div className="radio-top" aria-hidden="true" />
      <div className="radio-bottom">
        <div className="radio-display-station" aria-live="polite">
          {station.toFixed(1)}
        </div>
        <div className="radio-buttons">
          <button
            type="button"
            className="radio-button1 focus-ring"
            aria-label="Tune station down"
            onClick={() => setStation((s) => Math.round((s - 0.5) * 10) / 10)}
          >
            −
          </button>
          <button
            type="button"
            className="radio-button2 focus-ring"
            aria-label="Tune station up"
            onClick={() => setStation((s) => Math.round((s + 0.5) * 10) / 10)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
