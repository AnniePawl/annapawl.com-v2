"use client";

import { useEffect, useRef, useState } from "react";
import ColorSwatchesGrid from "./foundations/colors/ColorSwatchesGrid";
import ButtonStates from "./components/button/buttonstates";
import RadiusSection from "./foundations/radius/page";
import TypographyPage from "./foundations/typography/page";

import type { LucideIcon } from "lucide-react";
import {
  LayoutGrid,
  Palette,
  CaseSensitive,
  Ruler,
  Radius,
  Layers,
  Accessibility,
  SquareMousePointer,
  CreditCard,
  PanelsTopLeft,
  BadgeCheck,
  MessageSquareText,
  Brain
} from "lucide-react";

type NavSection = {
  id: string;
  title: string;
  subheading?: string;
  description?: string;
  icon: LucideIcon;
};

const SECTIONS: NavSection[] = [
  { id: "overview", title: "Overview", icon: LayoutGrid },
  { id: "colors", title: "Colors", icon: Palette },
  { id: "typography", title: "Typography", icon: CaseSensitive },
  { id: "spacing", title: "Spacing", icon: Ruler },
  { id: "radius", title: "Radius", icon: Radius },
  { id: "elevation", title: "Elevation", icon: Layers },
  { id: "accessibility", title: "Accessibility", icon: Accessibility },
  { id: "buttons", title: "Buttons", icon: SquareMousePointer },
  { id: "cards", title: "Cards", icon: CreditCard },
  { id: "modals", title: "Modals", icon: PanelsTopLeft },
  { id: "badges", title: "Badges", icon: BadgeCheck },
  { id: "tooltips", title: "Tooltips", icon: MessageSquareText },
  {id: "appraoch", title: "Approach", icon: Brain }
];

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

/**
 * NOTE: Add this to globals.css (or equivalent) to hide the scrollbar:
 *
 * .no-scrollbar::-webkit-scrollbar { display: none; }
 * .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
 */

