import type { ReactNode } from "react";
import { NerderyLink } from "./NerderyLink";
import HomeLogo from "../../../components/ui/HomeLogo";

const DESKTOP_LEDE = [
  "Welcome to my little corner of the internet, a budding digital garden where design and code meet. I have a hankering for crafty side quests and a weakness for fussing over wee details.",
  "Here you’ll find projects, experiments, frontend tutorials, my homegrown design system, and other evidence of my tinkering getting out of hand.",
];

const MOBILE_LEDE = [
  "Welcome to my little corner of the internet, a budding digital garden where design meets code. Here you’ll find projects, experiments, frontend tutorials, and other evidence of my tinkering getting out of hand.",
];

function EditorialAbout({
  className,
  lede,
  variant,
  extra,
}: {
  className: string;
  /** One string per paragraph. */
  lede: string[];
  /** Picks the -desktop or -mobile styles for the name, role and description. */
  variant: "desktop" | "mobile";
  extra?: ReactNode;
}) {
  return (
    <div className={className}>
      <h1 className={`landing-name-${variant}`}>
        Anna Pawl
        <span className={`landing-name-mark-${variant}`} aria-hidden="true" />
      </h1>
      <p className={`landing-role-${variant}`}>Frontend Engineer</p>
      {lede.map((paragraph) => (
        <p key={paragraph} className={`landing-lede-${variant}`}>
          {paragraph}
        </p>
      ))}
      {extra}
      <NerderyLink variant={variant} />
    </div>
  );
}

export function DesktopAbout() {
  return (
    <div id="landing-about" className="landing-desktop-about">
      <HomeLogo
        href={null}
        className="landing-desktop-logo"
        size="1.75rem"
        colors={{
          northeast: "var(--cherry-bold)",
          southeast: "var(--periwinkle-bold)",
          southwest: "var(--periwinkle-bold)",
          northwest: "var(--periwinkle-bold)",
        }}
      />
      <EditorialAbout
        className="landing-desktop-about-inner"
        lede={DESKTOP_LEDE}
        variant="desktop"
      />
    </div>
  );
}

export function MobileAbout() {
  return (
    <EditorialAbout
      className="landing-mobile-about"
      lede={MOBILE_LEDE}
      variant="mobile"
    />
  );
}
