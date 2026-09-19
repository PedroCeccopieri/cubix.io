import type { Puzzle } from "./types";
import { soonMethod, cfop, lbl, roux, zz } from "@/data/methods";

export const puzzlesList: Puzzle[] = [
  {
    id: "3x3",
    name: { pt: "Cubo 3x3", en: "3x3 Cube" },
    tagline: { pt: "O clássico", en: "The classic" },
    description: {
      pt: "O puzzle mais popular do mundo. Comece pelas camadas e evolua até o CFOP completo com OLL e PLL.",
      en: "The most popular puzzle in the world. Start with the layers and work up to full CFOP with OLL and PLL.",
    },
    swatch: ["w", "r", "b", "g", "y", "o", "b", "w", "r"],
    layers: 3,
    methods: [lbl, cfop, roux, zz],
  },
  {
    id: "2x2",
    name: { pt: "Cubo 2x2", en: "2x2 Cube" },
    tagline: "Pocket cube",
    description: {
      pt: "Só cantos. Rápido de aprender e excelente para treinar leitura de casos.",
      en: "Corners only. Quick to learn and great for practicing case recognition.",
    },
    swatch: ["r", "y", "g", "b"],
    layers: 2,
    methods: [
      soonMethod("ortega", "Ortega", {
        pt: "Face, OLL de dois lados e PBL em três passos.",
        en: "First face, two-look OLL and PBL in three steps.",
      }, 2),
      soonMethod("cll", "CLL", {
        pt: "Resolve a última camada em um único algoritmo.",
        en: "Solves the last layer in a single algorithm.",
      }, 3),
    ],
    comingSoon: true,
  },
  {
    id: "4x4",
    name: { pt: "Cubo 4x4", en: "4x4 Cube" },
    tagline: "Revenge",
    description: {
      pt: "Centros, pares de arestas e a redução para 3x3, incluindo os casos de paridade.",
      en: "Centers, edge pairs and the reduction to 3x3, including parity cases.",
    },
    swatch: ["b", "b", "o", "y", "g", "r", "w", "o", "g"],
    layers: 4,
    methods: [
      soonMethod("yau", "Yau", {
        pt: "Redução otimizada com cross feito antes das arestas.",
        en: "Optimized reduction with the cross made before the edges.",
      }, 3),
      soonMethod("reducao", { pt: "Redução", en: "Reduction" }, {
        pt: "O caminho padrão: centros, arestas e depois 3x3.",
        en: "The standard path: centers, edges, then 3x3.",
      }, 2),
    ],
    comingSoon: true,
  },
  {
    id: "5x5",
    name: { pt: "Cubo 5x5", en: "5x5 Cube" },
    tagline: "Professor",
    description: {
      pt: "Redução com centros 3x3 e tripletos de arestas, sem paridade de PLL.",
      en: "Reduction with 3x3 centers and edge triplets, no PLL parity.",
    },
    swatch: ["g", "w", "r", "o", "b", "y", "r", "g", "w"],
    layers: 5,
    methods: [soonMethod("reducao5", { pt: "Redução", en: "Reduction" }, {
      pt: "Centros, arestas e finalização como 3x3.",
      en: "Centers, edges and finishing like a 3x3.",
    }, 3)],
    comingSoon: true,
  },
  {
    id: "6x6",
    name: { pt: "Cubo 6x6", en: "6x6 Cube" },
    tagline: "Big cube",
    description: {
      pt: "Redução em cubos grandes com paridades de arestas duplas.",
      en: "Reduction on big cubes with double edge parities.",
    },
    swatch: ["o", "b", "y", "w", "g", "r", "y", "o", "b"],
    layers: 6,
    methods: [soonMethod("reducao6", { pt: "Redução", en: "Reduction" }, {
      pt: "Centros em blocos e emparelhamento em lote.",
      en: "Block centers and batch edge pairing.",
    }, 3)],
    comingSoon: true,
  },
  {
    id: "7x7",
    name: { pt: "Cubo 7x7", en: "7x7 Cube" },
    tagline: "Big cube",
    description: {
      pt: "O maior cubo do WCA. Paciência, técnica de centros e emparelhamento eficiente.",
      en: "The largest WCA cube. Patience, center technique and efficient pairing.",
    },
    swatch: ["y", "g", "b", "r", "w", "o", "g", "b", "y"],
    layers: 7,
    methods: [soonMethod("reducao7", { pt: "Redução", en: "Reduction" }, {
      pt: "Centros, arestas e 3x3 final.",
      en: "Centers, edges and a final 3x3.",
    }, 3)],
    comingSoon: true,
  },
  {
    id: "pyraminx",
    name: "Pyraminx",
    tagline: { pt: "Tetraedro", en: "Tetrahedron" },
    description: {
      pt: "Quatro faces triangulares, pontas livres e resoluções abaixo de 5 segundos.",
      en: "Four triangular faces, free tips and solves under 5 seconds.",
    },
    swatch: ["r", "g", "y", "b"],
    layers: 3,
    methods: [
      soonMethod("layer-by-layer-pyra", { pt: "Camada por camada", en: "Layer by layer" }, {
        pt: "Resolva a base e finalize o topo.",
        en: "Solve the base and finish the top.",
      }, 1),
      soonMethod("l4e", "L4E", {
        pt: "Últimas quatro arestas em um algoritmo.",
        en: "Last four edges in a single algorithm.",
      }, 3),
    ],
    comingSoon: true,
  },
  {
    id: "skewb",
    name: "Skewb",
    tagline: { pt: "Cortes diagonais", en: "Diagonal cuts" },
    description: {
      pt: "Giros pelos cantos. Poucos algoritmos e muita leitura de peças.",
      en: "Corner turns. Few algorithms and lots of piece tracking.",
    },
    swatch: ["b", "w", "o", "y"],
    layers: 2,
    methods: [soonMethod("sarah", "Sarah's Intermediate", {
      pt: "Face, cantos e centros restantes.",
      en: "Face, corners and remaining centers.",
    }, 2)],
    comingSoon: true,
  },
  {
    id: "megaminx",
    name: "Megaminx",
    tagline: { pt: "Dodecaedro", en: "Dodecahedron" },
    description: {
      pt: "Doze faces, mesma lógica de camadas do 3x3 em escala maior.",
      en: "Twelve faces, the same layer logic of the 3x3 at a larger scale.",
    },
    swatch: ["g", "y", "r", "b", "w", "o", "g", "r", "y"],
    layers: 3,
    methods: [soonMethod("westlund", "Westlund", {
      pt: "Camadas com últimos passos otimizados.",
      en: "Layers with optimized last steps.",
    }, 3)],
    comingSoon: true,
  },
];
