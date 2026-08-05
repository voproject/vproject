"use client"

import Link from "next/link"
import { ProgrammaGuide, guideBody } from "@/components/programma-guide"
import { chapters, sources } from "@/lib/programma-donne"

export function ProgrammaDonneContent() {
  return (
    <ProgrammaGuide
      title="TI HANNO DETTO CHE PUOI AVERE TUTTO"
      subtitle="Non ti hanno detto cosa vale la pena avere."
      ageBadge="PER DONNE DAI 18 AI 35 ANNI"
      chapters={chapters}
      sources={sources}
      intro={
        <>
          <p className={guideBody}>
            Questa pagina la scrive un uomo, e te lo dico subito perché tu possa decidere liberamente
            se fidarti: ho ventun anni, un&apos;azienda, laureato e una fede che non nascondo. Non
            pretendo di sapere cosa si prova a essere te. Posso dirti però quello che vedo: una
            generazione di ragazze a cui è stato promesso tutto: la carriera, la libertà,
            l&apos;indipendenza da chiunque e da qualunque legame, e che invece di svegliarsi
            realizzata si è svegliata stanca, perché in Italia più di uno studente su due dichiara
            ansia o tristezza ricorrente e nessuno si ferma mai a chiedersi se per caso la promessa
            fosse sbagliata in partenza.
          </p>
          <p className={guideBody}>
            Anche qui, come nella{" "}
            <Link
              href="/programma/uomini"
              className="text-secondary border-b border-secondary/40 hover:border-secondary transition-colors"
            >
              pagina per gli uomini
            </Link>
            , davanti a questa promessa fallita ogni ragazza sceglie una risposta, anche quando crede
            di non scegliere. C&apos;è la ragazza delle app, che colleziona attenzioni e delusioni con
            lo stesso pollice e chiama esperienza quella che è solo erosione; c&apos;è la girlboss in
            burnout, che ha fatto tutto giusto secondo il manuale che le hanno dato e non capisce
            perché la domenica sera si sente vuota; c&apos;è l&apos;ansiosa cronica, che ha smesso di
            sperare in qualcosa di stabile e chiama questa resa realismo. E poi c&apos;è la più rara:
            la custode, che ha smesso di chiedere il permesso di essere donna e costruisce una casa,
            una fede e una famiglia come si costruisce un regno. Questa guida esiste per cercare di
            accompagnarti verso la quarta, da qualunque delle prime tre tu stia partendo. I numeri di come siamo arrivati fin
            qui li trovi nel{" "}
            <Link
              href="/manifesto"
              className="text-secondary border-b border-secondary/40 hover:border-secondary transition-colors"
            >
              manifesto
            </Link>
            ; qui trovi la strada.
          </p>
          <p className={guideBody}>
            Un&apos;ultima cosa, prima di cominciare: tutto quello che questa pagina chiede a te ha un
            prezzo equivalente chiesto agli uomini nella loro pagina, riga per riga. Nessuno qui
            pretende da un sesso quello che regala all&apos;altro. Se cerchi qualcuno che ti dica che
            va già tutto bene così, puoi chiudere adesso: questa guida è per chi sospetta che le
            abbiano mentito e vuole sapere cosa fare adesso.
          </p>
        </>
      }
      closing={
        <>
          <p className={guideBody}>
            Otto capitoli, un solo movimento: custodire ciò che vale. I capitoli puoi leggerli
            nell&apos;ordine che preferisci, ma le priorità di una vita no, quelle un ordine ce
            l&apos;hanno: prima Dio, poi tuo marito, poi i figli, poi la famiglia e gli amici. Finché
            quest&apos;ordine regge, ogni cosa trova il suo posto; quando si inverte, anche le cose
            buone cominciano a farsi male tra loro.
          </p>
          <p className={guideBody}>
            Nessuno percorrerà questa strada al posto tuo. Ma non sei obbligata a percorrerla da sola.
          </p>
          <p className={guideBody}>
            Questa pagina è la gemella di{" "}
            <Link
              href="/programma/uomini"
              className="text-secondary border-b border-secondary/40 hover:border-secondary transition-colors"
            >
              quella per gli uomini
            </Link>
            , e ti conviene leggerle entrambe, perché a loro viene chiesto almeno quanto viene chiesto
            a te, riga per riga. Il posto dove il discorso continua ogni giorno è il canale Telegram.
          </p>
        </>
      }
    />
  )
}
