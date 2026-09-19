import type { CaseItem, Stage } from "@/data/types";
import { NxNTop, NxNIso } from "@/components/diagrams/diagramsGetters";
import {nxntopdiagram, nxnisodiagram} from "@/data/diagramTypes";

const f2lCases: CaseItem[] = [
  {
    id: "f2l-par-basico",
    name: { pt: "Par formado — inserção direta", en: "Paired case — direct insertion" },
    group: { pt: "Casos fáceis", en: "Easy cases" },
    algorithms: ["U' L' U L", "U R"],
    diagram: { face: "ggggggggg", top: "yyyyyyyyy", right: "rrrrrrrrr" },
    getDiagram: (diagram, size, classname) => NxNIso(diagram as nxnisodiagram, 3, size, classname),
    execution: {
      pt: "Com o par canto+aresta já unido no topo, leve-o acima do slot e insira.",
      en: "With the corner+edge pair already joined on top, bring it above the slot and insert.",
    },
    memoTip: {
      pt: "Todo F2L é uma variação de 'tirar do slot, juntar, devolver'.",
      en: "Every F2L case is a variation of 'take it out of the slot, join it, put it back'.",
    },
  }
];

const ollCases: CaseItem[] = [
  {
    id: "oll-21",
    name: "OLL 21 — H / Cruz dupla",
    group: { pt: "Cruz amarela formada", en: "Yellow cross formed" },
    algorithms: ["R U2 R' U' R U R' U' R U' R'"],
    diagram: {top: "xxxxxxxxx", sides: {up: "xxx", right: "xxx", left: "xxx", down: "xxx"}},
    getDiagram: (diagram, size, classname) => NxNTop(diagram as nxntopdiagram, 3, size, classname),
    execution: {
      pt: "Comece com a cruz amarela pronta e os quatro cantos virados. Segure com dois cantos amarelos apontando para os lados esquerdo e direito.",
      en: "Start with the yellow cross done and all four corners twisted. Hold it with two yellow corners pointing to the left and right sides.",
    },
    memoTip: {
      pt: "É o 'Sune duplo': faça um Sune e desfaça-o com o movimento espelhado.",
      en: "It's the 'double Sune': do a Sune and undo it with the mirrored move.",
    },
  }
];

const pllCases: CaseItem[] = [
  {
    id: "pll-aa",
    name: "PLL Aa",
    group: { pt: "Permutação de cantos", en: "Corner permutation" },
    algorithms: ["x R' U R' D2 R U' R' D2 R2", "x' L U' L D2 L' U L D2 L2"],
    diagram: {top: "xxxxxxxxx"},
    getDiagram: (diagram, size, classname) => NxNTop(diagram as nxntopdiagram, 3, size, classname),
    execution: {
      pt: "Três cantos giram no sentido horário. As headlights ficam à esquerda.",
      en: "Three corners rotate clockwise. The headlights face left.",
    },
    memoTip: {
      pt: "Aa e Ab são espelhos: mude só o sentido do primeiro U.",
      en: "Aa and Ab are mirrors: only change the direction of the first U.",
    },
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
    description: {
      pt: "As duas primeiras camadas resolvidas simultaneamente, encaixando pares de canto e aresta.",
      en: "The first two layers solved simultaneously, fitting corner-and-edge pairs.",
    },
    cases: f2lCases,
  },
  {
    id: "oll",
    name: "OLL",
    description: {
      pt: "Orientação da última camada: deixar toda a face de cima amarela em um único algoritmo.",
      en: "Last layer orientation: make the entire top face yellow in a single algorithm.",
    },
    cases: ollCases,
  },
  {
    id: "pll",
    name: "PLL",
    description: {
      pt: "Permutação da última camada: colocar cada peça no seu lugar e finalizar o cubo.",
      en: "Last layer permutation: put each piece in its place and finish the cube.",
    },
    cases: pllCases,
  },
];
