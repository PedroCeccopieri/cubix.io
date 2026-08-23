import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { CheckCircle2, Circle } from "lucide-react";

import { AlgorithmBlock } from "@/components/AlgorithmBlock";
import { CubeDiagram } from "@/components/CubeDiagram";
import { ProgressBar } from "@/components/ProgressBar";
import { getMethod } from "@/data/puzzles";
import { difficultyLabel } from "@/data/types";
import { caseKey, useProgress } from "@/lib/progress";
import { methodKeys, pct, stageKeys } from "@/lib/stats";

export const Route = createFileRoute("/puzzles/$puzzleId/$methodId/")({
  loader: ({ params }) => {
    const { puzzle, method } = getMethod(params.puzzleId, params.methodId);
    if (!puzzle || !method) throw notFound();
    return { puzzle, method };
  },
  head: ({ loaderData }) => {
    const title = loaderData ? `${loaderData.method.name} — ${loaderData.puzzle.name} | CubeLab` : "Método | CubeLab";
    const description =
      loaderData?.method.longDescription ??
      loaderData?.method.description ??
      "Curso completo com etapas, casos e algoritmos.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        ...(loaderData ? [] : [{ name: "robots", content: "noindex" }]),
      ],
    };
  },
  component: MethodPage,
});

function MethodPage() {
  const { puzzle, method } = Route.useLoaderData();
  const { countLearned, isLearned, toggle } = useProgress();

  const keys = methodKeys(puzzle.id, method);
  const done = countLearned(keys);

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-8 sm:py-14">
      <Link
        to="/puzzles/$puzzleId"
        params={{ puzzleId: puzzle.id }}
        className="text-sm text-muted-foreground hover:text-foreground"
      >
        ← {puzzle.name}
      </Link>

      <div className="mt-6 grid grid-cols-[minmax(0,1fr)] gap-6 sm:flex sm:items-end sm:justify-between">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {difficultyLabel[method.difficulty]}
          </p>
          <h1 className="mt-1 text-3xl font-bold sm:text-4xl">{method.name}</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            {method.longDescription ?? method.description}
          </p>
        </div>
        <div className="surface-card w-full shrink-0 p-4 sm:w-56">
          <p className="text-3xl font-bold">{Math.round(pct(done, keys.length))}%</p>
          <p className="mt-1 text-xs text-muted-foreground">
            {done} de {keys.length} casos aprendidos
          </p>
          <ProgressBar className="mt-3" value={pct(done, keys.length)} />
        </div>
      </div>

      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {method.stages.map((stage) => {
          const sKeys = stageKeys(puzzle.id, method.id, stage);
          const sDone = countLearned(sKeys);
          return (
            <div key={stage.id} className="surface-card p-4">
              <ProgressBar
                value={pct(sDone, sKeys.length)}
                label={stage.name}
                hint={`${sDone}/${sKeys.length}`}
                tone={sDone === sKeys.length && sKeys.length > 0 ? "green" : "primary"}
              />
            </div>
          );
        })}
      </div>

      <div className="mt-14 space-y-14">
        {method.stages.map((stage) => (
          <section key={stage.id} id={stage.id}>
            <div className="grid grid-cols-[minmax(0,1fr)] gap-2">
              <h2 className="text-2xl font-bold">{stage.name}</h2>
              <p className="max-w-2xl text-sm text-muted-foreground">{stage.description}</p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {stage.cases.map((item) => {
                const key = caseKey(puzzle.id, method.id, item.id);
                const learned = isLearned(key);
                return (
                  <div key={item.id} className="surface-card surface-card-hover flex flex-col gap-4 p-4">
                    <div className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-4">
                      <CubeDiagram diagram={item.diagram} size={92} />
                      <div className="min-w-0">
                        <Link
                          to="/puzzles/$puzzleId/$methodId/$caseId"
                          params={{ puzzleId: puzzle.id, methodId: method.id, caseId: item.id }}
                          className="block truncate font-semibold hover:text-primary"
                        >
                          {item.name}
                        </Link>
                        {item.group && (
                          <p className="mt-1 truncate text-xs text-muted-foreground">{item.group}</p>
                        )}
                        <p className="mt-2 line-clamp-2 text-xs text-muted-foreground">{item.execution}</p>
                      </div>
                    </div>
                    <AlgorithmBlock algorithm={item.algorithm} />
                    <div className="flex items-center justify-between gap-3">
                      <button
                        onClick={() => toggle(key)}
                        className={
                          learned
                            ? "inline-flex items-center gap-2 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-[color:var(--cube-green)]"
                            : "inline-flex items-center gap-2 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground"
                        }
                      >
                        {learned ? <CheckCircle2 className="h-4 w-4" /> : <Circle className="h-4 w-4" />}
                        {learned ? "Aprendido" : "Marcar como aprendido"}
                      </button>
                      <Link
                        to="/puzzles/$puzzleId/$methodId/$caseId"
                        params={{ puzzleId: puzzle.id, methodId: method.id, caseId: item.id }}
                        className="text-xs font-semibold text-primary"
                      >
                        Estudar caso →
                      </Link>
                    </div>
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
