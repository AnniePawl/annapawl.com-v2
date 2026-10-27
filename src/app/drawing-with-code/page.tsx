import PostLayout, {
  PostSection,
  PostSubsection,
} from "../../components/layout/PostLayout/PostLayout";
import HomeLogo from "../../components/ui/HomeLogo";
import CodeBlock from "../../components/ui/CodeBlock";
import { DemoStrip, DemoTile } from "./_components/DemoStrip";
import TeacupDemo from "./_components/TeacupDemo";
import {
  TEACUP_CUP,
  TEACUP_HANDLE,
  TEACUP_SAUCER,
} from "./_components/teacup";
import Practice from "./_components/Practice";
import "./drawing-with-code.css";
import TextLink from "../../components/ui/TextLink";

export default function DrawingWithCodePage() {
  return (
    <main className="dwc-page">
      <PostLayout
        descriptionTitle="CSS Art"
        description="An introduction to drawing with code—using HTML elements and CSS properties to turn simple shapes into illustrations in the browser."
        shortDescription="How I draw little illustrations with nothing but HTML and CSS."
        eyebrow="Creative Coding"
        title="Drawing with Code"
        next={{ href: "/css-shapes", label: "CSS Shapes" }}
        publishedDate="Updated Oct 2026"
        readingTime="10 min read"
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
            tone: "plum-bold",
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
            <TextLink href="/">homepage</TextLink>, from the teacup to
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
              <strong>A little tip.</strong> Name each part after the thing it belongs to. On my
              homepage, the cake stand&rsquo;s top is{" "}
              <code>dessert__stand-top</code> and each squiggle of tea steam
              is <code>steam__squiggle</code>. The name before the double
              underscore tells me where a piece lives, so I never lose track
              of it. This convention is called{" "}
              <TextLink href="https://bem.info/en/methodology/naming-convention/">BEM</TextLink>
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
            usually in a separate <code>.css</code> file. Each rule has two parts,
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
            pencil in the cup has two,{" "}
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
              <TextLink href="/css-shapes#oval">ovals</TextLink>, leaves and
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
              place the piece relative to its parent&rsquo;s edges. The teacup
              we&rsquo;ll build below works this way. The cup is{" "}
              <code>relative</code>, so its handle and saucer can sit exactly
              where I put them.
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
              Every element comes with two extra shapes for free, its{" "}
              <code>::before</code> and <code>::after</code> pseudo-elements.
              Give them <code>content: &quot;&quot;</code>, a size and a
              color, and they behave like extra divs you never had to write.
              In the teacup we&rsquo;ll build below, <code>::before</code>{" "}
              draws the handle and <code>::after</code> draws the saucer.
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
              around. Don&rsquo;t worry if this doesn&rsquo;t click yet.
              We&rsquo;ll use both of them when we{" "}
              <TextLink href="#lets-build-a-teacup">build a teacup</TextLink>{" "}
              below.
            </p>
          </PostSubsection>

          <PostSubsection title="box-shadow" variant="code">
            <p>
              Shadows add depth, but <code>box-shadow</code> is also a sneaky
              drawing tool. You can stack as many as you like, separated by
              commas, and a shadow with no blur draws a crisp copy of your
              shape. The{" "}
              <TextLink href="#try-it-out">rainbow in the playground</TextLink>{" "}
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
            <p>Once the basics feel comfortable, try these next.</p>
            <ul className="dwc-list">
              <li>
                <code>border</code> for outlines, plus the classic trick of
                building{" "}
                <TextLink href="/css-shapes#triangle">triangles</TextLink>{" "}
                out of borders.
              </li>
              <li>
                <code>overflow: hidden</code> to crop anything that spills
                outside a shape.
              </li>
              <li>
                <code>@keyframes</code> for animation. It&rsquo;s what makes the
                steam rise from the teacup on my{" "}
                <TextLink href="/">homepage</TextLink>.
              </li>
            </ul>
          </PostSubsection>
        </PostSection>

        <PostSection id="lets-build-a-teacup" title="Let’s build a teacup">
          <p>
            Time to put the toolkit to work. We&rsquo;ll draw a little purple
            teacup in three steps, and the whole thing is just one div.
          </p>
          <CodeBlock code={`<div class="teacup"></div>`} />

          <PostSubsection title="Step 1 · The cup">
            <p>
              Give the div a size, a dark outline and a color. Rounding only
              the bottom two corners with <code>border-radius</code> turns a
              plain box into a cup. I keep the colors in variables at the top
              so the whole teacup is easy to recolor later.
            </p>
            <DemoStrip>
              <DemoTile label="A purple cup shape with a dark outline" caption=".teacup">
                <TeacupDemo step={1} />
              </DemoTile>
            </DemoStrip>
            <CodeBlock code={TEACUP_CUP} />
          </PostSubsection>

          <PostSubsection title="Step 2 · The handle">
            <p>
              The handle is the cup&rsquo;s <code>::before</code>. A thick
              border with <code>border-radius: 50%</code> makes a ring, and{" "}
              <code>position: absolute</code> places it on the right side.{" "}
              <code>z-index: -1</code> tucks it behind the cup so only the
              outer half shows. The two box-shadows draw its outline, one
              outside the ring and one inside.
            </p>
            <DemoStrip>
              <DemoTile label="The same cup with a ring-shaped handle on its right side" caption=".teacup::before">
                <TeacupDemo step={2} />
              </DemoTile>
            </DemoStrip>
            <CodeBlock code={TEACUP_HANDLE} />
          </PostSubsection>

          <PostSubsection title="Step 3 · The saucer">
            <p>
              The saucer is the cup&rsquo;s <code>::after</code>, a long,
              flat, rounded bar pinned to the bottom. A negative{" "}
              <code>left</code> value lets it stick out past both sides of
              the cup.
            </p>
            <DemoStrip>
              <DemoTile label="The finished teacup with a handle and a saucer" caption=".teacup::after">
                <TeacupDemo step={3} />
              </DemoTile>
            </DemoStrip>
            <CodeBlock code={TEACUP_SAUCER} />
          </PostSubsection>

          <p>
            That&rsquo;s it! One div and two pseudo-elements. Try copying the
            code into the{" "}
            <TextLink href="#try-it-out">playground below</TextLink> or a new
            CodePen and giving it your own colors.
          </p>
        </PostSection>

        <PostSection
          id="trial-and-error"
          title="Tips from trial and error"
        >
          <p>
            Get ready for some serious trial and error. Drawing with code takes <em>a lot</em> of patience. I’ve lost entire evenings to details smaller than my thumbnail... Stick with it! These habits made it hurt much less.
          </p>

          <PostSubsection title="Sketch it first">
            <p>
              Before writing any code, draw your idea on paper and break it
              into simple shapes, like a circle here, a rectangle there and
              a half-circle on top. Each shape becomes a div. It saves a lot of
              guesswork once you start coding, and you&rsquo;ll know exactly
              which piece to build next.
            </p>
          </PostSubsection>

          <PostSubsection title="Outline everything">
            <p>
              I&rsquo;d constantly lose track of where a shape actually was. Poof! Now
              I add <code>{"* { outline: 1px solid red; }"}</code> while I build, and
              every shape shows up. Use <code>outline</code> instead of{" "}
              <code>border</code>, because an outline doesn&rsquo;t take up space and
              won&rsquo;t shift anything around.
            </p>
          </PostSubsection>

          <PostSubsection title="Make dev tools your best friend">
            <p>
              Right-click your drawing in the browser, choose{" "}
              <strong>Inspect</strong>, and edit values right in the{" "}
              <strong>Styles</strong> panel. You&rsquo;ll see shapes move as you
              type. Click a value like <code>180px</code> and press the arrow keys to
              nudge it by 1, or hold Shift to nudge by 10. Once it looks right, copy
              the value back into your CSS.
            </p>
          </PostSubsection>

          <PostSubsection title="Keep your colors in variables">
            <p>
              I change my mind about colors constantly, so I name each one once, like{" "}
              <code>--handle: #F472B6;</code>, and use <code>var(--handle)</code>{" "}
              everywhere it shows up. Swapping in a new palette means editing a few
              lines in one spot instead of hunting through my whole stylesheet.
              It&rsquo;s how I tried a dozen color combos on my homepage knick-knacks
              without losing my mind.
            </p>
          </PostSubsection>

          <PostSubsection title="Watch out for sneaky borders">
            <p>
              By default, a border adds to an element’s size, so a 180px circle with a 3px border is really 186px wide. Add <code>box-sizing: border-box</code> and the border stays inside the size you set.
            </p>
          </PostSubsection>

        </PostSection>

        <PostSection id="try-it-out" title="Try it out">
          <p>
            Your turn! Change any value in the CSS below and watch the rainbow update as you type.
          </p>
          <Practice />
        </PostSection>

        <PostSection id="keep-going" title="Keep going">
          <p>
            CSS art started as a little side project, and it ended up teaching me more about CSS than anything else I’ve built. Positioning, pseudo-elements, gradients and animation all clicked once I had something I actually wanted to make. It’s made me a better frontend engineer, and it’s still the most fun I have with code.
          </p>
          <p>
            I hope you enjoy the challenge of bringing your designs to life
            with HTML and CSS. Look out for more CSS art content and share your
            creations with the frontend community on CodePen. Happy coding!
          </p>

          <PostSubsection title="Where to go next">
            <ul className="dwc-list">
              <li>
                <TextLink href="/css-shapes">CSS Shapes</TextLink>, my step-by-step
                guide to twelve basic shapes, from circles to stars.
              </li>
              <li>
                <TextLink href="https://codepen.io/annampawl">CodePen</TextLink>, for
                more CSS art and little experiments, with the code right there to poke
                at.
              </li>
              <li>
                <TextLink href="https://cssbattle.dev">CSS Battle</TextLink>, daily
                puzzles where you recreate a target image with CSS.
              </li>
              <li>
                <TextLink href="https://developer.mozilla.org/en-US/docs/Web/CSS">
                  MDN&rsquo;s CSS reference
                </TextLink>
                , for looking up any property when you get stuck.
              </li>
            </ul>
          </PostSubsection>
        </PostSection>

      </PostLayout>
    </main>
  );
}
