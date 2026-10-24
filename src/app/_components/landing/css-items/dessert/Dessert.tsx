// Ported from v1 src/components/css-items/dessert/Dessert.js. Decorative,
// no state -- stays a server component.
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

export default Dessert;
