import { puzzlesList } from "@/data/puzzles";
import { Method } from "@/data/types";

export function getPuzzle(id: string) {
  return puzzlesList.find((p) => p.id === id);
}

export function getMethod(puzzleId: string, methodId: string) {
  const puzzle = getPuzzle(puzzleId);
  return { puzzle, method: puzzle?.methods.find((m) => m.id === methodId) };
}

export function getCase(puzzleId: string, methodId: string, caseId: string) {
  const { puzzle, method } = getMethod(puzzleId, methodId);
  if (!method) return { puzzle, method, stage: undefined, item: undefined };
  for (const stage of method.stages) {
    const item = stage.cases.find((c) => c.id === caseId);
    if (item) return { puzzle, method, stage, item };
  }
  return { puzzle, method, stage: undefined, item: undefined };
}

export function methodCaseIds(method: Method) {
  return method.stages.flatMap((s) => s.cases.map((c) => `${method.id}/${c.id}`));
}

export function allCasesOf(method: Method) {
  return method.stages.flatMap((s) => s.cases.map((c) => ({ stage: s, item: c })));
}

export const totalCasesCount = puzzlesList.reduce((acc, p) => acc + p.methods.reduce((a, m) => a + m.stages.reduce((x, s) => x + s.cases.length, 0), 0),  0);
