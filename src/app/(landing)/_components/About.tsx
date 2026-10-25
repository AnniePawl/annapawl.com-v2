import type { ReactNode } from "react";
import { NerderyLink } from "./NerderyLink";

// Shared editorial header: eyebrow, name with the accent block, lede,
// role line. (Social links live in the footer.) Same voice as the PostHeader on every other page.
function EditorialAbout({
  className,
  extra,
}: {
  className: string;
  extra?: ReactNode;
}) {
  return (
    <div className={className}>
      {/* <span className="landing-eyebrow">Digital garden</span> */}
      <h1 className="landing-name">
        Anna Pawl
        <span className="landing-name-mark" aria-hidden="true" />
      </h1>
      <p className="landing-role">Frontend Engineer</p>
      <p className="landing-lede">
      Welcome to my little corner of the internet. I care a lot about how things look, feel, and work, down to the tiniest details. Here you’ll find experiments, projects, and other evidence of my curiosity getting out of hand.
      </p>
{/* 
      <p className="landing-lede">
        I bring ideas to life through thoughtful interactions and carefully
        crafted interfaces. From the first sketch to the final build, I love
        shaping how things look, feel, and work.
      </p>

      <p className="landing-lede">
        This is my digital garden: a growing collection of experiments,
        observations, things I’m learning, and creative projects.
      </p>

      <p className="landing-lede">
        Like any garden, it’s always being tended to, and some ideas are
        still taking root.
      </p> */}
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
