import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { Blocco, Preghiera } from "@/lib/preghiere"

const corpo = "font-serif text-lg text-foreground/90 leading-relaxed"
const rubrica = "font-serif italic text-base text-secondary/85 text-center"

function Blocchi({ blocchi }: { blocchi: Blocco[] }) {
  return (
    <div className="space-y-6">
      {blocchi.map((b, i) => {
        switch (b.tipo) {
          case "prosa":
            return (
              <p key={i} className={corpo}>
                {b.testo}
              </p>
            )
          case "versi":
            return (
              <div key={i} className="space-y-5 text-center">
                {b.strofe.map((strofa, j) => (
                  <p key={j} className={corpo}>
                    {strofa.map((verso, k) => (
                      <span key={k} className="block">
                        {verso}
                      </span>
                    ))}
                  </p>
                ))}
              </div>
            )
          case "rubrica":
            return (
              <p key={i} className={rubrica}>
                {b.testo}
              </p>
            )
          case "sottotitolo":
            return (
              <h3
                key={i}
                className="pt-4 font-display text-xs tracking-[0.2em] text-secondary/80 text-center"
              >
                {b.testo}
              </h3>
            )
          case "invocazioni":
            return (
              <div key={i} className="space-y-4 text-center">
                {b.righe.map((r, j) => (
                  <div key={j}>
                    <p className={corpo}>{r.testo}</p>
                    <p className={rubrica}>{r.risposta}</p>
                  </div>
                ))}
              </div>
            )
        }
      })}
    </div>
  )
}

type Props = {
  titolo: string
  preghiere: Preghiera[]
  altra: { href: string; label: string }
}

// Shared by the morning and evening pages so the two stay visually twinned.
// No accordions, unlike the programma guides: a prayer is read straight
// through while you say it, so everything stays open.
export function PreghiereLibro({ titolo, preghiere, altra }: Props) {
  return (
    <div className="max-w-2xl mx-auto">
      <header className="text-center space-y-4 pb-12">
        <p className="font-display text-sm tracking-[0.2em] text-secondary">LE PREGHIERE</p>
        <h1 className="font-display text-2xl sm:text-3xl tracking-wide text-foreground leading-snug">
          {titolo}
        </h1>
      </header>

      <nav className="border-y border-secondary/20 py-8">
        <p className="font-display text-xs tracking-[0.2em] text-secondary mb-5">INDICE</p>
        <ol className="space-y-2.5">
          {preghiere.map((p, i) => (
            <li key={p.slug}>
              <a
                href={`#${p.slug}`}
                className="font-serif text-base text-foreground/75 hover:text-secondary transition-colors"
              >
                <span className="text-secondary/70 mr-2">{i + 1}.</span>
                {p.titolo}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {preghiere.map((p) => (
        <section
          key={p.slug}
          id={p.slug}
          className="scroll-mt-28 py-12 border-b border-secondary/15 last:border-b-0"
        >
          <h2 className="mb-8 font-display text-base sm:text-lg tracking-[0.12em] text-secondary text-center uppercase leading-snug">
            {p.titolo}
          </h2>
          <Blocchi blocchi={p.blocchi} />
        </section>
      ))}

      <div className="mt-8 pt-10 border-t border-secondary/20 text-center">
        <Link
          href={altra.href}
          className="group inline-flex items-center gap-2 font-display text-sm tracking-[0.15em] text-foreground/80 hover:text-secondary transition-colors py-3"
        >
          {altra.label}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  )
}
