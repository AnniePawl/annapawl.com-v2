// Purely decorative CSS-art "knick-knacks" ported from
// src/components/css-items/{books,dessert,laptop,newtonsCradle,sewing,
// writing,teacup}. No state or effects, so these stay server components.
// Every root node is aria-hidden -- they add nothing to the page's
// information content, same treatment the shelves themselves (Shelf.tsx)
// use for the wooden shelf/bracket. Styling lives in landing-art.css;
// class names match the source 1:1 so that file is easy to cross-check
// against the original SCSS.

export function Books({ cn }: { cn?: string }) {
  return (
    <div className={`books-container ${cn ?? ""}`} aria-hidden="true">
      <div className="book book--1" />
      <div className="book book--2" />
      <div className="book book--3" />
      <div className="book book--4" />
      <div className="book book--5" />
    </div>
  );
}

export function Books2({ cn }: { cn?: string }) {
  return (
    <div className={`v-books-container ${cn ?? ""}`} aria-hidden="true">
      <div className="v-book-end" />
      <div className="v-book v-book--1" />
      <div className="v-book v-book--2" />
      <div className="v-book v-book--3" />
      <div className="v-book v-book--4" />
    </div>
  );
}

export function Dessert({ cn }: { cn?: string }) {
  return (
    <div className={`dessert-container ${cn ?? ""}`} aria-hidden="true">
      <div className="dessert__stand-top" />
      <div className="dessert__base" />
      <div className="dessert__stand-base" />
      <div className="dessert__spiral" />
    </div>
  );
}

export function Laptop({ cn }: { cn?: string }) {
  return (
    <div className={`laptop-container ${cn ?? ""}`} aria-hidden="true">
      <div className="laptop">
        <div className="laptop__screen">
          <div className="laptop__terminal">
            <p>$ You look great</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function NewtonsCradle({ cn }: { cn?: string }) {
  return (
    <div className={`newtonsCradle ${cn ?? ""}`} aria-hidden="true">
      <div className="frame">
        <div className="sphere" />
        <div className="sphere" />
        <div className="sphere" />
        <div className="sphere" />
        <div className="sphere" />
      </div>
      <div className="base" />
    </div>
  );
}

function Tape({ cn }: { cn?: string }) {
  return (
    <div className={`tape ${cn ?? ""}`}>
      <div className="tape__top" />
      <div className="tape__bottom" />
    </div>
  );
}

function Pin() {
  return <div className="pin" />;
}

function PinCushion({ cn }: { cn?: string }) {
  return (
    <div className={`pin-cushion-container ${cn ?? ""}`}>
      <div className="pins">
        <Pin />
        <Pin />
        <Pin />
        <Pin />
        <Pin />
        <Pin />
      </div>
      <div className="pin-cushion" />
    </div>
  );
}

function SewingMachine() {
  return (
    <div className="sewing-machine">
      <div className="thread" />
      <div className="needle" />
      <div className="sewing-machine__top" />
      <div className="sewing-machine__right" />
      <div className="sewing-machine__bottom" />
    </div>
  );
}

export function Sewing({
  cn,
  tapecn,
  pincushioncn,
}: {
  cn?: string;
  tapecn?: string;
  pincushioncn?: string;
}) {
  return (
    <div className={`sewing ${cn ?? ""}`} aria-hidden="true">
      <Tape cn={tapecn} />
      <PinCushion cn={pincushioncn} />
      <SewingMachine />
    </div>
  );
}

export function Pens({ cn }: { cn?: string }) {
  return (
    <div className={`cup-container ${cn ?? ""}`} aria-hidden="true">
      <div className="cup-contents">
        <div className="ruler" />
        <div className="pen" />
        <div className="pencil pencil--1" />
        <div className="pencil pencil--2" />
      </div>
      <div className="cup" />
    </div>
  );
}

export function TeaCup({ cn }: { cn?: string }) {
  return (
    <div className={`teacup-container ${cn ?? ""}`} aria-hidden="true">
      <div className="teacup" />
      <div className="steam" />
    </div>
  );
}
