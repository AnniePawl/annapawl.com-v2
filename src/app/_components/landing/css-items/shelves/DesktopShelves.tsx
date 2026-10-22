// Ported from v1 src/components/css-items/shelves/DesktopShelves.js. Item
// compositions (which illustration sits on which shelf, in which order)
// are copied 1:1 from the source. Desktop, tablet and mobile each arrange
// the same illustration components differently; Landing.tsx renders all
// three and landing.css's media queries decide which one is visible (no
// window.innerWidth in JS).
import { Books } from "../books/Books";
import { Books2 } from "../books/Books2";
import { Dessert } from "../dessert/Dessert";
import DigitalClock from "../digitalClock/DigitalClock";
import { Laptop } from "../laptop/Laptop";
import { NewtonsCradle } from "../newtonsCradle/NewtonsCradle";
import Radio from "../radio/Radio";
import { Sewing } from "../sewing/Sewing";
import { TeaCup } from "../teacup/TeaCup";
import { Pens } from "../writing/Pens";
import { Shelf } from "./Shelf";
import "./shelves.css";

export function DesktopShelves() {
  return (
    <div
      id="landing-shelves-bg"
      className="relative w-full"
    >
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

export default DesktopShelves;
