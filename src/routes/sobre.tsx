import { Link, createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/AppShell";
import { useLang } from "@/i18n/LanguageContext";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "About Cubix.io" },
      {
        name: "description",
        content:
          "Cubix.io organizes speedcubing learning into puzzles, methods, stages and cases, with algorithms, diagrams and saved progress.",
      },
      { property: "og:title", content: "About Cubix.io" },
      {
        property: "og:description",
        content: "How the platform organizes puzzles, methods, stages, cases and algorithms.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useLang();

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-8 sm:py-14">
      <PageHeader
        eyebrow={t.about.eyebrow}
        title={t.about.title}
        description={t.about.description}
      />

      <section className="mt-12">
        <h2 className="text-lg font-semibold">{t.about.structureTitle}</h2>
        <ol className="mt-4 space-y-3">
          {t.about.structure.map(([name, text], i) => (
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
        <h2 className="text-lg font-semibold">{t.about.currentTitle}</h2>
        <p className="mt-3 text-muted-foreground">
          {t.about.currentText}
          <span className="font-medium">{t.about.comingSoonInline}</span>
          {t.about.currentTextAfter}
        </p>
        <Link
          to="/puzzles/$puzzleId/$methodId"
          params={{ puzzleId: "3x3", methodId: "cfop" }}
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
        >
          {t.about.startCfop}
        </Link>
      </section>

      <section className="mt-12">
        <h2 className="text-lg font-semibold">{t.about.privacyTitle}</h2>
        <p className="mt-3 text-muted-foreground">{t.about.privacyText}</p>
      </section>
    </div>
  );
}
