import PostLayout, { PostSection } from "../../components/layout/PostLayout/PostLayout";
import HomeLogo from "../../components/ui/HomeLogo";
import TextLink from "../../components/ui/TextLink";
import PlateStage from "./_components/PlateStage";

export const metadata = {
  title: "Rejected Vanity Plates — Anna Pawl",
  description:
    "A collection of vanity plates the New York DMV said no to, served up on a little license plate drawn in CSS.",
};

export default function RejectedVanityPlates() {
  return (
    <main>
      <PostLayout
        descriptionTitle="Creative coding"
        description="A collection of vanity plates the New York DMV said no to, served up on a little license plate drawn in CSS."
        shortDescription="A cheeky data viz of plates the DMV said no to."
        eyebrow="Creative Coding"
        title="Rejected Vanity Plates"
        lede={
          <>
            One person’s dream plate.
            {" "}
            <span className="post-header-lede-muted">The DMV’s hard pass.</span>
          </>
        }
        publishedDate="Updated Nov 2026"
        readingTime="TODO min read"
        postTags="Data viz, CSS art, React"
        utilityStart={
          <HomeLogo
            colors={{
              northeast: "var(--sky-bold)",
              southeast: "var(--marigold-bold)",
              southwest: "var(--marigold-bold)",
              northwest: "var(--marigold-bold)",
              hoverAccent: "var(--marigold-bold)",
            }}
            size="1.75rem"
          />
        }
        accent="var(--marigold-bold)"
        contents={[
          { id: "intro", label: "Intro", tone: "pink-bold" },
          { id: "the-data", label: "The data", tone: "sky-bold" },
          { id: "the-plate", label: "Drawing the plate", tone: "marigold-bold" },
          { id: "random-plate", label: "Picking a plate", tone: "lilac-bold" },
          { id: "patterns", label: "Patterns in the data", tone: "green-bold" },
          { id: "keep-going", label: "Keep going", tone: "red-bold" },
        ]}
      >
        <PlateStage />

        <PostSection id="intro" title="Intro">
          <p>TODO: what this is, and a content warning (the data has explicit language).</p>
        </PostSection>

        <PostSection id="the-data" title="The data">
          <p>
            TODO: where it comes from and how I cleaned it. Source: WNYC Data
            News,{" "}
            <TextLink href="https://github.com/datanews/license-plates">
              datanews/license-plates
            </TextLink>
            , from a 2014 FOIL request to the New York DMV.
          </p>
        </PostSection>

        <PostSection id="the-plate" title="Drawing the plate">
          <p>TODO: how the CSS plate is built.</p>
        </PostSection>

        <PostSection id="random-plate" title="Picking a plate">
          <p>TODO: loading the data and picking a random plate.</p>
        </PostSection>

        <PostSection id="patterns" title="Patterns in the data">
          <p>TODO: a simple chart, like rejections by month or common words.</p>
        </PostSection>

        <PostSection id="keep-going" title="Keep going">
          <p>TODO: other states, ideas to build on.</p>
        </PostSection>
      </PostLayout>
    </main>
  );
}
