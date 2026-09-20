import { Check, Copy, Pin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { usePreferences } from "@/contexts/PreferencesContext";
import { useLang } from "@/i18n/LanguageContext";

import { cn } from "@/lib/utils";

export function AlgorithmBlock(
  { algorithm,
    algKey,
    algId,
    size = "md",
    variant = "default",
    className
  } : {
    algorithm: string,
    algKey?: string,
    algId?: number,
    size?: "md" | "lg",
    variant?: "default" | "list",
    className?: string
  }) {

  const [copied, setCopied] = useState(false);
  const [pinned, setPinned] = useState(false);

  const { updatePreference } = usePreferences();
  const { t } = useLang();

  async function copy() {
    try {
      await navigator.clipboard.writeText(algorithm);
      setCopied(true);
      toast.success(t.algCopied);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      toast.error(t.algCopyError);
    }
  };

  async function pin() {
    if (algKey && algId !== undefined) {
      setPinned(true);
      toast.success(t.algPinned);
      setTimeout(() => setPinned(false), 1800);
      updatePreference(algKey, algId);
    }
  }

  return (
    <div
      className={cn(
        variant === "default"
        ? "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-xl border border-border bg-muted/60 px-4 py-3"
        : "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3",
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

      <div className="flex items-center gap-2">
        {algKey && (
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              void pin();
            }}
            aria-label={t.pinAlg}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:text-foreground"
          >
            {pinned ? <Check className="h-4 w-4" /> : <Pin className="h-4 w-4" />}
          </button>
          )
        }

        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            void copy();
          }}
          aria-label={t.copyAlg}
          className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:text-foreground"
          >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </button>
      </div>
    </div>
  );
}
