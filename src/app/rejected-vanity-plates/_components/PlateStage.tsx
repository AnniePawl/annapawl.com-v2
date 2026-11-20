'use client'
import { useState } from 'react';
import { Dosis, Playfair_Display } from "next/font/google";
import "./plate-stage.css";

const dosis = Dosis({ subsets: ["latin"], weight: "700", variable: "--font-plate-number" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-plate-label",
});

type Plate = { date: string; plate: string };

export default function PlateStage({ plates }: { plates: Plate[] }) {
  const [currentPlate, setCurrentPlate] = useState<Plate>({ date: "", plate: "LILB00TY" });

  function pickNewPlate() {
    let next = currentPlate;
    while (next.plate === currentPlate.plate) {
      next = plates[Math.floor(Math.random() * plates.length)]
    }
    setCurrentPlate(next);
  }

  return (
    <div className={`plate-stage ${dosis.variable} ${playfair.variable}`}>
      {/* The plate is the button: tap it for another one. */}
      <button
        type="button"
        className="plate-button focus-ring"
        onClick={pickNewPlate}
        aria-label={`New York license plate reading ${currentPlate.plate}. Show another rejected plate`}
      >
        <span className="plate" aria-hidden="true">
          <span className="plate-state">New York</span>
          <span className="plate-number">{currentPlate.plate}</span>
          <span className="plate-motto">Empire State</span>
        </span>
      </button>
      <p className="plate-hint">Tap the plate for another hard no.</p>
      {/* Live Region for screen readers */}
      <p className="sr-only" aria-live="polite">
        {currentPlate.date && `Rejected plate: ${currentPlate.plate}`}
      </p>
    </div>
  );
}
