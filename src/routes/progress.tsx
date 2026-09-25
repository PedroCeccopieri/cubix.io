import { createFileRoute } from "@tanstack/react-router";

import { RotateCcw } from "lucide-react";

import { PageHeader } from "@/components/AppShell";
import { ProgressBar } from "@/components/ProgressBar";
import { PuzzleProgress } from "@/components/PuzzleProgress";
import { useLang } from "@/i18n/LanguageContext";

import { useProgress } from "@/contexts/ProgressContext";

import { puzzlesList } from "@/data/puzzles";

import { pct, puzzleKeys } from "@/lib/stats";


export const Route = createFileRoute("/progress")({
  head: headContent,
  component: ProgressPage,
});

function headContent() {
    return { meta: [
      { title: "My progress — Cubix.io" },
      { name: "description", content: "Track the cases you have learned in every method, stage and puzzle, with progress saved in your browser." },
      { property: "og:title", content: "My progress — Cubix.io" },
      { property: "og:description", content: "Learned cases and progress by stage and puzzle in one place." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ]
  }
}

function ProgressPage() {
  const { countLearned, hydrated } = useProgress();
  const { t } = useLang();

  const allKeys = puzzlesList.flatMap(puzzleKeys);
  const totalDone = countLearned(allKeys);

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-8 sm:py-14">
      <PageHeader
        eyebrow={t.progressPag.journeyEyebrow}
        title={t.nav.myProgress}
        description={t.progressPag.progressPageDescription}
        action={resetAllAction()}
      />

      <div className="surface-card mt-8 p-6">
        <p className="text-4xl font-bold">{Math.round(pct(totalDone, allKeys.length))}%</p>
        <p className="mt-1 text-sm text-muted-foreground">
          {hydrated ? t.progressPag.platformLearnedOf(totalDone, allKeys.length) : t.progressPag.loading}
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
  const { t } = useLang();

  return (
    <button
      onClick={resetAll}
      className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
    >
      <RotateCcw className="h-4 w-4" /> {t.progressPag.resetProgress}
    </button>
  );
}
