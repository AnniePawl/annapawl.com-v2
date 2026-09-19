"use client";

import { useEffect, useRef, useState } from "react";
import HeroNav from "./_components/HeroNav";
import { useLenis } from "./_components/SmoothScrollProvider";
import Hero from "./_components/Hero";
import SidebarNav from "./_components/SidebarNav";
import MobileNav from "./_components/MobileNav";
import GroupHeading from "./_components/GroupHeading";
import { SECTIONS } from "./_data/sections";

// Sections
import AccordianSection from "./_sections/accordian";
import ApproachSection from "./_sections/approach";
import ColorsSection from "./_sections/colors";
import TypographySection from "./_sections/typography";
import SpacingSection from "./_sections/spacing";
import LayoutSection from "./_sections/layout";
import RadiusDocsSection from "./_sections/radius";
import ElevationSection from "./_sections/elevation";
import MotionSection from "./_sections/motion";
import AccessibilitySection from "./_sections/accessibility";
import ButtonsSection from "./_sections/buttons";
import CardsSection from "./_sections/cards";
import ModalsSection from "./_sections/modals";
import BadgesSection from "./_sections/badges";
import TooltipsSection from "./_sections/tooltips";
import FormsSection from "./_sections/forms";

// How far above a target section HeroNav's sticky header sits --
// matches the 96px (`scroll-mt-24`) Section.tsx/PosterSection.tsx
// already carry for native anchor/keyboard jumps, so Lenis's own
// scrollTo lands in exactly the same spot either path takes.
const HEADER_SCROLL_OFFSET = 96;

export default function DesignSystemOverview() {
  const [activeId, setActiveId] = useState(SECTIONS[0].id);

  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const lenis = useLenis();

  useEffect(() => {
    SECTIONS.forEach(({ id }) => {
      sectionRefs.current[id] = document.getElementById(id);
    });

    // root: null (the browser viewport) — the page now scrolls normally
    // instead of the old fixed-height, internally-scrolling <main>, now
    // that the hero + its sticky nav sit above the docs app. The extra
    // -120px of top margin accounts for that sticky nav's height so a
    // section isn't marked "active" while it's still hidden underneath it.
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]?.target?.id) setActiveId(visible[0].target.id);
      },
      {
        rootMargin: "-120px 0px -70% 0px",
        threshold: [0.01, 0.1],
      }
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);


  // Scroll to section 
  const scrollTo = (id: string) => {
    const el = sectionRefs.current[id];
    if (!el) return;

    if (lenis) {
      // Lenis's own short, restrained easing (see SmoothScrollProvider) --
      // offset keeps the section's heading clear of the sticky header,
      // same distance `scroll-mt-24` already reserves for the fallback
      // below and for native anchor/keyboard jumps Lenis doesn't drive.
      lenis.scrollTo(el, { offset: -HEADER_SCROLL_OFFSET });
    } else {
      // No Lenis instance (prefers-reduced-motion, or not mounted yet) —
      // scrollIntoView finds whichever scrollable ancestor needs to move,
      // now that's the window itself. The section's `scroll-mt-24` class
      // supplies the same top breathing room past the sticky HeroNav.
      // globals.css forces `scroll-behavior: auto` under reduced motion,
      // so this "smooth" request becomes an instant native jump there —
      // no animated transition, per the accessibility requirement.
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    setActiveId(id);
  };

  // Scroll to top 

  const scrollToTop = () => {
    if(lenis){
      lenis.scrollTo(0);
    }
    else{
      window.scrollTo({top:0, behavior:"instant"})
    }
  }



  return (
    <div className="min-h-screen bg-[var(--bg-default)]">
      <HeroNav sections={SECTIONS} activeId={activeId} onSelect={scrollTo} onScrollToTop={scrollToTop}  />
      <Hero onExplore={() => scrollTo(SECTIONS[0].id)} />

      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[250px_1fr]">
          <aside className="hidden lg:block">
            {/* data-lenis-prevent: this column scrolls independently of
                the page (its own overflow-y-auto), so Lenis shouldn't
                hijack wheel input while the pointer is over it -- see
                SmoothScrollProvider.tsx. */}
            <div
              className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto rounded-2xl p-[1.5px]"
              data-lenis-prevent
            >
              {/* --sidebar-surface: a themed token (defaults to the
                  same lime-soft pastel this always was; dark mode
                  repoints it to a moss-tinted dark surface instead of
                  leaving a bright green box on a dark page -- see
                  color.css/theme.css). Text follows the themed
                  --text-primary since this wrapper's own background
                  now themes too. */}
              <div className="rounded-xl bg-[var(--sidebar-surface)] p-4 text-[var(--text-primary)]">
                <SidebarNav
                  sections={SECTIONS}
                  activeId={activeId}
                  onSelect={scrollTo}
                />
              </div>
            </div>
          </aside>

          <main className="space-y-12">
            <MobileNav
              sections={SECTIONS}
              activeId={activeId}
              onSelect={scrollTo}
            />

            <ApproachSection />
{/* Foundations */}
            <GroupHeading title="Foundations" />
            <ColorsSection />
            <TypographySection />
            <SpacingSection />
            <LayoutSection />
            <RadiusDocsSection />
            <ElevationSection />
            <MotionSection />
            <AccessibilitySection />

{/* Components */}
            <GroupHeading title="Components" />
            <ButtonsSection />
            <CardsSection />
            <ModalsSection />
            <AccordianSection />
            <BadgesSection />
            <TooltipsSection />
            <FormsSection />
          </main>
        </div>
      </div>
    </div>
  );
}
