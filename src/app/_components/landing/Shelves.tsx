// Ported from css-items/shelves/{DesktopShelves,TabletShelves,
// MobileShelves}.js. Item compositions (which illustration sits on which
// shelf, in which order) are copied 1:1 from those three source files --
// desktop, tablet and mobile each arrange the same set of illustration
// components differently, which is exactly the "reuse the components,
// change the arrangement per breakpoint" the port brief asked for, just
// switched by CSS (Landing.tsx / landing.css) instead of by
// window.innerWidth in JS.
import { Shelf, MobileShelf } from "./Shelf";
import {
  Books,
  Books2,
  Dessert,
  Laptop,
  NewtonsCradle,
  Sewing,
  Pens,
  TeaCup,
} from "./art/StaticArt";
import DigitalClock from "./art/DigitalClock";
import Radio from "./art/Radio";
import { ColorSlider, InvertToggle } from "./Controls";

export function DesktopShelves() {
  return (
    <div
      id="landing-shelves-bg"
      className="relative w-full"
      style={{ backgroundColor: "hsl(216, 100%, 95%)" }}
    >
      <InvertToggle
        targets={[
          { id: "landing-home", className: "invert-wrapper" },
          { id: "landing-about", className: "invert-wrapper2" },
        ]}
      />
      <ColorSlider targetId="landing-shelves-bg" />
      <div className="desktop-shelves w-full">
        <Shelf
          items={[
            <NewtonsCradle key="1" cn="desktop-newtonsCradle-container" />,
            <Dessert key="2" cn="desktop-dessert-container" />,
            <Books2 key="3" cn="desktop-books2-container" />,
          ]}
        />
        <Shelf
          items={[
            <Radio key="1" cn="desktop-radio-container" />,
            <Pens key="2" cn="desktop-pens-container" />,
            <Laptop key="3" cn="desktop-laptop-container" />,
            <TeaCup key="4" />,
          ]}
        />
        <Shelf
          items={[
            <Sewing key="1" cn="desktop-sewing-container" />,
            <Books key="2" cn="desktop-books-container" />,
            <DigitalClock key="3" />,
          ]}
        />
      </div>
    </div>
  );
}

export function TabletShelves() {
  return (
    <div className="tablet-shelves">
      <Shelf
        items={[
          <NewtonsCradle key="1" cn="tablet-newtonsCradle-container" />,
          <Pens key="2" cn="tablet-pens-container" />,
          <Books2 key="3" cn="tablet-books2-container" />,
        ]}
      />
      <Shelf
        items={[
          <Radio key="1" cn="tablet-radio-container" />,
          <Dessert key="2" cn="tablet-dessert-container" />,
          <Laptop key="3" cn="tablet-laptop-container" />,
        ]}
      />
      <Shelf
        items={[
          <Sewing
            key="1"
            cn="tablet-sewing-container"
            tapecn="tablet-tape"
            pincushioncn="mobile-pin-cushion"
          />,
          <Books key="2" cn="tablet-books-container" />,
          <DigitalClock key="3" cn="tablet-digitalClock-container" />,
        ]}
      />
    </div>
  );
}

export function MobileShelves() {
  return (
    <div className="mobile-shelves">
      <MobileShelf
        items={[<Radio key="1" cn="mobile-radio-container" />, <Pens key="2" cn="mobile-pens-container" />]}
      />
      <MobileShelf
        items={[
          <Sewing
            key="1"
            cn="mobile-sewing-container"
            tapecn="mobile-tape"
            pincushioncn="mobile-pin-cushion"
          />,
        ]}
      />
      <MobileShelf
        items={[<Laptop key="1" cn="mobile-laptop-container" />, <Books key="2" cn="mobile-books-container" />]}
      />
      <MobileShelf
        items={[
          <Books2 key="1" cn="mobile-books2-container" />,
          <DigitalClock key="2" cn="mobile-digitalClock-container" />,
        ]}
      />
      <MobileShelf
        items={[
          <NewtonsCradle key="1" cn="mobile-newtonsCradle-container" />,
          <TeaCup key="2" cn="mobile-teacup-container" />,
        ]}
      />
    </div>
  );
}
