import { Link, createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/AppShell";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre o CubeLab" },
      {
        name: "description",
        content:
          "O CubeLab organiza o aprendizado de cubo mágico em puzzles, métodos, etapas e casos, com algoritmos, diagramas e progresso salvo.",
      },
      { property: "og:title", content: "Sobre o CubeLab" },
      {
        property: "og:description",
        content: "Como a plataforma organiza puzzles, métodos, etapas, casos e algoritmos.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const structure = [
  ["Puzzle", "2x2, 3x3, Megaminx… cada puzzle é um catálogo independente."],
  ["Método", "CFOP, LBL, Roux, Ortega — o caminho escolhido para resolver."],
  ["Etapa", "Cross, F2L, OLL, PLL — os blocos do curso dentro do método."],
  ["Caso", "Cada situação específica, com diagrama e explicação."],
  ["Algoritmo", "A fórmula em notação padrão, pronta para copiar e treinar."],
];

function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-8 sm:py-14">
      <PageHeader
        eyebrow="Sobre"
        title="Um curso de cubo mágico, não uma lista de algoritmos"
        description="O CubeLab foi feito para quem quer evoluir de forma estruturada: escolher um puzzle, seguir um método e dominar caso a caso."
      />

      <section className="mt-12">
        <h2 className="text-lg font-semibold">Como o conteúdo é organizado</h2>
        <ol className="mt-4 space-y-3">
          {structure.map(([name, text], i) => (
            <li key={name} className="surface-card grid grid-cols-[auto_minmax(0,1fr)] gap-4 p-4">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-muted font-mono text-xs">
                {i + 1}
              </span>
              <span className="min-w-0">
                <span className="block font-semibold">{name}</span>
                <span className="block text-sm text-muted-foreground">{text}</span>
              </span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-12">
        <h2 className="text-lg font-semibold">Conteúdo atual</h2>
        <p className="mt-3 text-muted-foreground">
          O curso de CFOP para o cubo 3x3 já está disponível com as etapas Cross, F2L, OLL e PLL,
          incluindo os 21 casos de PLL completos. Os demais puzzles e métodos aparecem como
          <span className="font-medium"> Em breve</span> e serão liberados com o mesmo formato.
        </p>
        <Link
          to="/puzzles/$puzzleId/$methodId"
          params={{ puzzleId: "3x3", methodId: "cfop" }}
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
        >
          Começar pelo CFOP
        </Link>
      </section>

      <section className="mt-12">
        <h2 className="text-lg font-semibold">Progresso e privacidade</h2>
        <p className="mt-3 text-muted-foreground">
          Os casos marcados como aprendidos ficam salvos localmente no seu navegador. Não é preciso
          criar conta para usar a plataforma.
        </p>
      </section>
    </div>
  );
}
