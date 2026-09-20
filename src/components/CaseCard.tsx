import { Link } from "@tanstack/react-router";
import { CheckCircle2, Circle } from "lucide-react";

import { useProgress } from "@/contexts/ProgressContext";
import { usePreferences } from "@/contexts/PreferencesContext";
import { useLang } from "@/i18n/LanguageContext";

import { Puzzle, Method, CaseItem } from "@/data/types";
import { AlgorithmBlock } from "@/components/AlgorithmBlock";

import { caseKey } from "@/lib/stats";




export function CaseCard({ puzzle, method, item } : {puzzle: Puzzle, method : Method, item : CaseItem}) {
    const { isLearned, toggle } = useProgress();
    const { preferences } = usePreferences();
    const { t, tx } = useLang();

    const key = caseKey(puzzle.id, method.id, item.id);
    const learned = isLearned(key);

    const preferenceAlgorithm = (preferences[key] ? item.algorithms[preferences[key]] : item.algorithms[0]) as string;

    return (
        <div key={`casecard-${item.id}`} className="surface-card surface-card-hover flex flex-col gap-4 p-4">
        <div className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-4">
            {item.getDiagram(item.diagram, 92, "shrink-0")}
            <div className="min-w-0">
            <Link
                to="/puzzles/$puzzleId/$methodId/$caseId"
                params={{ puzzleId: puzzle.id, methodId: method.id, caseId: item.id }}
                className="block truncate font-semibold hover:text-primary"
            >
                {tx(item.name)}
            </Link>
            {item.group && (
                <p className="mt-1 truncate text-xs text-muted-foreground">{tx(item.group)}</p>
            )}
            <p className="mt-2 line-clamp-2 text-xs text-muted-foreground">{tx(item.execution)}</p>
            </div>
        </div>
        <AlgorithmBlock algorithm={preferenceAlgorithm} />
        <div className="flex items-center justify-between gap-3">
            <button
            onClick={() => toggle(key)}
            className={
                learned
                ? "inline-flex items-center gap-2 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-[color:var(--cube-green)]"
                : "inline-flex items-center gap-2 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground"
            }
            >
            {learned ? <CheckCircle2 className="h-4 w-4" /> : <Circle className="h-4 w-4" />}
            {learned ? t.learned : t.markLearned}
            </button>
            <Link
            to="/puzzles/$puzzleId/$methodId/$caseId"
            params={{ puzzleId: puzzle.id, methodId: method.id, caseId: item.id }}
            className="text-xs font-semibold text-primary"
            >
            {t.studyCase}
            </Link>
        </div>
        </div>
    );
}
