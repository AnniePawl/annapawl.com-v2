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
`;

export default function CalloutExamples() {
  return (
    <div>
      <span className="sedge-subheading">Examples</span>
      <div className="callout-demo-grid">
        <Callout eyebrow="Good to know">
          Browsers draw <code>box-shadow</code> outside an element’s box, so you
          can stack several on one div to build extra shapes without adding
          markup.
        </Callout>

        <Callout
          eyebrow="Worth a detour"
          actionLabel="Check it out"
          actionHref="#post-layout"
        >
          I found this resource especially helpful for learning more about
          accessibility and putting its principles into practice.
        </Callout>
      </div>
      <h3 className="sedge-subheading">Usage</h3>
      <CodeBlock code={USAGE} className="mb-8" />
    </div>
  );
}
