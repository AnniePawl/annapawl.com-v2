"use client";

import { useEffect, useRef, useState } from "react";
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
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[250px_1fr] h-[calc(100dvh-6rem)]">
          <aside className="hidden lg:block h-full">
            <div className="h-full rounded-2xl p-[1.5px]">
              <div className="flex h-full flex-col rounded-xl bg-lime-200 p-4 text-zinc-900">
                <div className="mb-4 shrink-0 border-b border-zinc-900/10 pb-4">
                  <h2
                    className="text-lg font-semibold tracking-tight text-zinc-900"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Vibe System
                  </h2>
                  <p className="mt-1 text-xs leading-snug text-zinc-700">
                    Tokens, components, and the reasoning behind annapawl.com.
                  </p>
                </div>

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
