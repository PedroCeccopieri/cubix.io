import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CheckCircle2, Circle, PlayCircle } from "lucide-react";

import { AlgorithmList } from "@/components/AlgorithmList";

import { useProgress } from "@/contexts/ProgressContext";

import { allCasesOf, getCase } from "@/data/utils";

import { caseKey } from "@/lib/stats";


export const Route = createFileRoute("/puzzles/$puzzleId/$methodId/$caseId")({
  loader: ({ params }) => loaderFunction(params),
  head: ({ loaderData }) => headContent(loaderData),
  component: CasePage
});

function headContent(loaderData: any) {
  const title = loaderData
    ? `${loaderData.name} — ${loaderData.methodName} | Cubix.io`
    : "Caso | Cubix.io";
  const description = loaderData
    ? `Algoritmo ${loaderData.algorithm} — ${loaderData.execution}`
    : "Caso de algoritmo do Cubix.io.";
  
    return {
      meta: [
        { title },
        { name: "description", content: description.slice(0, 155) },
        { property: "og:title", content: title },
        { property: "og:description", content: description.slice(0, 155) },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        ...(loaderData ? [] : [{ name: "robots", content: "noindex" }])
      ]
    }
}

function loaderFunction(params: any) {
    const { puzzle, method, stage, item } = getCase(params.puzzleId, params.methodId, params.caseId);
    if (!puzzle || !method || !stage || !item) throw notFound();

    return {
      puzzleId: puzzle.id,
      methodId: method.id,
      caseId: item.id,
      name: item.name,
      methodName: method.shortName ?? method.name,
      algorithm: item.algorithms[0] ?? "",
      execution: item.execution ?? ""
    }
  }

function CasePage() {
  const { puzzleId, methodId, caseId } = Route.useLoaderData();
  const { puzzle, method, stage, item } = getCase(puzzleId, methodId, caseId);
  if (!puzzle || !method || !stage || !item) throw notFound();

  const flat = allCasesOf(method);
  const index = flat.findIndex((c) => c.item.id === item.id);
  const prev = index > 0 ? flat[index - 1]!.item : null;
  const next = index < flat.length - 1 ? flat[index + 1]!.item : null;

  const { isLearned, toggle } = useProgress();
  const key = caseKey(puzzle.id, method.id, item.id);
  const learned = isLearned(key);

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-8 sm:py-14">
      <Link
        to="/puzzles/$puzzleId/$methodId"
        params={{ puzzleId: puzzle.id, methodId: method.id }}
        className="text-sm text-muted-foreground hover:text-foreground"
      >
        ← {method.name} · {stage.name}
      </Link>

      <div className="mt-6 grid grid-cols-[minmax(0,1fr)] gap-8 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-center">
        <div className="surface-card grid place-items-center p-5">
          {item.getDiagram(item.diagram, 210)}
        </div>
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {stage.name} {item.group ? ` - ${item.group}` : ""}
          </p>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl"> {item.name} </h1>
          <p className="mt-3 text-muted-foreground">{item.execution}</p>
          <button
            onClick={() => toggle(key)}
            className={
              learned
                ? "mt-6 inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-semibold text-cube-green"
                : "mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            }
          >
            {learned ? <CheckCircle2 className="h-4 w-4" /> : <Circle className="h-4 w-4" />}
            {learned ? "Caso aprendido" : "Marcar como aprendido"}
          </button>
        </div>
      </div>

      <section className="mt-12">
        <AlgorithmList algs = {item.algorithms} itemKey={key} />
      </section>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {item.memoTip && (
          <section className="surface-card p-5">
            <h2 className="text-lg font-semibold">Dicas para memorizar</h2>
            <p className="mt-3 text-sm text-muted-foreground">{item.memoTip}</p>
          </section>
        )}
        {item.execution && (
          <section className="surface-card p-5">
            <h2 className="text-lg font-semibold">Dicas de execução</h2>
            <p className="mt-3 text-sm text-muted-foreground">{item.execution}</p>
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
            <span className="block font-semibold">Vídeo tutorial</span>
            <span className="block truncate text-sm text-muted-foreground">
              Assista à execução deste caso em vídeo
            </span>
          </span>
        </a>
      )}

      <nav className="mt-14 grid grid-cols-2 gap-3">
        {prev ? (
          <Link
            to="/puzzles/$puzzleId/$methodId/$caseId"
            params={{ puzzleId: puzzle.id, methodId: method.id, caseId: prev.id }}
            className="surface-card surface-card-hover flex min-w-0 items-center gap-3 p-4"
          >
            <ArrowLeft className="h-4 w-4 shrink-0 text-muted-foreground" />
            <span className="min-w-0">
              <span className="block text-xs text-muted-foreground">Anterior</span>
              <span className="block truncate text-sm font-medium">{prev.name}</span>
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link
            to="/puzzles/$puzzleId/$methodId/$caseId"
            params={{ puzzleId: puzzle.id, methodId: method.id, caseId: next.id }}
            className="surface-card surface-card-hover flex min-w-0 items-center justify-end gap-3 p-4 text-right"
          >
            <span className="min-w-0">
              <span className="block text-xs text-muted-foreground">Próximo</span>
              <span className="block truncate text-sm font-medium">{next.name}</span>
            </span>
            <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground" />
          </Link>
        )}
      </nav>
    </div>
  );
}
