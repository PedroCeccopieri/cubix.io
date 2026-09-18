import { Link, createFileRoute, notFound } from "@tanstack/react-router";

import { PageHeader } from "@/components/AppShell";
import { PuzzleGlyph } from "@/components/diagrams/NxNTopDiagram";
import { MethodCard } from "@/components/MethodCard";

import { getPuzzle, puzzlesList } from "@/data/puzzles";

export const Route = createFileRoute("/puzzles/$puzzleId/")({
  loader: ({ params }) => loaderFunction(params),
  head: ({ loaderData }) => headContent(loaderData),
  component: PuzzlePage
});

function headContent(loaderData: any) {
  const name = loaderData?.puzzle.name ?? "Puzzle";
  const description = loaderData?.puzzle.description ?? "Métodos e algoritmos para resolver o puzzle.";
  
  return {
    meta: [
      { title: `${name} — métodos e algoritmos | Cubix.io` },
      { name: "description", content: description },
      { property: "og:title", content: `${name} — métodos e algoritmos | Cubix.io` },
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
  return { puzzle };
}

function PuzzlePage() {
  const { puzzle } = Route.useLoaderData();
  
  const others = puzzlesList.filter((p) => p.id !== puzzle.id).slice(0, 4);

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-8 sm:py-14">
      <Link to="/puzzles" className="text-sm text-muted-foreground hover:text-foreground">
        ← Todos os puzzles
      </Link>

      <div className="mt-6 grid grid-cols-[auto_minmax(0,1fr)] items-center gap-5">
        <PuzzleGlyph swatch={puzzle.swatch} className="h-20 w-20" />
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary"> {puzzle.tagline} </p>
          <h1 className="mt-1 truncate text-3xl font-bold sm:text-4xl"> {puzzle.name} </h1>
        </div>
      </div>
      <p className="mt-5 max-w-2xl text-muted-foreground"> {puzzle.description} </p>

      <div className="mt-12">
        <PageHeader eyebrow="Cursos" title="Métodos disponíveis" />
         <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {puzzle.methods.map((method) => (<MethodCard key={method.id} puzzle={puzzle} method={method} full={true} />))}
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
