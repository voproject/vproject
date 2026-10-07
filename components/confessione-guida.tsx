import { passi, premesse, type Voce } from "@/lib/confessione"

const corpo = "font-serif text-lg text-foreground/90 leading-relaxed"

function Riga({ voce }: { voce: Voce }) {
  return (
    <li className="flex gap-3">
      <span
        aria-hidden="true"
        className={`shrink-0 mt-[0.6rem] w-[7px] h-[7px] rotate-45 ${
          voce.grave ? "bg-secondary" : "border border-secondary/45"
        }`}
      />
      <span>
        <span
          className={`font-serif leading-snug ${
            voce.grave ? "text-foreground" : "text-base text-foreground/75"
          }`}
        >
          {voce.grave && <span className="sr-only">Peccato grave. </span>}
          {voce.testo}
        </span>
        {voce.nota && (
          <span className="block mt-1 font-serif italic text-sm text-foreground/50 leading-snug">
            {voce.nota}
          </span>
        )}
      </span>
    </li>
  )
}

export function ConfessioneGuida() {
  return (
    <div className="max-w-2xl mx-auto">
      <header className="text-center space-y-4 pb-10">
        <p className="font-display text-sm tracking-[0.2em] text-secondary">LE PREGHIERE</p>
        <h1 className="font-display text-2xl sm:text-3xl tracking-wide text-foreground leading-snug">
          GUIDA PER UNA BUONA CONFESSIONE
        </h1>
        <p className="font-serif italic text-lg text-foreground/70">
          Cinque passi, dalla preparazione alla penitenza.
        </p>
      </header>

      <div className="space-y-5">
        {premesse.map((p, i) => (
          <p key={i} className={corpo}>
            {p}
          </p>
        ))}
      </div>

      {/* Indice: i cinque passi, per saltare a quello che serve */}
      <nav className="mt-14 border-y border-secondary/20 py-8">
        <p className="font-display text-xs tracking-[0.2em] text-secondary mb-5">I CINQUE PASSI</p>
        <ol className="space-y-2.5">
          {passi.map((p) => (
            <li key={p.slug}>
              <a
                href={`#${p.slug}`}
                className="font-serif text-base text-foreground/75 hover:text-secondary transition-colors"
              >
                <span className="text-secondary/70 mr-2">{p.numero}.</span>
                {p.titolo}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {passi.map((passo) => (
        <section
          key={passo.slug}
          id={passo.slug}
          className="scroll-mt-28 py-12 border-b border-secondary/15 last:border-b-0"
        >
          <div className="flex items-baseline gap-4">
            <span className="font-display text-3xl text-secondary/60 leading-none">
              {passo.numero}
            </span>
            <div>
              <h2 className="font-display text-xl sm:text-2xl tracking-wide text-foreground uppercase leading-snug">
                {passo.titolo}
              </h2>
              {passo.sottotitolo && (
                <p className="mt-1.5 font-serif italic text-base text-foreground/60">
                  {passo.sottotitolo}
                </p>
              )}
            </div>
          </div>

          <div className="mt-7 space-y-5">
            {passo.paragrafi?.map((p, i) => (
              <p key={i} className={corpo}>
                {p}
              </p>
            ))}

            {passo.preghiera && (
              <>
                <blockquote className="border-l-2 border-primary pl-5 py-1">
                  <p className={`${corpo} italic`}>{passo.preghiera.testo}</p>
                </blockquote>
                {passo.preghiera.dopo?.map((p, i) => (
                  <p key={i} className={corpo}>
                    {p}
                  </p>
                ))}
              </>
            )}

            {passo.esame && (
              <div className="border border-secondary/30 bg-card/30 p-5 sm:p-8 space-y-9">
                <p className="font-serif italic text-base text-secondary/85 text-center">
                  Le voci con il rombo pieno sono peccati gravi: per quelli la confessione è
                  indispensabile prima di accostarsi alla Comunione.
                </p>
                {passo.esame.map((gruppo) => (
                  <div key={gruppo.titolo}>
                    <h3 className="font-display text-xs tracking-[0.2em] text-secondary border-b border-secondary/25 pb-3">
                      {gruppo.titolo}
                    </h3>
                    <ul className="mt-5 space-y-3.5">
                      {gruppo.voci.map((voce) => (
                        <Riga key={voce.testo} voce={voce} />
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      ))}
    </div>
  )
}