export default function DesignSystemOverview() {
  const [activeId, setActiveId] = useState(SECTIONS[0].id);

  // Scroll container for the right side
  const mainRef = useRef<HTMLElement | null>(null);

  // Section elements by id
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    // Cache section nodes
    SECTIONS.forEach(({ id }) => {
      sectionRefs.current[id] = document.getElementById(id);
    });

    const rootEl = mainRef.current;
    if (!rootEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]?.target?.id) setActiveId(visible[0].target.id);
      },
      {
        root: rootEl,
        rootMargin: "-20% 0px -70% 0px",
        threshold: [0.01, 0.1],
      }
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = sectionRefs.current[id];
    const rootEl = mainRef.current;
    if (!el || !rootEl) return;

    // Scroll within the right pane (not the window)
    rootEl.scrollTo({
      top: el.offsetTop - 24, // tweak if you want more/less top padding
      behavior: "smooth",
    });

    setActiveId(id);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[250px_1fr] h-[calc(100dvh-6rem)]">
          {/* Sidebar Navigation (fixed-in-place pane) */}
          <aside className="hidden lg:block h-full">
            {/* Gradient border wrapper (keep your look) */}
            <div className="h-full rounded-2xl p-[1.5px]">
              {/* Inner card */}
              <div className="h-full rounded-xl bg-lime-200 p-4  text-zinc-900">
                <SidebarNav
                  sections={SECTIONS}
                  activeId={activeId}
                  onSelect={scrollTo}
                />
              </div>
            </div>
          </aside>

          {/* Content (scrollable pane) */}
          <main
            ref={mainRef}
            className="h-full overflow-y-auto space-y-20 pr-2 no-scrollbar"
          >
            {SECTIONS.map((section) => (
              <Section
                key={section.id}
                id={section.id}
                heading={section.title}
                subheading={section.subheading}
                icon={section.icon}
              >
                {section.id === "overview" && (
                  <>
                    <p>
                      Welcome to my design system documentation. It captures the foundational
                      visual decisions behind my portfolio UI and serves as a living record
                      of how I think, learn, and evolve as a designer and developer.
                    </p>
                    <p>
                      I’m a minimalist–maximalist (somehow). I’m drawn to crisp, simple structure, punctuated with bold, playful, expressive moments. I’m motivated by color, texture, and visual delight—the result is a system that feels intentionally restrained yet vibrant, using joyful color to reflect energy, creativity, and emotion without overwhelming the experience.

                    </p>
                    <p>
                      This balance between clarity and play is central to how I design. The system is imperfect and always in progress: a space for exploration, iteration, and learning. It reflects a belief that good design can be professional without being sterile, expressive without being loud, and human at every layer.
                    </p>
                  </>
                )}

                {section.id === "colors" && (
                  <>
                    <p>
                      These are the colors that make me happy.

                      The palette spans a wide range of hues— not because the interface needs them all at once, but because different moments across the site call for different emotional tones. Color here is used as a storytelling tool: to create warmth, guide attention, and make the experience feel alive.

                      Each hue is intentionally softened and slightly muted, allowing it to be used generously without overwhelming the interface. There’s an element of playfulness throughout, but it’s grounded—meant to invite curiosity and delight rather than visual fatigue.
                    </p>

                    <ColorSwatchesGrid />
                    {/* <section aria-labelledby="token-strategy" className="space-y-4">
                      <h2
                        id="token-strategy">
                        Token Strategy
                      </h2>
                      <p className="text-sm leading-6 text-zinc-700">
                        Instead of relying primarily on semantic labels like{" "}
                        <span className="font-medium text-zinc-900">success</span>,{" "}
                        <span className="font-medium text-zinc-900">warning</span>, or{" "}
                        <span className="font-medium text-zinc-900">danger</span>, this system
                        organizes color tokens by <span className="font-medium text-zinc-900">
                          intensity
                        </span>
                        . This choice keeps color flexible and expressive, rather than prescriptive,
                        and better supports a personal, exploratory site like this one.
                      </p>

                      <p className="text-sm leading-6 text-zinc-700">
                        By separating <span className="font-medium text-zinc-900">how a color looks</span>{" "}
                        from <span className="font-medium text-zinc-900">what it means</span>, the
                        system is easier to remix creatively and adapt across different contexts and
                        moods.
                      </p>

                      <dl className="grid gap-3 sm:grid-cols-2">
                        <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
                          <dt className="text-xs font-semibold uppercase tracking-wide text-zinc-900">
                            soft-*
                          </dt>
                          <dd className="mt-2 text-sm leading-6 text-zinc-700">
                            Lower contrast, ambient tones designed for backgrounds, surfaces, and
                            subtle accents.
                          </dd>
                        </div>

                        <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
                          <dt className="text-xs font-semibold uppercase tracking-wide text-zinc-900">
                            bold-*
                          </dt>
                          <dd className="mt-2 text-sm leading-6 text-zinc-700">
                            Higher contrast, expressive tones intended for emphasis, interaction
                            states, and moments that need energy.
                          </dd>
                        </div>
                      </dl>

                      <p className="text-sm leading-6 text-zinc-700">
                        Semantic colors still exist where clarity is required, but they’re layered
                        on top of this foundation rather than defining it. The result is a color
                        system that prioritizes{" "}
                        <span className="font-medium text-zinc-900">emotional warmth</span>,{" "}
                        <span className="font-medium text-zinc-900">flexibility</span>, and{" "}
                        <span className="font-medium text-zinc-900">joy</span>—without sacrificing
                        structure or usability.
                      </p>
                    </section> */}
                  </>
                )}

                {section.id === "typography" && (
                  <>
                    <p>Inter is used as the primary typeface across the system.</p>
                    <TypographyPage />
                  </>
                )}

                {section.id === "radius" && (
                  <>
                    <RadiusSection />
                  </>
                )}
                     {section.id === "buttons" && (
                  <>
                  <ButtonStates />
                  </>
                )}

                {[
                  "spacing",
                  "elevation",
                  "accessibility",
                  "buttons",
                  "cards",
                  "modals",
                  "badges",
                  "tooltips",
                ].includes(section.id) && (
                    <p>Contrast, focus states, and readable typography are prioritized.</p>
                  )}
              </Section>
            ))}
          </main>
        </div>
      </div>
    </div>
  );
}

function SidebarNav({
  sections,
  activeId,
  onSelect,
}: {
  sections: NavSection[];
  activeId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <nav className="h-full">
      <ul className="space-y-1 md:space-y-2">
        {sections.map((section) => {
          const Icon = section.icon;

          return (
            <li key={section.id}>
              <button
                onClick={() => onSelect(section.id)}
                className={cx(
                  "flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-xs md:text-sm transition",
                  activeId === section.id
                    ? "bg-violet-200 font-medium text-zinc-900"
                    : "text-zinc-900 hover:bg-violet-100 hover:text-zinc-900"
                )}
              >
                <Icon
                  className={cx(
                    "h-4 w-4",
                    activeId === section.id ? "text-violet-600" : "text-lime-600"
                  )}
                />
                <span>{section.title}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function Section({
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
  return (
    <section id={id} className="scroll-mt-24">
      {/* Section header */}
      <div className="flex flex-col">
        <h1 className="flex items-center gap-3">
          <Icon className="h-8 w-8 text-zinc-900" aria-hidden="true" />
          {heading}
        </h1>
        {subheading ? <h2 className="mb-5">{subheading}</h2> : null}
      </div>

      {/* Section body */}
      <div
        className={cx(
          "ml-3 border-l border-zinc-200 pl-6",
          "[&_p]:max-w-3xl",
          "[&_p]:text-base",
          "[&_p]:leading-relaxed",
          "[&_p]:text-zinc-600",
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
