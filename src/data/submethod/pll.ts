import { NxNTop } from "@/components/diagrams/diagramsGetters";

import { CaseItem } from "@/data/types";
import { nxntopdiagram } from "@/data/diagramTypes";

export const pllCases: CaseItem[] = [
  {
    id: "pll-aa",
    name: "PLL Aa",
    group: { pt: "Permutação de cantos", en: "Corner permutation", es: "Permutación de esquinas" },
    // group: { pt: "Permutação de cantos" },
    algorithms: ["x R' U R' D2 R U' R' D2 R2", "x' L U' L D2 L' U L D2 L2"],
    diagram: {top: "xxxxxxxxx"},
    getDiagram: (diagram, size, classname) => NxNTop(diagram as nxntopdiagram, 3, size, classname),
    execution: {
      pt: "Três cantos giram no sentido horário. As headlights ficam à esquerda.",
      en: "Three corners rotate clockwise. The headlights face left.",
      // es: "Tres esquinas giran en sentido horario. Los headlights quedan a la izquierda.",
    },
    memoTip: {
      pt: "Aa e Ab são espelhos: mude só o sentido do primeiro U.",
      en: "Aa and Ab are mirrors: only change the direction of the first U.",
      // es: "Aa y Ab son casos espejo: solo cambia la dirección del primer U.",
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