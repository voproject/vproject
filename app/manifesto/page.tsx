import { VolpinVeritasHeader } from "@/components/volpinveritas-header"
import { VolpinFooter } from "@/components/volpin-footer"
import { EmailSignup } from "@/components/email-signup"
import { SectionDivider } from "@/components/section-divider"
import { ManifestoSectionHeader } from "@/components/manifesto-section-header"
import { ManifestoCredo } from "@/components/manifesto-credo"

const p = "font-serif text-lg text-foreground/85 leading-relaxed"
const subHeader = "font-display text-sm text-secondary tracking-[0.2em] mt-10 mb-3"

export default function ManifestoPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <VolpinVeritasHeader />

      <article className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Prologo */}
          <header className="text-center space-y-4 pb-12">
            <p className="font-display text-sm tracking-[0.2em] text-secondary">
              PROLOGO · TRE PAROLE
            </p>
            <h1 className="font-display text-3xl sm:text-4xl tracking-wide text-foreground">
              IL MANIFESTO
            </h1>
          </header>

          <p className={p}>
            Imprenditore. Cattolico. Militante.
          </p>
          <p className={p}>
            Mi hanno detto che devo sceglierne una, perché queste tre parole non possono stare
            insieme. Questo documento esiste per dimostrare il contrario: non solo possono stare
            insieme, è la loro separazione la malattia che sta uccidendo l&apos;Italia. Chi ha diviso
            la fede dal lavoro, e il lavoro dall&apos;amore per la propria terra, non ha liberato
            nessuno: ha prodotto la generazione più ricca di strumenti e più povera di ragioni che
            questo Paese abbia mai avuto.
          </p>
          <p className={p}>
            Quello che segue è il problema guardato in faccia, con i numeri. Poi la risposta, non
            un&apos;opinione: un modo di vivere. E infine il motivo per cui questo è il momento
            migliore, non il peggiore, per cominciare.
          </p>

          <SectionDivider />

          {/* I. Il problema */}
          <ManifestoSectionHeader numeral="I" title="Il problema" />
          <p className="font-serif italic text-base text-foreground/60 -mt-4 mb-6">
            I numeri del declino
          </p>

          <h3 className={subHeader}>LA CULLA VUOTA</h3>
          <p className={p}>
            Nel 2024 in Italia sono nati 369.944 bambini: mai così pochi da quando esiste
            l&apos;Italia unita. Il numero medio di figli per donna è sceso a 1,18, minimo storico,
            e i dati provvisori del 2025 indicano un calo ulteriore. L&apos;ultima generazione di
            donne ad aver garantito il ricambio generazionale è quella nata nel 1947.
          </p>
          <p className={p}>
            Ed ecco il dettaglio che smonta ogni spiegazione da talk show: l&apos;Italia del
            dopoguerra era incomparabilmente più povera di quella di oggi, e faceva più del doppio
            dei figli. Se il problema fosse il denaro, oggi saremmo pieni di culle. Non è il
            portafoglio che si è svuotato per primo. È lo scopo.
          </p>

          <h3 className={subHeader}>LE CHIESE VUOTE</h3>
          <p className={p}>
            Oggi partecipa alla Messa domenicale circa il 19% degli italiani. Tra i giovani tra i 18
            e i 24 anni, circa l&apos;8%. In vent&apos;anni, la pratica religiosa delle giovani
            generazioni è crollata dal 37% al 12%. Non è successo per caso: è successo perché a
            scuola, in televisione e sui social ti hanno insegnato che la fede dei tuoi nonni era un
            residuo da cui emanciparsi.
          </p>

          <h3 className={subHeader}>L&apos;ESODO SILENZIOSO</h3>
          <p className={p}>
            Tra il 2013 e il 2023, ogni anno 56.000 italiani in più sono partiti rispetto a quelli
            che sono tornati. Il 57% aveva tra i 18 e i 34 anni. Nel 2024 gli espatri netti hanno
            superato quota 100.000, un record. Solo tra il 2019 e il 2023 l&apos;Italia ha perso
            119.000 giovani tra i 25 e i 34 anni. Non partono perché odiano l&apos;Italia: partono
            perché nessuno ha dato loro una ragione per restare a costruirla.
          </p>

          <h3 className={subHeader}>LE IMPRESE CHE NON NASCONO</h3>
          <p className={p}>
            In dieci anni l&apos;Italia ha perso 153.000 imprese guidate da under 35: quarantadue al
            giorno, ogni giorno, per dieci anni. A un giovane italiano che vuole costruire, il
            sistema offre stage gratuiti, contratti a termine e la promessa di una pensione che non
            vedrà mai.
          </p>

          <h3 className={subHeader}>LA MENTE SOTTO ASSEDIO</h3>
          <p className={p}>
            Secondo l&apos;OCSE, nel 2022 il 66% dei quindicenni italiani riportava disturbi
            ricorrenti legati al malessere psicologico, nervosismo, irritabilità, insonnia: il dato
            più alto di tutta l&apos;Unione Europea, contro una media del 52%. E tra gli studenti
            italiani, più di uno su due dichiara di soffrire d&apos;ansia o tristezza ricorrente. La
            generazione più connessa della storia è anche la più sola.
          </p>

          <p className={`${p} pt-4`}>
            Cinque ferite, una sola malattia. Chi le tratta come problemi separati (un bonus per le
            nascite, uno psicologo in più, un incentivo alle startup) cura i sintomi e ignora la
            diagnosi.
          </p>

          <SectionDivider />

          {/* II. La diagnosi */}
          <ManifestoSectionHeader numeral="II" title="La diagnosi" />
          <p className="font-serif italic text-base text-foreground/60 -mt-4 mb-6">
            La crisi è spirituale, non economica
          </p>

          <p className={p}>
            Ti hanno insegnato a vergognarti. Della tua fede, chiamandola superstizione. Della tua
            nazione, chiamandola colpa. Della tua ambizione, chiamandola avidità. Tre vergogne,
            ripetute per settant&apos;anni da scuola, media e istituzioni, fino a diventare il senso
            comune di un intero popolo.
          </p>
          <p className={p}>
            E mentre ti insegnavano a vergognarti, il patto su cui i tuoi genitori avevano costruito
            la vita si rompeva pezzo per pezzo: studia, e la laurea si è inflazionata; lavora, e il
            contratto è precario; risparmia, e la casa resta irraggiungibile; poi metti su famiglia,
            con cosa, esattamente?
          </p>
          <p className={p}>
            Un popolo a cui togli Dio, la famiglia e la nazione non diventa libero. Diventa
            esattamente quello che i numeri del capitolo I fotografano: non fa figli, non prega, non
            costruisce, se ne va, e si ammala di tristezza. La crisi italiana non è economica.
            L&apos;economia è il sintomo. La malattia è la distruzione dello scopo.
          </p>

          <SectionDivider />

          {/* III. Le quattro risposte */}
          <ManifestoSectionHeader numeral="III" title="Le quattro risposte al declino" />

          <p className={p}>
            Davanti a tutto questo, ogni giovane italiano sceglie una risposta, anche chi crede di
            non scegliere:
          </p>
          <p className={p}>
            <strong className="text-secondary font-semibold">1. L&apos;edonista.</strong> Ottimizza
            l&apos;estetica, i viaggi, le esperienze. Ottimizza tutto, tranne ciò che conta. La
            gratificazione di oggi in cambio del vuoto di domani.
          </p>
          <p className={p}>
            <strong className="text-secondary font-semibold">2. Il rassegnato.</strong> Ha deciso che
            è tutto finito e chiama questa resa &ldquo;lucidità&rdquo;. Ma la rassegnazione non è
            un&apos;analisi: è una scelta travestita da conclusione.
          </p>
          <p className={p}>
            <strong className="text-secondary font-semibold">3. Il rabbioso.</strong> La sua rabbia è
            legittima, lo hanno derubato davvero. Ma consuma indignazione come intrattenimento e non
            costruisce niente: il sistema non teme chi urla, teme chi edifica.
          </p>
          <p className={p}>
            <strong className="text-secondary font-semibold">4. Il costruttore.</strong> Ha smesso di
            aspettare. Disciplina il corpo, ordina l&apos;anima, impara un mestiere, costruisce
            qualcosa di suo. Non chiede il permesso.
          </p>
          <p className={p}>
            Questo manifesto è scritto per chi vuole diventare il quarto, anche se oggi si riconosce
            nei primi tre. Soprattutto se oggi si riconosce nei primi tre.
          </p>

          <SectionDivider />

          {/* IV. La risposta tangibile */}
          <ManifestoSectionHeader numeral="IV" title="La risposta tangibile" />
          <p className="font-serif italic text-base text-foreground/60 -mt-4 mb-6">
            Costruire
          </p>

          <p className={p}>
            La risposta non è un partito, non è un hashtag, non è aspettare che il sistema si
            accorga di te. La risposta è una vita costruita in un ordine preciso, con cinque atti
            concreti:
          </p>
          <p className={p}>
            <strong className="text-secondary font-semibold">1. Fede operativa.</strong> Messa
            domenicale, preghiera quotidiana, sacramenti. Non la fede come emozione delle grandi
            occasioni, ma come struttura della settimana. È il fondamento: tutto il resto, senza
            questo, è un grattacielo sulla sabbia.
          </p>
          <p className={p}>
            <strong className="text-secondary font-semibold">2. Corpo disciplinato.</strong>
            Allenamento ogni giorno. Chi non comanda il proprio corpo non comanda niente: la
            disciplina fisica è la prima forma di sovranità, l&apos;unica che nessuno può toglierti.
          </p>
          <p className={p}>
            <strong className="text-secondary font-semibold">3. Competenza reale.</strong> Un
            mestiere che il mercato paga, imparato fino in fondo. Le opinioni non sfamano, la
            competenza sì. Prima si diventa utili, poi si diventa liberi.
          </p>
          <p className={p}>
            <strong className="text-secondary font-semibold">4. Impresa propria.</strong>
            Nell&apos;Italia degli stage gratuiti e dei contratti a termine, costruire in proprio
            non è la scelta romantica: è diventata quella razionale. Un uomo deve possedere i suoi
            strumenti, i suoi dati, il suo futuro: la dipendenza è servitù con un altro nome.
          </p>
          <p className={p}>
            <strong className="text-secondary font-semibold">5. Famiglia come destinazione.</strong>
            Tutto quanto sopra non è per te. L&apos;impresa serve la famiglia, la famiglia serve Dio.
            Invertire l&apos;ordine produce ricchi infelici e imperi di sabbia.
          </p>
          <p className={p}>
            &ldquo;Qualunque cosa facciate, fatela di buon animo, come per il Signore&rdquo; (Colossesi
            3,23). Costruire un&apos;impresa onesta è un atto spirituale. Costruire una famiglia è un
            atto di fede nel futuro. Farlo in Italia, oggi, è un atto militante.
          </p>

          <SectionDivider />

          {/* V. Le opportunità */}
          <ManifestoSectionHeader numeral="V" title="Le opportunità" />
          <p className="font-serif italic text-base text-foreground/60 -mt-4 mb-6">
            Perché ora
          </p>

          <p className={p}>
            Chi guarda i numeri del capitolo I vede un Paese finito. Io vedo il minimo di un ciclo,
            e i minimi sono il momento in cui si costruisce.
          </p>
          <p className={p}>
            <strong className="text-secondary font-semibold">1. La fede sta tornando.</strong> In
            Francia, a Pasqua 2025, sono stati battezzati oltre 17.800 catecumeni (10.384 adulti,
            +45% in un anno), il dato più alto mai registrato dalla Conferenza episcopale francese
            in vent&apos;anni di rilevazioni. Negli Stati Uniti le parrocchie registrano ondate di
            conversioni tra i ventenni. Il vuoto spirituale ha generato la sua stessa domanda: una
            generazione cresciuta senza Dio lo sta cercando da sola.
          </p>
          <p className={p}>
            <strong className="text-secondary font-semibold">
              2. Costruire non è mai costato così poco.
            </strong>{" "}
            Un laptop e una connessione danno accesso a strumenti, clienti e mercati che dieci anni
            fa richiedevano capitali e uffici. L&apos;intelligenza artificiale abbatte ogni giorno il
            costo di ciò che prima richiedeva interi reparti. La generazione esclusa dal vecchio
            sistema è la prima che può permettersi di non averne bisogno.
          </p>
          <p className={p}>
            <strong className="text-secondary font-semibold">3. La categoria è vuota.</strong> In
            Italia ci sono creator di business senz&apos;anima e voci cattoliche senza competenza
            economica. Nessuno unisce fede, disciplina e impresa in un progetto solo. Il primo che
            occupa un&apos;intersezione vuota non conquista una quota di mercato: diventa la
            categoria.
          </p>
          <p className={p}>
            <strong className="text-secondary font-semibold">
              4. Una generazione senza niente da perdere.
            </strong>{" "}
            Il vecchio percorso (studia, impiegati, mutuo, pensione) è rotto, e questa è anche una
            liberazione: chi non ha un posto da difendere nel sistema è libero di costruirne uno
            nuovo. Le grandi ricostruzioni non le fanno mai i garantiti.
          </p>

          <ManifestoCredo />

          {/* Epilogo */}
          <div className="pt-8 text-center space-y-6">
            <p className="font-display text-sm tracking-[0.2em] text-secondary">
              EPILOGO · L&apos;INVITO
            </p>
          </div>

          <p className={p}>
            Non ti chiedo di essere d&apos;accordo su ogni riga. Chi condivide l&apos;ottanta per
            cento di questa strada è un compagno di cammino, non un estraneo. Ti chiedo una cosa
            sola: smetti di vergognarti. Della tua fede, della tua nazione, della tua ambizione.
          </p>
          <p className={`${p} italic`}>
            Se ti hanno dato dell&apos;estremista perché credi in Dio, nella famiglia e nel lavoro,
            non sei estremista. Sei rimasto in piedi mentre tutti si inginocchiavano alla corrente.
          </p>
          <p className={p}>
            Quando le piattaforme ci cancellano, qui ci ritroviamo.
          </p>

          <div className="text-center pt-8">
            <p className="font-serif italic text-lg text-foreground/70">
              Noi proponiamo, Dio dispone.
            </p>
          </div>
        </div>
      </article>

      <EmailSignup />

      <VolpinFooter />
    </main>
  )
}
