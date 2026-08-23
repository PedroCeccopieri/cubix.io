import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { cn } from "@/lib/utils";

export function AlgorithmBlock({
  algorithm,
  size = "md",
  className,
}: {
  algorithm: string;
  size?: "md" | "lg";
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(algorithm);
      setCopied(true);
      toast.success("Algoritmo copiado");
      setTimeout(() => setCopied(false), 1800);
    } catch {
      toast.error("Não foi possível copiar");
    }
  };

  return (
    <div
      className={cn(
        "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-xl border border-border bg-muted/60 px-4 py-3",
        className,
      )}
    >
      <code
        className={cn(
          "min-w-0 break-words font-mono font-medium tracking-wide",
          size === "lg" ? "text-lg sm:text-xl" : "text-sm",
        )}
      >
        {algorithm}
      </code>
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          void copy();
        }}
        aria-label="Copiar algoritmo"
        className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:text-foreground"
      >
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      </button>
    </div>
  );
}
