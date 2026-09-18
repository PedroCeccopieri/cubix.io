import type { nxntopdiagram } from "@/data/diagramTypes";

import { color } from "@/lib/colors";
import { cn } from "@/lib/utils";

export function NxNTopDiagram (
  { 
    diagram,
    n,
    size = 132,
    className
  } : {
    diagram: nxntopdiagram;
    n: number;
    size?: number;
    className?: string
  }
) {

  const unit = 100 / (n + 2);
  const gap = 1.5;
  
  const top = diagram.topStickers.padEnd(n*n, "x").slice(0, n*n);
  const sides = diagram.sidesStickers;

  const cells: React.ReactNode[] = [];

  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      const i = row * n + col;

      let rt = <rect
        key={`t${i}`}
        x={(col + 1) * unit + gap / 2}
        y={(row + 1) * unit + gap / 2}
        width={unit - gap}
        height={unit - gap}
        rx={2.5}
        fill={color(top[i])}
        stroke="oklch(0 0 0 / 0.22)"
        strokeWidth={0.5}
      />;

      cells.push(rt)
    }
  }

  if (sides) {
    const t = sides.up.padEnd(n, "x").slice(0, n);
    const r = sides.right.padEnd(n, "x").slice(0, n);
    const d = sides.down.padEnd(n, "x").slice(0, n);
    const l = sides.left.padEnd(n, "x").slice(0, n);

    for (let i = 0; i < n; i++) {
      const upr = <rect
        key={`s0-${i}`}
        x={(i + 1) * unit + gap / 2}
        y={(gap + unit) / 2}
        width={unit - gap}
        height={(unit - gap) / 2}
        rx={2}
        fill={color(t[i])}
        opacity={t[i] === "x" ? 0.5 : 1}
        stroke="oklch(0 0 0 / 0.18)"
        strokeWidth={0.5}
      />;

      const rgr = <rect
        key={`s1-${i}`}
        x={(n + 1) * unit + gap / 2}
        y={(i + 1) * unit + gap / 2}
        width={(unit - gap) / 2}
        height={unit - gap}
        rx={2}
        fill={color(r[i])}
        opacity={r[i] === "x" ? 0.5 : 1}
        stroke="oklch(0 0 0 / 0.18)"
        strokeWidth={0.5}
      />;

      const dwr = <rect
        key={`s2-${i}`}
        x={(n - i) * unit + gap / 2}
        y={(n + 1) * unit + gap / 2}
        width={unit - gap}
        height={(unit - gap) / 2}
        rx={2}
        fill={color(d[i])}
        opacity={d[i] === "x" ? 0.5 : 1}
        stroke="oklch(0 0 0 / 0.18)"
        strokeWidth={0.5}
      />;

      const lfr = <rect
        key={`s3-${i}`}
        x={(gap + unit) / 2}
        y={(n - i) * unit + gap / 2}
        width={(unit - gap) / 2}
        height={unit - gap}
        rx={2}
        fill={color(l[i])}
        opacity={l[i] === "x" ? 0.5 : 1}
        stroke="oklch(0 0 0 / 0.18)"
        strokeWidth={0.5}
      />;

      cells.push(upr);
      cells.push(rgr);
      cells.push(dwr);
      cells.push(lfr);
    }
    
  }

  const center = (idx: number) => ({
    x: ((idx % n) + 1) * unit + unit / 2,
    y: (Math.floor(idx / n) + 1) * unit + unit / 2,
  });

  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={cn("shrink-0", className)}
      role="img"
    >
      <rect x="0" y="0" width="100" height="100" rx="8" fill="var(--color-muted)" opacity={0.5} />
      {cells}

      <defs>
        <marker id="cube-arrow" markerWidth="5" markerHeight="5" refX="3.6" refY="2" orient="auto">
          <path d="M0,0 L4,2 L0,4 z" fill="oklch(0.2 0 0 / 1)" />
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
            stroke="oklch(0.2 0 0 / 1)"
            strokeWidth={2}
            markerEnd="url(#cube-arrow)"
            {...(a.both ? { markerStart: "url(#cube-arrow)" } : {})}
          />
        );
      })}
    </svg>
  )
}

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
  )
}

