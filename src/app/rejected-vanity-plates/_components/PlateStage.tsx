import { Dosis, Playfair_Display } from "next/font/google";
import "./plate-stage.css";

const dosis = Dosis({ subsets: ["latin"], weight: "700", variable: "--font-plate-number" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-plate-label",
});

/* Static for now: the plate text and the button get wired up later. */
export default function PlateStage() {
  return (
    <div className={`plate-stage ${dosis.variable} ${playfair.variable}`}>
      <div className="plate" role="img" aria-label="New York license plate reading LILB00TY">
        <span className="plate-state" aria-hidden="true">New York</span>
        <span className="plate-number" aria-hidden="true">LILB00TY</span>
        <span className="plate-motto" aria-hidden="true">Empire State</span>
      </div>
      <button type="button" className="plate-button">
        Generate New Plate
      </button>
    </div>
  );
}
