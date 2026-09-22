import { createFileRoute } from "@tanstack/react-router";

import { BookOpen, Boxes, Sparkles, Timer } from "lucide-react";

import { PageHeader } from "@/components/AppShell";
import { PuzzleGlyph } from "@/components/diagrams/NxNTopDiagram";
import { PuzzleCard } from "@/components/PuzzleCard";
import { useLang } from "@/i18n/LanguageContext";

import { puzzlesList } from "@/data/puzzles";

export const Route = createFileRoute("/")({
  head: headContent,
  component: Index,
});

function headContent() {
  return {
    meta: [
      { title: "Cubix.io — Learn to solve any puzzle" },
      { name: "description", content: "Learn speedcubing methods, practice cases and master algorithms for your favorite puzzles." },
      { property: "og:title", content: "Cubix.io" },
      { property: "og:description", content: "Learn methods, practice cases and track your progress." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ]
  }
}

function Index() {
  const { t } = useLang();

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-8 sm:py-14">
      <section className="grid-backdrop relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-14 sm:px-12 sm:py-20">
        <div className="pointer-events-none absolute -right-10 top-8 hidden opacity-90 sm:block">
          <PuzzleGlyph
            swatch={["r", "y", "b", "g", "w", "o", "y", "r", "g"]}
            className="h-52 w-52 float-cube"
          />
        </div>
        <div className="relative max-w-2xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" /> {t.home.badge}
          </p>
          <h1 className="text-4xl font-bold leading-[1.05] sm:text-6xl">
            {t.home.headline.split(" ").slice(0, 3).join(" ")} <span className="text-gradient-cube"> {t.home.headline.split(" ").slice(3).join(" ")} </span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            {t.home.subtitle}
          </p>
        </div>
      </section>

      <section className="mt-16">
        <PageHeader
          eyebrow = {t.home.catalogEyebrow}
          title = {t.home.catalogTitle}
          description = {t.home.catalogDescription}
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {puzzlesList.map((p) => ( <PuzzleCard key={p.id} puzzle={p} /> ))}
        </div>
      </section>

      <section className="mt-20">
        <PageHeader
          eyebrow = {t.home.howEyebrow}
          title = {t.home.howTitle}
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.home.steps.map((s, i) => (
            <div key={s.title} className="surface-card surface-card-hover p-5">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-muted text-primary">
                  {[Boxes, BookOpen, Sparkles, Timer][i] && (() => { const Icon = [Boxes, BookOpen, Sparkles, Timer][i]!; return <Icon className="h-5 w-5" />; })()}
                </span>
                <span className="font-mono text-sm text-muted-foreground">0{i + 1}</span>
              </div>
              <h3 className="mt-4 text-base font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
