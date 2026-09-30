import Callout from "../../../components/ui/Callout";
import CodeBlock from "../_components/CodeBlock";

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
