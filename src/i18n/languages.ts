/**
 * Registro central de idiomas do CubeLab.
 *
 * Para adicionar um novo idioma:
 * 1. Acrescente uma entrada em `languages` (ex.: fr).
 * 2. Crie o dicionário de interface em `src/i18n/ui.ts` e registre em `ui`.
 * 3. (Opcional) Traduza os conteúdos em `src/data/*` adicionando a chave nos
 *    objetos LocalizedText. O que faltar cai automaticamente no idioma padrão.
 */
export const languages = [
  // { code: "en", label: "EN", name: "English", htmlLang: "en" },
  // { code: "es", label: "ES", name: "Español", htmlLang: "es" },
  { code: "pt", label: "PT", name: "Português", htmlLang: "pt-BR" },
] as const;

export type Lang = (typeof languages)[number]["code"];

export type DefaultLang = "pt";
export const DEFAULT_LANG: DefaultLang = "pt";

export const langCodes = languages.map((l) => l.code) as readonly Lang[];

export function isLang(value: unknown): value is Lang {
  return typeof value === "string" && (langCodes as readonly string[]).includes(value);
}

export function htmlLangOf(lang: Lang): string {
  return languages.find((l) => l.code === lang)?.htmlLang ?? lang;
}
