// Ported from v1 src/components/css-items/newtonsCradle/NewtonsCradle.js.
// Decorative, no state -- stays a server component.
import "./newtons-cradle.css";

export function NewtonsCradle({ cn }: { cn?: string }) {
  return (
    <div className={`newtons-cradle ${cn ?? ""}`} aria-hidden="true">
      <div className="newtons-cradle__frame">
        <div className="newtons-cradle__ball" />
        <div className="newtons-cradle__ball" />
        <div className="newtons-cradle__ball" />
        <div className="newtons-cradle__ball" />
        <div className="newtons-cradle__ball" />
      </div>
      <div className="newtons-cradle__base" />
    </div>
  );
}
