type Swatch = {
  name: string;
  varName: string;
  description: string;
  textColor?: string;
};

const SWATCHES: Swatch[] = [
  {
    name: "Soft Pink",
    varName: "--soft-pink",
    description: "to be defined",
    textColor: "#000000",
  },
  {
    name: "Bold Pink",
    varName: "--bold-pink",
    description: "to be defined",
    textColor: "#000000",
  },
  {
    name: "Soft Red",
    varName: "--soft-red",
    description: "to be defined",
    textColor: "#000000",
  },

  {
    name: "Bold Red",
    varName: "--bold-red",
    description: "to be defined",
    textColor: "#000000",
  },
  {
    name: "Soft Orange",
    varName: "--soft-orange",
    description: "to be defined",
    textColor: "#000000",
  },
  {
    name: "Bold Orange",
    varName: "--bold-orange",
    description: "to be defined",
    textColor: "#000000",
  },
  {
    name: "Soft Yellow",
    varName: "--soft-yellow",
    description: "to be defined",
    textColor: "#000000",
  },
  {
    name: "Bold Yellow",
    varName: "--bold-yellow",
    description: "to be defined",
    textColor: "#000000",
  },
  {
    name: "Soft Lime",
    varName: "--soft-lime",
    description: "to be defined",
    textColor: "#000000",
  },
  {
    name: "Bold Lime",
    varName: "--bold-lime",
    description: "to be defined",
    textColor: "#000000",
  },
  {
    name: "Soft Mint",
    varName: "--soft-mint",
    description: "to be defined",
    textColor: "#000000",
  },
  {
    name: "Bold Mint",
    varName: "--bold-mint",
    description: "to be defined",
    textColor: "#000000",
  },

  {
    name: "Soft Green",
    varName: "--soft-green",
    description: "to be defined",
    textColor: "#000000",
  },
  {
    name: "Bold Green",
    varName: "--bold-green",
    description: "to be defined",
    textColor: "#000000",
  },
  {
    name: "Soft Sky",
    varName: "--soft-sky",
    description: "to be defined",
    textColor: "#000000",
  },
  {
    name: "Bold Sky",
    varName: "--bold-sky",
    description: "to be defined",
    textColor: "#ffffff",
  },
  {
    name: "Soft Blue",
    varName: "--soft-blue",
    description: "to be defined",
    textColor: "#000000",
  },
  {
    name: "Bold Blue",
    varName: "--bold-blue",
    description: "to be defined",
    textColor: "#ffffff",
  },

  {
    name: "Soft Violet",
    varName: "--soft-violet",
    description: "to be defined",
    textColor: "#000000",
  },
  {
    name: "Bold Violet",
    varName: "--bold-violet",
    description: "to be defined",
    textColor: "#000000",
  },
  {
    name: "Soft Indigo",
    varName: "--soft-indigo",
    description: "to be defined",
    textColor: "#000000",
  },
  {
    name: "Bold Indigo",
    varName: "--bold-indigo",
    description: "to be defined",
    textColor: "#000000",
  },
];

export default function ColorSwatchesGrid() {
  return (
    <section className="color-tokens space-y-12">
      <div className="grid gap-2 md:gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {SWATCHES.map((swatch) => (
          <article key={swatch.name}>
            <div
              className="rounded-md h-20 px-2 py-2 flex items-end justify-end"
              style={{
                backgroundColor: `var(${swatch.varName})`,
              }}
            >

              {/* Bottom row: token pill */}
              <span
                className="bg-zinc-50/40 inline-flex items-center rounded-full px-2 py-1 text-[11px] font-medium">
                <code className="font-mono">{swatch.varName}</code>
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

