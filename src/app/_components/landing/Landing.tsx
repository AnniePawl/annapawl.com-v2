// Top-level assembly for the ported v1 landing page. Ported from
// App.js -> Main.js -> {Desktop,Tablet,Mobile}.js. See landing.css for
// why all three breakpoint sections render every time, switched by CSS
// media queries instead of the source's window.innerWidth-driven React
// tree (SSR/hydration-unsafe, and the source's version had two live
// bugs: an inconsistent mobile threshold between the initial check and
// the resize handler, and a resize listener re-subscribed on every
// render from a missing effect dependency array -- neither of those
// exist here since there's no window read at all).
//
// Restyled to the cream editorial look: cream wall, Inter, an editorial
// header in the left column, and a page index below the fold. The color
// slider and invert toggle were removed (their components still live in
// css-items/shelves/ if you ever want them back).
import { DesktopAbout, MobileAbout } from "./About";
import { Footer } from "./Footer";
import { InfoButton } from "./InfoButton";
import { DesktopShelves } from "./css-items/shelves/DesktopShelves";
import { MobileShelves } from "./css-items/shelves/MobileShelves";
import { TabletShelves } from "./css-items/shelves/TabletShelves";
import { LandingIndex } from "./LandingIndex";
import "./landing.css";

export function Landing() {
  return (
    <div className="landing">
      {/* ---- Desktop (>= 1000px) ---- */}
      <div className="landing-desktop-section">
        <DesktopAbout />
        <div className="landing-desktop-content">
          <div id="landing-home" className="landing-desktop-shelves-container">
            <InfoButton className="landing-desktop-about-info" />
            <DesktopShelves />
          </div>
        </div>
      </div>

      {/* ---- Tablet (600px - 999px) ----
          No About/bio here -- the source's Tablet.js never rendered one
          either, see About.tsx for the note. */}
      <div className="landing-tablet-section">
        <InfoButton className="landing-tablet-info" />
        <TabletShelves />
      </div>

      {/* ---- Mobile (< 600px) ---- */}
      <div className="landing-mobile-section">
        <MobileAbout />
        <div className="landing-mobile-shelves-container">
          <InfoButton className="landing-mobile-info" />
          <MobileShelves />
        </div>
      </div>

      {/* ---- Below the fold: the page index (all breakpoints) ----
          On desktop and tablet the landing above stays pinned, and this
          panel scrolls up over it, full width. */}
      <div className="landing-over">
        <LandingIndex />
        <Footer />
      </div>
    </div>
  );
}

export default Landing;
