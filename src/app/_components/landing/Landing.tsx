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
// Montserrat is loaded with next/font (self-hosted, no external
// stylesheet fetch, unlike the source's Google Fonts + Adobe Typekit
// <link> imports) and scoped to this component tree only via the
// --font-montserrat variable it generates -- the sitewide Inter setup
// in app/layout.tsx is untouched.
import { Montserrat } from "next/font/google";
import { DesktopAbout, MobileAbout } from "./About";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { InfoButton } from "./InfoButton";
import { DesktopShelves, TabletShelves, MobileShelves } from "./Shelves";
import "./landing.css";
import "./landing-art.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-montserrat",
});

export function Landing() {
  return (
    <div className={`landing ${montserrat.variable}`}>
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
        <div className="landing-tablet-contact">
          <Contact />
        </div>
      </div>

      {/* ---- Mobile (< 600px) ---- */}
      <div className="landing-mobile-section">
        <MobileAbout />
        <div className="landing-mobile-shelves-container">
          <InfoButton className="landing-mobile-info" />
          <MobileShelves />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Landing;
