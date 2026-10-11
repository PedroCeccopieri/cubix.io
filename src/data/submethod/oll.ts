import { NxNTop } from "@/components/diagrams/diagramsGetters";

import { CaseItem } from "@/data/types";
import { nxntopdiagram } from "@/data/diagramTypes";


export const ollCases: CaseItem[] = [
  {
    id: "oll-1",
    name: "OLL 1",
    group: {
      en: "Dot",
      pt: "Ponto",
      es: "Punto"
    },
    description: {
      en: "A bar on each side with only the yellow center on top.",
      pt: "Uma barra de cada lado com apenas o centro amarelo em cima.",
      es: "Una barra en cada lado con solo el centro amarillo en el topo.",
    },
    algorithms: [
      "R U2 R2 F R F' U2 R' F R F'",
      "R U B' R B R2 U' R' F R F'",
      "y F' U2 F2 R' F' R U2 F R' F' R y'",
      "R U B' R B R2 U' R' F R F'",
      "y F U R' F R F2 U' F' L F L' y'"
    ],
    diagram: {top: "xxxxyxxxx", sides: {up: "xyx", down: "xyx", left: "yyy", right: "yyy"}},
    getDiagram: (diagram, size, classname) => NxNTop(diagram as nxntopdiagram, 3, size, classname)
  },
  {
    id: "oll-2",
    name: "OLL 2",
    group: {
      en: "Dot",
      pt: "Ponto",
      es: "Punto"
    },
    description: {
      en: "A bar on one side with only the yellow center on top.",
      pt: "Uma barra de um lado com apenas o centro amarelo em cima.",
      es: "Una barra en un lado con solo el centro amarillo en el topo.",
    },
    algorithms: [
      "F R' F' R U2 F R' F' R2 U2 R'",
      "y2 F R U R' U' S R U R' U' Fw' y2",
      "Fw U R U' R' S' U R U' R' F'",
      "y' Rw U Rw' U2 Rw U2 R' U2 R U' Rw' y",
      "y R' F R F' U2 R' F R F2 U2 F y'",
      "F R' F' R U R2 B' R' B U' R'",
      "y L F' L' F U F2 R' F' R U' F' y'",
      "y R U' R2' D' Rw U Rw' D R2 U R' y'"
    ],
    diagram: {top: "xxxxyxxxx", sides: {up: "yyx", down: "xyy", left: "xyx", right: "yyy"}},
    getDiagram: (diagram, size, classname) => NxNTop(diagram as nxntopdiagram, 3, size, classname)
  },
  {
    id: "oll-2",
    name: "OLL 2",
    group: {
      en: "Dot",
      pt: "Ponto",
      es: "Punto"
    },
    description: {
      en: "One yellow corner on the top face on the bottom right.",
      pt: "Um canto amarelo na face de cima no canto inferior direito.",
      es: "Un esquina amarilla en la cara superior en la esquina inferior derecha.",
    },
    algorithms: [
      "F R' F' R U2 F R' F' R2 U2 R'",
      "y2 F R U R' U' S R U R' U' Fw' y2",
      "Fw U R U' R' S' U R U' R' F'",
      "y' Rw U Rw' U2 Rw U2 R' U2 R U' Rw' y",
      "y R' F R F' U2 R' F R F2 U2 F y'",
      "F R' F' R U R2 B' R' B U' R'",
      "y L F' L' F U F2 R' F' R U' F' y'",
      "y R U' R2' D' Rw U Rw' D R2 U R' y'"
    ],
    diagram: {top: "xxxxyxxxx", sides: {up: "yyx", down: "xyy", left: "xyx", right: "yyy"}},
    getDiagram: (diagram, size, classname) => NxNTop(diagram as nxntopdiagram, 3, size, classname)
  },
];