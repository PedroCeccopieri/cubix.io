import type { CaseItem, Stage } from "@/data/types";
import { NxNTop, NxNIso } from "@/components/diagrams/diagramsGetters";
import {nxntopdiagram, nxnisodiagram} from "@/data/diagramTypes";

const f2lCases: CaseItem[] = [
  {
    id: "f2l-par-basico",
    name: "Par formado — inserção direta",
    group: "Casos fáceis",
    algorithms: ["U' L' U L", "U R"],
    diagram: { face: "ggggggggg", top: "yyyyyyyyy", right: "rrrrrrrrr" },
    getDiagram: (diagram, size, classname) => NxNIso(diagram as nxnisodiagram, 3, size, classname),
    execution: "Com o par canto+aresta já unido no topo, leve-o acima do slot e insira.",
    memoTip: "Todo F2L é uma variação de 'tirar do slot, juntar, devolver'.",
  }
];

const ollCases: CaseItem[] = [
  {
    id: "oll-21",
    name: "OLL 21 — H / Cruz dupla",
    group: "Cruz amarela formada",
    algorithms: ["R U2 R' U' R U R' U' R U' R'"],
    diagram: {top: "xxxxxxxxx", sides: {up: "xxx", right: "xxx", left: "xxx", down: "xxx"}},
    getDiagram: (diagram, size, classname) => NxNTop(diagram as nxntopdiagram, 3, size, classname),
    execution:
      "Comece com a cruz amarela pronta e os quatro cantos virados. Segure com dois cantos amarelos apontando para os lados esquerdo e direito.",
    memoTip: "É o 'Sune duplo': faça um Sune e desfaça-o com o movimento espelhado.",
  }
];

const pllCases: CaseItem[] = [
  {
    id: "pll-aa",
    name: "PLL Aa",
    group: "Permutação de cantos",
    algorithms: ["x R' U R' D2 R U' R' D2 R2", "x' L U' L D2 L' U L D2 L2"],
    diagram: {top: "xxxxxxxxx"},
    getDiagram: (diagram, size, classname) => NxNTop(diagram as nxntopdiagram, 3, size, classname),
    execution: "Três cantos giram no sentido horário. As headlights ficam à esquerda.",
    memoTip: "Aa e Ab são espelhos: mude só o sentido do primeiro U.",
  },
  // {
  //   id: "pll-t",
  //   name: "PLL T",
  //   group: "Cantos e arestas",
  //   algorithm: "R U R' U' R' F R2 U' R' U' R U R' F'",
  //   alternatives: ["R U R' U' R' F R2 U' R' U R U R' F' (variação)"],
  //   diagram: pllDiagram("bob", "rrg", "ggg", "oro", [
  //     { from: 2, to: 8, both: true },
  //     { from: 3, to: 5, both: true },
  //   ]),
  //   execution:
  //     "Segure com as headlights à esquerda. Troca dois cantos adjacentes da direita e duas arestas opostas.",
  //   memoTip: "Sexy move → gatilho F, R2 → sexy inverso → F'. Base de vários outros PLLs.",
  //   videoUrl: "https://www.youtube.com/results?search_query=t+perm",
];

export const cfopStages: Stage[] = [
  {
    id: "f2l",
    name: "F2L",
    description:
      "As duas primeiras camadas resolvidas simultaneamente, encaixando pares de canto e aresta.",
    cases: f2lCases,
  },
  {
    id: "oll",
    name: "OLL",
    description:
      "Orientação da última camada: deixar toda a face de cima amarela em um único algoritmo.",
    cases: ollCases,
  },
  {
    id: "pll",
    name: "PLL",
    description: "Permutação da última camada: colocar cada peça no seu lugar e finalizar o cubo.",
    cases: pllCases,
  },
];