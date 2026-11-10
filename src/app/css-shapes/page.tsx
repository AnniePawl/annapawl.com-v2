import PostLayout, { PostSection } from "../../components/layout/PostLayout/PostLayout";
import HomeLogo from "../../components/ui/HomeLogo";
import ShapeCover from "./_components/ShapeCover";
import { SHAPES } from "./shapes";
import ShapeLesson from "./_components/ShapeLesson";
import CodeBlock from "../../components/ui/CodeBlock";
import TextLink from "../../components/ui/TextLink";

export const metadata = {
  title: "CSS Shapes — Anna Pawl",
  description:
    "Every CSS illustration starts with a few basic shapes. Here’s how to build a dozen of them, one property at a time.",
};

const OCTAGON_CLIP_PATH = `.octagon {
  width: 100px;
  height: 100px;
  background: #D91F1F;
  clip-path: polygon(
    29% 0, 71% 0, 100% 29%, 100% 71%,
    71% 100%, 29% 100%, 0 71%, 0 29%
  );
}`;

export default function CssShapesPage() {
  return (
    <main className="shapes-page">
      <PostLayout
        descriptionTitle="CSS Art"
        description="Every CSS illustration starts with a few basic shapes. Here’s how to build a dozen of them, one property at a time."
        eyebrow="Creative Coding"
        title="CSS Shapes"
        next={{ href: "/drawing-with-code", label: "Drawing with Code" }}
        publishedDate="Updated Oct 2026"
        readingTime="8 min read"
        postTags="CSS, Illustration"
        accent="var(--marigold-bold)"
        utilityStart={
          <HomeLogo
            colors={{
              northeast: "var(--marigold-bold)",
              southeast: "var(--pink-bold)",
              southwest: "var(--pink-bold)",
              northwest: "var(--pink-bold)",
              hoverAccent: "var(--pink-bold)",
            }}
            size="1.75rem"
          />
        }
        cover={<ShapeCover />}
        contents={[
          { id: "intro", label: "Intro", tone: "mint-bold" },
          ...SHAPES.map((shape) => ({
            id: shape.id,
            label: shape.label,
            tone: shape.fill,
          })),
          { id: "keep-going", label: "Keep going", tone: "marigold-bold" },
        ]}
      >
        <PostSection id="intro" title="Intro">
          <p>This is the little guide I wish I’d had when I was learning. For a long time, my approach to CSS shapes was copy, paste, change the color, and boom, done. That worked until something looked funky. Then I was stuck because I couldn’t explain why it worked, and anything trickier, like a heart or star, felt beyond me. Once I started picking them apart, I realized the same handful of tricks show up again and again. Below are twelve shapes, built one property at a time with step-by-step visuals and anatomy diagrams. Use it as a handy reference, then start mixing and matching the pieces to make shapes of your own. The next time something looks funky, you’ll know where to poke.</p>
        </PostSection>

        <PostSection id="square" title="Square">
          <p>The simplest shape, and the starting point for most of the others: a div with the same width and height, plus a background so you can see it.</p>
          <ShapeLesson shape="square" />
        </PostSection>

        <PostSection id="rectangle" title="Rectangle">
          <p>A square with one side stretched: any width and height that don’t match.</p>
          <ShapeLesson shape="rectangle" />
        </PostSection>

        <PostSection id="circle" title="Circle">
          <p>Every circle in CSS starts as a square. Round each corner by half its width with <code>border-radius: 50%</code>, and the curves meet in the middle.</p>
          <ShapeLesson shape="circle" />

        </PostSection>

        <PostSection id="oval" title="Oval">
          <p>An oval is a stretched circle. Use the same <code>border-radius: 50%</code>, but on a box that’s taller than it is wide.</p>
          <ShapeLesson shape="oval" />
        </PostSection>

        <PostSection id="parallelogram" title="Parallelogram">
          <p>Draw a rectangle, then lean it over with <code>transform: skew()</code>. The top and bottom stay level while the sides tilt.</p>
          <ShapeLesson shape="parallelogram" />
        </PostSection>

        <PostSection id="triangle" title="Triangle">
          <p>Okay, this one is a little tricky. Triangles were the first CSS shape that felt like a magic trick to me. When a box has no width or height, each thick border forms a triangle that meets in the middle. Start with all four to see how the trick works, then remove the top border. Make the left and right borders transparent, and the colored bottom border becomes the only visible triangle. </p>
          <ShapeLesson shape="triangle" />
        </PostSection>

        <PostSection id="trapezoid" title="Trapezoid">
          <p>A trapezoid uses the triangle’s border trick on a box that still has some width. Give a zero-height box some width, then add a thick bottom border. The box’s width creates the flat top, while the transparent side borders create the slopes.</p>
          <ShapeLesson shape="trapezoid" />
        </PostSection>

        <PostSection id="pentagon" title="Pentagon">
          <p>A pentagon combines two border-built shapes. The <code>div</code> forms a trapezoid with a thick top border and transparent sides. Its <code>::before</code> pseudo-element reuses the triangle trick from above to create the pointed roof, and absolute positioning stacks the two pieces together.</p>
          <ShapeLesson shape="pentagon" />
        </PostSection>

        <PostSection id="hexagon" title="Hexagon">
          <p>A hexagon starts with a wide rectangle. Then <code>::before</code> and <code>::after</code> reuse the border triangle trick to add one triangle above it and another below. Together, the three pieces create six sides.</p>
          <ShapeLesson shape="hexagon" />
        </PostSection>

        <PostSection id="octagon" title="Octagon">
          <p>Start with a square, then place <code>::before </code>across its top edge and <code>::after</code> across its bottom edge. Each pseudo-element uses side borders that match the page background to cover two corners of the square. Once all four corners blend into the background, the visible shape has eight sides.</p>
          <ShapeLesson shape="octagon" />
          <p className="mt-6">One catch: the corners aren’t really gone, just covered up. That only works on a known, solid background. Put the octagon on a gradient, a photo or a different color, and the wedges show. For those, <code>clip-path</code> is the more flexible option, since it actually cuts the corners off:</p>
          <CodeBlock code={OCTAGON_CLIP_PATH} highlight={["clip-path"]} />
        </PostSection>

        <PostSection id="star" title="Star">
          <p>The star is the fiddliest shape in the bunch. It looks complicated, but it’s really three border triangles layered and nudged into place. The <code>div</code> draws the first wide triangle and rotates it 35 degrees. Its <code>::after</code> pseudo-element draws a second wide triangle, rotates it in the opposite direction, and places it across the first to form most of the star. Then <code>::before</code> adds a narrower, taller triangle to finish the top point. The <code>top</code> and <code>left</code> values nudge the two pseudo-elements into place.</p>
          <ShapeLesson shape="star" />
        </PostSection>

        <PostSection id="heart" title="Heart">
          <p>Start with a square and rotate it into a diamond so one corner becomes the heart’s bottom point. Then use <code>::before</code> and <code>::after</code> to add two circles the same size as the square. Move one circle above it and the other to its right. Because the circles rotate with their parent, they become the heart’s two rounded lobes while the square forms the pointed bottom.</p>
          <ShapeLesson shape="heart" />
        </PostSection>

        <PostSection id="keep-going" title="Keep going">
          <p>That’s the whole set! Twelve shapes built from a surprisingly small CSS toolkit. Most come down to the same few ideas: <code>width</code> and <code>height</code>, <code>border-radius</code>, borders that turn into triangles, and <code>::before</code> and <code>::after</code> for adding extra pieces. Once those patterns feel familiar, you can draw all kinds of things by stacking, rotating, and nudging them into place.</p>
          <p>Ready to turn those shapes into an illustration? In <TextLink href="/drawing-with-code">Drawing with Code</TextLink>, I use the same techniques to build a cute little teacup from a single <code>div</code>.</p>
        </PostSection>
      </PostLayout>
    </main>
  );
}
