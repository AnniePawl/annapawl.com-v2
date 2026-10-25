// Ported from v1 src/components/css-items/shelves/MobileShelves.js. Item
// compositions copied 1:1 from the source; visibility is switched by
// landing.css media queries (see DesktopShelves.tsx).
import { Books } from "../books/Books";
import { Books2 } from "../books/Books2";
import DigitalClock from "../digitalClock/DigitalClock";
import { Laptop } from "../laptop/Laptop";
import { NewtonsCradle } from "../newtonsCradle/NewtonsCradle";
import Radio from "../radio/Radio";
import { Sewing } from "../sewing/Sewing";
import { TeaCup } from "../teacup/TeaCup";
import { Pens } from "../writing/Pens";
import { MobileShelf } from "./MobileShelf";
import "./shelves.css";

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

export default MobileShelves;
