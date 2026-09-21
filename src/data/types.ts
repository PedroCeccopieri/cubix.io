import { ReactElement } from "react";

import { PuzzleDiagram } from "@/data/diagramTypes";
import { DEFAULT_LANG, type Lang } from "@/i18n/languages";

export type Difficulty = 1 | 2 | 3 | 4 | 5;

export type Sticker = "y" | "w" | "r" | "o" | "b" | "g" | "x";

/**
 * Texto simples (mesmo em todos os idiomas) ou traduzido por idioma.
 * O idioma padrão é obrigatório; os demais são opcionais e caem no padrão
 * quando a tradução ainda não existir.
 */
export type LocalizedText =
  | string
  | ({ [DEFAULT_LANG]: string } & Partial<Record<Lang, string>>);

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
  1: { pt: "Iniciante", en: "Beginner" },
  2: { pt: "Intermediário", en: "Intermediate" },
  3: { pt: "Avançado", en: "Advanced" },
  4: { pt: "Expert", en: "Expert" },
  5: { pt: "Mestre", en: "Master" }
};
