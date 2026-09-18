import { cn } from "@/lib/utils";

export function ProgressBar({
  value,
  label,
  hint,
  className,
  tone = "primary",
}: {
  value: number;
  label?: string;
  hint?: string;
  className?: string;
  tone?: "primary" | "green" | "yellow";
}) {
  const pct = Math.max(0, Math.min(100, Math.round(value)));
  const bg = tone === "green" ? "var(--cube-green)" : tone === "yellow" ? "var(--cube-yellow)" : "var(--color-primary)";

  return (
    <div className = {cn("w-full", className)}>
      {(label || hint) && (
        <div className = "mb-1.5 flex items-baseline justify-between gap-3 text-xs">
          <span className = "min-w-0 truncate font-medium">{label}</span>
          <span className = "shrink-0 text-muted-foreground">{hint ?? `${pct}%`}</span>
        </div>
      )}
      <div className = "h-2 w-full overflow-hidden rounded-full bg-muted">
        <div
          className = "h-full rounded-full transition-[width] duration-500 ease-out"
          style = {{ width: `${pct}%`, backgroundColor: bg }}
        />
      </div>
    </div>
  );
}
