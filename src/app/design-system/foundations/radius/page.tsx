export default function RadiusSection() {
    return (
        <div>
            <section>
                {/* <h2>Radius</h2> */}
                <p className="max-w-md text-sm text-zinc-500">
                    I'm into soft edges right now - more of a boba than a kiki. My vibe is visual softness applied
                    consistently across surfaces, controls, and interactive elements.
                </p>
            </section>

            <section className="flex w-full max-w-sm justify-between mt-8 space-y-4">
                {[
                    // { name: "None", var: "--radius-none" },
                    { name: "Small", var: "--radius-sm" },
                    { name: "Medium", var: "--radius-md" },
                    { name: "Large", var: "--radius-lg" },
                    // { name: "Full", var: "--radius-full" },
                ].map((item) => (
                    
                        <div key={item.var} className="flex flex-col item-center justify-top gap-6">
                            {/* Preview */}
                            <div
                                className="h-16 w-16 border-2 border-[var(--blue-3)] bg-white"
                                style={{ borderRadius: `var(${item.var})` }}
                            />

                            {/* Metadata */}
                            <div className="flex flex-col justify-center gap-0">
                                <p className="text-sm font-medium ">{item.name}</p>
                                <code className="text-xs text-zinc-500 -mt-4">{item.var}</code>
                            </div>
                        </div>
                    
                ))}
            </section>

        </div>
    )
}