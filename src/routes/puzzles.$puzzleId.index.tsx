import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowRight, Lock } from "lucide-react";

import { PageHeader } from "@/components/AppShell";
import { PuzzleGlyph } from "@/components/CubeDiagram";
import { ProgressBar } from "@/components/ProgressBar";
import { getPuzzle, puzzles } from "@/data/puzzles";
import { difficultyLabel } from "@/data/types";
import { useProgress } from "@/lib/progress";
import { methodKeys, pct } from "@/lib/stats";

export const Route = createFileRoute("/puzzles/$puzzleId/")({
  loader: ({ params }) => {
    const puzzle = getPuzzle(params.puzzleId);
    if (!puzzle) throw notFound();
    return { puzzle };
  },
  head: ({ loaderData }) => {
    const name = loaderData?.puzzle.name ?? "Puzzle";
    const description =
      loaderData?.puzzle.description ?? "Métodos e algoritmos para resolver o puzzle.";
    return {
      meta: [
        { title: `${name} — métodos e algoritmos | CubeLab` },
        { name: "description", content: description },
        { property: "og:title", content: `${name} — métodos e algoritmos | CubeLab` },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        ...(loaderData ? [] : [{ name: "robots", content: "noindex" }]),
      ],
    };
  },
  component: PuzzlePage,
});

function PuzzlePage() {
  const { puzzle } = Route.useLoaderData();
  const { countLearned } = useProgress();
  const others = puzzles.filter((p) => p.id !== puzzle.id).slice(0, 4);

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-8 sm:py-14">
      <Link to="/puzzles" className="text-sm text-muted-foreground hover:text-foreground">
        ← Todos os puzzles
      </Link>

      <div className="mt-6 grid grid-cols-[auto_minmax(0,1fr)] items-center gap-5">
        <PuzzleGlyph swatch={puzzle.swatch} className="h-20 w-20" />
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {puzzle.tagline}
          </p>
          <h1 className="mt-1 truncate text-3xl font-bold sm:text-4xl">{puzzle.name}</h1>
        </div>
      </div>
      <p className="mt-5 max-w-2xl text-muted-foreground">{puzzle.description}</p>

      <div className="mt-12">
        <PageHeader eyebrow="Cursos" title="Métodos disponíveis" />
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {puzzle.methods.map((method) => {
            const keys = methodKeys(puzzle.id, method);
            const done = countLearned(keys);
            const disabled = method.comingSoon || keys.length === 0;
            const content = (
              <>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="min-w-0 text-lg font-semibold">{method.name}</h3>
                  <span className="shrink-0 rounded-full border border-border px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
                    {difficultyLabel[method.difficulty]}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{method.description}</p>
                <ProgressBar
                  className="mt-5"
                  value={pct(done, keys.length)}
                  label="Progresso"
                  hint={disabled ? "Em breve" : `${done}/${keys.length} casos`}
                />
                <span
                  className={
                    disabled
                      ? "mt-5 inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-muted-foreground"
                      : "mt-5 inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground"
                  }
                >
                  {disabled ? (
                    <>
                      <Lock className="h-4 w-4" /> Em breve
                    </>
                  ) : (
                    <>
                      Começar a aprender <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </span>
              </>
            );

            return disabled ? (
              <div key={method.id} className="surface-card flex flex-col p-5 opacity-70">
                {content}
              </div>
            ) : (
              <Link
                key={method.id}
                to="/puzzles/$puzzleId/$methodId"
                params={{ puzzleId: puzzle.id, methodId: method.id }}
                className="surface-card surface-card-hover flex flex-col p-5"
              >
                {content}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-lg font-semibold">Outros puzzles</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {others.map((p) => (
            <Link
              key={p.id}
              to="/puzzles/$puzzleId"
              params={{ puzzleId: p.id }}
              className="rounded-full border border-border px-3.5 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {p.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
