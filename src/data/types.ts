import { ReactElement } from "react";

import { PuzzleDiagram } from "@/data/diagramTypes";

export type Difficulty = 1 | 2 | 3 | 4 | 5;

export type Sticker = "y" | "w" | "r" | "o" | "b" | "g" | "x";

export interface CaseItem {
  id: string;
  name: string;
  group?: string;
  algorithms: string[];
  diagram: PuzzleDiagram;
  getDiagram: (diagram: PuzzleDiagram, size: number, classname?: string) => (ReactElement);
  execution?: string;
  memoTip?: string;
  videoUrl?: string;
}

export interface Stage {
  id: string;
  name: string;
  description: string;
  cases: CaseItem[];
}

export interface Method {
  id: string;
  name: string;
  shortName?: string;
  description: string;
  longDescription?: string;
  difficulty: Difficulty;
  stages: Stage[];
  comingSoon?: boolean;
}

export interface Puzzle {
  id: string;
  name: string;
  tagline: string;
  description: string;
  swatch: Sticker[];
  layers: number;
  methods: Method[];
  comingSoon?: boolean;
}

export const difficultyLabel: Record<Difficulty, string> = {
  1: "Iniciante",
  2: "Intermediário",
  3: "Avançado",
  4: "Expert",
  5: "Mestre"
};
