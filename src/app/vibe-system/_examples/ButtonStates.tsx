
export default function ButtonStates() {
  return (
    <section style={{ maxWidth: 720 }}>
      <h3 style={{ marginBottom: 16 }}>Primary Button States</h3>

      <div className="button-state-grid">
        <State label="Enabled">
          <button className="btn btn-enabled">Button</button>
        </State>

        <State label="Hover">
          <button className="btn btn-hover">Button</button>
        </State>

        <State label="Focus">
          <button className="btn btn-focus">Button</button>
        </State>

        <State label="Pressed">
          <button className="btn btn-pressed">Button</button>
        </State>
      </div>
    </section>
  );
}

function State({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="state-cell">
      <span className="state-label">{label}</span>
      {children}
    </div>
  );
}
