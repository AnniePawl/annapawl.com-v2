import PostLayout, { PostSection } from "../../components/layout/PostLayout/PostLayout";
import { ButtonLink } from "../../components/ui/Button";
import CodeBlock from "../../components/ui/CodeBlock";
import Disclosure from "../../components/ui/Disclosure";
import HomeLogo from "../../components/ui/HomeLogo";
import TextLink from "../../components/ui/TextLink";
import BattleArt from "./_components/BattleArt";
import BattleCover from "./_components/BattleCover";
import { CHALLENGES, techniques } from "./_data/challenges";

export default function CssBattle() {
  return (
    <main className="css-battle-page">
      <PostLayout
        descriptionTitle="CSS art"
        description="An ongoing collection of little challenges to stretch my CSS brain, with rendered examples, code, and the occasional creative workaround."
        shortDescription="An ongoing collection of little challenges to stretch my CSS brain."
        eyebrow="Creative Coding"
        title="CSS Battle"
        detailsStart="Ongoing collection · Updated Nov 2026"
        postTags="Code golf, Single div, CSS art"
        utilityStart={
          <HomeLogo
            colors={{
              northeast: "var(--clay-bold)",
              southeast: "var(--moss-bold)",
              southwest: "var(--moss-bold)",
              northwest: "var(--moss-bold)",
              hoverAccent: "var(--charcoal)",
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
        next={{ href: "/drawing-with-code", label: "Drawing with Code" }}
        cover={<BattleCover challenges={CHALLENGES.filter((c) => c.cover)} />}
        contents={[
          { id: "intro", label: "Intro", tone: "moss-bold" },
          ...CHALLENGES.map((c) => ({ id: c.key, label: c.title, tone: c.tone })),
        ]}
      > 
        <PostSection id="intro" title="Intro">
          <p>
            <TextLink href="https://cssbattle.dev/">CSS Battle</TextLink> is a game of code golf: you
            get a target image and rebuild it with HTML and CSS, and the shorter your code, the better
            your score. I played by a different rule. Instead of chasing the fewest characters, I gave
            myself one div per challenge. With only one element to work with, I had to lean on
            everything CSS can draw by itself.
          </p>
          <p>
            <TextLink href="/field-notes#before-after"><code>::before</code> and <code>::after</code></TextLink> turned one div into three shapes.{" "}
            <code>box-shadow</code> became a copy machine, stamping out repeats of a shape wherever I
            needed them. Gradients drew stripes and rings without extra elements, and{" "}
            <code>border-radius</code> and <TextLink href="/field-notes#transform"><code>transform</code></TextLink> bent plain squares into petals,
            leaves and arches.
          </p>
        </PostSection>
        {CHALLENGES.map((c) => (
          <PostSection key={c.key} id={c.key} title={c.title} tone={c.tone} className="cb-section">
            <div className="cb-meta">
              <ul className="cb-tags" aria-label="Techniques">
                {techniques(c).map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <ButtonLink
                href={`https://cssbattle.dev/play/${c.target}`}
                shape="pill"
                size="sm"
                tone={c.tone}
                className="cb-target"
              >
                View target
              </ButtonLink>
            </div>
            <BattleArt challenge={c} />
            <Disclosure label="Show the CSS" openLabel="Hide the CSS" className="cb-code">
              <CodeBlock code={`${c.html ?? "<div></div>"}\n\n${c.css}`} />
            </Disclosure>
          </PostSection>
        ))}
      </PostLayout>
    </main>
  );
}
