import { ArrowRight } from "lucide-react";
import Button from "../../../components/ui/Button";
import CodeBlock from "../_components/CodeBlock";
import "./ButtonStates.css";

const USAGE = `
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

<Button endIcon={<ArrowRight />}>Explore the system</Button>

<Button
  bordered
  tone={{ background: "sky-soft", foreground: "cherry-bold" }}
>
  Custom button
</Button>

<Button size="sm">Small</Button>
<Button disabled>Disabled</Button>
`;

const TONE1 = {
  background: "sky-soft",
  foreground: "cherry-bold",
} as const;

const TONE2 = {
  background: "pink-soft",
  foreground: "emerald-bold",
} as const;

const TONE3 = {
  background: "lemon-soft",
  foreground: "indigo-bold",
} as const;

export default function ButtonStates() {
  return (
    <section>

      <h3 className="sedge-subheading">Default Button</h3>

      <div className="button-state-grid">
        <State label="Enabled">
          <Button endIcon={<ArrowRight />}>Button</Button>
        </State>

        <State label="Hover">
          <Button data-state="hover" endIcon={<ArrowRight />}>Button</Button>
        </State>

        <State label="Focus">
          <Button data-state="focus" endIcon={<ArrowRight />}>Button</Button>
        </State>

        <State label="Pressed">
          <Button data-state="pressed" endIcon={<ArrowRight />}>Button</Button>
        </State>
      </div>

      <h3 className="sedge-subheading">Custom Examples</h3>

      {/* Tone 1 examples */}
      <div className="button-state-grid">
        <div className="state-cell">
          <Button bordered tone={TONE1}>Button</Button>
        </div>

        <div className="state-cell">
          <Button bordered tone={TONE1} data-state="hover">
            Button
          </Button>
        </div>

        <div className="state-cell">
          <Button bordered tone={TONE1} data-state="focus">
            Button
          </Button>
        </div>

        <div className="state-cell">
          <Button bordered tone={TONE1} data-state="pressed">
            Button
          </Button>
        </div>
      </div>

      {/* Tone 2 examples */}
      <div className="button-state-grid mt-5">
        <div className="state-cell">
          <Button bordered tone={TONE2}>Button</Button>
        </div>

        <div className="state-cell">
          <Button bordered tone={TONE2} data-state="hover">
            Button
          </Button>
        </div>

        <div className="state-cell">
          <Button bordered tone={TONE2} data-state="focus">
            Button
          </Button>
        </div>
        <div className="state-cell">
          <Button bordered tone={TONE2} data-state="pressed">
            Button
          </Button>
        </div>
      </div>

      {/* Tone 3 examples */}
      <div className="button-state-grid mt-5">
        <div className="state-cell">
          <Button bordered tone={TONE3}>Button</Button>
        </div>

        <div className="state-cell">
          <Button bordered tone={TONE3} data-state="hover">
            Button
          </Button>
        </div>

        <div className="state-cell">
          <Button bordered tone={TONE3} data-state="focus">
            Button
          </Button>
        </div>
        <div className="state-cell">
          <Button bordered tone={TONE3} data-state="pressed">
            Button
          </Button>
        </div>
      </div>

      <h3 className="sedge-subheading">Button Sizes</h3>

      <div className="button-size-row">
        <State label="Small">
          <Button size="sm">Small</Button>
        </State>

        <State label="Medium">
          <Button size="md">Medium</Button>
        </State>

        <State label="Large">
          <Button size="lg">Large</Button>
        </State>
      </div>
      <h3 className="sedge-subheading">Usage</h3>
      <CodeBlock code={USAGE} className="mb-8" />
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
      {children}
      <span className="state-label">{label}</span>
    </div>
  );
}
