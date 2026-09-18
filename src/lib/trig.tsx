

export function rotatePointX(x: number, y: number, z: number, angle: number, pivotx: number, pivoty: number, pivotz: number): [number, number, number] {
  const rad = (angle * Math.PI) / 180;
  const cos = Math.cos(rad);
  const sin = Math.sin(rad);
  const newX = x;
  const newY = (y - pivoty) * cos - (z - pivotz) * sin + pivoty;
  const newZ = (y - pivoty) * sin + (z - pivotz) * cos + pivotz;
  return [newX, newY, newZ];
}

export function rotatePointY(x: number, y: number, z: number, angle: number, pivotx: number, pivoty: number, pivotz: number): [number, number, number] {
  const rad = (angle * Math.PI) / 180;
  const cos = Math.cos(rad);
  const sin = Math.sin(rad);
  const newX = (x - pivotx) * cos + (z - pivotz) * sin + pivotx;
  const newY = y;
  const newZ = (x - pivotx) * sin - (z - pivotz) * cos + pivotz;
  return [newX, newY, newZ];
}

export function rotatePointZ(x: number, y: number, z: number, angle: number, pivotx: number, pivoty: number, pivotz: number): [number, number, number] {
  const rad = (angle * Math.PI) / 180;
  const cos = Math.cos(rad);
  const sin = Math.sin(rad);
  const newX = (x - pivotx) * cos - (y - pivoty) * sin + pivotx;
  const newY = (x - pivotx) * sin + (y - pivoty) * cos + pivoty;
  const newZ = z;
  return [newX, newY, newZ];
}