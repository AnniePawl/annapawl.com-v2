// Ported from v1 src/components/css-items/books/Books2.js (vertical
// stack). Decorative, no state -- stays a server component.
import "./books2.css";

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

export default Books2;
