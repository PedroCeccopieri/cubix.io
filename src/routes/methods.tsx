import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/AppShell";
import { MethodCard } from "@/components/MethodCard";
import { useLang } from "@/i18n/LanguageContext";

import { puzzlesList } from "@/data/puzzles";

export const Route = createFileRoute("/methods")({
  head: headContent,
  component: MethodsPage,
});

function headContent() {
  return {
    meta: [
      { title: "All methods — Cubix.io" },
      { name: "description", content: "CFOP, LBL, Roux, ZZ, Ortega, Yau and more: compare methods by puzzle and difficulty." },
      { property: "og:title", content: "All methods — Cubix.io" },
      { property: "og:description", content: "Compare methods by puzzle, difficulty and progress." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ]
  }
}

function MethodsPage() {
  const { t, tx } = useLang();

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-8 sm:py-14">
      <PageHeader
        eyebrow={t.methodsPag.libraryEyebrow}
        title={t.nav.methods}
        description={t.methodsPag.methodsPageDescription}
      />

      <div className="mt-10 space-y-10">
        {puzzlesList.map((puzzle) => (
          <section key={puzzle.id}>
            <h2 className="text-lg font-semibold">{tx(puzzle.name)}</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {puzzle.methods.map((method) => (
                <MethodCard key={method.id} puzzle={puzzle} method={method} full={false} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
