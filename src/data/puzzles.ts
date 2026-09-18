import { cfopStages } from "./methods/cfop";
import type { Method, Puzzle } from "./types";

const cfop: Method = {
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

const lbl: Method = {
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

const roux: Method = {
  id: "roux",
  name: "Roux",
  description:
    "Baseado em blocos e movimentos de M, com poucos algoritmos e contagem de movimentos baixa.",
  difficulty: 3,
  stages: [],
  comingSoon: true,
};

const zz: Method = {
  id: "zz",
  name: "ZZ",
  description:
    "Orienta todas as arestas logo no começo (EOLine) e elimina rotações durante o F2L.",
  difficulty: 3,
  stages: [],
  comingSoon: true,
};

function soonMethod(id: string, name: string, description: string, difficulty: Method["difficulty"]): Method {
  return { id, name, description, difficulty, stages: [], comingSoon: true };
}

export const puzzlesList: Puzzle[] = [
  {
    id: "3x3",
    name: "Cubo 3x3",
    tagline: "O clássico",
    description:
      "O puzzle mais popular do mundo. Comece pelas camadas e evolua até o CFOP completo com OLL e PLL.",
    swatch: ["w", "r", "b", "g", "y", "o", "b", "w", "r"],
    layers: 3,
    methods: [lbl, cfop, roux, zz],
  },
  {
    id: "2x2",
    name: "Cubo 2x2",
    tagline: "Pocket cube",
    description: "Só cantos. Rápido de aprender e excelente para treinar leitura de casos.",
    swatch: ["r", "y", "g", "b"],
    layers: 2,
    methods: [
      soonMethod("ortega", "Ortega", "Face, OLL de dois lados e PBL em três passos.", 2),
      soonMethod("cll", "CLL", "Resolve a última camada em um único algoritmo.", 3),
    ],
    comingSoon: true,
  },
  {
    id: "4x4",
    name: "Cubo 4x4",
    tagline: "Revenge",
    description: "Centros, pares de arestas e a redução para 3x3, incluindo os casos de paridade.",
    swatch: ["b", "b", "o", "y", "g", "r", "w", "o", "g"],
    layers: 4,
    methods: [
      soonMethod("yau", "Yau", "Redução otimizada com cross feito antes das arestas.", 3),
      soonMethod("reducao", "Redução", "O caminho padrão: centros, arestas e depois 3x3.", 2),
    ],
    comingSoon: true,
  },
  {
    id: "5x5",
    name: "Cubo 5x5",
    tagline: "Professor",
    description: "Redução com centros 3x3 e tripletos de arestas, sem paridade de PLL.",
    swatch: ["g", "w", "r", "o", "b", "y", "r", "g", "w"],
    layers: 5,
    methods: [soonMethod("reducao5", "Redução", "Centros, arestas e finalização como 3x3.", 3)],
    comingSoon: true,
  },
  {
    id: "6x6",
    name: "Cubo 6x6",
    tagline: "Big cube",
    description: "Redução em cubos grandes com paridades de arestas duplas.",
    swatch: ["o", "b", "y", "w", "g", "r", "y", "o", "b"],
    layers: 6,
    methods: [soonMethod("reducao6", "Redução", "Centros em blocos e emparelhamento em lote.", 3)],
    comingSoon: true,
  },
  {
    id: "7x7",
    name: "Cubo 7x7",
    tagline: "Big cube",
    description: "O maior cubo do WCA. Paciência, técnica de centros e emparelhamento eficiente.",
    swatch: ["y", "g", "b", "r", "w", "o", "g", "b", "y"],
    layers: 7,
    methods: [soonMethod("reducao7", "Redução", "Centros, arestas e 3x3 final.", 3)],
    comingSoon: true,
  },
  {
    id: "pyraminx",
    name: "Pyraminx",
    tagline: "Tetraedro",
    description: "Quatro faces triangulares, pontas livres e resoluções abaixo de 5 segundos.",
    swatch: ["r", "g", "y", "b"],
    layers: 3,
    methods: [
      soonMethod("layer-by-layer-pyra", "Camada por camada", "Resolva a base e finalize o topo.", 1),
      soonMethod("l4e", "L4E", "Últimas quatro arestas em um algoritmo.", 3),
    ],
    comingSoon: true,
  },
  {
    id: "skewb",
    name: "Skewb",
    tagline: "Cortes diagonais",
    description: "Giros pelos cantos. Poucos algoritmos e muita leitura de peças.",
    swatch: ["b", "w", "o", "y"],
    layers: 2,
    methods: [soonMethod("sarah", "Sarah's Intermediate", "Face, cantos e centros restantes.", 2)],
    comingSoon: true,
  },
  {
    id: "megaminx",
    name: "Megaminx",
    tagline: "Dodecaedro",
    description: "Doze faces, mesma lógica de camadas do 3x3 em escala maior.",
    swatch: ["g", "y", "r", "b", "w", "o", "g", "r", "y"],
    layers: 3,
    methods: [soonMethod("westlund", "Westlund", "Camadas com últimos passos otimizados.", 3)],
    comingSoon: true,
  },
];

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
