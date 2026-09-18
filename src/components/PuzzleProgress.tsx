import { Link } from "@tanstack/react-router";

import { ProgressBar } from "@/components/ProgressBar";
import { MethodProgress } from "@/components/MethodProgress";

import { useProgress } from "@/contexts/ProgressContext";

import { Puzzle } from "@/data/types";

import { puzzleKeys, pct } from "@/lib/stats";


export function PuzzleProgress({ puzzle }: { puzzle: Puzzle }) {
  const { countLearned } = useProgress();

  const pKeys = puzzleKeys(puzzle);
  if (pKeys.length === 0) return null;
  const pDone = countLearned(pKeys);

  return (
    <section key={puzzle.id}>
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
        <h2 className="min-w-0 truncate text-lg font-semibold">{puzzle.name}</h2>
          <Link
            to="/puzzles/$puzzleId"
            params={{ puzzleId: puzzle.id }}
            className="shrink-0 text-sm text-primary"
          > 
          Abrir → 
          </Link>
      </div>
      <ProgressBar
        className="mt-3"
        value={pct(pDone, pKeys.length)}
        hint={`${pDone}/${pKeys.length} casos`}
        label="Progresso do puzzle"
      />
      
      {puzzle.methods.filter((m) => m.stages.length > 0).map((method) => 
        <MethodProgress
            key={method.id}
            puzzle={puzzle}
            method={method}
            cards={false}
        />
      )}
    </section>
  )
}
