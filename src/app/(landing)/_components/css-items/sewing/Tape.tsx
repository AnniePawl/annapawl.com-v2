import "./tape.css";

export function Tape({ cn }: { cn?: string }) {
  return (
    <div className={`tape ${cn ?? ""}`}>
      <div className="tape__top" />
      <div className="tape__bottom" />
    </div>
  );
}
