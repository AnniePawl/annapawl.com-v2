import PostLayout, { PostSection } from "../../components/layout/PostLayout/PostLayout";
import HomeLogo from "../../components/ui/HomeLogo";
import ShapeCover from "./_components/ShapeCover";
import { SHAPES } from "./shapes";
import ShapeLesson from "./_components/ShapeLesson";

export default function CssShapesPage() {
  return (
    <main className="shapes-page">
      <PostLayout
        descriptionTitle="CSS Art"
        description="Every CSS illustration starts with a few basic shapes. Here’s how to build a dozen of them, one property at a time."
        eyebrow="Creative Coding"
        title="CSS Shapes"
        publishedDate="Oct 24, 2026"
        readingTime="6 min read"
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
        contents={SHAPES.map((shape) => ({
          id: shape.id,
          label: shape.label,
          tone: shape.fill,
        }))}
      >
        <PostSection id="circle" title="Circle">
          <p>Every circle in CSS starts as a square. Round each corner by half its width with <code>border-radius: 50%</code>, and the curves meet in the middle.</p>
          <ShapeLesson shape="circle" />

        </PostSection>

        <PostSection id="square" title="Square">
          <p>The simplest shape, and the starting point for most of the others: a div with the same width and height, plus a background so you can see it.</p>
          <ShapeLesson shape="square" />
        </PostSection>

        <PostSection id="triangle" title="Triangle">
          <p>There’s no triangle property in CSS, so we borrow one from borders. Shrink a box to zero, give it thick borders, and each border becomes a triangle. Then hide the ones you don’t need.</p>
          <ShapeLesson shape="triangle" />
        </PostSection>

        <PostSection id="pentagon" title="Pentagon">
          <p>A pentagon is two shapes stacked: a trapezoid body made from a thick top border, and a triangle roof added with <code>::before</code>.</p>
          <ShapeLesson shape="pentagon" />
        </PostSection>

        <PostSection id="oval" title="Oval">
          <p>An oval is a stretched circle. Use the same <code>border-radius: 50%</code>, but on a box that’s taller than it is wide.</p>
          <ShapeLesson shape="oval" />
        </PostSection>

        <PostSection id="trapezoid" title="Trapezoid">
          <p>A trapezoid uses the triangle’s border trick on a box that still has some width. The bottom border keeps a flat top, and the transparent sides slant it in.</p>
          <ShapeLesson shape="trapezoid" />
        </PostSection>

        <PostSection id="octagon" title="Octagon">
          <p>Start with a square, then cover its four corners with small triangles the same color as the background. The corners disappear, leaving eight sides.</p>
          <ShapeLesson shape="octagon" />
        </PostSection>

        <PostSection id="parallelogram" title="Parallelogram">
          <p>Draw a rectangle, then lean it over with <code>transform: skew()</code>. The top and bottom stay level while the sides tilt.</p>
          <ShapeLesson shape="parallelogram" />
        </PostSection>

        <PostSection id="rectangle" title="Rectangle">
          <p>A square with one side stretched: any width and height that don’t match.</p>
          <ShapeLesson shape="rectangle" />
        </PostSection>

        <PostSection id="hexagon" title="Hexagon">
          <p>A hexagon is a wide rectangle with a triangle on top and another underneath, added with <code>::before</code> and <code>::after</code>.</p>
          <ShapeLesson shape="hexagon" />
        </PostSection>

        <PostSection id="star" title="Star">
          <p>The classic CSS star is three triangles: one wide triangle, rotated; a mirrored twin from <code>::after</code>; and a tall point on top from <code>::before</code>.</p>
          <ShapeLesson shape="star" />
        </PostSection>

        <PostSection id="heart" title="Heart">
          <p>Tilt a square 45 degrees so it points down, then add a circle to each top edge with <code>::before</code> and <code>::after</code>.</p>
          <ShapeLesson shape="heart" />
        </PostSection>
      </PostLayout>
    </main>
  );
}
