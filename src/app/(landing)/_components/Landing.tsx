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
      {/* Desktop (>= 1000px) */}
      <div className="landing-desktop-section">
        <DesktopAbout />
        <div className="landing-desktop-content">
          <div id="landing-home" className="landing-desktop-shelves-container">
            <InfoButton className="landing-desktop-about-info" />
            <DesktopShelves />
          </div>
        </div>
      </div>

      {/* Tablet (600px - 999px)- no about section here */}
      <div className="landing-tablet-section">
        <InfoButton className="landing-tablet-info" autoplay />
        <TabletShelves />
      </div>

      {/* Mobile (< 600px) */}
      <div className="landing-mobile-section">
        <MobileAbout />
        <div className="landing-mobile-shelves-container">
          <InfoButton className="landing-mobile-info" autoplay />
          <MobileShelves />
        </div>
      </div>

      <div className="landing-over">
        <LandingIndex />
        <Footer />
      </div>
    </div>
  );
}
