"use client";

import { Squirrel } from "lucide-react";
import Accordion, { type AccordionItem } from "../../../../components/ui/Accordion";
import Anatomy, { type AnatomyPart } from "../../../../components/ui/Anatomy";
import "./anatomy.css";

// one item open
const ITEMS: AccordionItem[] = [
  {
    question: "Are squirrels secretly tiny gardeners?",
    answer: "Yes! Squirrels sometimes forget where they buried their nuts. The forgotten seeds can eventually sprout into new plants and trees.",
  },
]

const PARTS: AnatomyPart[] = [
  {
    n: 1,
    name: "Container",
    desc: "Groups the accordion items and optional title.",
    el: ".accordion",
  },
  {
    n: 2,
    name: "Title",
    desc: "Introduces the accordion and its contents.",
    el: ".accordion-title",
    optional: true,
  },
  {
    n: 3,
    name: "Item",
    desc: "Pairs one header with its associated panel.",
    el: ".accordion-item",
  },
  {
    n: 4,
    name: "Heading",
    desc: "Gives each item a place in the page outline and holds its button.",
    // The heading that wraps the button, not the button itself.
    el: ".accordion-heading",
    detail: (
      <>
        Wrap the button in a heading, like <code>&lt;h3&gt;</code>, so
        screen-reader users can jump between items. Pick the level that fits
        the page, and keep the button as the only thing inside it.
      </>
    ),
  },
  {
    n: 5,
    name: "Button",
    desc: "The trigger. Expands or collapses its panel, and holds the number, label and icon.",
    el: ".accordion-row",
  },
  {
    n: 6,
    name: "Number",
    desc: "Identifies the item with an index and section-colored marker.",
    el: ".accordion-number",
    optional: true,
  },
  {
    n: 7,
    name: "Label",
    desc: "Names the button and describes what its panel contains.",
    el: ".accordion-question",
  },
  {
    n: 8,
    name: "Icon",
    desc: "Changes from a plus to a minus to reflect the item’s state.",
    el: ".accordion-control",
    optional: true,
  },
  {
    n: 9,
    name: "Divider",
    desc: "Adds visual separation between the header and expanded panel.",
    el: ".accordion-answer",
    line: true,
    optional: true,
  },
  {
    n: 10,
    name: "Panel",
    desc: "Contains the content revealed when its button is expanded.",
    el: ".accordion-panel",
  },
]

// Renders the real Accordion, so any change to the component shows up
// here too.
export default function AccordionAnatomy() {
  return (
    <Anatomy
      parts={PARTS}
      defaultPart={1}
      caption="An open accordion item. Its parts are described in the list below."
      figure={() => (
        <Accordion title="Squirrel Secrets" titleIcon={Squirrel} items={ITEMS} defaultOpenId="0" />
      )}
    />
  );
}
