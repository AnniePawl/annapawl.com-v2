export default function TypographyPage() {

    return (
        <div>
            <section>
                <h2>Typeface</h2>
                <p className="text-xl">
                    Inter is used across the system for UI and content.
                </p>

                <div className="mt-4 space-y-2">
                    <p className="text-3xl font-bold">The quick brown fox jumps over the lazy dog</p>
                    <p className="text-base">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                    <p className="text-base">abcdefghijklmnopqrstuvwxyz</p>
                    <p className="text-base">0123456789</p>
                </div>
            </section>

            <section className="mt-12">
                <h3>Type Scale</h3>

                <div className="space-y-6 mt-4">
                    {[
                        { label: "3XL", var: "--text-3xl" },
                        { label: "2XL", var: "--text-2xl" },
                        { label: "XL", var: "--text-xl" },
                        { label: "Base", var: "--text-base" },
                        { label: "SM", var: "--text-sm" },
                        { label: "XS", var: "--text-xs" },
                    ].map((item) => (
                        <div key={item.var} className="flex items-baseline gap-6">
                            <span className="w-16 text-xs text-zinc-500">{item.label}</span>
                            <p style={{ fontSize: `var(${item.var})` }}>
                                Almost before we knew it, we had left the ground.
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mt-12">
                <h3>Font Weights</h3>

                <div className="space-y-2 mt-4">
                    <p style={{ fontWeight: "var(--font-regular)" }}>Regular — Body copy</p>
                    <p style={{ fontWeight: "var(--font-medium)" }}>Medium — UI labels</p>
                    <p style={{ fontWeight: "var(--font-semibold)" }}>Semibold — Headings</p>
                    <p style={{ fontWeight: "var(--font-bold)" }}>Bold — Emphasis</p>
                </div>
            </section>





        </div>

    )

}