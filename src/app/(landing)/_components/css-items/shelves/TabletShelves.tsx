// Ported from v1 src/components/css-items/shelves/TabletShelves.js. Item
// compositions copied 1:1 from the source; visibility is switched by
// landing.css media queries (see DesktopShelves.tsx).
import { Books } from "../books/Books";
import { Books2 } from "../books/Books2";
import { Dessert } from "../dessert/Dessert";
import { DigitalClock } from "../digitalClock/DigitalClock";
import { Laptop } from "../laptop/Laptop";
import { NewtonsCradle } from "../newtonsCradle/NewtonsCradle";
import { Radio } from "../radio/Radio";
import { Sewing } from "../sewing/Sewing";
import { Pens } from "../writing/Pens";
import { Shelf } from "./Shelf";
import "./shelves.css";

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
