import { AlgorithmBlock } from "./AlgorithmBlock"
import { usePreferences } from "@/contexts/PreferencesContext"
import { useLang } from "@/i18n/LanguageContext"

export function AlgorithmList({ algs, itemKey }: { algs: string[]; itemKey: string }) {

  const { preferences } = usePreferences();
  const { t } = useLang();

  const orderedAlgs = (preferences[itemKey] !== undefined ? [algs[preferences[itemKey]], ...algs.filter((_, i) => i !== preferences[itemKey])] : algs) as string[];


  return (
    <>
      <h2 className="text-lg font-semibold">{t.algorithmList.algorithms}</h2>

      <div className="mt-3 overflow-hidden rounded-xl border border-border" >
        {orderedAlgs.map((alg, i) => (
          <div key={alg} className={i % 2 === 0 ? "bg-muted/60" : "bg-card"} >
            <AlgorithmBlock algorithm={alg} algKey={itemKey} algId={algs.indexOf(alg)} variant="list" />
          </div>
        ))}
      </div>
    </>
  )
}
