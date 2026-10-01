import { ProgressBar } from "@/components/ProgressBar";
import { SubmethodProgress } from "@/components/SubmethodProgress";

import { useProgress } from "@/contexts/ProgressContext";
import { useLang } from "@/i18n/LanguageContext";

import { Puzzle, Method } from "@/data/types";

import { methodKeys, pct } from "@/lib/stats";


export function MethodProgress ( { puzzle, method, cards }: { puzzle: Puzzle, method: Method, cards: boolean } ) {
  const { countLearned } = useProgress();
  const { tx } = useLang();

  const mKeys = methodKeys(puzzle.id, method);
  const mDone = countLearned(mKeys);

  return cards ? (
    <div className=" mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4" >
      {method.submethods.map((submethod) =>
        <div key={`methodprogress-submethodprogresscard-${submethod.id}`} className="surface-card p-4">
          <SubmethodProgress puzzleId={puzzle.id} submethod={submethod} />
        </div>
      )}
    </div>

  ) : (

    <div className="mt-6 grid gap-4 sm:grid-cols-2">
      <div className="surface-card p-5">
        <ProgressBar
          key={`methodprogress-methodprogressbar-${method.id}`}
          value={pct(mDone, mKeys.length)}
          label={tx(method.name)}
          hint={`${Math.round(pct(mDone, mKeys.length))}%`}
        />
        <div className="mt-5 space-y-3">
          {method.submethods.map((submethod) =>
            <SubmethodProgress
                key={`methodprogress-submethodprogressbar-${submethod.id}`}
                puzzleId={puzzle.id}
                submethod={submethod}
            />
          )}
        </div>
      </div>
    </div>
  )
}
