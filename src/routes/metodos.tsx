import { Link, createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/AppShell";
import { ProgressBar } from "@/components/ProgressBar";
import { puzzles } from "@/data/puzzles";
import { difficultyLabel } from "@/data/types";
import { useProgress } from "@/lib/progress";
import { methodKeys, pct } from "@/lib/stats";

export const Route = createFileRoute("/metodos")({
  head: () => ({
    meta: [
      { title: "Todos os métodos — CubeLab" },
      {
        name: "description",
        content:
          "CFOP, LBL, Roux, ZZ, Ortega, Yau e mais: compare métodos de resolução por puzzle e nível de dificuldade.",
      },
      { property: "og:title", content: "Todos os métodos — CubeLab" },
      {
        property: "og:description",
        content: "Compare métodos de resolução por puzzle, dificuldade e progresso.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MethodsPage,
});

function MethodsPage() {
  const { countLearned } = useProgress();

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-8 sm:py-14">
      <PageHeader
        eyebrow="Biblioteca"
        title="Métodos"
        description="Todos os caminhos de resolução da plataforma, organizados por puzzle."
      />

      <div className="mt-10 space-y-10">
        {puzzles.map((puzzle) => (
          <section key={puzzle.id}>
            <h2 className="text-lg font-semibold">{puzzle.name}</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {puzzle.methods.map((method) => {
                const keys = methodKeys(puzzle.id, method);
                const done = countLearned(keys);
                const available = keys.length > 0 && !method.comingSoon;
                const inner = (
                  <>
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="min-w-0 font-semibold">{method.name}</h3>
                      <span className="shrink-0 rounded-full border border-border px-2.5 py-1 text-[11px] text-muted-foreground">
                        {difficultyLabel[method.difficulty]}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{method.description}</p>
                    <ProgressBar
                      className="mt-4"
                      value={pct(done, keys.length)}
                      label={available ? "Progresso" : "Conteúdo"}
                      hint={available ? `${done}/${keys.length}` : "Em breve"}
                    />
                  </>
                );
                return available ? (
                  <Link
                    key={method.id}
                    to="/puzzles/$puzzleId/$methodId"
                    params={{ puzzleId: puzzle.id, methodId: method.id }}
                    className="surface-card surface-card-hover p-5"
                  >
                    {inner}
                  </Link>
                ) : (
                  <div key={method.id} className="surface-card p-5 opacity-70">
                    {inner}
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
