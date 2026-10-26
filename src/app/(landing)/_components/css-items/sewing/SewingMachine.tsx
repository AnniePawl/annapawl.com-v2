import "./sewing-machine.css";

export function SewingMachine() {
  return (
    <div className="sewing-machine">
      <div className="sewing-machine__thread" />
      <div className="sewing-machine__needle" />
      <div className="sewing-machine__body">
        <div className="sewing-machine__top" />
        <div className="sewing-machine__right" />
        <div className="sewing-machine__bottom" />
      </div>
      {/* Outside __body so they don't get the outline */}
      <div className="sewing-machine__arm" />
      <div className="sewing-machine__knob" />
      <div className="sewing-machine__fabric" />
    </div>
  );
}
