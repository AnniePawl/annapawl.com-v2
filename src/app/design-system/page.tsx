"use client";

import { useEffect, useRef, useState } from "react";
import ColorSwatchesGrid from "./components/ColorSwatchesGrid";
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
  MessageSquareText

} from "lucide-react";

type NavSection = {
  id: string;
  title: string;
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
];

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

export default function DesignSystemOverview() {
  const [activeId, setActiveId] = useState(SECTIONS[0].id);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    SECTIONS.forEach(({ id }) => {
      sectionRefs.current[id] = document.getElementById(id);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]?.target?.id) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: [0.01, 0.1] }
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveId(id);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <header className="mb-16">
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-900">
            AP Design System
          </h1>
          <p className="text-zinc-600 pt-1">Approachable, practical, and a little playful.</p>
        </header>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[260px_1fr]">
          {/* Sidebar */}
          <aside className="lg:sticky lg:top-8 lg:h-fit">
            {/* Gradient border wrapper */}
            <div
              className="rounded-2xl p-[1.5px]"
              style={{
                background: "var(--ds-signature-gradient)",
              }}
            >
              {/* Inner card */}
              <nav className="rounded-2xl bg-white p-4 shadow-sm">
                <ul className="space-y-1">
                  {SECTIONS.map((section) => {
                    const Icon = section.icon;

                    return (
                      <li key={section.id}>
                        <button
                          onClick={() => scrollTo(section.id)}
                          className={cx(
                            "flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-xs  md:text-sm transition",
                            activeId === section.id
                              ? "bg-zinc-100 font-medium text-zinc-900"
                              : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
                          )}
                        >
                          <Icon
                            className={cx(
                              "h-4 w-4",
                              activeId === section.id ? "text-zinc-900" : "text-zinc-500"
                            )}
                          />
                          <span>{section.title}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </aside>


          {/* Content */}
          <main className="space-y-20">
            {SECTIONS.map((section) => (
              <Section
                key={section.id}
                id={section.id}
                title={section.title}
                icon={section.icon}
              >
                {section.id === "overview" && (
                  <p>
                    This design system documents the foundational visual decisions behind my portfolio UI and acts as a living expression of how I think about design.

                    My style blends minimal structure with expressive moments. I’m drawn to calm, readable layouts and neutral foundations, but I’m equally motivated by color, texture, and visual delight. The result is a system that feels restrained yet vibrant—anchored in soft blacks and whites, punctuated by bold, joyful color.

                    These choices are intentional. The colors are not subtle, but they’re personal—chosen to reflect energy, creativity, and emotion without overwhelming the experience. This balance between clarity and play is central to how I design: thoughtful, human-centered, and quietly expressive.
                  </p>
                )}

                {section.id === "colors" && (
                  <>
                    <p >
                      The colors are not subtle, but they’re personal—chosen to reflect energy, creativity, and emotion in a way that feels joyful rather than loud. Paired with soft blacks, whites, and generous spacing, these brighter moments bring warmth and personality to the system. The goal is balance: expressive color that enhances the experience and makes the interface genuinely enjoyable to spend time in.
                    </p>
                    <ColorSwatchesGrid />
                  </>
                )}

                {section.id === "typography" && (
                  <>
                    <p>
                      Inter is used as the primary typeface across the system.
                    </p>
                    <TypographyPage />
                  </>
                )}

                {["spacing", "radius", "elevation", "accessibility", "buttons", "cards", "modals", "badges", "tooltips"].includes(
                  section.id
                ) && (
                    <p >
                      Contrast, focus states, and readable typography are prioritized.
                    </p>
                  )}
              </Section>
            ))}
          </main>

        </div>
      </div>
    </div>
  );
}

function Section({
  id,
  title,
  icon: Icon,
  description,
  children,
}: {
  id: string;
  title: string;
  icon: LucideIcon;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">

      {/* Section header */}
      <h2 className="flex items-center gap-3">
        <Icon className="h-5 w-5 text-zinc-500" aria-hidden="true" />
        <span>{title}</span>
      </h2>

      {/* Section body */}
      <div className="ml-3 border-l border-zinc-200 pl-6 ml-3 border-l border-zinc-200 pl-6
          [&_p]:max-w-2xl
          [&_p]:text-base
          [&_p]:leading-relaxed
          [&_p]:text-zinc-600
          [&_p]:mb-6
          [&_p:last-child]:mb-0">
        {description && (
          <p >
            {description}
          </p>
        )}

        {children}
      </div>
    </section>
  );
}
