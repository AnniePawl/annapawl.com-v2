'use client'
import { useState } from 'react';
import { Dosis, Playfair_Display } from "next/font/google";
import Button from "../../../components/ui/Button";
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
      <div className="plate" role="img" aria-label={`New York license plate reading ${currentPlate.plate}`}>
        <span className="plate-state" aria-hidden="true">New York</span>
        <span className="plate-number" aria-hidden="true">{currentPlate.plate}</span>
        <span className="plate-motto" aria-hidden="true">Empire State</span>
      </div>
      <Button onClick={pickNewPlate} className="plate-button">
        Generate new plate
      </Button>
      {/* Live Region for screen readers */}
      <p className="sr-only" aria-live="polite">
        {currentPlate.date && `Rejected plate: ${currentPlate.plate}`}
      </p>
    </div>
  );
}
