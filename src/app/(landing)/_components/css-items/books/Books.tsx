// Ported from v1 src/components/css-items/books/Books.js. Decorative,
// no state -- stays a server component.
import "./books.css";

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

export default Books;
