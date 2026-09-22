import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/AppShell";
import { PuzzleCard } from "@/components/PuzzleCard";
import { useLang } from "@/i18n/LanguageContext";

import { puzzlesList } from "@/data/puzzles";

export const Route = createFileRoute("/puzzles/")({
  head: headContent,
  component: PuzzlesPage,
});

function headContent() {
  return {
    meta: [
      { title: "Available puzzles — Cubix.io" },
      { name: "description", content: "Choose from 2x2, 3x3, 4x4, 5x5, 6x6, 7x7, Pyraminx, Skewb and Megaminx and start learning." },
      { property: "og:title", content: "Available puzzles — Cubix.io" },
      { property: "og:description", content: "Choose a puzzle and find the ideal method for your level." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ]
  }
}

function PuzzlesPage() {
  const { t } = useLang();

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-8 sm:py-14">
      <PageHeader
        eyebrow={t.home.catalogEyebrow}
        title={t.nav.puzzles.label}
        description={t.puzzlesPageDescription}
      />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {puzzlesList.map((p) => (
          <PuzzleCard key={p.id} puzzle={p} />
        ))}
      </div>
    </div>
  )
}
