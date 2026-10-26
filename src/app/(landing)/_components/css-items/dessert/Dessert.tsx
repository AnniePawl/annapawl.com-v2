import "./dessert.css";

export function Dessert({ cn }: { cn?: string }) {
  return (
    <div className={`dessert-container ${cn ?? ""}`} aria-hidden="true">
      <div className="dessert__stand-top" />
      <div className="dessert__base" />
      <div className='dessert__top'></div>
      <div className="dessert__stand-base" />
      <div className="dessert__spiral" />
    </div>
  );
}
