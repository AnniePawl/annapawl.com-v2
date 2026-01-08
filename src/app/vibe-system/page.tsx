"use client";

import { useEffect, useRef, useState } from "react";
import SidebarNav from "./_components/SidebarNav";
import { SECTIONS } from "./_data/sections";

// Sections
import OverviewSection from "./_sections/overview";
import ColorsSection from "./_sections/colors";
import TypographySection from "./_sections/typography";
import RadiusDocsSection from "./_sections/radius";
import ButtonsSection from "./_sections/buttons";
import PlaceholderSection from "./_sections/placeholder";

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
    const rootEl = mainRef.current;
    if (!el || !rootEl) return;

    rootEl.scrollTo({
      top: el.offsetTop - 24,
      behavior: "smooth",
    });

    setActiveId(id);
  };

  // helper to find meta for placeholders
  const meta = (id: string) => SECTIONS.find((s) => s.id === id)!;

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[250px_1fr] h-[calc(100dvh-6rem)]">
          <aside className="hidden lg:block h-full">
            <div className="h-full rounded-2xl p-[1.5px]">
              <div className="h-full rounded-xl bg-lime-200 p-4 text-zinc-900">
                <SidebarNav
                  sections={SECTIONS}
                  activeId={activeId}
                  onSelect={scrollTo}
                />
              </div>
            </div>
          </aside>

          <main
            ref={mainRef}
            className="h-full overflow-y-auto space-y-20 pr-2 no-scrollbar"
          >
            <OverviewSection />
            <ColorsSection />
            <TypographySection />
            <PlaceholderSection {...meta("spacing")} />
            <RadiusDocsSection />
            <PlaceholderSection {...meta("elevation")} />
            <PlaceholderSection {...meta("accessibility")} />
            <ButtonsSection />
            <PlaceholderSection {...meta("cards")} />
            <PlaceholderSection {...meta("modals")} />
            <PlaceholderSection {...meta("badges")} />
            <PlaceholderSection {...meta("tooltips")} />
            <PlaceholderSection {...meta("approach")} />
          </main>
        </div>
      </div>
    </div>
  );
}
