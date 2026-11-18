"use client";

import Input from "../../../components/ui/Input";
import { FieldHint, FieldLabel } from "../../../components/ui/FormField";
import Anatomy, { type AnatomyPart } from "../../../components/ui/Anatomy";
import "./search-sample.css";

const PARTS: AnatomyPart[] = [
  { n: 1, name: "Label", desc: "Tells you what you’re searching.", el: ".field-label" },
  { n: 2, name: "Input", desc: "Where you type your search.", el: ".input-search" },
  {
    n: 3,
    name: "Results count",
    desc: "Shows (and announces) how many matched.",
    el: ".ls-count",
  },
  { n: 4, name: "List", desc: "Shows the matches.", el: ".ls-list" },
  {
    n: 5,
    name: "Empty state",
    desc: "Says when nothing matches, so it doesn’t look like something broke.",
    el: ".ls-empty",
  },
];

const EMPTY = 5;
const PLACEHOLDER = ["deeppink", "hotpink"];

function Example({ query, matches }: { query: string; matches: string[] }) {
  return (
    <div className="ls-demo">
      <FieldLabel htmlFor="anatomy-search">Search colors</FieldLabel>
      <Input id="anatomy-search" variant="search" value={query} readOnly tabIndex={-1} />
      <FieldHint className="ls-count">
        {matches.length} {matches.length === 1 ? "color" : "colors"}
      </FieldHint>
      {/* The list stays in place (hidden when empty) so the picture keeps
          the same height and the parts list below doesn't jump. */}
      <div className="ls-results">
        <ul className="ls-list" style={{ visibility: matches.length ? undefined : "hidden" }}>
          {(matches.length ? matches : PLACEHOLDER).map((color) => (
            <li key={color} className="ls-item">
              <span className="ls-swatch" style={{ background: color }} />
              {color}
            </li>
          ))}
        </ul>
        {matches.length === 0 && (
          <FieldHint className="ls-empty">No colors called “{query}”… yet.</FieldHint>
        )}
      </div>
    </div>
  );
}

export default function SearchAnatomy() {
  return (
    <Anatomy
      className="search-anatomy"
      parts={PARTS}
      defaultPart={2}
      caption="A live search with “pink” typed in, showing two matching colors. Its parts are described in the list below."
      figure={(active) =>
        active === EMPTY ? (
          <Example query="blurple" matches={[]} />
        ) : (
          <Example query="pink" matches={PLACEHOLDER} />
        )
      }
    />
  );
}
