import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Boxes, Sparkles, Timer } from "lucide-react";

import { PageHeader } from "@/components/AppShell";
import { PuzzleGlyph } from "@/components/CubeDiagram";
import { PuzzleCard } from "@/components/PuzzleCard";
import { puzzles } from "@/data/puzzles";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CubeLab — Aprenda a resolver qualquer puzzle" },
      {
        name: "description",
        content:
          "Cursos de cubo mágico organizados em puzzles, métodos, etapas e casos. Aprenda CFOP, OLL e PLL com algoritmos, diagramas e acompanhamento de progresso.",
      },
      { property: "og:title", content: "CubeLab — Aprenda a resolver qualquer puzzle" },
      {
        property: "og:description",
        content: "Aprenda métodos, pratique casos e domine os algoritmos dos seus puzzles favoritos.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const steps = [
  {
    icon: Boxes,
    title: "Escolha seu puzzle",
    text: "Escolha entre 2x2, 3x3, 4x4, Pyraminx, Skewb, Megaminx e outros.",
  },
  {
    icon: BookOpen,
    title: "Escolha um método",
    text: "Aprenda com o método que melhor se adapta ao seu objetivo, do LBL ao CFOP.",
  },
  {
    icon: Sparkles,
    title: "Aprenda os casos",
    text: "Estude cada caso individualmente com diagrama, algoritmo e explicação.",
  },
  {
    icon: Timer,
    title: "Pratique e acompanhe",
    text: "Marque os casos aprendidos e veja sua evolução em cada etapa.",
  },
];

function Index() {
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
            <Sparkles className="h-3.5 w-3.5 text-primary" /> Curso completo de speedcubing
          </p>
          <h1 className="text-4xl font-bold leading-[1.05] sm:text-6xl">
            Aprenda a resolver <span className="text-gradient-cube">qualquer puzzle.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            Aprenda métodos, pratique casos e domine os algoritmos dos seus puzzles favoritos.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/puzzles/$puzzleId/$methodId"
              params={{ puzzleId: "3x3", methodId: "cfop" }}
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Começar a aprender <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/puzzles"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-5 py-3 text-sm font-semibold transition-colors hover:bg-muted"
            >
              Ver puzzles
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <PageHeader
          eyebrow="Catálogo"
          title="Escolha seu puzzle"
          description="Cada puzzle reúne métodos completos, etapas e casos com algoritmos prontos para treinar."
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {puzzles.map((p) => (
            <PuzzleCard key={p.id} puzzle={p} />
          ))}
        </div>
      </section>

      <section className="mt-20">
        <PageHeader eyebrow="Como funciona" title="Quatro passos até o cubo resolvido" />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="surface-card surface-card-hover p-5">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-muted text-primary">
                  <s.icon className="h-5 w-5" />
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
