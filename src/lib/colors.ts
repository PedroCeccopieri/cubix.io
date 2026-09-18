
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

export function color(ch: string | undefined) {
  return colorMap[ch ?? "x"] ?? colorMap["x"];
}