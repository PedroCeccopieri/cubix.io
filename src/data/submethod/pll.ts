import { NxNTop } from "@/components/diagrams/diagramsGetters";

import { CaseItem } from "@/data/types";
import { nxntopdiagram } from "@/data/diagramTypes";

export const pllCases: CaseItem[] = [
  {
    id: "pll-aa",
    name: "PLL Aa",
    group: {
      en: "Corners only",
      pt: "Apenas cantos",
      es: "Solo esquinas"
    },
    description: {
      en: "Three corners swapped clockwise.",
      pt: "Três cantos trocados no sentido horário.",
      es: "Tres esquinas intercambiadas en sentido horario.",
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
    group: {
      en: "Corners only",
      pt: "Apenas cantos",
      es: "Solo esquinas"
    },
    description: {
      en: "Three corners swapped counterclockwise.",
      pt: "Três cantos trocados no sentido anti-horário.",
      es: "Tres esquinas intercambiadas en sentido antihorario.",
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
    group: {
      en: "Corners only",
      pt: "Apenas cantos",
      es: "Solo esquinas"
    },
    description: {
      en: "Two pairs of swapped corners.",
      pt: "Dois pares de cantos trocados.",
      es: "Dos pares de esquinas intercambiadas.",
    },
    algorithms: [
      "x' R U' R' D R U R' D' R U R' D R U' R' D' x",
      "y R2 U R' U' y R U R' U' R U R' U' R U R' y' R U' R2 y'",
      "x' L' U L D' L' U' L D L' U' L D' L' U L D x",
      "x' R U' R' D R U R' Uw2 R' U R D R' U' R y2 x",
      "y R U' L D2 L' U R' L U' R D2 R' U L' y'",
      "R' D' R U R' D R U' R' D' R U' R' D R U' R' D' R U R' D R U"
    ],
    diagram: {top: "yyyyyyyyy", sides: {up: "rbo", down: "ogr", left: "brg", right: "gob"}, arrows: [{from: 0, to: 6, both: true}, {from: 2, to: 8, both: true}]},
    getDiagram: (diagram, size, classname) => NxNTop(diagram as nxntopdiagram, 3, size, classname)
  },
  {
    id: "pll-f",
    name: "PLL F",
    group: {
      en: "Corners and edges",
      pt: "Cantos e meios",
      es: "Esquinas y aristas"
    },
    description: {
      en: "A adjacent pair of corners and an opposite pair of edges swapped.",
      pt: "Um par de cantos adjacentes e um par de meios opostos trocados.",
      es: "Un par de esquinas adyacentes y un par de aristas opuestas intercambiados.",
    },
    algorithms: [
      "R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R",
      "y' R' U R U' R2 F' U' F U x R U R' U' R2 x' U' y",
      "y R' U2 R' Dw' R' F' R2 U' R' U R' F R U' F y2",
      "y' R U R' U' R' U R U2 L' R' U R U' L U' R U' R' y"
    ],
    diagram: {top: "yyyyyyyyy", sides: {up: "bgo", down: "obg", left: "rrr", right: "gob"}, arrows: [{from: 1, to: 7, both: true}, {from: 2, to: 8, both: true}]},
    getDiagram: (diagram, size, classname) => NxNTop(diagram as nxntopdiagram, 3, size, classname)
  },
  {
    id: "pll-ga",
    name: "PLL Ga",
    group: {
      en: "Corners and edges",
      pt: "Cantos e meios",
      es: "Esquinas y aristas"
    },
    description: {
      en: "Three corners and three edges swapped with a visible bar.",
      pt: "Três cantos e três meios trocados com uma barra aparente.",
      es: "Tres esquinas y tres aristas intercambiados con una barra aparente.",
    },
    algorithms: [
      "D' R2 U R' U R' U' R U' R2 U' D R' U R U",
      "R2 Uw R' U R' U' R Uw' R2 y' R' U R y",
      "L2 F2 L' U2 L' U2 F' L' U' L U L F' L2",
      "y' R L U2 R' L' y L' U R' U2 L U' R U2"
    ],
    diagram: {top: "yyyyyyyyy", sides: {up: "org", down: "ggr", left: "bob", right: "rbo"}, arrows: [{from: 1, to: 3}, {from: 3, to: 5}, {from: 5, to: 1}, {from: 0, to: 2}, {from: 2, to: 6}, {from: 6, to: 0}]},
    getDiagram: (diagram, size, classname) => NxNTop(diagram as nxntopdiagram, 3, size, classname)
  },
  {
    id: "pll-gb",
    name: "PLL Gb",
    group: {
      en: "Corners and edges",
      pt: "Cantos e meios",
      es: "Esquinas y aristas"
    },
    description: {
      en: "Three corners and three edges swapped with a visible bar.",
      pt: "Três cantos e três meios trocados com uma barra aparente.",
      es: "Tres esquinas y tres aristas intercambiados con una barra aparente.",
    },
    algorithms: [
      "y' D' R U R' U' D R2 U' R U' R' U R' U R2 U y",
      "y' R U R' y' R2 Uw' R U' R' U R' Uw R2 y2",
      "R2 F' R U R U' R' F' R U2 R' U2 R' F2 R2",
      "R U' L U2 R' U L' y' R' L' U2 R L U2 y"
    ],
    diagram: {top: "yyyyyyyyy", sides: {up: "oro", down: "bgg", left: "rob", right: "gbr"}, arrows: [{from: 1, to: 3}, {from: 3, to: 5}, {from: 5, to: 1}, {from: 0, to: 2}, {from: 2, to: 8}, {from: 8, to: 0}]},
    getDiagram: (diagram, size, classname) => NxNTop(diagram as nxntopdiagram, 3, size, classname)
  },
  {
    id: "pll-gc",
    name: "PLL Gc",
    group: {
      en: "Corners and edges",
      pt: "Cantos e meios",
      es: "Esquinas y aristas"
    },
    description: {
      en: "Three corners and three edges swapped with a visible bar.",
      pt: "Três cantos e três meios trocados com uma barra aparente.",
      es: "Tres esquinas y tres aristas intercambiados con una barra aparente.",
    },
    algorithms: [
      "y' D R' U' R U D' R2 U R' U R U' R U' R2 U' y",
      "y' R' U' R y R2 Uw R' U R U' R U' R2",
      "L2 F L' U' L' U L F L' U2 L U2 L F2 L2",
      "L' U R' U' L U' R y R L U2 R' L' U2 y'"
    ],
    diagram: {top: "yyyyyyyyy", sides: {up: "ror", down: "ggb", left: "obg", right: "bro"}, arrows: [{from: 1, to: 5}, {from: 5, to: 3}, {from: 3, to: 1}, {from: 0, to: 6}, {from: 6, to: 2}, {from: 2, to: 0}]},
    getDiagram: (diagram, size, classname) => NxNTop(diagram as nxntopdiagram, 3, size, classname)
  },
  {
    id: "pll-gd",
    name: "PLL Gd",
    group: {
      en: "Corners and edges",
      pt: "Cantos e meios",
      es: "Esquinas y aristas"
    },
    description: {
      en: "Three corners and three edges swapped with a visible bar.",
      pt: "Três cantos e três meios trocados com uma barra aparente.",
      es: "Tres esquinas y tres aristas intercambiados con una barra aparente.",
    },
    algorithms: [
      "y2 D R2 U' R U' R U R' U R2 U D' R U' R' U' y2",
      "y2 R2 Uw' R U' R U R' Uw R2 y R U' R' y",
      "R2 F2 R U2 R U2 R' F R U R' U' R' F R2",
      "y R' L' U2 R L y' R U' L U2 R' U L' U2"
    ],
    diagram: {top: "yyyyyyyyy", sides: {up: "gor", down: "ogg", left: "rbo", right: "brb"}, arrows: [{from: 1, to: 5}, {from: 5, to: 3}, {from: 3, to: 1}, {from: 0, to: 8}, {from: 8, to: 2}, {from: 2, to: 0}]},
    getDiagram: (diagram, size, classname) => NxNTop(diagram as nxntopdiagram, 3, size, classname)
  },
  {
    id: "pll-h",
    name: "PLL H",
    group: {
      en: "Edges only",
      pt: "Apenas meios",
      es: "Solo aristas"
    },
    description: {
      en: "Two pairs of opposite edges swapped.",
      pt: "Dois pares de meios opostos trocados.",
      es: "Dos pares de aristas opuestos intercambiados.",
    },
    algorithms: [
      "M2 U' M2 U2 M2 U' M2",
      "M2 U M2 U2 M2 U M2",
      "M2 U' M2 U' M2 U' M2 U' M2 U' M2 U",
      "R2 U2 R2 U2 R2 U' R2 U2 R2 U2 R2 U",
      "R L U2 R' L' y' R' L' U2 R L y"
    ],
    diagram: {top: "yyyyyyyyy", sides: {up: "bgb", down: "gbg", left: "ror", right: "oro"}, arrows: [{from: 3, to: 5, both: true}, {from: 1, to: 7, both: true}]},
    getDiagram: (diagram, size, classname) => NxNTop(diagram as nxntopdiagram, 3, size, classname)
  },
  {
    id: "pll-ja",
    name: "PLL Ja",
    group: {
      en: "Corners and edges",
      pt: "Cantos e meios",
      es: "Esquinas y aristas"
    },
    description: {
      en: "A pair of corners and a pair of edges swapped with a complete side.",
      pt: "Um par de cantos e um par de meios trocados com um lado completo.",
      es: "Un par de esquinas y un par de aristas intercambiadas con un lado completo.",
    },
    algorithms: [
      "y2 L' U' L F L' U' L U L F' L2 U L U y2",
      "x R2 F R F' R U2 Rw' U Rw U2 x'",
      "R' U2 R U R' U2 L U' R U L'",
      "y2 L' U2 L U L' U2 R U' L U R' y2",
      "y2 R U' L' U R' U2 L U' L' U2 L y2",
      "y' R' U L' U2 R U' R' U2 R L U' y",
      "y L' U R' U2 L U' L' U2 R L U' y'",
      "y z U' R D' R2 U R' U' R2 U D R' z' y'",
      "y z' D' L U' L2 D L' D' L2 U D L' z y'",
      "y' z D' R U' R2 D R' D' R2 U D R' z' y",
      "y' z' U' L D' L2 U L' U' L2 U D L' z y"
    ],
    diagram: {top: "yyyyyyyyy", sides: {up: "boo", down: "ogg", left: "rrr", right: "gbb"}, arrows: [{from: 2, to: 8, both: true}, {from: 1, to: 5, both: true}]},
    getDiagram: (diagram, size, classname) => NxNTop(diagram as nxntopdiagram, 3, size, classname)
  },
  {
    id: "pll-jb",
    name: "PLL Jb",
    group: {
      en: "Corners and edges",
      pt: "Cantos e meios",
      es: "Esquinas y aristas"
    },
    description: {
      en: "A pair of corners and a pair of edges swapped with a complete side.",
      pt: "Um par de cantos e um par de meios trocados com um lado completo.",
      es: "Un par de esquinas y un par de aristas intercambiadas con un lado completo.",
    },
    algorithms: [
      "R U R' F' R U R' U' R' F R2 U' R' U'",
      "y2 x L2 F' L' F L' U2 Lw U' Lw' U2 x' y2",
      "y2 L U2 L' U' L U2 R' U L' U' R y2",
      "R U2 R' U' R U2 L' U R' U' L",
      "L' U R U' L U2 R' U R U2 R'",
      "y' L U' R U2 L' U L U2 R' L' U y",
      "y R U' L U2 R' U R U2 R' L' U y'",
      "y z D R' U R2 D' R D R2 U' D' R z' y'",
      "y z' U L' D L2 U' L U L2 U' D' L z y'",
      "y' z U R' D R2 U' R U R2 U' D' R z' y",
      "y' z' D L' U L2 D' L D L2 U' D' L z y"
    ],
    diagram: {top: "yyyyyyyyy", sides: {up: "bbo", down: "oog", left: "rrr", right: "ggb"}, arrows: [{from: 2, to: 8, both: true}, {from: 5, to: 7, both: true}]},
    getDiagram: (diagram, size, classname) => NxNTop(diagram as nxntopdiagram, 3, size, classname)
  },
  {
    id: "pll-na",
    name: "PLL Na",
    group: {
      en: "Corners and edges",
      pt: "Cantos e meios",
      es: "Esquinas y aristas"
    },
    description: {
      en: "A pair of opposite corners and a pair of opposite edges swapped.",
      pt: "Um par de cantos oposotos e um par de meios oposotos trocados.",
      es: "Un par de esquinas opuestas y un par de aristas opuestas intercambiadas.",
    },
    algorithms: [
      "R U R' U R U R' F' R U R' U' R' F R2 U' R' U2 R U' R'",
      "L U L' U' R U R' F' R U R' U' R' F R2 U' R' L U' L'",
      "x U Lw2 U L' U' L F L' U' L U L F' L2 U L Lw2 U' B2 x'",
      "(R U' L U2 R' U L')2 U'",
      "(L U' R U2 L' U R')2 U'",
      "z (D R' U R2 D' R U')2 R' z'",
      "z (U R' D R2 U' R D')2 R' z'",
      "z' (U L' D L2 U' L D')2 L' z",
      "z' (D L' U L2 D' L U')2 L' z"
    ],
    diagram: {top: "yyyyyyyyy", sides: {up: "bbg", down: "ggb", left: "oor", right: "rro"}, arrows: [{from: 2, to: 6, both: true}, {from: 3, to: 5, both: true}]},
    getDiagram: (diagram, size, classname) => NxNTop(diagram as nxntopdiagram, 3, size, classname)
  },
  {
    id: "pll-nb",
    name: "PLL Nb",
    group: {
      en: "Corners and edges",
      pt: "Cantos e meios",
      es: "Esquinas y aristas"
    },
    description: {
      en: "A pair of corners and a pair of edges swapped with a complete side.",
      pt: "Um par de cantos e um par de meios trocados com um lado completo.",
      es: "Un par de esquinas y un par de aristas intercambiadas con un lado completo.",
    },
    algorithms: [
      "L' U' L U' L' U' L F L' U' L U L F' L2 U L U2 L' U L",
      "R' U' R U L' U' L F L' U' L U L F' L2 U L R' U R",
      "x U' Rw2 U' R U R' F' R U R' U' R' F R2 U' R' Rw2 U B2 x'",
      "(L' U R' U2 L U' R)2 U",
      "(R' U L' U2 R U' L)2 U",
      "z (U' R D' R2 U R' D)2 R z'",
      "z (D' R U' R2 D R' U)2 R z'",
      "z' (D' L U' L2 D L' U)2 L z",
      "z' (U' L D' L2 U L' D)2 L z"
    ],
    diagram: {top: "yyyyyyyyy", sides: {up: "gbb", down: "bgg", left: "roo", right: "orr"}, arrows: [{from: 0, to: 8, both: true}, {from: 3, to: 5, both: true}]},
    getDiagram: (diagram, size, classname) => NxNTop(diagram as nxntopdiagram, 3, size, classname)
  },
  {
    id: "pll-ra",
    name: "PLL Ra",
    group: {
      en: "Corners and edges",
      pt: "Cantos e meios",
      es: "Esquinas y aristas"
    },
    description: {
      en: "A pair of adjacent corners and a pair of adjacent edges swapped with a bar on the right.",
      pt: "Um par de cantos adjacentes e um par de meios adjacentes trocados com uma barra a direita.",
      es: "Un par de esquinas adyacentes y un par de aristas adyacentes intercambiados con una barra a la derecha.",
    },
    algorithms: [
      "L U2 L' U2 L F' L' U' L U L F L2 U",
      "y R U R' F' R U2 R' U2 R' F R U R U2 R' U' y'",
      "y R U' R' U' R U R D R' U' R D' R' U2 R' U' y'"
    ],
    diagram: {top: "yyyyyyyyy", sides: {up: "obr", down: "grg", left: "rgb", right: "boo"}, arrows: [{from: 0, to: 2, both: true}, {from: 3, to: 7, both: true}]},
    getDiagram: (diagram, size, classname) => NxNTop(diagram as nxntopdiagram, 3, size, classname)
  },
  {
    id: "pll-rb",
    name: "PLL Rb",
    group: {
      en: "Corners and edges",
      pt: "Cantos e meios",
      es: "Esquinas y aristas"
    },
    description: {
      en: "A pair of adjacent corners and a pair of adjacent edges swapped with a bar on the left.",
      pt: "Um par de cantos adjacentes e um par de meios adjacentes trocados com uma barra a esquerda.",
      es: "Un par de esquinas adyacentes y un par de aristas adyacentes intercambiados con una barra a la izquierda.",
    },
    algorithms: [
      "R' U2 R U2 R' F R U R' U' R' F' R2 U'",
      "y' L' U' L F L' U2 L U2 L F' L' U' L' U2 L U y",
      "y' L' U L U L' U' L' D' L U L' D L U2 L U y"
    ],
    diagram: {top: "yyyyyyyyy", sides: {up: "obr", down: "gog", left: "rrb", right: "bgo"}, arrows: [{from: 0, to: 2, both: true}, {from: 5, to: 7, both: true}]},
    getDiagram: (diagram, size, classname) => NxNTop(diagram as nxntopdiagram, 3, size, classname)
  },
  {
    id: "pll-t",
    name: "PLL T",
    group: {
      en: "Corners and edges",
      pt: "Cantos e meios",
      es: "Esquinas y aristas"
    },
    description: {
      en: "A pair of adjacent corners and a pair of opposite edges swapped.",
      pt: "Um par de cantos adjacentes e um par de meios opostos trocados.",
      es: "Un par de esquinas adyacentes y un par de aristas opuestas intercambiados.",
    },
    algorithms: [
      "R U R' U' R' F R2 U' R' U' R U R' F'",
      "R U R' U' R' F R2 U' R' U F' L' U L U2",
    ],
    diagram: {top: "yyyyyyyyy", sides: {up: "bbo", down: "ogg", left: "ror", right: "grb"}, arrows: [{from: 2, to: 8, both: true}, {from: 3, to: 5, both: true}]},
    getDiagram: (diagram, size, classname) => NxNTop(diagram as nxntopdiagram, 3, size, classname)
  },
  {
    id: "pll-ua",
    name: "PLL Ua",
    group: {
      en: "Edges only",
      pt: "Apenas meios",
      es: "Solo aristas"
    },
    description: {
      en: "Three edges swapped counterclockwise.",
      pt: "Três meios trocados no sentido anti-horário.",
      es: "Tres aristas intercambiadas en sentido antihorario.",
    },
    algorithms: [
      "R U' R U R U R U' R' U' R2",
      "L2 U' L' U' L U L U L U' L",
      "y2 R2 U' R' U' R U R U R U' R y2",
      "y2 L U' L U L U L U' L' U' L2 y2",
      "M2 U M U2 M' U M2",
      "y2 M2 U M' U2 M U M2 y2",
      "F2 U' R' L F2 R L' U' F2",
      "L U L' U' R' U' R U2 L U' L' U' R' U R",
      "y2 R U R' U' L' U' L U2 R U' R' U' L' U L y2",
      "y' R2 U S R2 S' R2 U' R2 y",
      "y' R2 U' R2 S R2 S' U R2 y",
      "y L2 U S' L2 S L2 U' L2 y'",
      "y L2 U' L2 S' L2 S U L2 y'"
    ],
    diagram: {top: "yyyyyyyyy", sides: {up: "bbb", down: "gog", left: "rgr", right: "oro"}, arrows: [{from: 3, to: 7}, {from: 5, to: 3}, {from: 7, to: 5}]},
    getDiagram: (diagram, size, classname) => NxNTop(diagram as nxntopdiagram, 3, size, classname)
  },
  {
    id: "pll-ub",
    name: "PLL Ub",
    group: {
      en: "Edges only",
      pt: "Apenas meios",
      es: "Solo aristas"
    },
    description: {
      en: "Three edges swapped clockwise.",
      pt: "Três meios trocados no sentido horário.",
      es: "Tres aristas intercambiadas en sentido horario.",
    },
    algorithms: [
      "R2 U R U R' U' R' U' R' U R'",
      "L' U L' U' L' U' L' U L U L2",
      "y2 R' U R' U' R' U' R' U R U R2 y2",
      "y2 L2 U L U L' U' L' U' L' U L' y2",
      "M2 U' M U2 M' U' M2",
      "y2 M2 U' M' U2 M U' M2 y2",
      "F2 U R' L F2 R L' U F2",
      "R' U' R U L U L' U2 R' U R U L U' L'",
      "y2 L' U' L U R U R' U2 L' U L U R U' R' y2",
      "y' R2 U' S R2 S' R2 U R2 y",
      "y' R2 U R2 S R2 S' U' R2 y",
      "y L2 U' S' L2 S L2 U L2 y'",
      "y L2 U L2 S' L2 S U' L2 y'"
    ],
    diagram: {top: "yyyyyyyyy", sides: {up: "bbb", down: "grg", left: "ror", right: "ogo"}, arrows: [{from: 3, to: 5}, {from: 5, to: 7}, {from: 7, to: 3}]},
    getDiagram: (diagram, size, classname) => NxNTop(diagram as nxntopdiagram, 3, size, classname)
  },
  {
    id: "pll-v",
    name: "PLL V",
    group: {
      en: "Corners and edges",
      pt: "Cantos e meios",
      es: "Esquinas y aristas"
    },
    description: {
      en: "A pair of opposite corners and a pair of adjacent edges swapped with block done.",
      pt: "Um par de cantos opostos e um par de meios adjacentes e trocados com um bloco pronto.",
      es: "Un par de esquinas opuestas y un par de aristas adyacentes intercambiadas con un bloque ya formado.",
    },
    algorithms: [
      "R' U R' U' R D' R' D R' U D' R2 U' R2 D R2",
      "R' U R' Dw' R' F' R2 U' R' U R' F R F y'",
      "R U2 R' U2 L' U R U' L U' L' U R' U' L",
      "R' U R' Dw' R' D R' D' R2 x U' R' U R U x' y'",
      "R' U R U' R' Fw' U' R U2 R' U' R U' R' Fw R"
    ],
    diagram: {top: "yyyyyyyyy", sides: {up: "gob", down: "bgg", left: "rro", right: "obr"}, arrows: [{from: 0, to: 8, both: true}, {from: 1, to: 5, both: true}]},
    getDiagram: (diagram, size, classname) => NxNTop(diagram as nxntopdiagram, 3, size, classname)
  },
  {
    id: "pll-y",
    name: "PLL Y",
    group: {
      en: "Corners and edges",
      pt: "Cantos e meios",
      es: "Esquinas y aristas"
    },
    description: {
      en: "A pair of opposite corners and a pair of adjacent edges swapped, with two visible bars.",
      pt: "Um par de cantos opostos e um par de meios adjacentes trocados com duas barras aparentes.",
      es: "Un par de esquinas opuestas y un par de aristas adyacentes intercambiadas con dos barras aparentes.",
    },
    algorithms: [
      "F R U' R' U' R U R' F' R U R' U' R' F R F'",
      "y' R' U' R U' L U2 R' U2 L' U2 R U' L U' L'",
      "F R' F' R U R U' R2 U' R U Lw U' R' U F x",
      "y' R' U' R U' L U2 R' U2 L' U2 R U' L U' L' U y"
    ],
    diagram: {top: "yyyyyyyyy", sides: {up: "grb", down: "bgg", left: "rbo", right: "oor"}, arrows: [{from: 0, to: 8, both: true}, {from: 1, to: 3, both: true}]},
    getDiagram: (diagram, size, classname) => NxNTop(diagram as nxntopdiagram, 3, size, classname)
  },
  {
    id: "pll-z",
    name: "PLL Z",
    group: {
      en: "Edges only",
      pt: "Apenas meios",
      es: "Solo aristas"
    },
    description: {
      en: "Two pairs of adjacent edges swapped.",
      pt: "Dois pares de meios adjacentes trocados.",
      es: "Dos pares de aristas adyacentes intercambiados.",
    },
    algorithms: [
      "M' U' M2 U' M2 U' M' U2 M2 U",
      "y M' U M2 U M2 U M' U2 M2 U' y'",
      "M2 U M2 U M' U2 M2 U2 M' U2",
      "M' U2 M2 U2 M' U' M2 U' M2 U2",
      "M U' M2 U' M2 U' M U2 M2 U",
      "R U R' U R' U' R' U R U' R' U' R2 U R",
      "y R' U' R U' R U R U' R' U R U R2 U' R' U2 y'"
    ],
    diagram: {top: "yyyyyyyyy", sides: {up: "brb", down: "gog", left: "rbr", right: "ogo"}, arrows: [{from: 1, to: 3, both: true}, {from: 5, to: 7, both: true}]},
    getDiagram: (diagram, size, classname) => NxNTop(diagram as nxntopdiagram, 3, size, classname)
  },
];