import { Method } from "@/data/types";

import { cfopStages } from "./methods/cfop";

export function soonMethod(id: string, name: string, description: string, difficulty: Method["difficulty"]): Method {
  return { id, name, description, difficulty, stages: [], comingSoon: true };
}

export const cfop: Method = {
  id: "cfop",
  name: "CFOP (Fridrich)",
  shortName: "CFOP",
  description:
    "O método mais usado por speedcubers. Cross, F2L, OLL e PLL em quatro etapas bem definidas.",
  longDescription:
    "O CFOP divide a resolução em quatro etapas: a cruz na face de baixo, as duas primeiras camadas resolvidas em pares, a orientação da última camada e, por fim, a permutação. É o caminho natural para quem quer descer abaixo de 20 segundos.",
  difficulty: 2,
  stages: cfopStages,
};

export const lbl: Method = {
  id: "lbl",
  name: "Método de Camadas (LBL)",
  shortName: "LBL",
  description:
    "O caminho mais direto para resolver o cubo pela primeira vez: uma camada de cada vez.",
  longDescription:
    "Layer by Layer resolve o cubo em sete passos intuitivos com pouquíssimos algoritmos para decorar. É o ponto de partida ideal antes de migrar para o CFOP.",
  difficulty: 1,
  stages: [],
  comingSoon: true,
};

export const roux: Method = {
  id: "roux",
  name: "Roux",
  description:
    "Baseado em blocos e movimentos de M, com poucos algoritmos e contagem de movimentos baixa.",
  difficulty: 3,
  stages: [],
  comingSoon: true,
};

export const zz: Method = {
  id: "zz",
  name: "ZZ",
  description:
    "Orienta todas as arestas logo no começo (EOLine) e elimina rotações durante o F2L.",
  difficulty: 3,
  stages: [],
  comingSoon: true,
};
