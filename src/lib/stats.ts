import type { Method, Puzzle, Submethod } from "@/data/types";


export function caseKey(puzzleId: string, submethodId: string, caseId: string) {
  return `${puzzleId}/${submethodId}/${caseId}`;
}

export function submethodKeys(puzzleId: string, submethod: Submethod) {
  return submethod.cases.map((c) => caseKey(puzzleId, submethod.id, c.id));
}

export function methodKeys(puzzleId: string, method: Method) {
  const keys = method.submethods.flatMap((s) => submethodKeys(puzzleId, s));
  return Array.from(new Set(keys));
}

export function puzzleKeys(puzzle: Puzzle) {
  const keys = puzzle.methods.flatMap((m) => methodKeys(puzzle.id, m));
  return Array.from(new Set(keys));
}

export function pct(done: number, total: number) {
  return total === 0 ? 0 : (done / total) * 100;
}
