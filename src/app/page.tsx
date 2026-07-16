import Button from "../components/ui/Button";

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-4xl font-semibold">Anna Pawl — Portfolio 2.0</h1>
      <p className="mt-2 text-zinc-600">UX Engineer · Designer</p>

      {/* Proof the shared Button works outside vibe-system too.
          Swap the label/href for real content whenever you're ready. */}
      <div className="mt-6">
        <Button>View my work</Button>
      </div>
    </main>
  );
}
