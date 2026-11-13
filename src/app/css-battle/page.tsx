import PostLayout, { PostSection } from "../../components/layout/PostLayout/PostLayout";
import CodeBlock from "../../components/ui/CodeBlock";
import HomeLogo from "../../components/ui/HomeLogo";
import TextLink from "../../components/ui/TextLink";
import BattleArt from "./_components/BattleArt";
import BattleCover from "./_components/BattleCover";
import { CHALLENGES } from "./_data/challenges";

export default function CssBattle() {
  return (
    <main>
      <PostLayout
        descriptionTitle="CSS art"
        description="My solutions to a few CSS Battle challenges, where you recreate a target image with as little HTML and CSS as possible."
        shortDescription="My solutions to a few CSS Battle challenges."
        eyebrow="Building Blocks"
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
            Solutions to random CSS Battle challenges.{" "}
            <span className="post-header-lede-muted">All completed with a single div.</span>
          </>
        }
        accent="var(--moss-soft)"
        cover={<BattleCover challenges={CHALLENGES.filter((c) => c.cover)} />}
        contents={CHALLENGES.map((c) => ({ id: c.key, label: c.title, tone: c.tone }))}
      >
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
