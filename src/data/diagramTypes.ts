
export type PuzzleDiagram = NxNDiagram;

export type NxNDiagram = nxntopdiagram | nxnisodiagram;

export interface nxntopdiagram {
    topStickers: string;
    sidesStickers?: { up: string; right: string; down: string; left: string };
    arrows?: Array<{ from: number; to: number; both?: boolean }>;
}

export interface nxnisodiagram {
    face: string;
    top: string;
    right: string;
}
