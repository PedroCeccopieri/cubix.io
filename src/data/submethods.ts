import type { Submethod } from "@/data/types";

import { NxNIso, NxNTop } from "@/components/diagrams/diagramsGetters";
import { nxnisodiagram, nxntopdiagram } from "@/data/diagramTypes";

import { f2lCases } from "@/data/submethod/f2l";
import { ollCases } from "@/data/submethod/oll";
import { pllCases } from "@/data/submethod/pll";

export const f2l: Submethod = {
  id: "f2l",
  puzzleId: "3x3",
  name: "F2L",
  diagram: { face: "xxxgggggg", top: "xxxxxxxxx", right: "xxxrrrrrr" },
  getDiagram: (diagram, size, classname) => NxNIso(diagram as nxnisodiagram, 3, size, classname),
  description: {
    en: "The first two layers solved simultaneously, fitting corner-and-edge pairs.",
    pt: "As duas primeiras camadas resolvidas simultaneamente, encaixando pares de canto e aresta.",
    es: "Las dos primeras capas se resuelven simultáneamente encajando parejas de esquina y arista.",
  },
  cases: f2lCases,
};

export const oll: Submethod = {
  id: "oll",
  puzzleId: "3x3",
  name: "OLL",
  diagram: { top: "xyxyyyyyx", sides : {up: "yxx", down: "yxx", right: "yxx", left: "xxx"} },
  getDiagram: (diagram, size, classname) => NxNTop(diagram as nxntopdiagram, 3, size, classname),
  description: {
    en: "Last layer orientation: make the entire top face yellow in a single algorithm.",
    pt: "Orientação da última camada: deixar toda a face de cima amarela em um único algoritmo.",
    es: "Orientación de la última capa: deja toda la cara superior amarilla con un solo algoritmo.",
  },
  cases: ollCases,
};

export const pll: Submethod = {
  id: "pll",
  puzzleId: "3x3",
  name: "PLL",
  diagram: { top: "yyyyyyyyy", sides : {up: "obo", down: "bgg", right: "gor ", left: "rrb"} },
  getDiagram: (diagram, size, classname) => NxNTop(diagram as nxntopdiagram, 3, size, classname),
  description: {
    en: "Last layer permutation: put each piece in its place and finish the cube.",
    pt: "Permutação da última camada: colocar cada peça no seu lugar e finalizar o cubo.",
    es: "Permutación de la última capa: coloca cada pieza en su lugar y termina el cubo.",
  },
  cases: pllCases,
};

export const submethodsList: Submethod[] = [f2l, oll, pll];
