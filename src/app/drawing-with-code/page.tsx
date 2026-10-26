import PostLayout, {
  PostSection,
  PostSubsection,
} from "../../components/layout/PostLayout/PostLayout";
import HomeLogo from "../../components/ui/HomeLogo";
import CodeBlock from "../../components/ui/CodeBlock";
import { DemoStrip, DemoTile } from "./_components/DemoStrip";
import Practice from "./_components/Practice";
import "./drawing-with-code.css";
import TextLink from "../../components/ui/TextLink";
import Link from 'next/link';

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
              northeast: "var(--sky-bold)",
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
            tone: "sky-bold",
          },
          {
            id: "css-recap",
            label: "CSS, a little recap",
            tone: "pink-bold",
          },
          {
            id: "beginners-css-toolkit",
            label: "Beginner’s CSS toolkit",
            tone: "teal-bold",
          },
          {
            id: "lets-build-a-teacup",
            label: "Let’s build a teacup",
            tone: "iris-bold",
          },
          {
            id: "trial-and-error",
            label: "Tips from trial and error",
            tone: "coral-bold",
          },
          { id: "try-it-out", label: "Try it out", tone: "marigold-bold" },
          { id: "keep-going", label: "Keep going", tone: "pink-bold" },
        ]}
      >
        <PostSection
          id="what-is-drawing-with-code"
          title="What is drawing with code?"
        >
          <p>
            All the knick-knacks on my{" "}
            <Link href="/" className="text-link">homepage</Link>, from the teacup to
            the radio, are made of plain old <code>&lt;div&gt;</code>s. No images, no
            SVGs, just CSS. CSS art lies at the intersection of vector illustration
            and frontend development. Instead of drawing with a pen tool, you style
            empty HTML elements with properties like <code>height</code>,{" "}
            <code>border-radius</code>, <code>box-shadow</code> and{" "}
            <code>background-color</code> until they turn into shapes, and eventually
            pictures. With countless properties to play with, you can create
            surprisingly intricate illustrations without ever opening Illustrator.
          </p>

        </PostSection>

        <PostSection
          id="the-div"
          title="It’s all about the <div>"
        >
          <p>
            The <code>&lt;div&gt;</code> element is the building block of every pure CSS
            composition. A div is simply an empty container, often used to
            house other elements and create structure on a web page. On its own, a div has no color, border or shape, so it’s a blank slate.
            Here’s a simple example. Let’s break down the HTML.
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
            <CodeBlock
              code={`<!-- Circle Example -->
<div class="circle">
  <div class="circle__outer">
    <div class="circle__inner"></div>
  </div>
</div>`}
            />
          </div>

          <PostSubsection title="Parent <div>">
            <p>
              Every CSS composition starts with a parent div. Think of it as
              your canvas. In the example above,{" "}
              <code>&lt;div class=&quot;circle&quot;&gt;</code> acts as an
              invisible box that encapsulates all other elements.
            </p>
          </PostSubsection>

          <PostSubsection title="Child <div>">
            <p>
              Styled child divs, which are nested within parent elements, give
              your composition structure and substance. Nesting elements is
              useful because you can position a child div relative to its
              parent. As your CSS skills improve, you&rsquo;ll be able to
              create elaborate pieces with a single div. For now, break your
              vision down into simple parts and create a child div for every
              shape.
            </p>
          </PostSubsection>

          <PostSubsection title="Custom classes">
            <p>
              Each div needs a custom class. Your stylesheet uses these
              references to differentiate between elements. Be concise and
              descriptive for your styling sanity. In the snippet above, if both
              circles shared the same class, any style you gave one would
              apply to both. Naming them <code>circle__outer</code> and{" "}
              <code>circle__inner</code> lets you color and size each one
              separately. Remember,
              assigning a class doesn&rsquo;t do anything by default. Styles
              need to be applied to give a div character.
            </p>
            <p>
              <strong>A little tip:</strong> name each part after the thing it belongs to. On my
              homepage, the cake stand&rsquo;s top is{" "}
              <code>dessert__stand-top</code> and each squiggle of tea steam
              is <code>steam__squiggle</code>. The name before the double
              underscore tells me where a piece lives, so I never lose track
              of it. This convention is called{" "}
              <TextLink href="https://bem.info/en/methodology/naming-convention/" tone="sky-bold">BEM</TextLink>
              .
            </p>
          </PostSubsection>
        </PostSection>

        <PostSection
          id="css-recap"
          title="CSS, a little recap"
        >
          <p>
            CSS is short for Cascading Style Sheets. It&rsquo;s how you give HTML
            elements their looks, written as a series of <strong>rules</strong>,
            usually in a separate <code>.css</code> file. Each rule has two parts:
            a <strong>selector</strong>, which points to the element you want to
            style, and a <strong>declaration block</strong> inside the curly
            braces, which says how it should look.
          </p>

          <CodeBlock
            code={`.circle__outer {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background-color: #67CAF8;
}`}
          />

          <p>
            Each line in the block is a <strong>declaration</strong>, made of a{" "}
            <strong>property</strong> and a <strong>value</strong>. In{" "}
            <code>width: 180px;</code>, <code>width</code> is the property (what
            you&rsquo;re changing) and <code>180px</code> is the value (what
            you&rsquo;re changing it to).
          </p>

          <p>
            The selector above, <code>.circle__outer</code>, matches the div in our
            HTML with <code>class=&quot;circle__outer&quot;</code>. The period at
            the start tells CSS to look for a class with that name. You only write
            the period in your CSS, never in the HTML.
          </p>
          <p>
            An element can also have more than one class. On my homepage, each
            pencil in the cup has two:{" "}
            <code>class=&quot;pens__pencil pens__pencil--2&quot;</code>. The first
            gives every pencil its shared shape, and the second gives this one its
            own color. You might also see <strong>ID selectors</strong>, which start
            with a <code>#</code>, but an ID can only be used once per page, so
            stick with classes for CSS art.
          </p>

        </PostSection>

        <PostSection
          id="beginners-css-toolkit"
          title="Beginner’s CSS toolkit"
        >
          <p>
            You can make a lot with just the basics. Start small and add new
            properties to your toolkit as you go. Reach for a solid{" "}
            <code>background-color</code> before a <code>linear-gradient</code>, and
            get comfortable with <code>border-radius</code> before carving custom
            shapes with <code>clip-path</code>. Get the flat version of your drawing
            working first, then add depth with shadows and highlights. Here are the
            properties I use most to get started.
          </p>

          <PostSubsection title="height, width" variant="code">
            <p>
              These set your element&rsquo;s size. An empty div stretches the
              full width of its parent but has no height, so it&rsquo;s
              invisible until you give it one. Use <code>px</code> for exact
              sizes, like the <code>180px</code> circle above, or{" "}
              <code>%</code> to size an element relative to its parent, which
              keeps your drawing in proportion when you scale it.
            </p>
          </PostSubsection>

          <PostSubsection title="background-color" variant="code">
            <p>
              This fills your element with color. You can write colors as hex
              codes (<code>#67CAF8</code>) or <code>rgb()</code> values. I keep
              my palette in CSS variables, like <code>var(--sky-bold)</code>,
              so I can recolor a whole drawing by changing one line. Your
              browser&rsquo;s dev tools also have a handy color picker built
              in.
            </p>
          </PostSubsection>

          <PostSubsection title="border-radius" variant="code">
            <p>
              This rounds your element&rsquo;s corners. One value rounds all
              four, and <code>border-radius: 50%</code> turns a square into a
              circle, like our <code>circle__outer</code>. You can also give
              up to four values to round each corner separately, starting at
              the top left and going clockwise. Mixing values like this is how
              you get{" "}
              <TextLink tone='teal-bold' href="/css-shapes#oval">ovals</TextLink>, leaves and
              petals.
            </p>
            <DemoStrip>
              <DemoTile label="A square with sharp corners" caption="0">
                <div className="dwc-demo-shape" />
              </DemoTile>
              <DemoTile
                label="A cup shape with only the bottom corners rounded"
                caption="0 0 18px 18px"
              >
                <div className="dwc-demo-shape dwc-demo-shape--cup" />
              </DemoTile>
              <DemoTile label="A circle" caption="50%">
                <div className="dwc-demo-shape dwc-demo-shape--circle" />
              </DemoTile>
            </DemoStrip>
          </PostSubsection>

          <PostSubsection title="position: relative / absolute" variant="code">
            <p>
              This is how you place a piece exactly where it belongs. Give the
              parent <code>position: relative</code> and the piece{" "}
              <code>position: absolute</code>, then use <code>top</code>,{" "}
              <code>left</code>, <code>right</code> and <code>bottom</code> to
              place the piece relative to its parent&rsquo;s edges. My teacup
              works this way: the cup is <code>relative</code>, so its handle
              and tea bag can sit exactly where I put them.
            </p>
            <DemoStrip>
              <DemoTile
                label="A cup with a handle placed on its right side"
                caption="top: 10px; left: 70px;"
              >
                <div className="dwc-demo-cup">
                  <div className="dwc-demo-cup__handle" />
                </div>
              </DemoTile>
            </DemoStrip>
          </PostSubsection>

          <PostSubsection title="transform: translateX / translateY" variant="code">
            <p>
              <code>transform</code> moves, rotates and scales elements.{" "}
              <code>translateX()</code> slides an element left or right, and{" "}
              <code>translateY()</code> slides it up or down, without pushing
              anything else around. That makes it perfect for fine-tuning a
              shape&rsquo;s spot. Start with small <code>px</code> values and
              nudge until it looks right.
            </p>
            <DemoStrip>
              <DemoTile
                label="A square slid to the right of its dashed starting spot"
                caption="transform: translateX(28px);"
              >
                <div className="dwc-demo-move" />
              </DemoTile>
            </DemoStrip>
          </PostSubsection>

          <PostSubsection title="z-index" variant="code">
            <p>
              Once shapes start overlapping, <code>z-index</code> decides
              which one sits on top. Higher numbers come forward, and a
              negative number tucks a piece behind its parent. My teacup&rsquo;s
              handle has <code>z-index: -1</code> so the cup hides its inner
              edge. It only works on positioned elements, so pair it with{" "}
              <code>position</code>.
            </p>
            <DemoStrip>
              <DemoTile
                label="Two overlapping circles, the teal one in front"
                caption="no z-index: last one wins"
              >
                <div className="dwc-demo-stack">
                  <i />
                  <i />
                </div>
              </DemoTile>
              <DemoTile
                label="The same circles, the yellow one brought to the front"
                caption="yellow: z-index: 2"
              >
                <div className="dwc-demo-stack dwc-demo-stack--front">
                  <i />
                  <i />
                </div>
              </DemoTile>
            </DemoStrip>
          </PostSubsection>

          <PostSubsection title="::before / ::after" variant="code">
            <p>
              Every element comes with two extra shapes for free: its{" "}
              <code>::before</code> and <code>::after</code> pseudo-elements.
              Give them <code>content: &quot;&quot;</code>, a size and a
              color, and they behave like extra divs you never had to write.
              My teacup is a single div: <code>::before</code> draws the handle
              and <code>::after</code> draws the tea bag.
            </p>
            <DemoStrip>
              <DemoTile
                label="One teal square with a yellow circle and a purple rectangle drawn by its pseudo-elements"
                caption={
                  <>
                    <i className="dwc-demo-key dwc-demo-key--before" />
                    ::before{"\u00a0\u00a0"}
                    <i className="dwc-demo-key dwc-demo-key--after" />
                    ::after
                  </>
                }
              >
                <div className="dwc-demo-pseudo" />
              </DemoTile>
            </DemoStrip>
            <p>
              Honestly, pseudo-elements took me a while to wrap my head
              around. Don&rsquo;t worry if this doesn&rsquo;t click yet:
              we&rsquo;ll use both of them when we{" "}
              <TextLink tone='teal-bold' href="#lets-build-a-teacup">build a teacup</TextLink>{" "}
              below.
            </p>
          </PostSubsection>

          <PostSubsection title="box-shadow" variant="code">
            <p>
              Shadows add depth, but <code>box-shadow</code> is also a sneaky
              drawing tool. You can stack as many as you like, separated by
              commas, and a shadow with no blur draws a crisp copy of your
              shape. The{" "}
              <TextLink tone='teal-bold' href="#try-it-out">rainbow in the playground</TextLink>{" "}
              below is one div with seven stacked shadows!
            </p>
            <DemoStrip>
              <DemoTile
                label="A small circle ringed by three stacked shadows"
                caption="0 0 0 8px, 0 0 0 16px, 0 0 0 24px"
              >
                <div className="dwc-demo-rings" />
              </DemoTile>
            </DemoStrip>
          </PostSubsection>

          <PostSubsection title="Level up">
            <p>Once the basics feel comfortable, try these next:</p>
            <ul className="dwc-list">
              <li>
                <code>border</code>: outlines, plus the classic trick of
                building{" "}
                <TextLink tone='teal-bold' href="/css-shapes#triangle">triangles</TextLink>{" "}
                out of borders.
              </li>
              <li>
                <code>overflow: hidden</code>: crops anything that spills
                outside a shape.
              </li>
              <li>
                <code>@keyframes</code>: animation. It&rsquo;s what makes the
                steam rise from the teacup on my{" "}
                <TextLink  tone='teal-bold' href="/">homepage</TextLink>.
              </li>
            </ul>
          </PostSubsection>
        </PostSection>

        {/* TODO: build-along in 3–4 stages (cup body, handle, tea bag,
            steam), each with a snippet + live preview like CSS Shapes */}
        <PostSection id="lets-build-a-teacup" title="Let’s build a teacup">
          <p>Coming soon.</p>
        </PostSection>

        <PostSection
          id="trial-and-error"
          title="Tips from trial and error"
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
          {/* TODO: tips: outline trick, build big then scale down,
              palette variables, prefers-reduced-motion */}
        </PostSection>

        <PostSection id="try-it-out" title="Try it out">
          <p>
            Mess around with the CSS in the code editor below to see how you
            can manipulate the output.
          </p>
          <Practice />
        </PostSection>

        {/* TODO: links to CSS Shapes, A Single Div, CSS Battle, MDN */}
        <PostSection id="keep-going" title="Keep going">
          <p>
            I hope you enjoy the challenge of bringing your designs to life
            with HTML and CSS. Look out for more CSS art content and share your
            creations with the front-end community on CodePen. Happy coding!
          </p>
        </PostSection>
      </PostLayout>
    </main>
  );
}
