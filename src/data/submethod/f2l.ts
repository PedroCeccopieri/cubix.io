import { NxNIso } from "@/components/diagrams/diagramsGetters";

import { CaseItem } from "@/data/types";
import { nxnisodiagram } from "@/data/diagramTypes";


export const f2lCases: CaseItem[] = [
  {
    id: "f2l-par-basico",
    name: { pt: "Par formado — inserção direta", en: "Paired case — direct insertion", es: "Pareja formada — inserción directa" },
    group: { pt: "Casos fáceis", en: "Easy cases", es: "Casos fáciles" },
    algorithms: ["U' L' U L", "U R"],
    diagram: { face: "ggggggggg", top: "yyyyyyyyy", right: "rrrrrrrrr" },
    getDiagram: (diagram, size, classname) => NxNIso(diagram as nxnisodiagram, 3, size, classname),
    execution: {
      pt: "Com o par canto+aresta já unido no topo, leve-o acima do slot e insira.",
      en: "With the corner+edge pair already joined on top, bring it above the slot and insert.",
      es: "Con la pareja esquina-arista ya unida arriba, llévala sobre la ranura e insértala.",
    },
    memoTip: {
      pt: "Todo F2L é uma variação de 'tirar do slot, juntar, devolver'.",
      en: "Every F2L case is a variation of 'take it out of the slot, join it, put it back'.",
      es: "Cada caso de F2L es una variación de 'sacarlo de la ranura, unirlo y devolverlo'.",
    },
  }
];