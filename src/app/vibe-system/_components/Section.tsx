import type { LucideIcon } from "lucide-react";
import { cx } from "../../../lib/cx";
import { SECTIONS } from "../_data/sections";

// Cycles through the "soft" half of the brand palette so every section
// card gets a distinct, pastel-light background — light enough that dark
// text stays readable on all of them, unlike the old fixed indigo-soft
// heading color, which would've clashed against some of these once a
// background was involved.
const SOFT_COLORS = [
  "--pink-soft",
  "--mint-soft",
  "--orange-soft",
  "--yellow-soft",
  "--lime-soft",
  "--mint-soft",
  "--green-soft",
  "--sky-soft",
  "--blue-soft",
  "--indigo-soft",
  "--violet-soft",
];

const BOLD_COLORS =[
  "--pink-bold",
  "--mint-bold",
  "--orange-bold",
  "--yellow-bold",
  "--lime-bold",
  "--mint-bold",
  "--green-bold",
  "--sky-bold",
  "--blue-bold",
  "--indigo-bold",
  "--violet-bold",

]

function colorForSection(id: string) {
  const index = SECTIONS.findIndex((s) => s.id === id);
  const safeIndex = index === -1 ? 0 : index;
  return SOFT_COLORS[safeIndex % SOFT_COLORS.length];
}



export default function Section({
  id,
  heading,
  subheading,
  icon: Icon,
  description,
  children,
}: {
  id: string;
  heading: string;
  subheading?: string;
  icon: LucideIcon;
  description?: string;
  children: React.ReactNode;
}) {
  const bgToken = colorForSection(id);

  return (
    <section
      id={id}
      className="scroll-mt-24 rounded-2xl p-8"
      style={{ background: `var(${bgToken})` }}
    >
      <div className="flex flex-col">
        <h1
          className="h-display flex items-center gap-3 text-zinc-900"
        >
          <Icon className="h-8 w-8 text-zinc-900" aria-hidden="true" />
          {heading}
        </h1>
        {subheading ? (
          <h2 className="mb-5 text-zinc-800">{subheading}</h2>
        ) : null}
      </div>

      <div
        className={cx(
          "ml-3 border-l border-zinc-900/15 pl-6",
          "[&_p]:max-w-4xl",
          "[&_p]:text-base",
          "[&_p]:leading-relaxed",
          "[&_p]:text-zinc-700",
          "[&_p]:mb-6",
          "[&_p:last-child]:mb-0"
        )}
      >
        {description && <p>{description}</p>}
        {children}
      </div>
    </section>
  );
}
