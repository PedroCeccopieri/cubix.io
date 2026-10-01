import { puzzlesList } from "@/data/puzzles";
import { submethodsList } from "@/data/submethods";
import { Method } from "@/data/types";

export function getPuzzle(id: string) {
  return puzzlesList.find((p) => p.id === id);
}

export function getMethod(puzzleId: string, methodId: string) {
  const puzzle = getPuzzle(puzzleId);
  return { puzzle, method: puzzle?.methods.find((m) => m.id === methodId) };
}

export function getSubmethod(puzzleId: string, submethodId: string) {
  const puzzle = getPuzzle(puzzleId);
  const submethod = submethodsList.find((s) => s.puzzleId === puzzleId && s.id === submethodId);
  return { puzzle, submethod };
}

export function getCase(puzzleId: string, submethodId: string, caseId: string) {
  const { puzzle, submethod } = getSubmethod(puzzleId, submethodId);
  const item = submethod?.cases.find((c) => c.id === caseId);
  return { puzzle, submethod, item };
}

/** Methods of the puzzle that reuse this submethod. */
export function methodsUsingSubmethod(puzzleId: string, submethodId: string) {
  const puzzle = getPuzzle(puzzleId);
  return (puzzle?.methods ?? []).filter((m) => m.submethods.some((s) => s.id === submethodId));
}

export function methodCaseIds(method: Method) {
  return method.submethods.flatMap((s) => s.cases.map((c) => `${s.id}/${c.id}`));
}

export function allCasesOf(method: Method) {
  return method.submethods.flatMap((s) => s.cases.map((c) => ({ submethod: s, item: c })));
}

export const totalCasesCount = puzzlesList.reduce(
  (acc, p) =>
    acc +
    new Set(
      p.methods.flatMap((m) => m.submethods.flatMap((s) => s.cases.map((c) => `${s.id}/${c.id}`)))
    ).size,
  0
);
