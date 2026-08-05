import { ArrowRight } from "lucide-react"

/**
 * Kit form endpoint. This numeric id is not the same as the uid in the embed
 * snippet (cca8d8f843): it was read from the form's own script at
 * https://volpinveritas.kit.com/cca8d8f843/index.js. Public value, safe in git.
 *
 * Where the subscriber goes after submitting is set inside Kit, not here:
 * Form builder > Settings > General > "Redirect to another page upon subscription".
 * Kit records the email first, then forwards them on.
 */
const KIT_FORM_ID = "9765171"

export function EmailSignup() {
  return (
    <section
      id="unisciti"
      className="scroll-mt-24 py-20 px-4 sm:px-6 lg:px-8 border-t border-secondary/20"
    >
      <div className="max-w-xl mx-auto text-center space-y-6">
        <h2 className="font-display text-2xl sm:text-3xl tracking-wide text-foreground">
          UNISCITI ALLA VERITÀ
        </h2>

        <p className="font-serif text-base text-foreground/80 leading-relaxed">
          Lascia la tua email e ti arriva subito l&apos;accesso al canale. Il posto dove il discorso
          continua ogni giorno, senza algoritmo e senza padroni.
        </p>

        <p className="font-display text-sm tracking-[0.15em] text-foreground/70 pt-2">
          Unisciti oggi.
          <br />
          Non quando sarà troppo tardi.
        </p>

        <form
          action={`https://app.kit.com/forms/${KIT_FORM_ID}/subscriptions`}
          method="post"
          className="pt-2 flex flex-col sm:flex-row gap-3 sm:gap-0"
        >
          <label htmlFor="email_address" className="sr-only">
            Indirizzo email
          </label>
          <input
            id="email_address"
            type="email"
            name="email_address"
            required
            autoComplete="email"
            placeholder="La tua email"
            className="flex-1 min-w-0 bg-transparent border border-secondary/40 sm:border-r-0 px-5 py-4 font-serif text-base text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-secondary transition-colors"
          />
          <button
            type="submit"
            className="shrink-0 inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-display text-sm tracking-[0.1em] border border-secondary/40 hover:bg-primary/90 hover:border-secondary/70 transition-all duration-300 group cursor-pointer"
          >
            UNISCITI
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <p className="font-serif text-sm text-foreground/50">
          Niente spam. Puoi uscire quando vuoi.
        </p>
      </div>
    </section>
  )
}
