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

// Tailwind's `lg` (64rem) -- the point where the sidebar takes over from
// MobileNav (section-switcher.css). Below it the page has a second sticky
// layer (the section switcher) under the header.
const DESKTOP_QUERY = "(min-width: 64rem)";

export default function DesignSystemOverview() {
  const [activeId, setActiveId] = useState(SECTIONS[0].id);
  // Height of everything sticky above the content (site header, plus the
  // mobile section switcher when it's showing) and the viewport height --
  // both feed the scroll-spy's observation band below.
  const [stickyMetrics, setStickyMetrics] = useState({
    inset: 0,
    viewportHeight: 0,
    isDesktop: true,
  });

  const rootRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const lenis = useLenis();

  // Measures the two sticky layers and publishes them as CSS custom
  // properties on the page root -- section-switcher.css positions the
  // switcher under the header with them and reserves that same space above
  // scrolled-to headings (scroll-margin-top). Measured rather than
  // hardcoded because the header's height isn't fixed: it grows when its
  // wordmark wraps at narrow widths. The switcher reports 0 while it's
  // `display: none` on desktop, so the same math covers both layouts.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const header = root.querySelector<HTMLElement>(":scope > header");
    const switcher = root.querySelector<HTMLElement>("[data-section-switcher]");

    const sync = () => {
      const headerHeight = header?.offsetHeight ?? 0;
      const switcherHeight = switcher?.offsetHeight ?? 0;
      root.style.setProperty("--sedge-header-h", `${headerHeight}px`);
      root.style.setProperty("--sedge-switcher-h", `${switcherHeight}px`);

      const next = {
        inset: headerHeight + switcherHeight,
        viewportHeight: window.innerHeight,
        isDesktop: window.matchMedia(DESKTOP_QUERY).matches,
      };
      setStickyMetrics((prev) =>
        prev.inset === next.inset &&
        prev.viewportHeight === next.viewportHeight &&
        prev.isDesktop === next.isDesktop
          ? prev
          : next
      );
    };

    const resizeObserver = new ResizeObserver(sync);
    if (header) resizeObserver.observe(header);
    if (switcher) resizeObserver.observe(switcher);
    window.addEventListener("resize", sync);
    sync();

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", sync);
    };
  }, []);

  useEffect(() => {
    SECTIONS.forEach(({ id }) => {
      sectionRefs.current[id] = document.getElementById(id);
    });

    // Desktop keeps the original band exactly: from 120px below the top
    // of the viewport to 30% of the way down it. Below `lg` the switcher
    // makes the sticky stack taller than 120px, so the band starts under
    // both layers instead (and keeps a minimum height, so a short
    // landscape-phone viewport can't collapse it to nothing).
    const { inset, viewportHeight, isDesktop } = stickyMetrics;
    let rootMargin = "-120px 0px -70% 0px";
    if (!isDesktop && inset > 0) {
      const top = Math.max(120, inset);
      const band = Math.max(96, viewportHeight * 0.3 - 120);
      const bottom = Math.max(0, viewportHeight - top - band);
      rootMargin = `-${top}px 0px -${bottom}px 0px`;
    }

    // root: null (the browser viewport) — the page now scrolls normally
    // instead of the old fixed-height, internally-scrolling <main>, now
    // that the hero + its sticky nav sit above the docs app. The extra
    // -120px of top margin accounts for that sticky nav's height so a
    // section isn't marked "active" while it's still hidden underneath it.
    //
    // A callback only carries the entries that *changed*, so the sections
    // currently inside the band are tracked across callbacks: picking the
    // top-most of just one batch could latch onto a section whose tail was
    // still crossing the band (say, while a nav jump is mid-scroll) and
    // then never be corrected once that tail left, since leaving fires
    // no "new" visible entry.
    const inBand = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) inBand.add(e.target.id);
          else inBand.delete(e.target.id);
        });

        const visible = [...inBand]
          .map((id) => sectionRefs.current[id])
          .filter((el): el is HTMLElement => el != null)
          .sort(
            (a, b) =>
              a.getBoundingClientRect().top - b.getBoundingClientRect().top
          );

        if (visible[0]?.id) setActiveId(visible[0].id);
      },
      {
        rootMargin,
        threshold: [0.01, 0.1],
      }
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [stickyMetrics]);


  // Scroll to section 
  const scrollTo = (id: string) => {
    const el = sectionRefs.current[id];
    if (!el) return;

    if (lenis) {
      // Lenis's own short, restrained easing (see SmoothScrollProvider) --
      // offset keeps the section's heading clear of the sticky header,
      // same distance `scroll-mt-24` already reserves for the fallback
      // below and for native anchor/keyboard jumps Lenis doesn't drive.
      //
      // Below `lg` the clearance is header + section switcher, which is
      // taller than 96px and varies with the header's height -- it comes
      // from the sections' scroll-margin-top (section-switcher.css),
      // which Lenis already subtracts from its target, so no extra offset
      // is added on top of it there. Desktop keeps the fixed offset it
      // has always used.
      const isDesktop = window.matchMedia(DESKTOP_QUERY).matches;
      lenis.scrollTo(el, { offset: isDesktop ? -HEADER_SCROLL_OFFSET : 0 });
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
    <div ref={rootRef} className="min-h-screen bg-[var(--bg-default)]">
      <HeroNav sections={SECTIONS} activeId={activeId} onSelect={scrollTo} onScrollToTop={scrollToTop}  />
      <Hero onExplore={() => scrollTo(SECTIONS[0].id)} />

      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* minmax(0, 1fr) rather than a bare 1fr: a 1fr track's minimum is its
            content's min-content width, which left <main> ~800px wide (past
            the viewport) between 1024px and ~1140px. Identical above that. */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[250px_minmax(0,1fr)]">
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
