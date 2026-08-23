import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { PuzzleGlyph } from "./CubeDiagram";
import { ProgressBar } from "./ProgressBar";
import type { Puzzle } from "@/data/types";
import { useProgress } from "@/lib/progress";
import { pct, puzzleKeys } from "@/lib/stats";

export function PuzzleCard({ puzzle }: { puzzle: Puzzle }) {
  const { countLearned } = useProgress();
  const keys = puzzleKeys(puzzle);
  const done = countLearned(keys);

  return (
    <Link
      to="/puzzles/$puzzleId"
      params={{ puzzleId: puzzle.id }}
      className="surface-card surface-card-hover group flex flex-col gap-4 p-5"
    >
      <div className="flex items-start justify-between gap-4">
        <PuzzleGlyph swatch={puzzle.swatch} className="h-16 w-16 float-cube" />
        <span className="shrink-0 rounded-full border border-border px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
          {puzzle.comingSoon ? "Em breve" : "Disponível"}
        </span>
      </div>
      <div className="min-w-0">
        <h3 className="truncate text-lg font-semibold">{puzzle.name}</h3>
        <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">{puzzle.description}</p>
      </div>
      {keys.length > 0 && (
        <ProgressBar value={pct(done, keys.length)} label="Seu progresso" hint={`${done}/${keys.length}`} />
      )}
      <div className="mt-auto flex items-center justify-between gap-3 pt-1 text-sm">
        <span className="text-muted-foreground">
          {puzzle.methods.length} {puzzle.methods.length === 1 ? "método" : "métodos"}
        </span>
        <span className="flex items-center gap-1 font-medium text-primary transition-transform group-hover:translate-x-0.5">
          Ver <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
