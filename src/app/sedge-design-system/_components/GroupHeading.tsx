// A "chapter" divider in the main scrolling column — sits directly on the
// page background (not inside a colored poster/section box) and marks
// where a new sidebar group (Intro / Foundations / Components) begins.
// Deliberately smaller than each section's own .h-display title (80px) so
// the individual sections stay the visual focus; this is structure, not
// content.
export default function GroupHeading({ title }: { title: string }) {
  return (
    <div className="px-1">
      <h2 className="h1">{title}</h2>
      <hr className="poster-divider mt-4 mb-0" />
    </div>
  );
}
