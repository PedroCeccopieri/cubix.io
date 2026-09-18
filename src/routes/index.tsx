import { createFileRoute } from "@tanstack/react-router";

import { BookOpen, Boxes, Sparkles, Timer } from "lucide-react";

import { PageHeader } from "@/components/AppShell";
import { PuzzleGlyph } from "@/components/diagrams/NxNTopDiagram";
import { PuzzleCard } from "@/components/PuzzleCard";

import { puzzlesList } from "@/data/puzzles";

const bannerBadgeText = "Métodos completos de speedcubing";
const bannerHeadlineText = "Aprenda a resolver qualquer puzzle";
const bannerSubtitleText = "Aprenda métodos, pratique casos e domine os algoritmos dos seus puzzles favoritos.";

const catalogEyebrowText = "Catálogo";
const catalogTitleText = "Escolha seu puzzle";
const catalogDescriptionText = "Cada puzzle possui métodos completos, etapas e casos com algoritmos prontos para treinar.";

const howWorksEyebrowText = "Como funciona"
const howWorksTitleText = "Quatro passos até o cubo resolvido"

const steps = [
  {
    icon: Boxes,
    title: "Escolha seu puzzle",
    text: "Escolha entre os puzzles disponíveis."
  },
  {
    icon: BookOpen,
    title: "Escolha um método",
    text: "Aprenda com o método que melhor se adapta ao seu objetivo."
  },
  {
    icon: Sparkles,
    title: "Aprenda os casos",
    text: "Estude cada caso individualmente com diagrama, algoritmo e explicação."
  },
  {
    icon: Timer,
    title: "Pratique e acompanhe",
    text: "Marque os casos aprendidos e veja sua evolução em cada etapa."
  }
];

export const Route = createFileRoute("/")({
  head: headContent,
  component: Index,
});

function headContent() {
  return {
    meta: [
      { title: "Cubix" },
      { name: "description", content: "Metodos de cubo magico disponiveis" },
      { property: "og:title", content: "Cubix.io" },
      { property: "og:description", content: "Aprenda métodos, pratique casos." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ]
  }
}

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
            <Sparkles className="h-3.5 w-3.5 text-primary" /> {bannerBadgeText}
          </p>
          <h1 className="text-4xl font-bold leading-[1.05] sm:text-6xl">
            {bannerHeadlineText.split(" ").slice(0, 3).join(" ")} <span className="text-gradient-cube"> {bannerHeadlineText.split(" ").slice(3).join(" ")} </span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            {bannerSubtitleText}
          </p>
        </div>
      </section>

      <section className="mt-16">
        <PageHeader
          eyebrow = {catalogEyebrowText}
          title = {catalogTitleText}
          description = {catalogDescriptionText}
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {puzzlesList.map((p) => ( <PuzzleCard key={p.id} puzzle={p} /> ))}
        </div>
      </section>

      <section className="mt-20">
        <PageHeader
          eyebrow = {howWorksEyebrowText}
          title = {howWorksTitleText}
        />
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
