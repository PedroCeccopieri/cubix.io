import { Link, createFileRoute, notFound } from "@tanstack/react-router";

import { CaseCard } from "@/components/CaseCard";
import { DifficultyLabel } from "@/components/DifficultyLabel";
import { MethodProgress } from "@/components/MethodProgress";
import { ProgressBar } from "@/components/ProgressBar";

import { useProgress } from "@/contexts/ProgressContext";

import { getMethod } from "@/data/puzzles";
import { difficultyLabel } from "@/data/types";

import { methodKeys, pct } from "@/lib/stats";

export const Route = createFileRoute("/puzzles/$puzzleId/$methodId/")({
  loader: ({ params }) => loaderFunction(params),
  head: ({ loaderData }) => headContent(loaderData),
  component: MethodPage
});

function headContent(loaderData: any) {
  const title = loaderData ? `${loaderData.method.name} — ${loaderData.puzzle.name} | CubeLab` : "Método | CubeLab";
  const description = loaderData?.method.longDescription ?? loaderData?.method.description ?? "Curso completo com etapas, casos e algoritmos.";
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      ...(loaderData ? [] : [{ name: "robots", content: "noindex" }])
    ]
  }
}

function loaderFunction(params: any) {
  const { puzzle, method } = getMethod(params.puzzleId, params.methodId);
  if (!puzzle || !method) throw notFound();
  return { puzzle, method };
}

function MethodPage() {
  const { puzzle, method } = Route.useLoaderData();
  const { countLearned } = useProgress();

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
          <div className="flex items-center gap-2">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              {difficultyLabel[method.difficulty]}
            </p>
            <DifficultyLabel difficulty={method.difficulty} />
          </div>
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

      <MethodProgress
        key={`methodprogress-${method.id}`}
        puzzle={puzzle}
        method={method}
        cards={true}
      />

      <div className="mt-14 space-y-14">
        {method.stages.map((stage) => (
          <section key={stage.id} id={stage.id}>
            <div className="grid grid-cols-[minmax(0,1fr)] gap-2">
              <h2 className="text-2xl font-bold">{stage.name}</h2>
              <p className="max-w-2xl text-sm text-muted-foreground">{stage.description}</p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {stage.cases.map((item) => (<CaseCard key={`item-${item.id}`} puzzle={puzzle} method={method} item={item}/>))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
