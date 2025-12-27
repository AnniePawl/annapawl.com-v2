type Swatch = {
    name: string;
    varName: string;
    description: string;
    textColor?: string;
};

const SWATCHES: Swatch[] = [
  {
    name: "Coral 300",
    varName: "--pink-1",
    description: "to be defined",
    textColor: "#000000",
  },
  {
    name: "Coral 400",
    varName: "--pink-2",
    description: "to be defined",
    textColor: "#000000",
  },
  {
    name: "Coral 500",
    varName: "--red-1",
    description: "to be defined",
    textColor: "#000000",
  },

  {
    name: "Mint 300",
    varName: "--red-2",
    description: "to be defined",
    textColor: "#000000",
  },
  {
    name: "Mint 400",
    varName: "--mint-1",
    description: "to be defined",
    textColor: "#000000",
  },

  {
    name: "Sky 200",
    varName: "--mint-1",
    description: "to be defined",
    textColor: "#000000",
  },
  {
    name: "Sky 300",
    varName: "--green-1",
    description: "to be defined",
    textColor: "#000000",
  },
  {
    name: "Sky 400",
    varName: "--green-2",
    description: "to be defined",
    textColor: "#000000",
  },
  {
    name: "Sky 600",
    varName: "--blue-1",
    description: "to be defined",
    textColor: "#ffffff",
  },

  {
    name: "Lemon 300",
    varName: "--blue-2",
    description: "to be defined",
    textColor: "#000000",
  },
  {
    name: "Lemon 400",
    varName: "--blue-3",
    description: "to be defined",
    textColor: "#000000",
  },

  {
    name: "Violet 300",
    varName: "--purple-1",
    description: "to be defined",
    textColor: "#000000",
  },
    {
    name: "Violet 400",
    varName: "--purple-2",
    description: "to be defined",
    textColor: "#000000",
  },
];

export default function ColorSwatchesGrid() {
    return (
    <section className="color-tokens space-y-5">
    

            {/* Color Swatch Grid  */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {SWATCHES.map((swatch) => (
                    <article
                        key={swatch.name}
                        className="group rounded-2xl border border-zinc-200 bg-white/70 p-4 shadow-sm backdrop-blur
                   transition hover:-translate-y-0.5 hover:shadow-lg hover:border-zinc-300"
                    >
                        {/* Header */}
                        <div className="flex items-start justify-between gap-3">
                            <div className="space-y-1">
                                <h3 className="text-sm font-semibold tracking-tight text-zinc-900">
                                    {swatch.name}
                                </h3>
                                <p className="text-xs leading-snug text-zinc-500">
                                    {swatch.description}
                                </p>
                            </div>
                            {/* <span className="shrink-0 rounded-full border border-zinc-200 bg-white px-2 py-1 text-[11px] font-medium text-zinc-700">
                                {swatch.varName}
                            </span> */}
                        </div>

                        {/* Swatch preview */}
                        <div className="mt-4 rounded-2xl border border-zinc-200 overflow-hidden">
                            {/* checkerboard background so light colors read */}
                            <div
                                className="h-24 w-full"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(45deg, rgba(0,0,0,.05) 25%, transparent 25%), linear-gradient(-45deg, rgba(0,0,0,.05) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(0,0,0,.05) 75%), linear-gradient(-45deg, transparent 75%, rgba(0,0,0,.05) 75%)",
                                    backgroundSize: "16px 16px",
                                    backgroundPosition: "0 0, 0 8px, 8px -8px, -8px 0px",
                                }}
                            >
                                <div
                                    className="relative h-full w-full"
                                    style={{ backgroundColor: `var(${swatch.varName})` }}
                                >
                                    {/* subtle glossy highlight */}
                                    <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                                        <div className="absolute -top-10 left-0 h-24 w-[140%] rotate-[-8deg] bg-white/25 blur-md" />
                                    </div>

                                    {/* sample label */}
                                    <div className="absolute bottom-3 left-3">
                                        <span
                                            className="rounded-full px-2.5 py-1 text-[11px] font-semibold shadow-sm"
                                            style={{
                                                backgroundColor: "rgba(255,255,255,.75)",
                                                color: "#111",
                                                border: "1px solid rgba(0,0,0,.08)",
                                                backdropFilter: "blur(6px)",
                                            }}
                                        >
                                        
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="mt-3 flex items-center justify-between gap-3">
                            <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-xs">
                                {swatch.varName}
                            </code>

                            <span
                                className="rounded-full px-2 py-1 text-[11px] font-medium"
                                style={{
                                    backgroundColor: `var(${swatch.varName})`,
                                    color: swatch.textColor ? `var(${swatch.textColor})` : "#111",
                                    border: "1px solid rgba(0,0,0,.10)",
                                }}
                            >
                                Token
                            </span>
                        </div>
                    </article>
                ))}
            </div>
        </section>


    )
}