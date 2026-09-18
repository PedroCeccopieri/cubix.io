import type { Method, Puzzle, Stage } from "@/data/types";


export function caseKey(puzzleId: string, methodId: string, caseId: string) {
  return `${puzzleId}/${methodId}/${caseId}`;
}

export function stageKeys(puzzleId: string, methodId: string, stage: Stage) {
  return stage.cases.map((c) => caseKey(puzzleId, methodId, c.id));
}

export function methodKeys(puzzleId: string, method: Method) {
  return method.stages.flatMap((s) => stageKeys(puzzleId, method.id, s));
}

export function puzzleKeys(puzzle: Puzzle) {
  return puzzle.methods.flatMap((m) => methodKeys(puzzle.id, m));
}

export function pct(done: number, total: number) {
  return total === 0 ? 0 : (done / total) * 100;
}
