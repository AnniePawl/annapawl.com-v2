import { Books } from "../books/Books";
import { Books2 } from "../books/Books2";
import { Dessert } from "../dessert/Dessert";
import { DigitalClock } from "../digitalClock/DigitalClock";
import { Laptop } from "../laptop/Laptop";
import { NewtonsCradle } from "../newtonsCradle/NewtonsCradle";
import { Plant } from "../plant/Plant";
import { Radio } from "../radio/Radio";
import { Sewing } from "../sewing/Sewing";
import { TeaCup } from "../teacup/TeaCup";
import { Pens } from "../writing/Pens";
import { MobileShelf } from "./MobileShelf";
import "./shelves.css";
import "./mobile-placement.css";

export function MobileShelves() {
  return (
    <div className="mobile-shelves">
      <MobileShelf
        items={[<Radio key="1" cn="mobile-radio-container" />, <Pens key="2" cn="mobile-pens-container" />]}
      />
      <MobileShelf
        items={[<Laptop key="1" cn="mobile-laptop-container" />, <Books key="2" cn="mobile-books-container" />]}
      />
      <MobileShelf
        items={[
          <NewtonsCradle key="1" cn="mobile-newtonsCradle-container" />,
          <Plant key="2" cn="mobile-plant-container" />,
        ]}
      />
      <MobileShelf
        items={[
          <Dessert key="1" cn="mobile-dessert-container" />,
          <TeaCup key="2" cn="mobile-teacup-container" />,
        ]}
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
        items={[
          <DigitalClock key="1" cn="mobile-digitalClock-container" />,
          <Books2 key="2" cn="mobile-books2-container" />,
        ]}
      />
    </div>
  );
}
