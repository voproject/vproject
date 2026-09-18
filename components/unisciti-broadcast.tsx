import { Instagram } from "lucide-react"

/**
 * Canale broadcast di Instagram. Il link non ha target="_blank" apposta:
 * un indirizzo instagram.com aperto nella stessa scheda viene intercettato
 * dall'app Instagram quando è installata, mentre una scheda nuova finisce
 * più spesso nel browser.
 */
const BROADCAST = "https://www.instagram.com/channel/8aQ2Em3nr7Jmg_lZ/"

type Props = {
  /**
   * La frase di chiusura ("Se ti hanno dato dell'estremista...") è anche
   * l'ultima riga dell'Epilogo del manifesto, quindi quella pagina passa false
   * per non stamparla due volte nella stessa schermata.
   */
  showClosingLine?: boolean
  /**
   * Su /unisciti questa è tutta la pagina invece di una sezione aggiunta in
   * fondo, quindi niente riga di separazione in alto e niente spazi verticali,
   * che lì li mette la pagina centrando il contenuto.
   */
  standalone?: boolean
}

export function UniscitiBroadcast({ showClosingLine = true, standalone = false }: Props) {
  return (
    <section
      id="unisciti"
      className={
        standalone
          ? "w-full px-4 sm:px-6 lg:px-8"
          : "scroll-mt-24 py-20 px-4 sm:px-6 lg:px-8 border-t border-secondary/20"
      }
    >
      <div className="max-w-xl mx-auto text-center space-y-6">
        <h2 className="font-display text-2xl sm:text-3xl tracking-wide text-foreground">
          UNISCITI ALLA VERITÀ
        </h2>

        <p className="font-serif text-base text-foreground/80 leading-relaxed">
          Il discorso continua ogni giorno nel canale broadcast su Instagram. Entra e ricevi quello
          che scrivo, senza algoritmo e senza padroni.
        </p>

        <p className="font-display text-sm tracking-[0.15em] text-foreground/70 pt-2">
          Unisciti oggi.
          <br />
          Non quando sarà troppo tardi.
        </p>

        {showClosingLine && (
          <p className="font-serif italic text-lg text-foreground/90 leading-relaxed">
            Se ti hanno dato dell&apos;estremista perché credi in Dio, nella famiglia e nel lavoro,
            non sei estremista. Sei rimasto in piedi mentre tutti si inginocchiavano alla corrente.
          </p>
        )}

        <div className="pt-2">
          <a
            href={BROADCAST}
            className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto min-h-[58px] px-10 bg-primary text-primary-foreground font-display text-sm tracking-[0.1em] border border-secondary/40 hover:bg-primary/90 hover:border-secondary/70 transition-all duration-300"
          >
            <Instagram className="w-[18px] h-[18px]" />
            ENTRA NEL CANALE
          </a>
        </div>

        <p className="font-serif text-sm text-foreground/50">
          Si apre dentro l&apos;app di Instagram. Puoi uscire quando vuoi.
        </p>
      </div>
    </section>
  )
}
