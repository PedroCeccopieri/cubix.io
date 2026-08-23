import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CheckCircle2, Circle, PlayCircle } from "lucide-react";

import { AlgorithmBlock } from "@/components/AlgorithmBlock";
import { CubeDiagram } from "@/components/CubeDiagram";
import { allCasesOf, getCase } from "@/data/puzzles";
import { caseKey, useProgress } from "@/lib/progress";

export const Route = createFileRoute("/puzzles/$puzzleId/$methodId/$caseId")({
  loader: ({ params }) => {
    const { puzzle, method, stage, item } = getCase(params.puzzleId, params.methodId, params.caseId);
    if (!puzzle || !method || !stage || !item) throw notFound();
    const flat = allCasesOf(method);
    const index = flat.findIndex((c) => c.item.id === item.id);
    return {
      puzzle,
      method,
      stage,
      item,
      prev: index > 0 ? flat[index - 1]!.item : null,
      next: index < flat.length - 1 ? flat[index + 1]!.item : null,
    };
  },
  head: ({ loaderData }) => {
    const title = loaderData
      ? `${loaderData.item.name} — ${loaderData.method.shortName ?? loaderData.method.name} | CubeLab`
      : "Caso | CubeLab";
    const description = loaderData
      ? `Algoritmo ${loaderData.item.algorithm} — ${loaderData.item.execution}`
      : "Caso de algoritmo do CubeLab.";
    return {
      meta: [
        { title },
        { name: "description", content: description.slice(0, 155) },
        { property: "og:title", content: title },
        { property: "og:description", content: description.slice(0, 155) },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        ...(loaderData ? [] : [{ name: "robots", content: "noindex" }]),
      ],
    };
  },
  component: CasePage,
});

const notation = [
  ["R / L / U / D / F / B", "gire a face correspondente 90° no sentido horário"],
  ["R' (linha)", "mesma face, sentido anti-horário"],
  ["R2", "mesma face, meia volta (180°)"],
  ["r / u / f (minúsculo)", "gira duas camadas ao mesmo tempo (wide)"],
  ["M / E / S", "camadas do meio"],
  ["x / y / z", "rotação do cubo inteiro"],
];

function CasePage() {
  const { puzzle, method, stage, item, prev, next } = Route.useLoaderData();
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
          <CubeDiagram diagram={item.diagram} size={210} />
        </div>
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {stage.name}
            {item.group ? ` · ${item.group}` : ""}
          </p>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">{item.name}</h1>
          <p className="mt-3 text-muted-foreground">{item.execution}</p>
          <button
            onClick={() => toggle(key)}
            className={
              learned
                ? "mt-6 inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-semibold text-[color:var(--cube-green)]"
                : "mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            }
          >
            {learned ? <CheckCircle2 className="h-4 w-4" /> : <Circle className="h-4 w-4" />}
            {learned ? "Caso aprendido" : "Marcar como aprendido"}
          </button>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="text-lg font-semibold">Algoritmo</h2>
        <AlgorithmBlock className="mt-3" algorithm={item.algorithm} size="lg" />
        {item.alternatives?.map((alt) => (
          <AlgorithmBlock key={alt} className="mt-3" algorithm={alt} />
        ))}
      </section>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <section className="surface-card p-5">
          <h2 className="text-lg font-semibold">Dicas para memorizar</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            {item.memoTip ??
              "Divida o algoritmo em gatilhos curtos (R U R', F R F') e repita cada bloco devagar antes de juntar tudo."}
          </p>
        </section>
        <section className="surface-card p-5">
          <h2 className="text-lg font-semibold">Dicas de execução</h2>
          <p className="mt-3 text-sm text-muted-foreground">{item.execution}</p>
          <p className="mt-3 text-sm text-muted-foreground">
            Execute devagar dez vezes seguidas antes de tentar velocidade. Consistência vem antes de TPS.
          </p>
        </section>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-semibold">Notação utilizada</h2>
        <dl className="mt-4 grid gap-3 sm:grid-cols-2">
          {notation.map(([sym, meaning]) => (
            <div key={sym} className="rounded-xl border border-border bg-card px-4 py-3">
              <dt className="font-mono text-sm font-semibold">{sym}</dt>
              <dd className="mt-1 text-sm text-muted-foreground">{meaning}</dd>
            </div>
          ))}
        </dl>
      </section>

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
