"use client";

import { useEffect, useRef, useState } from "react";
import HeroNav from "./_components/HeroNav";
import { useLenis } from "./_components/SmoothScrollProvider";
import Hero from "./_components/Hero";
import SidebarNav from "./_components/SidebarNav";
import MobileNav from "./_components/MobileNav";
import { SECTIONS } from "./_data/sections";
import SiteFooter from "../../components/layout/SiteFooter/SiteFooter";
import PageShell from "../../components/layout/PageShell";

// Sections
import AccordionSection from "./_sections/accordion";
import ApproachSection from "./_sections/approach";
import LogoSection from "./_sections/logo";
import ColorsSection from "./_sections/colors";
import TypographySection from "./_sections/typography";
import IconsSection from "./_sections/icons";
import SpacingSection from "./_sections/spacing";
import LayoutSection from "./_sections/layout";
import RadiusDocsSection from "./_sections/radius";
import ElevationSection from "./_sections/elevation";
import MotionSection from "./_sections/motion";
import AccessibilitySection from "./_sections/accessibility";
import ButtonsSection from "./_sections/buttons";
import LinksSection from "./_sections/links";
import CodeBlocksSection from "./_sections/code-blocks";
import CalloutsSection from "./_sections/callouts";
import CardsSection from "./_sections/cards";
import ModalsSection from "./_sections/modals";
import BadgesSection from "./_sections/badges";
import TooltipsSection from "./_sections/tooltips";
import FormsSection from "./_sections/forms";
import PageShellSection from "./_sections/page-shell";
import PageHeaderSection from "./_sections/page-header";
import PostLayoutSection from "./_sections/post-layout";
import NavigationSection from "./_sections/navigation";
import SiteFooterSection from "./_sections/site-footer";

// Tailwind's `lg` (64rem) -- the point where the sidebar takes over from
// MobileNav (section-switcher.css). Below it the page has a second sticky
// layer (the section switcher) under the header.
const DESKTOP_QUERY = "(min-width: 64rem)";

export default function DesignSystemOverview() {
  const [activeId, setActiveId] = useState(SECTIONS[0].id);
  // The top nav highlights a group only once the docs are in view: while
  // the hero fills the screen, nothing is selected yet.
  const [pastHero, setPastHero] = useState(false);
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
  const scrollTargetRef = useRef<string | null>(null);
  const scrollReleaseTimerRef = useRef<number | null>(null);
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
      const isDesktop = window.matchMedia(DESKTOP_QUERY).matches;
      // Below lg the header scrolls away and the section switcher takes the top.
      const headerHeight = isDesktop ? header?.offsetHeight ?? 0 : 0;
      const switcherHeight = switcher?.offsetHeight ?? 0;
      root.style.setProperty("--sedge-header-h", `${headerHeight}px`);
      root.style.setProperty("--sedge-switcher-h", `${switcherHeight}px`);

      const next = {
        inset: headerHeight + switcherHeight,
        viewportHeight: window.innerHeight,
        isDesktop,
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

    // The -120px top margin keeps a section from being marked active while
    // it's still hidden under the sticky nav.
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

        if (!scrollTargetRef.current && visible[0]?.id) {
          setActiveId(visible[0].id);
        }
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
  // "Past the hero" = the first section has reached the same band the
  // section observer uses (top 30% of the viewport).
  useEffect(() => {
    const first = document.getElementById(SECTIONS[0].id);
    if (!first) return;
    const check = () =>
      setPastHero(first.getBoundingClientRect().top <= window.innerHeight * 0.3);
    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, []);

  const scrollTo = (id: string) => {
    const el = sectionRefs.current[id];
    if (!el) return;

    scrollTargetRef.current = id;
    setActiveId(id);

    if (scrollReleaseTimerRef.current !== null) {
      window.clearTimeout(scrollReleaseTimerRef.current);
    }

    const releaseScrollTracking = () => {
      if (scrollTargetRef.current !== id) return;
      scrollTargetRef.current = null;
      scrollReleaseTimerRef.current = null;
    };

    scrollReleaseTimerRef.current = window.setTimeout(
      releaseScrollTracking,
      1200
    );

    if (lenis) {
      // Lenis respects the target's responsive scroll margin.
      lenis.scrollTo(el, { onComplete: releaseScrollTracking });
    } else {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      el.scrollIntoView({
        behavior: reducedMotion ? "auto" : "smooth",
        block: "start",
      });
    }
  };

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  };

  return (
    <div ref={rootRef} className="min-h-screen bg-[var(--bg-default)]">
      {/* Below lg the header only sticks within the hero, so the section
          bar right after it takes over the top. lg:contents drops the
          wrapper on desktop, where the header sticks for the whole page. */}
      <div className="lg:contents">
        <HeroNav
          sections={SECTIONS}
          activeId={pastHero ? activeId : ""}
          onSelect={scrollTo}
          onScrollToTop={scrollToTop}
        />
        <Hero onExplore={() => scrollTo(SECTIONS[0].id)} />
      </div>

      <MobileNav
        sections={SECTIONS}
        activeId={activeId}
        onSelect={scrollTo}
        onBackToTop={scrollToTop}
      />

      <PageShell>
        {/* minmax(0, 1fr) rather than a bare 1fr: a 1fr track's minimum is its
            content's min-content width, which left <main> ~800px wide (past
            the viewport) between 1024px and ~1140px. Identical above that. */}
        <div
          className="mt-6 grid grid-cols-1 lg:mt-0 lg:grid-cols-[250px_minmax(0,1fr)]"
          style={{ gap: "var(--space-7)" }}
        >
          {/* pt-12 matches each section's top padding, so the first nav
              heading lines up with the first section heading. */}
          <aside className="hidden lg:block lg:pt-12">
            {/* data-lenis-prevent: this column scrolls independently of
                the page (its own overflow-y-auto), so Lenis shouldn't
                hijack wheel input while the pointer is over it -- see
                SmoothScrollProvider.tsx. */}
            <div
              className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto no-scrollbar"
              data-lenis-prevent
            >
              <div className="text-left text-[var(--text-primary)]">
                <SidebarNav
                  sections={SECTIONS}
                  activeId={activeId}
                  onSelect={scrollTo}
                />
              </div>
            </div>
          </aside>

          <main
            className="flex min-w-0 flex-col"
            style={{ gap: "var(--section-gap)" }}
          >
            <ApproachSection />
            {/* Foundations */}
            <LogoSection />
            <ColorsSection />
            <TypographySection />
            <IconsSection />
            <SpacingSection />
            <LayoutSection />
            <RadiusDocsSection />
            <ElevationSection />
            <MotionSection />
            <AccessibilitySection />

            {/* Components */}
            <ButtonsSection />
            <LinksSection />
            <CodeBlocksSection />
            <CalloutsSection />
            <CardsSection />
            <ModalsSection />
            <AccordionSection />
            <BadgesSection />
            <TooltipsSection />
            <FormsSection />

            {/* Patterns */}
            <PageShellSection />
            <PageHeaderSection />
            <PostLayoutSection />
            <NavigationSection />
            <SiteFooterSection />
          </main>
        </div>
      </PageShell>
      <SiteFooter />
    </div>
  );
}
