import { Link, createFileRoute } from "@tanstack/react-router";
import { RotateCcw } from "lucide-react";

import { PageHeader } from "@/components/AppShell";
import { ProgressBar } from "@/components/ProgressBar";
import { puzzles } from "@/data/puzzles";
import { useProgress } from "@/lib/progress";
import { methodKeys, pct, puzzleKeys, stageKeys } from "@/lib/stats";

export const Route = createFileRoute("/progresso")({
  head: () => ({
    meta: [
      { title: "Meu progresso — CubeLab" },
      {
        name: "description",
        content:
          "Acompanhe quantos casos você já aprendeu em cada método, etapa e puzzle, com percentuais salvos no seu navegador.",
      },
      { property: "og:title", content: "Meu progresso — CubeLab" },
      {
        property: "og:description",
        content: "Casos aprendidos, progresso por etapa e por puzzle em um só lugar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProgressPage,
});

function ProgressPage() {
  const { countLearned, resetAll, hydrated } = useProgress();

  const allKeys = puzzles.flatMap(puzzleKeys);
  const totalDone = countLearned(allKeys);

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-8 sm:py-14">
      <PageHeader
        eyebrow="Sua evolução"
        title="Meu progresso"
        description="Seu progresso fica salvo neste navegador, então você pode voltar quando quiser."
        action={
          <button
            onClick={resetAll}
            className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <RotateCcw className="h-4 w-4" /> Zerar progresso
          </button>
        }
      />

      <div className="surface-card mt-8 p-6">
        <p className="text-4xl font-bold">{Math.round(pct(totalDone, allKeys.length))}%</p>
        <p className="mt-1 text-sm text-muted-foreground">
          {hydrated ? `${totalDone} de ${allKeys.length} casos aprendidos na plataforma` : "Carregando…"}
        </p>
        <ProgressBar className="mt-4" value={pct(totalDone, allKeys.length)} />
      </div>

      <div className="mt-12 space-y-10">
        {puzzles.map((puzzle) => {
          const pKeys = puzzleKeys(puzzle);
          if (pKeys.length === 0) return null;
          const pDone = countLearned(pKeys);
          return (
            <section key={puzzle.id}>
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
                <h2 className="min-w-0 truncate text-lg font-semibold">{puzzle.name}</h2>
                <Link
                  to="/puzzles/$puzzleId"
                  params={{ puzzleId: puzzle.id }}
                  className="shrink-0 text-sm text-primary"
                >
                  Abrir →
                </Link>
              </div>
              <ProgressBar
                className="mt-3"
                value={pct(pDone, pKeys.length)}
                hint={`${pDone}/${pKeys.length} casos`}
                label="Progresso do puzzle"
              />

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {puzzle.methods
                  .filter((m) => m.stages.length > 0)
                  .map((method) => {
                    const mKeys = methodKeys(puzzle.id, method);
                    const mDone = countLearned(mKeys);
                    return (
                      <div key={method.id} className="surface-card p-5">
                        <ProgressBar
                          value={pct(mDone, mKeys.length)}
                          label={method.name}
                          hint={`${Math.round(pct(mDone, mKeys.length))}%`}
                        />
                        <div className="mt-5 space-y-3">
                          {method.stages.map((stage) => {
                            const sKeys = stageKeys(puzzle.id, method.id, stage);
                            const sDone = countLearned(sKeys);
                            return (
                              <ProgressBar
                                key={stage.id}
                                value={pct(sDone, sKeys.length)}
                                label={stage.name}
                                hint={`${sDone}/${sKeys.length}`}
                                tone={sDone === sKeys.length ? "green" : "yellow"}
                              />
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
