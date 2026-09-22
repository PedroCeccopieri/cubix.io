import { Link, createFileRoute, notFound } from "@tanstack/react-router";

import { PageHeader } from "@/components/AppShell";
import { PuzzleGlyph } from "@/components/diagrams/NxNTopDiagram";
import { MethodCard } from "@/components/MethodCard";
import { useLang } from "@/i18n/LanguageContext";

import { puzzlesList } from "@/data/puzzles";
import { getPuzzle } from "@/data/utils";

export const Route = createFileRoute("/puzzles/$puzzleId/")({
  loader: ({ params }) => loaderFunction(params),
  head: ({ loaderData }) => headContent(loaderData),
  component: PuzzlePage
});

function headContent(loaderData: any) {
  const name = loaderData?.name?.en ?? "Puzzle";
  const description = loaderData?.description?.en ?? "Methods and algorithms for solving the puzzle.";

  return {
    meta: [
      { title: `${name} — methods and algorithms | Cubix.io` },
      { name: "description", content: description },
      { property: "og:title", content: `${name} — methods and algorithms | Cubix.io` },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      ...(loaderData ? [] : [{ name: "robots", content: "noindex" }])
    ]
  }
}

function loaderFunction(params: any) {
  const puzzle = getPuzzle(params.puzzleId);
  if (!puzzle) throw notFound();
  return { puzzleId: puzzle.id, name: puzzle.name, description: puzzle.description };
}

function PuzzlePage() {
  const { puzzleId } = Route.useLoaderData();
  const { t, tx } = useLang();
  const puzzle = getPuzzle(puzzleId);
  if (!puzzle) throw notFound();


  const others = puzzlesList.filter((p) => p.id !== puzzle.id).slice(0, 4);

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-8 sm:py-14">
      <Link to="/puzzles" className="text-sm text-muted-foreground hover:text-foreground">
        {t.allPuzzlesBack}
      </Link>

      <div className="mt-6 grid grid-cols-[auto_minmax(0,1fr)] items-center gap-5">
        <PuzzleGlyph swatch={puzzle.swatch} className="h-20 w-20" />
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary"> {tx(puzzle.tagline)} </p>
          <h1 className="mt-1 truncate text-3xl font-bold sm:text-4xl"> {tx(puzzle.name)} </h1>
        </div>
      </div>
      <p className="mt-5 max-w-2xl text-muted-foreground"> {tx(puzzle.description)} </p>

      <div className="mt-12">
        <PageHeader eyebrow={t.coursesEyebrow} title={t.availableMethods} />
         <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {puzzle.methods.map((method) => (<MethodCard key={method.id} puzzle={puzzle} method={method} full={true} />))}
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-lg font-semibold">{t.otherPuzzles}</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {others.map((p) => (
            <Link
              key={p.id}
              to="/puzzles/$puzzleId"
              params={{ puzzleId: p.id }}
              className="rounded-full border border-border px-3.5 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {tx(p.name)}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
