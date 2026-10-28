import Callout from "../../../components/ui/Callout";
import CodeBlock from "../../../components/ui/CodeBlock";
import "./CalloutExamples.css";

const USAGE = `
import Callout from "@/components/ui/Callout";

<Callout
  eyebrow="Worth a detour"
  actionLabel="Keep wandering"
  actionHref="/garden"
>
  Helpful extra context, without interrupting the main idea.
</Callout>

// The marker follows the page accent. Pass a tone to change it.
<Callout eyebrow="Good to know" tone="green">…</Callout>
`;

export default function CalloutExamples() {
  return (
    <div>
      <h3 className="sedge-subheading">Examples</h3>
      <div className="callout-demo-grid">
        <Callout eyebrow="Good to know" tone="green-bold">
          Browsers draw <code>box-shadow</code> outside an element’s box, so you
          can stack several on one div to build extra shapes without adding
          markup.
        </Callout>

        <Callout
          eyebrow="Worth a detour"
          tone="green-bold"
          actionLabel="Check it out"
          actionHref="#post-layout"
        >
          I found this resource especially helpful for learning more about
          accessibility and putting its principles into practice.
        </Callout>
      </div>
      <h3 className="sedge-subheading">Usage</h3>
      <CodeBlock tone='green' code={USAGE} className="mb-8" />
    </div>
  );
}
