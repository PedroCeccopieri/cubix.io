import { ReactElement } from "react";

import { PuzzleDiagram } from "@/data/diagramTypes";
import type { DefaultLang, Lang } from "@/i18n/languages";

export type Difficulty = 1 | 2 | 3 | 4 | 5;

export type Sticker = "y" | "w" | "r" | "o" | "b" | "g" | "x";


export type LocalizedText = string | (Record<DefaultLang, string> & Partial<Record<Lang, string>>);

export interface CaseItem {
  id: string;
  name: LocalizedText;
  group?: LocalizedText;
  algorithms: string[];
  diagram: PuzzleDiagram;
  getDiagram: (diagram: PuzzleDiagram, size: number, classname?: string) => (ReactElement);
  execution?: LocalizedText;
  memoTip?: LocalizedText;
  videoUrl?: string;
}

export interface Stage {
  id: string;
  name: LocalizedText;
  description: LocalizedText;
  cases: CaseItem[];
}

export interface Method {
  id: string;
  name: LocalizedText;
  shortName?: LocalizedText;
  description: LocalizedText;
  longDescription?: LocalizedText;
  difficulty: Difficulty;
  stages: Stage[];
  comingSoon?: boolean;
}

export interface Puzzle {
  id: string;
  name: LocalizedText;
  tagline: LocalizedText;
  description: LocalizedText;
  swatch: Sticker[];
  layers: number;
  methods: Method[];
  comingSoon?: boolean;
}

export const difficultyLabel: Record<Difficulty, LocalizedText> = {
  // 1: { pt: "Iniciante", en: "Beginner", es: "Principiante" },
  // 2: { pt: "Intermediário", en: "Intermediate", es: "Intermedio" },
  // 3: { pt: "Avançado", en: "Advanced", es: "Avanzado" },
  // 4: { pt: "Expert", en: "Expert", es: "Experto" },
  // 5: { pt: "Mestre", en: "Master", es: "Maestro" }
  1: { pt: "Iniciante"},
  2: { pt: "Intermediário"},
  3: { pt: "Avançado"},
  4: { pt: "Expert"},
  5: { pt: "Mestre"}
};
