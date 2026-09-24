// Ported from v1 src/components/css-items/sewing/SewingMachine.js.
// Rendered inside Sewing.tsx, whose root is aria-hidden. (v1 accepted a
// `cn` prop here but no caller ever passed one, so it isn't ported.)
import "./sewing-machine.css";

export function SewingMachine() {
  return (
    <div className="sewing-machine">
      <div className="thread" />
      <div className="needle" />
      <div className="sewing-machine__top" />
      <div className="sewing-machine__right" />
      <div className="sewing-machine__bottom" />
    </div>
  );
}

export default SewingMachine;
