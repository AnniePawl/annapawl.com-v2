import Callout from "../../../components/ui/Callout";
import CodeBlock from "../_components/CodeBlock";
import "./CalloutExamples.css";

const USAGE = `
import Callout from "@/components/ui/Callout";

<Callout
  eyebrow="Worth a detour"
  title="A related garden path."
  colorway="sky-cherry"
  actionLabel="Keep wandering"
  actionHref="/garden"
>
  Helpful extra context, without interrupting the main idea.
</Callout>
`;

export default function CalloutExamples() {
  return (
    <div>
      <h3 className='type-eyebrow' style={{ margin: "32px 0 16px" }}>Usage</h3>
      <CodeBlock code={USAGE} className="mb-8" />

      <span className="poster-label type-eyebrow">Examples</span>
      <div className="callout-demo-grid">
        <Callout
          eyebrow="Still growing"
          title="This note is a work in progress."
          colorway="pink-emerald"
        >
          The main idea is here; the edges are still getting a little garden
          maintenance.
        </Callout>

        <Callout
          eyebrow="Worth a detour"
          title="A related garden path."
          colorway="sky-cherry"
          actionLabel="Keep wandering"
          actionHref="#article-layout"
        >
          Helpful extra context, without interrupting the main idea.
        </Callout>
      </div>
    </div>
  );
}
