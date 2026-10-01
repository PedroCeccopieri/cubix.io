import { ProgressBar } from "@/components/ProgressBar";

import { useProgress } from "@/contexts/ProgressContext";

import { useLang } from "@/i18n/LanguageContext";

import { Submethod } from "@/data/types";

import { submethodKeys, pct } from "@/lib/stats";


export function SubmethodProgress({ puzzleId, submethod }: { puzzleId: string; submethod: Submethod }) {
  const { countLearned } = useProgress();
  const { tx } = useLang();

  const sKeys = submethodKeys(puzzleId, submethod);
  const sDone = countLearned(sKeys);

  return (
    <ProgressBar
      value={pct(sDone, sKeys.length)}
      key={submethod.id}
      label={tx(submethod.name)}
      hint={`${sDone}/${sKeys.length}`}
      tone={sDone === sKeys.length ? "green" : "yellow"}
    />
  );
}
