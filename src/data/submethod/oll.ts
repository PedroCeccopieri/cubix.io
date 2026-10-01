import { NxNTop } from "@/components/diagrams/diagramsGetters";

import { CaseItem } from "@/data/types";
import { nxntopdiagram } from "@/data/diagramTypes";


export const ollCases: CaseItem[] = [
  {
    id: "oll-21",
    name: "OLL 21 — H / Cruz dupla",
    group: { pt: "Cruz amarela formada", en: "Yellow cross formed", es: "Cruz amarilla formada" },
    // group: { pt: "Cruz amarela formada" },
    algorithms: ["R U2 R' U' R U R' U' R U' R'"],
    diagram: {top: "xxxxxxxxx", sides: {up: "xxx", right: "xxx", left: "xxx", down: "xxx"}},
    getDiagram: (diagram, size, classname) => NxNTop(diagram as nxntopdiagram, 3, size, classname),
    execution: {
      pt: "Comece com a cruz amarela pronta e os quatro cantos virados. Segure com dois cantos amarelos apontando para os lados esquerdo e direito.",
      en: "Start with the yellow cross done and all four corners twisted. Hold it with two yellow corners pointing to the left and right sides.",
      // es: "Empieza con la cruz amarilla hecha y las cuatro esquinas giradas. Sujétalo con dos esquinas amarillas apuntando a izquierda y derecha.",
    },
    memoTip: {
      pt: "É o 'Sune duplo': faça um Sune e desfaça-o com o movimento espelhado.",
      en: "It's the 'double Sune': do a Sune and undo it with the mirrored move.",
      // es: "Es el 'Sune doble': haz un Sune y deshazlo con el movimiento reflejado.",
    },
  }
];