import { Method } from "@/data/types";

import { cfopStages } from "./methods/cfop";

export function soonMethod(id: string, name: Method["name"], description: Method["description"], difficulty: Method["difficulty"]): Method {
  return { id, name, description, difficulty, stages: [], comingSoon: true };
}

export const cfop: Method = {
  id: "cfop",
  name: "CFOP (Fridrich)",
  shortName: "CFOP",
  description: {
    pt: "O método mais usado por speedcubers. Cross, F2L, OLL e PLL em quatro etapas bem definidas.",
    // en: "The most used method among speedcubers. Cross, F2L, OLL and PLL in four well-defined steps.",
    // es: "El método más usado por los speedcubers. Cross, F2L, OLL y PLL en cuatro etapas bien definidas.",
  },
  longDescription: {
    pt: "O CFOP divide a resolução em quatro etapas: a cruz na face de baixo, as duas primeiras camadas resolvidas em pares, a orientação da última camada e, por fim, a permutação. É o caminho natural para quem quer descer abaixo de 20 segundos.",
    // en: "CFOP splits the solve into four steps: the cross on the bottom face, the first two layers solved in pairs, last layer orientation and, finally, permutation. It's the natural path for anyone aiming to get under 20 seconds.",
    // es: "CFOP divide la resolución en cuatro etapas: la cruz en la cara inferior, las dos primeras capas resueltas por parejas, la orientación de la última capa y, por último, la permutación. Es el camino natural para quien quiere bajar de 20 segundos.",
  },
  difficulty: 2,
  stages: cfopStages,
};

export const lbl: Method = {
  id: "lbl",
  // name: { pt: "Método de Camadas (LBL)", en: "Layer by Layer (LBL)", es: "Método por capas (LBL)" },
  name: { pt: "Método de Camadas (LBL)" },
  shortName: "LBL",
  description: {
    pt: "O caminho mais direto para resolver o cubo pela primeira vez: uma camada de cada vez.",
    // en: "The most direct path to solving the cube for the first time: one layer at a time.",
    // es: "La forma más directa de resolver el cubo por primera vez: una capa cada vez.",
  },
  longDescription: {
    pt: "Layer by Layer resolve o cubo em sete passos intuitivos com pouquíssimos algoritmos para decorar. É o ponto de partida ideal antes de migrar para o CFOP.",
    // en: "Layer by Layer solves the cube in seven intuitive steps with very few algorithms to memorize. It's the ideal starting point before moving on to CFOP.",
    // es: "El método por capas resuelve el cubo en siete pasos intuitivos con muy pocos algoritmos que memorizar. Es el punto de partida ideal antes de pasar a CFOP.",
  },
  difficulty: 1,
  stages: [],
  comingSoon: true,
};

export const roux: Method = {
  id: "roux",
  name: "Roux",
  description: {
    pt: "Baseado em blocos e movimentos de M, com poucos algoritmos e contagem de movimentos baixa.",
    // en: "Based on blocks and M moves, with few algorithms and a low move count.",
    // es: "Basado en bloques y movimientos M, con pocos algoritmos y un número reducido de movimientos.",
  },
  difficulty: 3,
  stages: [],
  comingSoon: true,
};

export const zz: Method = {
  id: "zz",
  name: "ZZ",
  description: {
    pt: "Orienta todas as arestas logo no começo (EOLine) e elimina rotações durante o F2L.",
    // en: "Orients all edges right at the start (EOLine) and eliminates rotations during F2L.",
    // es: "Orienta todas las aristas desde el principio (EOLine) y elimina las rotaciones durante F2L.",
  },
  difficulty: 3,
  stages: [],
  comingSoon: true,
};
