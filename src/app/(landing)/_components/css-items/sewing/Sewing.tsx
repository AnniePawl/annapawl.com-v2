// Ported from v1 src/components/css-items/sewing/Sewing.js -- composes
// Tape + PinCushion + SewingMachine. Decorative, no state -- stays a
// server component.
import { PinCushion } from "./PinCushion";
import { SewingMachine } from "./SewingMachine";
import { Tape } from "./Tape";
import "./sewing.css";

export function Sewing({
  cn,
  tapecn,
  pincushioncn,
}: {
  cn?: string;
  tapecn?: string;
  pincushioncn?: string;
}) {
  return (
    <div className={`sewing ${cn ?? ""}`} aria-hidden="true">
      <Tape cn={tapecn} />
      <PinCushion cn={pincushioncn} />
      <SewingMachine />
    </div>
  );
}
