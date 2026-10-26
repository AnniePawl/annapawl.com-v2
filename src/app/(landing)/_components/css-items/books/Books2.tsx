// Vertical book stack w/ bookend 
import "./books2.css";

export function Books2({ cn }: { cn?: string }) {
  return (
    <div className={`v-books-container ${cn ?? ""}`} aria-hidden="true">
      <div className="bookend" />
      <div className="v-book v-book--1" />
      <div className="v-book v-book--2" />
      <div className="v-book v-book--3" />
      <div className="v-book v-book--4" />
    </div>
  );
}
