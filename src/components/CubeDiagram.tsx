import { cn } from "@/lib/utils";
import type { CubeDiagram as Diagram } from "@/data/types";

const colorMap: Record<string, string> = {
  y: "var(--cube-yellow)",
  w: "var(--cube-white)",
  r: "var(--cube-red)",
  o: "var(--cube-orange)",
  b: "var(--cube-blue)",
  g: "var(--cube-green)",
  x: "var(--cube-neutral)",
  "-": "transparent",
};

function color(ch: string | undefined) {
  return colorMap[ch ?? "x"] ?? colorMap["x"];
}

interface Props {
  diagram: Diagram;
  size?: number;
  className?: string;
}

/** Diagrama de face superior no estilo dos guias de OLL/PLL. */
export function CubeDiagram({ diagram, size = 132, className }: Props) {
  const unit = 100 / 5; // 3 stickers + 2 faixas laterais
  const gap = 1.4;
  const top = diagram.top.padEnd(9, "x").slice(0, 9);
  const sides = diagram.sides;

  const cells = [] as React.ReactNode[];

  for (let i = 0; i < 9; i++) {
    const row = Math.floor(i / 3);
    const col = i % 3;
    cells.push(
      <rect
        key={`t${i}`}
        x={(col + 1) * unit + gap / 2}
        y={(row + 1) * unit + gap / 2}
        width={unit - gap}
        height={unit - gap}
        rx={2.4}
        fill={color(top[i])}
        stroke="oklch(0 0 0 / 0.22)"
        strokeWidth={0.6}
      />,
    );
  }

  if (sides) {
    const strips: Array<[string, (i: number) => { x: number; y: number; w: number; h: number }]> = [
      [sides.up, (i) => ({ x: (i + 1) * unit + gap / 2, y: gap / 2 + unit * 0.42, w: unit - gap, h: unit * 0.55 })],
      [
        sides.right,
        (i) => ({ x: 4 * unit + gap / 2, y: (i + 1) * unit + gap / 2, w: unit * 0.55, h: unit - gap }),
      ],
      [
        sides.down,
        (i) => ({ x: (3 - i) * unit + gap / 2, y: 4 * unit + gap / 2, w: unit - gap, h: unit * 0.55 }),
      ],
      [
        sides.left,
        (i) => ({ x: gap / 2 + unit * 0.42, y: (3 - i) * unit + gap / 2, w: unit * 0.55, h: unit - gap }),
      ],
    ];
    strips.forEach(([strip, pos], s) => {
      for (let i = 0; i < 3; i++) {
        const ch = strip?.[i] ?? "-";
        if (ch === "-") continue;
        const { x, y, w, h } = pos(i);
        cells.push(
          <rect
            key={`s${s}-${i}`}
            x={x}
            y={y}
            width={w}
            height={h}
            rx={1.8}
            fill={color(ch)}
            opacity={ch === "x" ? 0.45 : 1}
            stroke="oklch(0 0 0 / 0.18)"
            strokeWidth={0.5}
          />,
        );
      }
    });
  }

  const center = (idx: number) => ({
    x: ((idx % 3) + 1) * unit + unit / 2,
    y: (Math.floor(idx / 3) + 1) * unit + unit / 2,
  });

  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={cn("shrink-0", className)}
      role="img"
      aria-label="Diagrama do caso no cubo"
    >
      <rect x="0" y="0" width="100" height="100" rx="8" fill="var(--color-muted)" opacity={0.4} />
      {cells}
      <defs>
        <marker id="cube-arrow" markerWidth="5" markerHeight="5" refX="3.6" refY="2" orient="auto">
          <path d="M0,0 L4,2 L0,4 z" fill="var(--color-foreground)" />
        </marker>
      </defs>
      {diagram.arrows?.map((a, i) => {
        const from = center(a.from);
        const to = center(a.to);
        return (
          <line
            key={`a${i}`}
            x1={from.x}
            y1={from.y}
            x2={to.x}
            y2={to.y}
            stroke="var(--color-foreground)"
            strokeWidth={1.4}
            markerEnd="url(#cube-arrow)"
            {...(a.both ? { markerStart: "url(#cube-arrow)" } : {})}
            opacity={0.85}
          />
        );
      })}
    </svg>
  );
}

/** Mosaico simples usado nos cards de puzzle. */
export function PuzzleGlyph({ swatch, className }: { swatch: string[]; className?: string }) {
  const cols = Math.ceil(Math.sqrt(swatch.length));
  return (
    <div
      className={cn(
        "grid gap-1 rounded-xl p-1.5 ring-1 ring-border/60 shadow-[0_10px_24px_-16px_oklch(0_0_0/0.6)]",
        className,
      )}
      style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`, backgroundColor: "var(--color-muted)" }}
      aria-hidden
    >
      {swatch.map((s, i) => (
        <span
          key={i}
          className="aspect-square rounded-[3px]"
          style={{ backgroundColor: color(s) }}
        />
      ))}
    </div>
  );
}
