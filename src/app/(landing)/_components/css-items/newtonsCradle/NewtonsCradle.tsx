// Ported from v1 src/components/css-items/newtonsCradle/NewtonsCradle.js.
// Decorative, no state -- stays a server component.
import "./newtons-cradle.css";

export function NewtonsCradle({ cn }: { cn?: string }) {
  return (
    <div className={`newtonsCradle ${cn ?? ""}`} aria-hidden="true">
      <div className="frame">
        <div className="sphere" />
        <div className="sphere" />
        <div className="sphere" />
        <div className="sphere" />
        <div className="sphere" />
      </div>
      <div className="base" />
    </div>
  );
}
