import ArticleLayout, {
  ArticleSection,
} from "../../components/layout/ArticleLayout";
import PageHeader from "../../components/layout/PageHeader";
import HomeLogo from "../../components/ui/HomeLogo";
// import ShapesGrid from "./_components/ShapesGrid";
import CodeSnippet from "./_components/CodeSnippet";
import Practice from "./_components/Practice";
import "./drawing-with-code.css";

export default function DrawingWithCodePage() {
  return (
    <main className="dwc-page">
      <ArticleLayout
        variant="publication"
        header={
          <PageHeader
            variant="publication"
            collectionLabel="CSS Art"
            eyebrow="Notes, CSS art"
            title="Drawing with Code"
            description="A record of what I’ve read, what stayed with me, and what I’d happily press into someone else’s hands."
            meta="Oct 3, 2026 · 4 min read"
            metaEnd="CSS, Illustration, Front-end"
            utilityStart={
              <HomeLogo
                colors={{
                  northeast: "var(--emerald-bold)",
                  southeast: "var(--red-bold)",
                  southwest: "var(--red-bold)",
                  northwest: "var(--red-bold)",
                  hoverAccent: "var(--indigo-bold)",
                }}
                size="1.75rem"
              />
            }
            colors={{ accent: "var(--red-bold)" }}
          />
        }
        contents={[
          {
            id: "what-is-drawing-with-code",
            label: "What is drawing with code?",
            tone: "red-bold",
          },
          {
            id: "the-div",
            label: "It’s all about the <div>",
            tone: "indigo-bold",
          },
          {
            id: "css-recap",
            label: "CSS, a little recap",
            tone: "lilac-soft",
          },
          {
            id: "beginners-css-toolkit",
            label: "Beginner’s CSS toolkit",
            tone: "emerald-bold",
          },
          { id: "try-it-out", label: "Try it out", tone: "amber-bold" },
        ]}
        footerStart="About"
        footerCenter="Shelves: Fiction, Essays, Poetry, Memoir, Notes"
        footerEnd="Search"
      >
        {/* <ShapesGrid /> */}

        <ArticleSection
          id="what-is-drawing-with-code"
          title="What is drawing with code?"
          tone="red-bold"
        >
          <p>
            CSS art lies at the intersection of vector illustration and
            front-end development. It involves manipulating &lt;div&gt; HTML
            elements with CSS to render shapes in the browser. These shapes
            are customized by assigning values to various properties like
            height, border-radius, box-shadow and background-color. With
            countless CSS properties to work with, it&rsquo;s possible to
            create intricate pieces without a vector illustration software
            like Illustrator.
          </p>

          <CodeSnippet
            code={`<div className="circle-container">
  <div className="inner-circle"></div>
</div>`}
          />
        </ArticleSection>

        <ArticleSection
          id="the-div"
          title="It’s all about the <div>"
          tone="indigo-bold"
        >
          <p>
            The &lt;div&gt; element is the building block of every pure CSS
            composition. A div is simply an empty container, often used to
            house other elements and create structure on a web page. It
            does not affect content or layout unless it&rsquo;s styled with
            CSS or manipulated with scripts, making it extremely versatile.
            Take a look at the example above. Let&rsquo;s break down the
            HTML portion of CSS art.
          </p>

          <div className="dwc-prose-sub">
            <h3>Parent &lt;div&gt;</h3>
            <p>
              Every CSS composition starts with a parent div. Think of it as
              your canvas. In the example above, &lt;div
              className=&apos;circle-container&apos;&gt; acts as an invisible
              box that encapsulates all other elements.
            </p>
          </div>

          <div className="dwc-prose-sub">
            <h3>Child &lt;div&gt;</h3>
            <p>
              Styled child divs, which are nested within parent elements, give
              your composition structure and substance. Nesting elements is
              useful because you can position a child div relative to its
              parent. As your CSS skills improve, you&rsquo;ll be able to
              create elaborate pieces with a single div. For now, break your
              vision down into simple parts and create a child div for every
              shape.
            </p>
          </div>

          <div className="dwc-prose-sub">
            <h3>Custom Classes</h3>
            <p>
              Each div needs a custom class. Your stylesheet uses these
              references to differentiate between elements. Be concise and
              descriptive for your styling sanity. In the code snippet above,
              className=&apos;inner-circle&apos; is more effective than
              className=&apos;circle&apos; because it allows me to target a
              specific sphere and give it distinct styles. Remember, assigning
              a class doesn&rsquo;t do anything by default. Styles need to be
              applied to give a div character.
            </p>
          </div>
        </ArticleSection>

        <ArticleSection
          id="css-recap"
          title="CSS, a little recap"
          tone="lilac-soft"
        >
          <p>
            CSS is short for Cascading Style Sheets. A style sheet interacts
            with HTML elements to add aesthetic substance to a document. To
            apply custom styles, we create a series of CSS rules, typically
            in a separate .css file. Rules are CSS properties applied to one
            or more target HTML elements. Each consists of a selector and a
            declaration block. The selector points to the specific HTML
            element you want to customize, while the declaration defines
            the actual style.
          </p>
          <p>
            The selector above refers to a class called &ldquo;rectangle&rdquo;.
            We can tell because a full stop (.) precedes the name. Class
            selectors give us the flexibility to target specific HTML
            elements and are assigned inside opening tags like this: &lt;div
            className=&apos;rectangle&apos;&gt;. ID selectors, which are
            preceded by the hash character (#), work similarly but should
            be used sparingly. Don&rsquo;t forget, each element can only
            have one ID, and each page only permits one element with a
            particular ID.
          </p>
          <p>
            Opt for class selectors when creating CSS art. As your digital
            creations become more complex, you will find it helpful to
            reuse the same class on several elements. Moreover, applying
            multiple classes to a single element will give you even more
            artistic control over it. Assigning custom classes is
            especially essential to CSS art because the &ldquo;drawing&rdquo;
            process entails styling divs, which are otherwise
            indistinguishable from one another.
          </p>

          <CodeSnippet
            code={`.rectangle {
  width: 45%;
  height: 65%;
  background-color: #ff9666;
}`}
          />
        </ArticleSection>

        <ArticleSection
          id="beginners-css-toolkit"
          title="Beginner’s CSS toolkit"
          tone="emerald-bold"
        >
          <p>
            There is a lot you can accomplish with the basics. Start small,
            and add new CSS properties to your toolkit as you grow.
            Consider the subcomponents of your graphic, then simplify. For
            example, apply a solid background-color before playing with
            gradient, and experiment with border-radius before using
            clip-path to generate custom shapes. Try a flat version of your
            design before transforming it into a 3D edition. Below is a
            short list of CSS properties to help you get started.
          </p>

          <div className="dwc-prose-sub">
            <h3>height, width</h3>
            <p>
              These properties are used to set the height and width of your
              element. Default div size is determined by the HTML content it
              contains. Without any content, your div won&rsquo;t appear to
              exist. It&rsquo;s important to explicitly mention these
              properties for this reason. Use px or % values to define your
              div&rsquo;s size.
            </p>
          </div>

          <div className="dwc-prose-sub">
            <h3>background-color</h3>
            <p>
              This property sets the color of your div. I like using
              Google&rsquo;s color picker to find the perfect hue and its
              corresponding HEX or RGB value.
            </p>
          </div>

          <div className="dwc-prose-sub">
            <h3>border-radius</h3>
            <p>
              This property sets the radius of your div&rsquo;s corners. Divs
              are square by default, but you can generate other shapes by
              manipulating borders. If you assign one value to this property,
              that radius applies to all four corners. For example,
              border-radius: 50% makes a circle. You can specify up to three
              additional values to adjust corners separately.
            </p>
          </div>

          <div className="dwc-prose-sub">
            <h3>transform: translateY / translateX</h3>
            <p>
              This property repositions your div vertically/horizontally
              along a 2D plane. Positioning elements is an essential part of
              creating more complex designs. Use px values to start moving
              components around your canvas.
            </p>
          </div>
        </ArticleSection>

        <ArticleSection id="try-it-out" title="Try it out" tone="amber-bold">
          <p>
            Mess around with the CSS in the code editor below to see how you
            can manipulate the output.
          </p>
          <Practice />
        </ArticleSection>
      </ArticleLayout>
    </main>
  );
}
