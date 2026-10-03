import { NxNTop } from "@/components/diagrams/diagramsGetters";

import { CaseItem } from "@/data/types";
import { nxntopdiagram } from "@/data/diagramTypes";

export const pllCases: CaseItem[] = [
  {
    id: "pll-aa",
    name: "PLL Aa",
    description: {
      pt: "Três cantos giram no sentido horário.",
      en: "Three corners rotate clockwise.",
      es: "Tres esquinas giran en sentido horario.",
    },
    algorithms: [
      "x R' U R' D2 R U' R' D2 R2 x'",
      "x' R' D R' U2 R D' R' U2 R2 x",
      "y x' R2 D2 R' U' R D2 R' U R' x y'",
      "y' x L2 D2 L' U' L D2 L' U L' x' y",
      "y' x' L2 U2 L' D' L U2 L' D L' x y",
      "R' F R' B2 R F' R' B2 R2",
      "R' D' R U2 R' D R U' R' D' R U' R' D R",
      "y' R U R' F' Rw U R' U' Rw' F R2 U' R' y",
      "y' Rw U Rw' U' Rw' F Rw2 U' Rw' U' Rw U Rw' F' U y"
    ],
    diagram: {top: "yyyyyyyyy", sides: {up: "obo", down: "bgg", left: "rrb", right: "gor"}, arrows: [{from: 0, to: 2}, {from: 2, to: 8}, {from: 8, to: 0}]},
    getDiagram: (diagram, size, classname) => NxNTop(diagram as nxntopdiagram, 3, size, classname)
  },
  {
    id: "pll-ab",
    name: "PLL Ab",
    description: {
      pt: "Três cantos giram no sentido anti-horário.",
      en: "Three corners rotate counterclockwise.",
      es: "Tres esquinas giran en sentido antihorario.",
    },
    algorithms: [
      "x R2 D2 R U R' D2 R U' R x'",
      "x' R2 U2 R D R' U2 R D' R x",
      "y x' R U' R D2 R' U R D2 R2 x y'",
      "y' x L U' L D2 L' U L D2 L2 x' y",
      "y' x' L D' L U2 L' D L U2 L2 x y",
      "R2 B2 R F R' B2 R F' R",
      "R' D' R U R' D R U R' D' R U2 R' D R",
      "y' R U R2 F' Rw U R U' Rw' F R U' R' y",
      "y2 F Rw U' Rw' U Rw U Rw2 F' Rw U Rw U' Rw' U' y2"
    ],
    diagram: {top: "yyyyyyyyy", sides: {up: "gbr", down: "ogg", left: "rro", right: "bob"}, arrows: [{from: 2, to: 0}, {from: 8, to: 2}, {from: 0, to: 8}]},
    getDiagram: (diagram, size, classname) => NxNTop(diagram as nxntopdiagram, 3, size, classname)
  },
  {
    id: "pll-e",
    name: "PLL E",
    description: {
      pt: "Dois pares de cantos trocados.",
      en: "Two pairs of swapped corners.",
      es: "Dos pares de esquinas intercambiadas.",
    },
    algorithms: [
      "x R2 D2 R U R' D2 R U' R x'",
      "x' R2 U2 R D R' U2 R D' R x",
      "y x' R U' R D2 R' U R D2 R2 x y'",
      "y' x L U' L D2 L' U L D2 L2 x' y",
      "y' x' L D' L U2 L' D L U2 L2 x y",
      "R2 B2 R F R' B2 R F' R",
      "R' D' R U R' D R U R' D' R U2 R' D R",
      "y' R U R2 F' Rw U R U' Rw' F R U' R' y",
      "y2 F Rw U' Rw' U Rw U Rw2 F' Rw U Rw U' Rw' U' y2"
    ],
    diagram: {top: "yyyyyyyyy", sides: {up: "rbo", down: "ogr", left: "brg", right: "gob"}, arrows: [{from: 0, to: 6, both: true}, {from: 2, to: 8, both: true}]},
    getDiagram: (diagram, size, classname) => NxNTop(diagram as nxntopdiagram, 3, size, classname)
  },
];