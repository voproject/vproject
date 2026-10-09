"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, RotateCcw } from "lucide-react"
import { carte, chiusa, rubrica } from "@/lib/santa-brigida"

const CHIAVE = "vv_brigida"
const corpo = "font-serif text-lg text-foreground/90 leading-relaxed"

function giornoDiOggi() {
  const d = new Date()
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
}

export function SantaBrigidaCarte() {
  const [i, setI] = useState(0)
  const [pronto, setPronto] = useState(false)
  const carta = useRef<HTMLDivElement>(null)
  const primaVolta = useRef(true)

  // Il punto a cui si è arrivati vale per la giornata: l'esercizio si fa ogni
  // giorno, quindi domani si riparte dalla prima orazione.
  useEffect(() => {
    try {
      const salvato = JSON.parse(localStorage.getItem(CHIAVE) ?? "null")
      if (
        salvato &&
        salvato.giorno === giornoDiOggi() &&
        Number.isInteger(salvato.carta) &&
        salvato.carta >= 0 &&
        salvato.carta < carte.length
      ) {
        setI(salvato.carta)
      }
    } catch {
      // niente da ripristinare
    }
    setPronto(true)
  }, [])

  useEffect(() => {
    if (!pronto) return
    localStorage.setItem(CHIAVE, JSON.stringify({ giorno: giornoDiOggi(), carta: i }))
  }, [pronto, i])

  const vai = useCallback((n: number) => setI(Math.max(0, Math.min(carte.length - 1, n))), [])

  useEffect(() => {
    const tasto = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") vai(i + 1)
      if (e.key === "ArrowLeft") vai(i - 1)
    }
    window.addEventListener("keydown", tasto)
    return () => window.removeEventListener("keydown", tasto)
  }, [i, vai])

  // Cambiando carta il testo riparte dall'alto: senza questo, su un'orazione
  // lunga si resterebbe fermi in fondo alla precedente.
  useEffect(() => {
    if (primaVolta.current) {
      primaVolta.current = false
      return
    }
    const el = carta.current
    if (!el) return
    const top = el.getBoundingClientRect().top
    if (top < 96) window.scrollBy({ top: top - 104, behavior: "instant" })
  }, [i])

  const c = carte[i]
  const ultima = i === carte.length - 1

  return (
    <div ref={carta} className="scroll-mt-28">
      <div className="flex items-center justify-between gap-4">
        <p className="font-display text-xs tracking-[0.2em] text-secondary">
          {ultima ? "CONCLUSIONE" : `ORAZIONE ${i + 1} DI ${carte.length - 1}`}
        </p>
        <div className="flex-1 h-px bg-secondary/15">
          <div
            className="h-px bg-secondary transition-[width] duration-300"
            style={{ width: `${((i + 1) / carte.length) * 100}%` }}
          />
        </div>
      </div>

      <article className="mt-5 border border-secondary/30 bg-card/30 p-6 sm:p-9">
        <h3 className="font-display text-lg sm:text-xl tracking-[0.12em] text-secondary text-center">
          {c.titolo}
        </h3>

        <div className="mt-7 space-y-5">
          {c.paragrafi.map((p, k) => (
            <p key={k} className={corpo}>
              {p}
            </p>
          ))}
        </div>

        {c.chiusa && (
          <div className="mt-8 pt-6 border-t border-secondary/20 space-y-3">
            {chiusa.map((riga, k) => (
              <p key={k} className={`${corpo} italic`}>
                {riga}
              </p>
            ))}
            <p className="font-serif italic text-base text-secondary/85 text-center pt-2">
              {rubrica}
            </p>
          </div>
        )}
      </article>

      <div className="sticky bottom-0 z-10 mt-6 -mx-4 px-4 py-4 sm:mx-0 sm:px-0 bg-background/90 backdrop-blur-md border-t border-secondary/15 flex gap-3">
        <button
          type="button"
          onClick={() => vai(i - 1)}
          disabled={i === 0}
          aria-label="Orazione precedente"
          className="flex items-center justify-center gap-2 min-h-[52px] px-5 border border-secondary/30 font-display text-xs tracking-[0.15em] text-foreground/80 hover:border-secondary/60 disabled:opacity-30 disabled:pointer-events-none transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">INDIETRO</span>
        </button>
        {ultima ? (
          <button
            type="button"
            onClick={() => vai(0)}
            className="flex-1 flex items-center justify-center gap-2 min-h-[52px] border border-secondary/40 bg-card/60 font-display text-sm tracking-[0.15em] text-foreground hover:border-secondary/70 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            RICOMINCIA
          </button>
        ) : (
          <button
            type="button"
            onClick={() => vai(i + 1)}
            className="flex-1 flex items-center justify-center gap-2 min-h-[52px] bg-primary text-primary-foreground border border-secondary/40 hover:bg-primary/90 hover:border-secondary/70 font-display text-sm tracking-[0.15em] transition-colors"
          >
            AVANTI
            <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  )
}
