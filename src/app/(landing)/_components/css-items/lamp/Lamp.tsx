import "./lamp.css";

export function Lamp({ cn }: { cn?: string }) {
  return (
    <div className={`lamp-container ${cn ?? ""}`} aria-hidden="true">
      <div className="lamp__knob" />
      <div className="lamp__shade" />
      <div className="lamp__bulb" />
      <div className="lamp__stem" />
      <div className="lamp__collar lamp__collar--bottom" />
      <div className="lamp__base" />
    </div>
  );
}
