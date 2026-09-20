import { Lock, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { DifficultyLabel } from "@/components/DifficultyLabel";
import { ProgressBar } from "@/components/ProgressBar";

import { useProgress } from "@/contexts/ProgressContext";
import { useLang } from "@/i18n/LanguageContext";

import type { Puzzle, Method } from "@/data/types";

import { methodKeys,pct } from "@/lib/stats";


export function MethodCard({ puzzle, method, full } : {puzzle: Puzzle, method : Method, full : boolean}) {
    const { countLearned } = useProgress();
    const { t, tx } = useLang();
    const keys = methodKeys(puzzle.id, method);
    const done = countLearned(keys);
    const disabled = method.comingSoon || keys.length === 0;

    const content = (
        <>
        <div className="flex items-start justify-between gap-3">
            <h3 className="min-w-0 text-lg font-semibold">{tx(method.name)}</h3>
            <span className="shrink-0 rounded-full border border-border px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
                <DifficultyLabel difficulty={method.difficulty} />
            </span>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">{tx(method.description)}</p>
        <ProgressBar
            className="mt-5"
            value={pct(done, keys.length)}
            label={t.progress}
            hint={disabled ? t.comingSoon : t.casesOf(done, keys.length)}
        />
        {full && (
            <span
            className={
                disabled
                ? "mt-5 inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-muted-foreground"
                : "mt-5 inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground"
            }
            >
                {disabled ? (<> <Lock className="h-4 w-4" /> {t.comingSoon} </>) : (<> {t.startLearning} <ArrowRight className="h-4 w-4" /> </>)}
            </span>
        )}
        </>
    );

    return disabled ? (
        <div key={method.id} className="surface-card flex flex-col p-5 opacity-70">
            {content}
        </div>
        ) : (
            <Link
                key={method.id}
                to="/puzzles/$puzzleId/$methodId"
                params={{ puzzleId: puzzle.id, methodId: method.id }}
                className="surface-card surface-card-hover flex flex-col p-5"
            >
                {content}
            </Link>
        );
}
