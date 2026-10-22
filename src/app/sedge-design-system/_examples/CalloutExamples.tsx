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
      <span className="sedge-subheading">Examples</span>
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
          actionHref="#post-layout"
        >
          I found this resource especially helpful for learning more about accessibility and putting its principles into practice.
        </Callout>
      </div>
      <h3 className="sedge-subheading">Usage</h3>
      <CodeBlock code={USAGE} className="mb-8" />

    </div>
  );
}
