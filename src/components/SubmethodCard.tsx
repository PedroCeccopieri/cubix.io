import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { ProgressBar } from "@/components/ProgressBar";

import { useProgress } from "@/contexts/ProgressContext";
import { useLang } from "@/i18n/LanguageContext";

import type { Puzzle, Submethod } from "@/data/types";

import { submethodKeys, pct } from "@/lib/stats";


export function SubmethodCard({ puzzle, submethod }: { puzzle: Puzzle; submethod: Submethod }) {
  const { countLearned } = useProgress();
  const { t, tx } = useLang();

  const keys = submethodKeys(puzzle.id, submethod);
  const done = countLearned(keys);

  return (
    <Link
      to="/puzzles/$puzzleId/submethods/$submethodId"
      params={{ puzzleId: puzzle.id, submethodId: submethod.id }}
      className="surface-card surface-card-hover flex flex-col p-5"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="min-w-0 text-lg font-semibold">{tx(submethod.name)}</h3>
        <span className="shrink-0 rounded-full border border-border px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
          {t.common.casesOf(done, keys.length)}
        </span>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{tx(submethod.description)}</p>
      <ProgressBar
        className="mt-5"
        value={pct(done, keys.length)}
        label={t.common.progress}
        hint={`${Math.round(pct(done, keys.length))}%`}
      />
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
        {t.submethodPag.viewCases} <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  );
}
