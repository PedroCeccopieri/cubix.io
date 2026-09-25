import { ProgressBar } from "@/components/ProgressBar";

import { useProgress } from "@/contexts/ProgressContext";
import { useLang } from "@/i18n/LanguageContext";

import { Stage } from "@/data/types";

import { stageKeys, pct } from "@/lib/stats";


export function StageProgress( { puzzleId, methodId, stage } : { puzzleId: string, methodId: string, stage: Stage } ) {
  const { countLearned } = useProgress();
  const { tx } = useLang();

  const sKeys = stageKeys(puzzleId, methodId, stage);
  const sDone = countLearned(sKeys);

  return (
    <ProgressBar
      value={pct(sDone, sKeys.length)}
      key={stage.id}
      label={tx(stage.name)}
      hint={`${sDone}/${sKeys.length}`}
      tone={sDone === sKeys.length ? "green" : "yellow"}
    />
  )
}
