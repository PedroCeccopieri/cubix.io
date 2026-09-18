import { ReactElement } from "react";

import { NxNTopDiagram } from "@/components/diagrams/NxNTopDiagram";
import { NxNIsoDiagram } from "@/components/diagrams/NxNIsoDiagram";

import { nxntopdiagram, nxnisodiagram } from "@/data/diagramTypes";


export function NxNTop(diagram: nxntopdiagram, n: number, size: number, classname?: string) : ReactElement {
    return <NxNTopDiagram diagram={diagram} n={n} size={size} className={classname ?? ""} />
}

export function NxNIso(diagram: nxnisodiagram, n: number, size: number, classname?: string) : ReactElement {
    return <NxNIsoDiagram diagram={diagram} n={n} size={size} className={classname ?? ""} />
}