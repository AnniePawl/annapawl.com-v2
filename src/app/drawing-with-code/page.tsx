import PostLayout, {
  PostSection,
} from "../../components/layout/PostLayout/PostLayout";
import HomeLogo from "../../components/ui/HomeLogo";
import CodeSnippet from "./_components/CodeSnippet";
import Practice from "./_components/Practice";
import "./drawing-with-code.css";

export default function DrawingWithCodePage() {
  return (
    <main className="dwc-page">
      <PostLayout
        descriptionTitle="CSS Art"
        description="An introduction to drawing with code—using HTML elements and CSS properties to turn simple shapes into illustrations in the browser."
        eyebrow="Creative Coding"
        title="Drawing with Code"
        publishedDate="Oct 3, 2026"
        readingTime="5 min read"
        postTags="CSS, Illustration, Creative Coding"
        utilityStart={
          <HomeLogo
            colors={{
              northeast: "var(--emerald-bold)",
              southeast: "var(--red-bold)",
              southwest: "var(--red-bold)",
              northwest: "var(--red-bold)",
              hoverAccent: "var(--iris-bold)",
            }}
            size="1.75rem"
          />
        }
        accent="var(--red-bold)"
        contents={[
          {
            id: "what-is-drawing-with-code",
            label: "What is drawing with code?",
            tone: "red-bold",
          },
          {
            id: "the-div",
            label: "It’s all about the <div>",
            tone: "sage-soft",
          },
          {
            id: "css-recap",
            label: "CSS, a little recap",
            tone: "plum-bold",
          },
          {
            id: "beginners-css-toolkit",
            label: "Beginner’s CSS toolkit",
            tone: "coral-bold",
          },
          {
            id: "trial-and-error",
            label: "Trial and error",
            tone: "iris-bold",
          },
          { id: "try-it-out", label: "Try it out", tone: "marigold-bold" },
        ]}
      >
        <PostSection
          id="what-is-drawing-with-code"
          title="What is drawing with code?"
        >
          <p>
            CSS art lies at the intersection of vector illustration and
            front-end development. It involves manipulating <code>&lt;div&gt;</code>{" "}
            HTML elements with CSS to render shapes in the browser. These
            shapes are customized by assigning values to various properties
            like <code>height</code>, <code>border-radius</code>,{" "}
            <code>box-shadow</code> and <code>background-color</code>. With
            countless CSS properties to work with, it&rsquo;s possible to
            create intricate pieces without a vector illustration software
            like Illustrator.
          </p>

        </PostSection>

        <PostSection
          id="the-div"
          title="It’s all about the <div>"
        >
          <p>
            The <code>&lt;div&gt;</code> element is the building block of every pure CSS
            composition. A div is simply an empty container, often used to
            house other elements and create structure on a web page. It
            does not affect content or layout unless it&rsquo;s styled with
            CSS or manipulated with scripts, making it extremely versatile.
            Take a look at the example below. Let&rsquo;s break down the
            HTML portion of CSS art.
          </p>

          <div className="dwc-circle-example">
            <div
              className="dwc-circle-demo"
              role="img"
              aria-label="A yellow circle centered inside a larger blue circle"
            >
              <div className="dwc-circle-example-outer">
                <div className="dwc-circle-example-inner" />
              </div>
            </div>
            <CodeSnippet
              code={`<!-- Circle Example -->
<div class='circle-container'>
  <div class='outer-circle'>
    <div class='inner-circle'></div>
  </div>
</div>`}
            />
          </div>

          <div className="dwc-prose-sub">
            <h3>Parent &lt;div&gt;</h3>
            <p>
              Every CSS composition starts with a parent div. Think of it as
              your canvas. In the example above,{" "}
              <code>&lt;div class=&apos;circle-container&apos;&gt;</code> acts as an
              invisible box that encapsulates all other elements.
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
              descriptive for your styling sanity. In the code snippet above,{" "}
              <code>class=&apos;inner-circle&apos;</code> is more effective than{" "}
              <code>class=&apos;circle&apos;</code> because it allows me to target
              a specific sphere and give it distinct styles. Remember,
              assigning a class doesn&rsquo;t do anything by default. Styles
              need to be applied to give a div character.
            </p>
          </div>
        </PostSection>

        <PostSection
          id="css-recap"
          title="CSS, a little recap"
        >
          <p>
            CSS is short for Cascading Style Sheets. A style sheet interacts
            with HTML elements to add aesthetic substance to a document. To
            apply custom styles, we create a series of <strong>CSS rules</strong>,
            typically in a separate <code>.css</code> file. Rules are CSS
            properties applied to one or more target HTML elements. Each
            consists of a <strong>selector</strong> and a{" "}
            <strong>declaration block</strong>. The selector points to the
            specific HTML element you want to customize, while the declaration
            defines the actual style.
          </p>
          <p>
            The selector above refers to a class called &ldquo;rectangle&rdquo;.
            We can tell because a full stop (.) precedes the name.{" "}
            <strong>Class selectors</strong> give us the flexibility to target
            specific HTML elements and are assigned inside opening tags like
            this: <code>&lt;div class=&apos;rectangle&apos;&gt;</code>.{" "}
            <strong>ID selectors</strong>, which are preceded by the hash
            character (<code>#</code>), work similarly but should be used
            sparingly. Don&rsquo;t forget, each element can only have one ID,
            and each page only permits one element with a particular ID.
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
        </PostSection>

        <PostSection
          id="beginners-css-toolkit"
          title="Beginner’s CSS toolkit"
        >
          <p>
            There is a lot you can accomplish with the basics. Start small,
            and add new CSS properties to your toolkit as you grow.
            Consider the subcomponents of your graphic, then simplify. For
            example, apply a solid <code>background-color</code> before playing
            with <code>gradient</code>, and experiment with{" "}
            <code>border-radius</code> before using <code>clip-path</code> to
            generate custom shapes. Try a flat version of your design before
            transforming it into a 3D edition. Below is a short list of CSS
            properties to help you get started.
          </p>

          <div className="dwc-prose-sub">
            <h3>height, width</h3>
            <p>
              These properties are used to set the height and width of your
              element. Default div size is determined by the HTML content it
              contains. Without any content, your div won&rsquo;t appear to
              exist. It&rsquo;s important to explicitly mention these
              properties for this reason. Use <code>px</code> or <code>%</code>{" "}
              values to define your div&rsquo;s size.
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
              that radius applies to all four corners. For example,{" "}
              <code>border-radius: 50%</code> makes a circle. You can specify
              up to three additional values to adjust corners separately.
            </p>
          </div>

          <div className="dwc-prose-sub">
            <h3>transform: translateY / translateX</h3>
            <p>
              This property repositions your div vertically/horizontally
              along a 2D plane. Positioning elements is an essential part of
              creating more complex designs. Use <code>px</code> values to
              start moving components around your canvas.
            </p>
          </div>
        </PostSection>

        <PostSection
          id="trial-and-error"
          title="Trial and error"
        >
          <p>
            Get ready for some serious trial and error. Drawing with code can
            be a painstaking process that requires patience and perseverance.
            Unlike creating a vector graphic with illustration software, you
            can&rsquo;t exactly see what you&rsquo;re working with until your code
            renders in the browser. Getting a shape in the right spot might
            involve countless micro-adjustments. Stick with it!
          </p>
          <p>
            You might be asking yourself, why would anyone go through the
            trouble of making illustrations with CSS? While it&rsquo;s not
            practical for most applications, it&rsquo;s a fun way to develop your
            skillset and portfolio. If you&rsquo;re an illustrator, CSS art is a
            perfect introduction to coding. If you&rsquo;re a front-end developer,
            drawing with code is a creative way to become more familiar with
            the subtleties of CSS.
          </p>
          <p>
            I hope you enjoy the challenge of bringing your designs to life
            with HTML and CSS. Look out for more CSS art content and share your
            creations with the front-end community on CodePen. Happy coding!
          </p>
        </PostSection>

        <PostSection id="try-it-out" title="Try it out">
          <p>
            Mess around with the CSS in the code editor below to see how you
            can manipulate the output.
          </p>
          <Practice />
        </PostSection>
      </PostLayout>
    </main>
  );
}
