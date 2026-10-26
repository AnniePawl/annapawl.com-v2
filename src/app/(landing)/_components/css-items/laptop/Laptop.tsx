import "./laptop.css";

export function Laptop({ cn }: { cn?: string }) {
  return (
    <div className={`laptop-container ${cn ?? ""}`} aria-hidden="true">
      <div className="laptop">
        <div className="laptop__screen">
          <div className="laptop__terminal">
            <p>$ You look great</p>
          </div>
        </div>
      </div>
    </div>
  );
}
