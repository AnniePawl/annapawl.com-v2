import PostLayout, { PostSection, PostSubsection } from "../../components/layout/PostLayout/PostLayout";
import CodeBlock from "../../components/ui/CodeBlock";
import Callout from "../../components/ui/Callout";
import HomeLogo from "../../components/ui/HomeLogo";
import TextLink from "../../components/ui/TextLink";
import PlateStage from "./_components/PlateStage";
import plates from "./_data/rejected-plates.json";

const IMPORT_DATA = `import plates from "./_data/rejected-plates.json";

// [{ date: "2010-10-02", plate: "00DADDY" }, …]`;

const PLATE_GRADIENT = `.plate {
  height: 250px;
  width: 500px;
  background-image: linear-gradient(
    to bottom,
    var(--plate-color2) 0 25%,
    var(--plate-color) 25% 27%,
    var(--plate-color2) 27% 28%,
    var(--plate-color) 28% 93%,
    var(--plate-color2) 93% 94%,
    var(--plate-color) 94% 96%,
    var(--plate-color2) 96%
  );
  border-radius: 10px;
}`;

const PLATE_EMBOSS = `#plate-num {
  font-size: 90px;
  font-family: "Dosis", sans-serif;
  color: var(--plate-color2);
  text-shadow:
    3px 2px 2px rgb(138, 89, 12),
    -3px -2px 2px rgba(255, 255, 255, 0.7);
}`;

const PLATE_BOLTS = `h2::before {
  content: "";
  position: absolute;
  height: 10px;
  width: 40px;
  border-radius: 5px;
  background-color: white;
  box-shadow: inset 2px 2px 2.5px rgb(18, 18, 18);
  transform: translateY(0.6em) translateX(-1em);
}`;

const PLATE_SCALE = `/* In my CodePen */
#plate-num {
  font-size: 90px;
}

/* On this page */
.plate {
  width: 100%;
  container-type: inline-size;
}

.plate-number {
  font-size: 18cqi; /* 90px on a 500px plate */
}`;

const PICK_STATE = `const [currentPlate, setCurrentPlate] = useState({
  date: "",
  plate: "LILB00TY",
});`;

const PICK_RANDOM = `function pickNewPlate() {
  let next = currentPlate;
  // Keep picking until it's different from the one showing
  while (next.plate === currentPlate.plate) {
    next = plates[Math.floor(Math.random() * plates.length)];
  }
  setCurrentPlate(next);
}`;

