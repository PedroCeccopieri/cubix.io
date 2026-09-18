import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/AppShell";
import { MethodCard } from "@/components/MethodCard";

import { puzzlesList } from "@/data/puzzles";

export const Route = createFileRoute("/methods")({
  head: headContent,
  component: MethodsPage,
});

function headContent() {
  return {
    meta: [
      { title: "Todos os métodos — CubeLab" },
      { name: "description", content: "CFOP, LBL, Roux, ZZ, Ortega, Yau e mais: compare métodos por puzzle e nível de dificuldade." },
      { property: "og:title", content: "Todos os métodos — Cubix.io" },
      { property: "og:description", content: "Compare métodos por puzzle, dificuldade e progresso." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ]
  }
}

function MethodsPage() {

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-8 sm:py-14">
      <PageHeader
        eyebrow="Biblioteca"
        title="Métodos"
        description="Todos os caminhos de resolução da plataforma, organizados por puzzle."
      />

      <div className="mt-10 space-y-10">
        {puzzlesList.map((puzzle) => (
          <section key={puzzle.id}>
            <h2 className="text-lg font-semibold">{puzzle.name}</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {puzzle.methods.map((method) => (
                <MethodCard key={method.id} puzzle={puzzle} method={method} full={false} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
