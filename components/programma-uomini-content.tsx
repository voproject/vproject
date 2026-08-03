"use client"

import Link from "next/link"
import { ProgrammaGuide, guideBody } from "@/components/programma-guide"
import { chapters, sources } from "@/lib/programma-uomini"

export function ProgrammaUominiContent() {
  return (
    <ProgrammaGuide
      title="NESSUNO TI HA MAI DETTO COSA DEVE COSTRUIRE UN UOMO"
      subtitle="Qualcuno doveva scriverlo."
      ageBadge="PER UOMINI DAI 18 AI 35 ANNI"
      chapters={chapters}
      sources={sources}
      intro={
        <>
          <p className={guideBody}>
            Questa pagina non ti promette soldi facili, non ti vende un corso e non ti dice che sei
            speciale. È il manuale che avrei voluto trovare a diciassette anni, quando ho comprato il
            mio primo corso online e ho cominciato la lunga serie di fallimenti che mi ha insegnato il
            mestiere: oggi ho ventun anni, un&apos;azienda di intelligenza artificiale con clienti veri
            e una laurea in legge internazionale, e quello che funziona nella mia vita non l&apos;ho
            trovato in un video motivazionale ma costruendolo un pezzo alla volta, nell&apos;ordine
            giusto.
          </p>
          <p className={guideBody}>
            Questa guida nasce dalle domande vere che mi arrivano ogni settimana nei messaggi, da
            ragazzi della mia età che chiedono sempre le stesse cose: dove si trova una donna con dei
            valori, come si diventa capaci di provvedere a una famiglia, da dove si comincia a fare
            soldi quando parti da zero. Ho deciso di scrivere le risposte una volta sola, per bene,
            invece di ripeterle una chat alla volta.
          </p>
          <p className={guideBody}>
            Una premessa onesta. Davanti al declino di questo Paese ogni giovane uomo sceglie una
            risposta, anche quando crede di non scegliere: c&apos;è l&apos;edonista, che ottimizza
            l&apos;estetica e i viaggi e tutto tranne ciò che conta; c&apos;è il rassegnato, che ha
            deciso che è tutto finito e chiama questa resa lucidità; c&apos;è il rabbioso, che ha
            ragione ad essere arrabbiato ma consuma indignazione come intrattenimento e non costruisce
            niente. E poi c&apos;è il costruttore, che ha smesso di aspettare. Questa guida esiste per
            trasformarti nel quarto, da qualunque dei primi tre tu stia partendo. I numeri di come
            siamo arrivati fin qui li trovi nel{" "}
            <Link
              href="/manifesto"
              className="text-secondary border-b border-secondary/40 hover:border-secondary transition-colors"
            >
              manifesto
            </Link>
            ; qui trovi il piano.
          </p>
          <p className={`${guideBody} italic`}>
            Se cerchi scorciatoie puoi chiudere adesso. Questa guida è per chi vuole il carico.
          </p>
        </>
      }
      closing={
        <>
          <p className={guideBody}>
            Otto capitoli, un solo movimento: costruire. Nella vita di un uomo l&apos;ordine è questo,
            la competenza, il corpo, i soldi, il silenzio, la donna, i figli, la missione e, a reggere
            tutto quanto, Dio, e nessuno percorrerà questa strada al posto tuo. Ma non sei obbligato a
            percorrerla da solo.
          </p>
          <p className={guideBody}>
            Questa pagina è nata dalle domande vere che arrivano nei messaggi, e continuerà a crescere
            con le prossime. Il posto dove il discorso continua ogni giorno è il canale Telegram.
          </p>
        </>
      }
    />
  )
}
