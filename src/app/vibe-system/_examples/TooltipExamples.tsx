import Button from "../../../components/ui/Button";
import Tooltip from "../../../components/ui/Tooltip";
import CodeBlock from "../_components/CodeBlock";

const USAGE = `
import Tooltip from "@/components/ui/Tooltip";

<Tooltip label="Tooltip on top" side="top">
  <Button variant="secondary">Hover me</Button>
</Tooltip>
`;

export default function TooltipExamples() {
  return (
    <section style={{ maxWidth: 720 }}>
      <CodeBlock code={USAGE} className="mb-8" />

      <div className="tooltip-demo-row">
        <Tooltip label="Tooltip on top" side="top">
          <Button variant="secondary">Hover me (top)</Button>
        </Tooltip>

        <Tooltip label="Tooltip on bottom" side="bottom">
          <Button variant="secondary">Hover me (bottom)</Button>
        </Tooltip>
      </div>
    </section>
  );
}
