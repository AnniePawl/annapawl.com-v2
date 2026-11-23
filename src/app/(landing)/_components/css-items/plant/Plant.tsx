import type { CSSProperties } from "react";
import "./plant.css";

// How many leaves on each part. --i tells the CSS each leaf's place on its vine.
const TOP_LEAVES = 7;
const LONG_VINE = 9;
const SHORT_VINE = 5;

function leaves(count: number) {
  return Array.from({ length: count }, (_, i) => (
    <span key={i} className="leaf" style={{ "--i": i } as CSSProperties} />
  ));
}

export function Plant({ cn }: { cn?: string }) {
  return (
    <div className={`plant-container ${cn ?? ""}`} aria-hidden="true">
      <div className="plant">
        <div className="plant-top">{leaves(TOP_LEAVES)}</div>
        <div className="vine vine--long">{leaves(LONG_VINE)}</div>
        <div className="vine vine--short">{leaves(SHORT_VINE)}</div>
      </div>
    </div>
  );
}
