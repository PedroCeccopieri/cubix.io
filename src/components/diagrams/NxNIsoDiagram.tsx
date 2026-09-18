import { nxnisodiagram } from "@/data/diagramTypes";

import { color } from "@/lib/colors";
import { rotatePointX, rotatePointY } from "@/lib/trig";
import { cn } from "@/lib/utils";

export function NxNIsoDiagram (
  {
    diagram,
    n,
    size = 132,
    className,
} : {
    diagram: nxnisodiagram
    n: number;
    size?: number;
    className?: string;
  }
) {

  const unit = 100 / n;
  const gap = 3;

  const top = diagram.top.padEnd(n*n, "x").slice(0, n*n);
  const face = diagram.face.padEnd(n*n, "x").slice(0, n*n);
  const right = diagram.right.padEnd(n*n, "x").slice(0, n*n);

  const cells: React.ReactNode[] = [];
  const allPoints: [number,number,number][] = []; 

  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      const i = row * n + col;

      const x = (col) * unit + gap / 2;
      const y = (row) * unit + gap / 2;
      const z = 0;
      const w = unit - gap;
      const h = unit - gap;

      const points: [number,number,number][] = [[x, y, z], [x + w, y, z], [x + w, y + h, z], [x, y + h, z]]

      let rotedPointsU = points.map(([px,py,pz]) => rotatePointX(px,py,pz, 90, 50, 50, 0))
      rotedPointsU = rotedPointsU.map(([px,py,pz]) => [px, py - (n/2)*unit, pz])
      rotedPointsU = rotedPointsU.map(([px,py,pz]) => rotatePointY(px,py,pz, 45, 50, 50, 0))
      rotedPointsU = rotedPointsU.map(([px,py,pz]) => rotatePointX(px,py,pz, 30, 50, 50, 0))

      let rotedPointsF = points.map(([px,py,pz]) => rotatePointY(px,py,pz, 0, 50, 50, 0))
      rotedPointsF = rotedPointsF.map(([px,py,pz]) => [px, py, pz + (n/2)*unit])
      rotedPointsF = rotedPointsF.map(([px,py,pz]) => rotatePointY(px,py,pz, 45, 50, 50, 0))
      rotedPointsF = rotedPointsF.map(([px,py,pz]) => rotatePointX(px,py,pz, 30, 50, 50, 0))

      let rotedPointsR = points.map(([px,py,pz]) => rotatePointY(px,py,pz, 90, 50, 50, 0))
      rotedPointsR = rotedPointsR.map(([px,py,pz]) => [px - (n/2)*unit, py, pz])
      rotedPointsR = rotedPointsR.map(([px,py,pz]) => rotatePointY(px,py,pz, 45, 50, 50, 0))
      rotedPointsR = rotedPointsR.map(([px,py,pz]) => rotatePointX(px,py,pz, 30, 50, 50, 0))

      allPoints.push(...rotedPointsU)
      allPoints.push(...rotedPointsF)
      allPoints.push(...rotedPointsR)

      let rtU =<polygon
        key={`${"U"}-${row}-${col}`}
        points={rotedPointsU.map(([px, py]) => `${px},${py}`).join(" ")}
        fill={color(top[i])}
        stroke="oklch(0 0 0 / 0.22)"
        strokeWidth={0.5}
        strokeLinejoin="round"
      />

      let rtF =<polygon
        key={`${"F"}-${row}-${col}`}
        points={rotedPointsF.map(([px, py]) => `${px},${py}`).join(" ")}
        fill={color(right[i])}
        stroke="oklch(0 0 0 / 0.22)"
        strokeWidth={0.5}
        strokeLinejoin="round"
      />

      let rtR =<polygon
        key={`${"R"}-${row}-${col}`}
        points={rotedPointsR.map(([px, py]) => `${px},${py}`).join(" ")}
        fill={color(face[i])}
        stroke="oklch(0 0 0 / 0.22)"
        strokeWidth={0.5}
        strokeLinejoin="round"
      />

      cells.push(rtU)
      cells.push(rtF)
      cells.push(rtR)
    }
  }

  const xs = allPoints.map(([x]) => x);
  const ys = allPoints.map(([_, y]) => y);

  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);

  // Normaliza os pontos para 0–100
  const width = maxX - minX;
  const height = maxY - minY;
  const scale = 90;

  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={cn("shrink-0", className)}
      aria-hidden
    >
      <g
        transform={`
          translate(
            ${(100 - (width / Math.max(width, height)) * scale) / 2},
            ${(100 - (height / Math.max(width, height)) * scale) / 2}
          )
          scale(${scale / Math.max(width, height)})
          translate(${-minX}, ${-minY})
        `}
        >
        {cells}
        </g>
    </svg>
  );
}
