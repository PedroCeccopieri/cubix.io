import { ProgressBar } from "@/components/ProgressBar";
import { StageProgress } from "@/components/StageProgress";

import { useProgress } from "@/contexts/ProgressContext";

import { Puzzle, Method } from "@/data/types";

import { methodKeys, pct } from "@/lib/stats";


export function MethodProgress ( { puzzle, method, cards }: { puzzle: Puzzle, method: Method, cards: boolean } ) {
  const { countLearned } = useProgress();

  const mKeys = methodKeys(puzzle.id, method);
  const mDone = countLearned(mKeys);

  return cards ? (
    <div className=" mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4" >
      {method.stages.map((stage) => 
        <div key={`methodprogress-stageprogresscard-${stage.id}`} className="surface-card p-4">
          <StageProgress
              puzzleId={puzzle.id}
              methodId={method.id}
              stage={stage}
          />
        </div>
      )}
    </div>

  ) : (

    <div className="mt-6 grid gap-4 sm:grid-cols-2">
      <div className="surface-card p-5">
        <ProgressBar
          key={`methodprogress-methodprogressbar-${method.id}`}
          value={pct(mDone, mKeys.length)}
          label={method.name}
          hint={`${Math.round(pct(mDone, mKeys.length))}%`}
        />
        <div className="mt-5 space-y-3">
          {method.stages.map((stage) => 
            <StageProgress
                key={`methodprogress-stageprogressbar-${stage.id}`}
                puzzleId={puzzle.id}
                methodId={method.id}
                stage={stage}
            />
          )}
        </div>
      </div>
    </div>
  )
}