const PICK_ANNOUNCE = `<p className="sr-only" aria-live="polite">
  {currentPlate.date && \`Rejected plate: \${currentPlate.plate}\`}
</p>`;

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
        title="Rejected Plates"
        lede={
          <>
            They didn’t make it onto the road,{" "}
            <span className="post-header-lede-muted">but they made it here.</span>
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
          { id: "intro", label: "Intro", tone: "marigold-bold" },
          { id: "the-data", label: "The data", tone: "blue-bold" },
          { id: "the-plate", label: "Drawing the plate", tone: "marigold-bold" },
          { id: "random-plate", label: "Picking a plate", tone: "blue-bold" },
          { id: "patterns", label: "Patterns in the data", tone: "marigold-bold" },
          { id: "keep-going", label: "Keep going", tone: "blue-bold" },
        ]}
      >
        {/* NY LICENSE PLATE */}
        <PlateStage plates = {plates}/>

        <PostSection id="intro" title="Intro">
          <p>One person’s dream plate, the DMV’s hard pass!</p>
          <p>
            My camera roll has a growing collection of license plates I’ve
            snapped because they made me chuckle. So stumbling onto a dataset
            of vanity plates rejected by the New York DMV felt a bit like
            finding the archives of a very niche hobby. As a New Yorker, I
            couldn’t leave this one alone, so I rebuilt the plate in pure CSS
            and gave the rejects their moment.
          </p>
          <p>
            Some are clever, some are a stretch, and some… well, I’m with the
            DMV on those. I’m a little in awe of the creativity, and of the
            lengths people will go to squeeze something questionable into eight
            characters.
          </p>
          <p>
            Hit the button to meet another hopeful. Below, I’ll walk through how
            I built it, and where the DMV draws the line.
          </p>
        </PostSection>

        <PostSection id="the-data" title="The data">
          <p>
            The plates come from WNYC’s Data News team. In 2014 they filed a
            Freedom of Information (FOIL) request with the New York DMV and got
            back every personalized plate application from October 2010 to
            September 2014. They published it on GitHub as{" "}
            <TextLink href="https://github.com/datanews/license-plates">
              datanews/license-plates
            </TextLink>
            , and wrote{" "}
            <TextLink href="https://wnyc.org/story/new-yorkers-vanity-license-plates/">
              a fun story about what New Yorkers put on their plates
            </TextLink>
            .
          </p>
          <p>
            The rejected list is short and sweet: 1,646 plates, each with the
            date someone applied. The repo also has the approved plates and the
            “Red Guide,” the DMV’s list of plates that get turned down
            automatically.
          </p>
          <PostSubsection title="Getting it into my site">
            <p>
              The data is a CSV with two columns, <code>date</code> and{" "}
              <code>plate</code>. I saved a copy in my project, so the page
              doesn’t depend on someone else’s repo, and converted it to JSON
              once with a tiny Node script. Now the page imports it like any
              other file:
            </p>
            <CodeBlock code={IMPORT_DATA} />
          </PostSubsection>
          <Callout eyebrow="Heads-up" tone="blue" className="my-6 max-w-none">
            These are real rejected applications, so some contain explicit or
            offensive language.
          </Callout>
        </PostSection>

        <PostSection id="the-plate" title="Drawing the plate">
          <p>
            The plate is one <code>div</code> with three lines of text inside:
            the state, the plate number, and the motto. Everything else is CSS.
          </p>
          <PostSubsection title="Stripes from one gradient">
            <p>
              My plate is 500 by 250 pixels, the same 2:1 shape as a real 12 by
              6 inch plate. The navy bands and thin pinstripes aren’t separate
              elements. They’re one <code>linear-gradient</code> with hard
              stops, where each color starts exactly where the last one ends.
            </p>
            <CodeBlock code={PLATE_GRADIENT} />
          </PostSubsection>
          <PostSubsection title="Pressed-in letters">
            <p>
              Real plate letters are stamped into the metal. Two text shadows
              fake it: a dark one down and to the right, and a light one up and
              to the left. Together they read as a raised edge catching the
              light.
            </p>
            <CodeBlock code={PLATE_EMBOSS} />
          </PostSubsection>
          <PostSubsection title="Bolt slots">
            <p>
              The four little bolt slots are{" "}
              <TextLink href="/field-notes#before-after">
                <code>::before</code> and <code>::after</code>
              </TextLink>{" "}
              on the state and motto headings, so they don’t need any extra
              markup. An inset shadow makes them look cut into the plate, and
              a little <code>transform</code> nudges each one into place.
            </p>
            <CodeBlock code={PLATE_BOLTS} />
          </PostSubsection>
          <PostSubsection title="One plate, any size">
            <p>
              In my CodePen, the plate is a fixed 500 by 250 pixels. On this
              page, I wanted it to fill the column instead, which meant the
              pixel sizes inside it had to grow and shrink with it. So for this
              page, I swapped them for <code>cqi</code> units, a percentage of
              the plate’s width, and made the plate a{" "}
              <TextLink href="/field-notes#container-queries">size container</TextLink>
              . Bigger plate, bigger letters.
            </p>
            <CodeBlock code={PLATE_SCALE} />
          </PostSubsection>
        </PostSection>

        <PostSection id="random-plate" title="Picking a plate">
          <PostSubsection title="Remember the current plate">
            <p>
              The plate on screen lives in state. It starts as LILB00TY instead
              of a random plate, so the server and the browser agree on what to
              show first.
            </p>
            <CodeBlock code={PICK_STATE} />
          </PostSubsection>
          <PostSubsection title="Pick a new one">
            <p>
              <code>Math.random()</code> gives a decimal between 0 and 1.
              Multiplying by the number of plates and rounding down turns it
              into a spot in the list. The loop keeps picking until it lands on
              a different plate, so the button always shows something new.
            </p>
            <CodeBlock code={PICK_RANDOM} highlight={["plates.length"]} />
            <p>
              Fun fact: I first wrote <code>PlateStage.length</code> instead of{" "}
              <code>plates.length</code>. Functions have a length too (how many
              arguments they take), so it was always 1, the button only ever
              picked the first plate, and the loop never ended. One word, one
              frozen page.
            </p>
          </PostSubsection>
          <PostSubsection title="Announce it">
            <p>
              Sighted visitors see the new plate right away. For screen reader
              users, a hidden live region reads it out after each click. It
              stays empty until the first click, so nothing is announced when
              the page loads.
            </p>
            <CodeBlock code={PICK_ANNOUNCE} highlight={['aria-live="polite"']} />
          </PostSubsection>
        </PostSection>

        <PostSection id="patterns" title="Patterns in the data">
          <p>
            Once the plates were in a list, I couldn’t resist poking around.
            A few things stood out:
          </p>
          <ul className="my-4 grid list-disc gap-2 pl-5 text-[length:var(--text-md)] leading-[var(--leading-relaxed)]">
            <li>
              <b>Spring is rejection season.</b> March and April each saw about
              200 rejections, twice as many as December.
            </li>
            <li>
              <b>Numbers do a lot of sneaking.</b> 58% of rejected plates
              include a number, often standing in for a letter: 0 for O, 3 for
              E, 8 for B.
            </li>
            <li>
              <b>Six is the sweet spot.</b> Six characters is the most common
              length, but 453 people used all eight.
            </li>
            <li>
              <b>Some people don’t give up.</b> BAD2SS was rejected three times.
            </li>
          </ul>
          <p>TODO: a chart of rejections by month.</p>
        </PostSection>

        <PostSection id="keep-going" title="Keep going">
          <p>
            A few ideas I’d love to try next:
          </p>
          <ul className="my-4 grid list-disc gap-2 pl-5 text-[length:var(--text-md)] leading-[var(--leading-relaxed)]">
            <li>
              <b>Would your plate get rejected?</b> Type a plate and check it
              against the DMV’s Red Guide.
            </li>
            <li>
              <b>Approved or rejected?</b> A guessing game using the approved
              plates from the same dataset.
            </li>
            <li>
              <b>Other states.</b> California’s data includes what applicants
              said their plate meant, and what reviewers thought it meant.
            </li>
          </ul>
          <p>Where the data comes from, if you want to dig in yourself:</p>
          <ul className="my-4 grid list-disc gap-2 pl-5 text-[length:var(--text-md)] leading-[var(--leading-relaxed)]">
            <li>
              <TextLink href="https://github.com/datanews/license-plates">
                datanews/license-plates
              </TextLink>
              , the New York data from WNYC.
            </li>
            <li>
              <TextLink href="https://github.com/veltman/ca-license-plates">
                veltman/ca-license-plates
              </TextLink>
              , California applications flagged for review, 2015 to 2016.
            </li>
          </ul>
        </PostSection>
      </PostLayout>
    </main>
  );
}
