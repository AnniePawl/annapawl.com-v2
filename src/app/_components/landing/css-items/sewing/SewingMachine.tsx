// Ported from v1 src/components/css-items/sewing/SewingMachine.js.
// Rendered inside Sewing.tsx, whose root is aria-hidden. (v1 accepted a
// `cn` prop here but no caller ever passed one, so it isn't ported.)
// The white body pieces are grouped in __body so only they get the
// cherry outline; thread, spool, needle and fabric stay unoutlined.
import "./sewing-machine.css";

export function SewingMachine() {
  return (
    <div className="sewing-machine">
      <div className="thread" />
      <div className="needle" />
      <div className="sewing-machine__body">
        <div className="sewing-machine__top" />
        <div className="sewing-machine__right" />
        <div className="sewing-machine__bottom" />
      </div>
      <div className="sewing-machine__fabric" />
    </div>
  );
}

export default SewingMachine;
