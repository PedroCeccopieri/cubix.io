import { Link, createFileRoute, notFound } from "@tanstack/react-router";

import { CaseCard } from "@/components/CaseCard";
import { ProgressBar } from "@/components/ProgressBar";

import { useProgress } from "@/contexts/ProgressContext";
import { useLang } from "@/i18n/LanguageContext";

import { getSubmethod, methodsUsingSubmethod } from "@/data/utils";

import { submethodKeys, pct } from "@/lib/stats";

export const Route = createFileRoute("/puzzles/$puzzleId/submethods/$submethodId/")({
  loader: ({ params }) => loaderFunction(params),
  head: ({ loaderData }) => headContent(loaderData),
  component: SubmethodPage,
});

function headContent(loaderData: any) {
  const title = loaderData ? `${loaderData.title} cases — ${loaderData.puzzleName} | Cubix.io` : "Submethod | Cubix.io";
  const description = loaderData?.description ?? "All cases and algorithms of this submethod.";
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
}

function loaderFunction(params: any) {
  const { puzzle, submethod } = getSubmethod(params.puzzleId, params.submethodId);
  if (!puzzle || !submethod) throw notFound();
  return {
    puzzleId: puzzle.id,
    submethodId: submethod.id,
    title: `${typeof submethod.name === "string" ? submethod.name : submethod.name.en ?? submethod.name.pt}`,
    puzzleName: typeof puzzle.name === "string" ? puzzle.name : puzzle.name.en ?? puzzle.name.pt,
    description: typeof submethod.description === "string" ? submethod.description : submethod.description.en ?? submethod.description.pt,
  };
}

function SubmethodPage() {
  const { puzzleId, submethodId } = Route.useLoaderData();
  const { t, tx } = useLang();
  const { countLearned } = useProgress();
  const { puzzle, submethod } = getSubmethod(puzzleId, submethodId);
  if (!puzzle || !submethod) throw notFound();

  const keys = submethodKeys(puzzle.id, submethod);
  const done = countLearned(keys);
  const usedBy = methodsUsingSubmethod(puzzle.id, submethod.id);

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-8 sm:py-14">
      <Link
        to="/puzzles/$puzzleId"
        params={{ puzzleId: puzzle.id }}
        className="text-sm text-muted-foreground hover:text-foreground"
      >
        ← {tx(puzzle.name)}
      </Link>

      <div className="mt-6 grid grid-cols-[minmax(0,1fr)] gap-6 sm:flex sm:items-end sm:justify-between">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {t.submethodPag.eyebrow}
          </p>
          <h1 className="mt-1 text-3xl font-bold sm:text-4xl">{tx(submethod.name)}</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">{tx(submethod.description)}</p>
          {usedBy.length > 0 && (
            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
              <span>{t.submethodPag.usedBy}</span>
              {usedBy.map((m) => (
                <Link
                  key={m.id}
                  to="/puzzles/$puzzleId/$methodId"
                  params={{ puzzleId: puzzle.id, methodId: m.id }}
                  className="rounded-full border border-border px-2.5 py-1 font-medium hover:text-foreground"
                >
                  {tx(m.shortName ?? m.name)}
                </Link>
              ))}
            </div>
          )}
        </div>
        <div className="surface-card w-full shrink-0 p-4 sm:w-56">
          <p className="text-3xl font-bold">{Math.round(pct(done, keys.length))}%</p>
          <p className="mt-1 text-xs text-muted-foreground">{t.methodIdPag.learnedOf(done, keys.length)}</p>
          <ProgressBar className="mt-3" value={pct(done, keys.length)} />
        </div>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {submethod.cases.map((item) => (
          <CaseCard key={`item-${item.id}`} puzzle={puzzle} submethod={submethod} item={item} />
        ))}
      </div>
    </div>
  );
}
