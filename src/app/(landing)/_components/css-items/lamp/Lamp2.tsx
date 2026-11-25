import "./lamp2.css";

export function Lamp2({ cn }: { cn?: string }) {
  return (
    <div className={`lamp2-container ${cn ?? ""}`} aria-hidden="true">
      <div className="lamp2__finial" />
      <div className="lamp2__shade" />
      <div className="lamp2__bulb" />
      <div className="lamp2__collar" />
      <div className="lamp2__stem" />
      <div className="lamp2__base" />
    </div>
  );
}
