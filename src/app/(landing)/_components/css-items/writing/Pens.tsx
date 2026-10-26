import "./pens.css";

export function Pens({ cn }: { cn?: string }) {
  return (
    <div className={`pens-container ${cn ?? ""}`} aria-hidden="true">
      <div className="pens__contents">
        <div className="pens__ruler" />
        <div className="pens__pen" />
        <div className="pens__pencil pens__pencil--1" />
        <div className="pens__pencil pens__pencil--2" />
      </div>
      <div className="pens__cup" />
    </div>
  );
}
