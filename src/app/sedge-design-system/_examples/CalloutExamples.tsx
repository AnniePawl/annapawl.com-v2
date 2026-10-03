import Callout from "../../../components/ui/Callout";
import CodeBlock from "../_components/CodeBlock";
import "./CalloutExamples.css";

const USAGE = `
import Callout from "@/components/ui/Callout";

<Callout
  eyebrow="Worth a detour"
  colors={{
    surface: "chocolate-bold",
    accent: "pink-soft",
    bodyText: "ivory",
  }}
  actionLabel="Keep wandering"
  actionHref="/garden"
>
  Helpful extra context, without interrupting the main idea.
</Callout>
`;

export default function CalloutExamples() {
  return (
    <div>
      <span className="poster-label type-eyebrow">Examples</span>
      <div className="callout-demo-grid">
        <Callout
          eyebrow="Still growing"
          colors={{
            surface: "pink-soft",
            accent: "emerald-bold",
            bodyText: "charcoal",
          }}
        >
          I’m still testing how this pattern behaves across longer posts. The structure feels right, but the spacing and color pairings may change as I use it more.
        </Callout>

        <Callout
          eyebrow="Worth a detour"
          colors={{
            surface: "sky-soft",
            accent: "cherry-bold",
            bodyText: "charcoal",
          }}
          actionLabel="Check it out"
          actionHref="#article-layout"
        >
          I found this resource especially helpful for learning more about accessibility and putting its principles into practice.
        </Callout>
      </div>
      <hr className="poster-divider mt-4 mb-0" />
      <h3 className='type-eyebrow' style={{ margin: "32px 0 16px" }}>Usage</h3>
      <CodeBlock code={USAGE} className="mb-8" />

    </div>
  );
}
