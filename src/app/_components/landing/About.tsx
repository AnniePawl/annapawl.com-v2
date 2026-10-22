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
import Link from "next/link";
import { Contact } from "./Contact";
import { LegacyLink } from "./LegacyLink";

export function DesktopAbout() {
  return (
    <div id="landing-about" className="landing-desktop-about">
      <div className="landing-desktop-about-inner">
        <h1 className="">Anna</h1>
        <h1 className="">Pawl</h1>
        <h2>Design Engineer</h2>
        <p className="landing-location">Seattle, WA | New York, NY</p>
        <p className='text-sm leading-4'>
         Hi! Welcome to my little corner of the internet. I’m a software engineer who appreciates delightful UX and a designer who sees creativity in code. I bring thoughtful design to life through intuitive interactions, carefully crafted interfaces, and playful details. From the first sketch to the final implementation, I care as much about how an experience feels as how it works. ✨
        </p>
        <Contact />
      </div>
    </div>
  );
}

export function MobileAbout() {
  return (
    <div className="landing-mobile-about">
      <h1 className="landing-heading">
        Anna
        <br />
        Pawl
      </h1>
      <p className='text-xs'>
        Hi! Welcome to my little corner of the internet. I&apos;m a software
        engineer that appreciates delightful UX and a designer who sees
        creativity in code. I specialize in ensuring that aesthetic
        concepts translate seamlessly into functional interfaces. I bridge
        development and design to craft intuitive, engaging digital
        experiences. ✨
        <br />
        <br />
        <strong>General nerdery:</strong> Roller skating,{" "}
        <LegacyLink>CSS art</LegacyLink>, cello,{" "}
        <LegacyLink>forkplay</LegacyLink>, hoarding postage stamps,{" "}
        <Link href="/fiber-arts" className="landing-inline-link">
          embroidery
        </Link>
        , going down rabbit holes 🐰
      </p>
      <div className="landing-mobile-contact">
        <Contact />
      </div>
    </div>
  );
}
