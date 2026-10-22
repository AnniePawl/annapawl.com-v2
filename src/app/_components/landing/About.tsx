// Ported from src/components/about-me/{DesktopAbout,MobileAbout}.js.
// Server components -- no state, no effects, just content. The old
// per-region colored native cursors (`cursor: url("data:image/svg+xml...")`
// on .desktop__about / span:hover in about.scss) were dropped rather than
// ported: this site already has a sitewide custom cursor
// (components/ui/CustomCursor.tsx), and re-adding the source's own
// cursor here would either be invisible under it or require opting this
// whole content region out of the sitewide cursor via data-cursor-native
// -- which would also disable it for the real buttons/links inside this
// region (the invert toggle, info button, contact icons). Noted in the
// port report as an intentional small adjustment.
//
// Tablet has no equivalent -- the source's Tablet.js never rendered an
// About/bio component at all (just the shelves, contact icons and info
// button), so tablet visitors in v1 never saw the name/bio copy either.
// Preserved as-is rather than "fixed", since adding content tablet never
// had would be a bigger change than this port is meant to make; flagged
// in the report in case that was actually a gap worth closing.
import type { ReactNode } from "react";
import Link from "next/link";
import { LegacyLink } from "./LegacyLink";

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
      <span className="landing-eyebrow">Digital garden</span>
      <h1 className="landing-name">
        Anna
        <br />
        Pawl
        <span className="landing-name-mark" aria-hidden="true" />
      </h1>
      <p className="landing-lede">
        Hi! Welcome to my little corner of the internet. I’m a software
        engineer who appreciates delightful UX and a designer who sees
        creativity in code.
      </p>
      <p className="landing-body">
        I bring thoughtful design to life through intuitive interactions,
        carefully crafted interfaces, and playful details. From the first
        sketch to the final implementation, I care as much about how an
        experience feels as how it works.
      </p>
      {extra}
      <p className="landing-role">Design engineer · Seattle &amp; New York</p>
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
  return (
    <EditorialAbout
      className="landing-mobile-about"
      extra={
        <p className="landing-body">
          <strong>General nerdery:</strong> roller skating,{" "}
          <Link href="/drawing-with-code" className="text-link focus-ring">
            CSS art
          </Link>
          , cello, <LegacyLink>forkplay</LegacyLink>, hoarding postage stamps,{" "}
          <Link href="/fiber-arts" className="text-link focus-ring">
            embroidery
          </Link>
          , going down rabbit holes 🐰
        </p>
      }
    />
  );
}
