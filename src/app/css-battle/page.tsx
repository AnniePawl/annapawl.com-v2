import PostLayout, { PostSection } from "../../components/layout/PostLayout/PostLayout";
import CodeBlock from "../../components/ui/CodeBlock";
import HomeLogo from "../../components/ui/HomeLogo";
import TextLink from "../../components/ui/TextLink";
import BattleArt from "./_components/BattleArt";
import BattleCover from "./_components/BattleCover";
import { CHALLENGES } from "./_data/challenges";

export default function CssBattle() {
  return (
    <main className="css-battle-page">
      <PostLayout
        descriptionTitle="CSS art"
        description="An ongoing collection of little challenges to stretch my CSS brain, with rendered examples, code, and the occasional creative workaround."
        shortDescription="An ongoing collection of little challenges to stretch my CSS brain."
        eyebrow="Creative Coding"
        title="CSS Battle"
        publishedDate="Updated Nov 2026"
        postTags="CSS, CSS Art"
        utilityStart={
          <HomeLogo
            colors={{
              northeast: "var(--charcoal)",
              southeast: "var(--charcoal)",
              southwest: "var(--charcoal)",
              northwest: "var(--charcoal)",
              hoverAccent: "var(--marigold-bold)",
            }}
            size="1.75rem"
          />
        }
        lede={
          <>
            My solutions to CSS Battle targets, with one extra constraint:{" "}
            <br />
            <span className="post-header-lede-muted">
              recreate each image using a single div and whatever CSS can muster.
            </span>
          </>
        }
        accent="var(--moss-bold)"
        cover={<BattleCover challenges={CHALLENGES.filter((c) => c.cover)} />}
        contents={[
          { id: "intro", label: "Intro", tone: "moss-bold" },
          ...CHALLENGES.map((c) => ({ id: c.key, label: c.title, tone: c.tone })),
        ]}
      > 
        <PostSection id="intro" title="Intro">
          <p>
            CSS Battle gives you a target image and asks you to rebuild it with HTML and CSS. To make
            it harder, I gave myself one rule: a single div per challenge. With only one element to
            work with, I had to lean on everything CSS can draw by itself.
          </p>
          <p>
            <code>::before</code> and <code>::after</code> turned one div into three shapes.{" "}
            <code>box-shadow</code> became a copy machine, stamping out repeats of a shape wherever I
            needed them. Gradients drew stripes and rings without extra elements, and{" "}
            <code>border-radius</code> and <code>transform</code> bent plain squares into petals,
            leaves and arches.
          </p>
        </PostSection>
        {CHALLENGES.map((c) => (
          <PostSection key={c.key} id={c.key} title={c.title} tone={c.tone}>
            <BattleArt challenge={c} />
            <CodeBlock code={`${c.html ?? "<div></div>"}\n\n${c.css}`} />
            <p>
              <TextLink href={`https://codepen.io/annampawl/pen/${c.slug}`} variant="quiet">
                Open on CodePen
              </TextLink>
            </p>
          </PostSection>
        ))}
      </PostLayout>
    </main>
  );
}
