import type { ReactNode } from "react";
import { NerderyLink } from "./NerderyLink";

function EditorialAbout({
  className,
  extra,
}: {
  className: string;
  extra?: ReactNode;
}) {
  return (
    <div className={className}>
      <h1 className="landing-name">
        Anna Pawl
        <span className="landing-name-mark" aria-hidden="true" />
      </h1>
      <p className="landing-role">Frontend Engineer</p>
      <p className="landing-lede">
        Welcome to my little corner of the internet. I care a lot about how things look, feel, and work, down to the tiniest details. Here you’ll find experiments, projects, and other evidence of my curiosity getting out of hand.
      </p>
      {extra}
      <NerderyLink />
    </div>
  );
}

export function DesktopAbout() {
  return (
    <div id="landing-about" className="landing-desktop-about">
      <EditorialAbout className="landing-desktop-about-inner" />
    </div>
  );
}

export function MobileAbout() {
  return <EditorialAbout className="landing-mobile-about" />;
}
