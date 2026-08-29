"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import SidebarNav from "./_components/SidebarNav";
import MobileNav from "./_components/MobileNav";
import { SECTIONS } from "./_data/sections";

// Sections
import OverviewSection from "./_sections/overview";
import ApproachSection from "./_sections/approach";
import ColorsSection from "./_sections/colors";
import TypographySection from "./_sections/typography";
import RadiusDocsSection from "./_sections/radius";
import ButtonsSection from "./_sections/buttons";
import CardsSection from "./_sections/cards";
import ModalsSection from "./_sections/modals";
import BadgesSection from "./_sections/badges";
import TooltipsSection from "./_sections/tooltips";
import FormsSection from "./_sections/forms";
import SpacingSection from "./_sections/spacing";
import LayoutSection from "./_sections/layout";
import ElevationSection from "./_sections/elevation";
import MotionSection from "./_sections/motion";
import AccessibilitySection from "./_sections/accessibility";

export default function DesignSystemOverview() {
  const [activeId, setActiveId] = useState(SECTIONS[0].id);

  const mainRef = useRef<HTMLElement | null>(null);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
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
    if (!el) return;

    // scrollIntoView finds whichever scrollable ancestor needs to move
    // (here, <main>) instead of us guessing an offset — offsetTop was
    // measured relative to <body>, not the scroll container, since nothing
    // between them has `position` set. The section's `scroll-mt-24` class
    // already supplies the top breathing room, so no manual offset needed.
    el.scrollIntoView({ behavior: "smooth", block: "start" });

    setActiveId(id);
  };

  return (
    <div className="min-h-screen bg-[#fffcf7]">
      <div className="mx-auto flex h-[100dvh] max-w-7xl flex-col px-6 py-12">
        {/* Page header — home link + title, sits above the sidebar/main
            split rather than inside it, so it's visible on every
            breakpoint. The grid below gets `flex-1 min-h-0` instead of a
            hardcoded viewport-height calc, so it always fills whatever
            space this header doesn't use. */}
        <div className="mb-8 shrink-0">
          <Link
            href="/"
            className="focus-ring inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-zinc-500 transition-colors hover:text-zinc-900"
          >
            <span aria-hidden="true">⌂</span> HOME
          </Link>

          <h1 className="h-display mt-4">
            DESIGN SYSTEM <span aria-hidden="true">✳</span>
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-zinc-600 md:text-base">
            A living library of the building blocks, visual experiments, and
            little details behind annapawl.com.
          </p>
        </div>

        <div className="grid min-h-0 flex-1 grid-cols-1 gap-12 lg:grid-cols-[250px_1fr]">
          <aside className="hidden lg:block h-full">
            <div className="h-full rounded-2xl p-[1.5px]">
              <div className="flex h-full flex-col rounded-xl bg-lime-200 p-4 text-zinc-900">
                <div className="min-h-0 flex-1 overflow-y-auto">
                  <SidebarNav
                    sections={SECTIONS}
                    activeId={activeId}
                    onSelect={scrollTo}
                  />
                </div>
              </div>
            </div>
          </aside>

          <main
            ref={mainRef}
            className="h-full overflow-y-auto space-y-12 pr-2 no-scrollbar"
          >
            <MobileNav
              sections={SECTIONS}
              activeId={activeId}
              onSelect={scrollTo}
            />

            <OverviewSection />
            <ApproachSection />
            <ColorsSection />
            <TypographySection />
            <ButtonsSection />
            <CardsSection />
            <ModalsSection />
            <BadgesSection />
            <TooltipsSection />
            <FormsSection />
            <SpacingSection />
            <LayoutSection />
            <RadiusDocsSection />
            <ElevationSection />
            <MotionSection />
            <AccessibilitySection />
          </main>
        </div>
      </div>
    </div>
  );
}
