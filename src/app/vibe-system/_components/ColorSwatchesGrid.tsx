import { COLOR_SWATCHES } from "../_data/color-swatches";

export default function ColorSwatchesGrid() {
  return (
    <section className="color-tokens space-y-12">
      <div className="grid gap-2 md:gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {COLOR_SWATCHES.map((swatch) => (
          <article key={swatch.name}>
            <div
              className="rounded-md h-20 px-2 py-2 flex items-end justify-end"
              style={{ backgroundColor: `var(${swatch.varName})` }}
            >
              <span className="bg-zinc-50/40 inline-flex items-center rounded-full px-2 py-1 text-[11px] font-medium">
                <code className="font-mono">{swatch.varName}</code>
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
