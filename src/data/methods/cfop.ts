import type { Stage } from "@/data/types";

import { f2lCases } from "@/data/submethod/f2l";
import { ollCases } from "@/data/submethod/oll";
import { pllCases } from "@/data/submethod/pll";


export const cfopStages: Stage[] = [
  {
    id: "f2l",
    name: "F2L",
    description: {
      en: "The first two layers solved simultaneously, fitting corner-and-edge pairs.",
      pt: "As duas primeiras camadas resolvidas simultaneamente, encaixando pares de canto e aresta.",
      // es: "Las dos primeras capas se resuelven simultáneamente encajando parejas de esquina y arista.",
    },
    cases: f2lCases,
  },
  {
    id: "oll",
    name: "OLL",
    description: {
      en: "Last layer orientation: make the entire top face yellow in a single algorithm.",
      pt: "Orientação da última camada: deixar toda a face de cima amarela em um único algoritmo.",
      // es: "Orientación de la última capa: deja toda la cara superior amarilla con un solo algoritmo.",
    },
    cases: ollCases,
  },
  {
    id: "pll",
    name: "PLL",
    description: {
      en: "Last layer permutation: put each piece in its place and finish the cube.",
      pt: "Permutação da última camada: colocar cada peça no seu lugar e finalizar o cubo.",
      // es: "Permutación de la última capa: coloca cada pieza en su lugar y termina el cubo.",
    },
    cases: pllCases,
  },
];
