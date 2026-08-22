export type Difficulty = "iniciante" | "intermediario" | "avancado";

/** Sticker codes: y=amarelo, w=branco, r=vermelho, o=laranja, b=azul, g=verde, x=neutro/cinza */
export type Sticker = "y" | "w" | "r" | "o" | "b" | "g" | "x";

export interface CubeDiagram {
  /** 9 stickers da face de cima, lidos da esquerda para a direita, de cima para baixo */
  top: string;
  /** faixas laterais (3 stickers cada), sentido horário a partir do topo */
  sides?: { up: string; right: string; down: string; left: string };
  /** setas de permutação entre posições 0-8 da face de cima */
  arrows?: Array<{ from: number; to: number; both?: boolean }>;
}

export interface CaseItem {
  id: string;
  name: string;
  group?: string;
  algorithm: string;
  alternatives?: string[];
  diagram: CubeDiagram;
  execution: string;
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
  /** cores do mosaico ilustrativo do card */
  swatch: Sticker[];
  layers: number;
  methods: Method[];
  comingSoon?: boolean;
}

export const difficultyLabel: Record<Difficulty, string> = {
  iniciante: "Iniciante",
  intermediario: "Intermediário",
  avancado: "Avançado",
};
