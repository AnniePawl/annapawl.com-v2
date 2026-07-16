import Button from "../../../components/ui/Button";
import CodeBlock from "../_components/CodeBlock";

const USAGE = `
import Button from "@/components/ui/Button";

<Button variant="primary">Button</Button>
<Button variant="secondary">Button</Button>
<Button variant="primary" size="sm">Small</Button>
<Button variant="primary" disabled>Disabled</Button>
`;

export default function ButtonStates() {
  return (
    <section style={{ maxWidth: 720 }}>
      <CodeBlock code={USAGE} className="mb-8" />

      <h3 style={{ marginBottom: 16 }}>Primary Button States</h3>

      <div className="button-state-grid">
        <State label="Enabled">
          <Button>Button</Button>
        </State>

        <State label="Hover">
          <Button data-state="hover">Button</Button>
        </State>

        <State label="Focus">
          <Button data-state="focus">Button</Button>
        </State>

        <State label="Pressed">
          <Button data-state="pressed">Button</Button>
        </State>
      </div>

      <h3 style={{ margin: "32px 0 16px" }}>Secondary Button States</h3>

      <div className="button-state-grid">
        <State label="Enabled">
          <Button variant="secondary">Button</Button>
        </State>

        <State label="Hover">
          <Button variant="secondary" data-state="hover">
            Button
          </Button>
        </State>

        <State label="Focus">
          <Button variant="secondary" data-state="focus">
            Button
          </Button>
        </State>

        <State label="Pressed">
          <Button variant="secondary" data-state="pressed">
            Button
          </Button>
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
