import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CheckCircle2, Circle, PlayCircle } from "lucide-react";

import { AlgorithmList } from "@/components/AlgorithmList";

import { useProgress } from "@/contexts/ProgressContext";
import { useLang } from "@/i18n/LanguageContext";

import { getCase } from "@/data/utils";
import type { LocalizedText } from "@/data/types";

import { caseKey } from "@/lib/stats";

function plain(text?: LocalizedText) {
  if (!text) return "";
  return typeof text === "string" ? text : text.en ?? text.pt;
}

export const Route = createFileRoute("/puzzles/$puzzleId/submethods/$submethodId/$caseId")({
  loader: ({ params }) => {
    const { puzzle, submethod, item } = getCase(params.puzzleId, params.submethodId, params.caseId);
    if (!puzzle || !submethod || !item) throw notFound();
    return {
      puzzleId: puzzle.id,
      submethodId: submethod.id,
      caseId: item.id,
      name: plain(item.name),
      submethodName: plain(submethod.name),
      algorithm: item.algorithms[0] ?? "",
      execution: plain(item.execution),
    };
  },
  head: ({ loaderData }) => {
    const title = loaderData ? `${loaderData.name} — ${loaderData.submethodName} | Cubix.io` : "Case | Cubix.io";
    const description = (loaderData
      ? `Algorithm ${loaderData.algorithm} — ${loaderData.execution}`
      : "Algorithm case on Cubix.io.").slice(0, 155);
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
  component: CasePage,
});

function CasePage() {
  const { puzzleId, submethodId, caseId } = Route.useLoaderData();
  const { t, tx } = useLang();
  const { isLearned, toggle } = useProgress();
  const { puzzle, submethod, item } = getCase(puzzleId, submethodId, caseId);
  if (!puzzle || !submethod || !item) throw notFound();

  const index = submethod.cases.findIndex((c) => c.id === item.id);
  const prev = index > 0 ? submethod.cases[index - 1]! : null;
  const next = index < submethod.cases.length - 1 ? submethod.cases[index + 1]! : null;

  const key = caseKey(puzzle.id, submethod.id, item.id);
  const learned = isLearned(key);

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-8 sm:py-14">
      <Link
        to="/puzzles/$puzzleId/submethods/$submethodId"
        params={{ puzzleId: puzzle.id, submethodId: submethod.id }}
        className="text-sm text-muted-foreground hover:text-foreground"
      >
        ← {tx(puzzle.name)} · {tx(submethod.name)}
      </Link>

      <div className="mt-6 grid grid-cols-[minmax(0,1fr)] gap-8 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-center">
        <div className="surface-card grid place-items-center p-5">
          {item.getDiagram(item.diagram, 210)}
        </div>
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {tx(submethod.name)} {item.group ? ` - ${tx(item.group)}` : ""}
          </p>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">{tx(item.name)}</h1>
          <p className="mt-3 text-muted-foreground">{tx(item.execution)}</p>
          <button
            onClick={() => toggle(key)}
            className={
              learned
                ? "mt-6 inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-semibold text-cube-green"
                : "mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            }
          >
            {learned ? <CheckCircle2 className="h-4 w-4" /> : <Circle className="h-4 w-4" />}
            {learned ? t.common.caseLearned : t.common.markLearned}
          </button>
        </div>
      </div>

      <section className="mt-12">
        <AlgorithmList algs={item.algorithms} itemKey={key} />
      </section>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {item.memoTip && (
          <section className="surface-card p-5">
            <h2 className="text-lg font-semibold">{t.caseIdPag.memoTips}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{tx(item.memoTip)}</p>
          </section>
        )}
        {item.execution && (
          <section className="surface-card p-5">
            <h2 className="text-lg font-semibold">{t.caseIdPag.execTips}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{tx(item.execution)}</p>
          </section>
        )}
      </div>

      {item.videoUrl && (
        <a
          href={item.videoUrl}
          target="_blank"
          rel="noreferrer"
          className="surface-card surface-card-hover mt-10 flex items-center gap-3 p-5"
        >
          <PlayCircle className="h-6 w-6 shrink-0 text-primary" />
          <span className="min-w-0">
            <span className="block font-semibold">{t.caseIdPag.videoTutorial}</span>
            <span className="block truncate text-sm text-muted-foreground">{t.caseIdPag.watchVideo}</span>
          </span>
        </a>
      )}

      <nav className="mt-14 grid grid-cols-2 gap-3">
        {prev ? (
          <Link
            to="/puzzles/$puzzleId/submethods/$submethodId/$caseId"
            params={{ puzzleId: puzzle.id, submethodId: submethod.id, caseId: prev.id }}
            className="surface-card surface-card-hover flex min-w-0 items-center gap-3 p-4"
          >
            <ArrowLeft className="h-4 w-4 shrink-0 text-muted-foreground" />
            <span className="min-w-0">
              <span className="block text-xs text-muted-foreground">{t.caseIdPag.prev}</span>
              <span className="block truncate text-sm font-medium">{tx(prev.name)}</span>
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link
            to="/puzzles/$puzzleId/submethods/$submethodId/$caseId"
            params={{ puzzleId: puzzle.id, submethodId: submethod.id, caseId: next.id }}
            className="surface-card surface-card-hover flex min-w-0 items-center justify-end gap-3 p-4 text-right"
          >
            <span className="min-w-0">
              <span className="block text-xs text-muted-foreground">{t.caseIdPag.next}</span>
              <span className="block truncate text-sm font-medium">{tx(next.name)}</span>
            </span>
            <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground" />
          </Link>
        )}
      </nav>
    </div>
  );
}
