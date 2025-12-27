export default function RadiusPage() {
    return (
        <div>
            <section>
                <h2>Radius</h2>
                <p className="max-w-md text-sm text-zinc-500">
                    Border radius tokens define the system’s visual softness and are applied
                    consistently across surfaces, controls, and interactive elements.
                </p>
            </section>
            <section className="mt-8 space-y-4">
                {[
                    { name: "None", var: "--radius-none" },
                    { name: "Small", var: "--radius-sm" },
                    { name: "Medium", var: "--radius-md" },
                    { name: "Large", var: "--radius-lg" },
                    { name: "Full", var: "--radius-full" },
                ].map((item) => (
                    <div key={item.var} className="flex items-center gap-6">
                        {/* Preview */}
                        <div
                            className="h-16 w-16 border bg-white"
                            style={{ borderRadius: `var(${item.var})` }}
                        />

                        {/* Metadata */}
                        <div>
                            <p className="text-sm font-medium">{item.name}</p>
                            <code className="text-xs text-zinc-500">{item.var}</code>
                        </div>
                    </div>
                ))}
            </section>

        </div>
    )
}