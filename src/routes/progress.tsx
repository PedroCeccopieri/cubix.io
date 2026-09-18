import { createFileRoute } from "@tanstack/react-router";

import { RotateCcw } from "lucide-react";

import { PageHeader } from "@/components/AppShell";
import { ProgressBar } from "@/components/ProgressBar";
import { PuzzleProgress } from "@/components/PuzzleProgress";

import { useProgress } from "@/contexts/ProgressContext";

import { puzzlesList } from "@/data/puzzles";

import { pct, puzzleKeys } from "@/lib/stats";


export const Route = createFileRoute("/progress")({
  head: headContent,
  component: ProgressPage,
});

function headContent() {
    return { meta: [
      { title: "Meu progresso — Cubix.io" },
      { name: "description", content: "Acompanhe quantos casos você já aprendeu em cada método, etapa e puzzle, com percentuais salvos no seu navegador." },
      { property: "og:title", content: "Meu progresso — Cubix.io" },
      { property: "og:description", content: "Casos aprendidos, progresso por etapa e por puzzle em um só lugar." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ]
  }
}

function ProgressPage() {
  const { countLearned, hydrated } = useProgress();

  const allKeys = puzzlesList.flatMap(puzzleKeys);
  const totalDone = countLearned(allKeys);

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-8 sm:py-14">
      <PageHeader
        eyebrow="Sua evolução"
        title="Meu progresso"
        description="Seu progresso fica salvo neste navegador, então você pode voltar quando quiser."
        action={resetAllAction()}
      />

      <div className="surface-card mt-8 p-6">
        <p className="text-4xl font-bold">{Math.round(pct(totalDone, allKeys.length))}%</p>
        <p className="mt-1 text-sm text-muted-foreground">
          {hydrated ? `${totalDone} de ${allKeys.length} casos aprendidos na plataforma` : "Carregando…"}
        </p>
        <ProgressBar className="mt-4" value={pct(totalDone, allKeys.length)} />
      </div>

      <div className="mt-12 space-y-10">
        {puzzlesList.map((puzzle) => 
          <PuzzleProgress key={puzzle.id} puzzle={puzzle} />
        )}
      </div>
    </div>
  );
}

function resetAllAction() {
  const { resetAll } = useProgress();

  return (
    <button
      onClick={resetAll}
      className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
    >
      <RotateCcw className="h-4 w-4" /> Zerar progresso
    </button>
  );
}