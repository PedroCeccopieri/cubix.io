import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/AppShell";
import { PuzzleCard } from "@/components/PuzzleCard";
import { puzzles } from "@/data/puzzles";

export const Route = createFileRoute("/puzzles/")({
  head: () => ({
    meta: [
      { title: "Puzzles disponíveis — CubeLab" },
      {
        name: "description",
        content:
          "2x2, 3x3, 4x4, 5x5, 6x6, 7x7, Pyraminx, Skewb e Megaminx: escolha seu puzzle e comece a aprender os métodos.",
      },
      { property: "og:title", content: "Puzzles disponíveis — CubeLab" },
      {
        property: "og:description",
        content: "Escolha entre nove puzzles e comece pelo método ideal para o seu nível.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PuzzlesPage,
});

function PuzzlesPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-8 sm:py-14">
      <PageHeader
        eyebrow="Catálogo"
        title="Puzzles"
        description="Escolha um puzzle para ver os métodos disponíveis, as etapas do curso e todos os casos com algoritmos."
      />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {puzzles.map((p) => (
          <PuzzleCard key={p.id} puzzle={p} />
        ))}
      </div>
    </div>
  );
}
