"use client";

import { useState } from "react";
import "./radio.css";

export function Radio({ cn }: { cn?: string }) {
  const [station, setStation] = useState(105.9);

  return (
    <div className={`radio-container ${cn ?? ""}`}>
      <div className="radio__top" aria-hidden="true" />
      <div className="radio__bottom">
        <div className="radio__display" aria-live="polite">
          {station.toFixed(1)}
        </div>
        <div className="radio__buttons">
          <button
            type="button"
            className="radio__tune-down focus-ring"
            aria-label="Tune station down"
            onClick={() => setStation((s) => Math.round((s - 0.5) * 10) / 10)}
          >
            −
          </button>
          <button
            type="button"
            className="radio__tune-up focus-ring"
            aria-label="Tune station up"
            onClick={() => setStation((s) => Math.round((s + 0.5) * 10) / 10)}
          >
            +
          </button>
        </div>
      </div>
      <span role="tooltip" className="tooltip tooltip--top radio__tooltip">
        WQXR is my fave station. Try the lil buttons, too!
      </span>
    </div>
  );
}
