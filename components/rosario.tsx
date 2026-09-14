"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, RotateCcw } from "lucide-react"
import { Blocchi } from "@/components/preghiere-libro"
import { mattino, sera } from "@/lib/preghiere"
import {
  costruisciPassi,
  ordinali,
  ordineSerie,
  serie,
  seriePerGiorno,
  testi,
  type Passo,
  type PreghieraCondivisa,
  type PreghieraId,
  type Serie,
} from "@/lib/rosario"

const CHIAVE = "vv_rosario"

const condivise: Record<PreghieraCondivisa, { titolo: string; blocchi: (typeof mattino)[number]["blocchi"] }> = {
  // On the morning page this is titled as a consecration of the day, which
  // doesn't fit at the end of a rosary; the text is the same.
  sanGiuseppe: {
    titolo: "Preghiera a San Giuseppe",
    blocchi: mattino.find((p) => p.slug === "san-giuseppe")!.blocchi,
  },
  defunti: {
    titolo: "Per i defunti",
    blocchi: sera.find((p) => p.slug === "per-i-defunti")!.blocchi,
  },
}

type Grano = { id: string; x: number; y: number; tipo: "piccolo" | "grande" | "medaglia" }

const CX = 150
const CY = 150
const R = 118
const Y_MEDAGLIA = CY + R
const Y_CROCE = 420

const raggio = { piccolo: 4.6, grande: 7.4, medaglia: 10 }

// Beads around the loop get angular room by weight, so the big beads and the
// medal don't crowd their neighbours. The medal sits at the bottom (angle 0)
// and the first decade climbs the right-hand side.
function geometria(): Grano[] {
  const anello: { id: string; tipo: Grano["tipo"]; peso: number }[] = [
    { id: "medaglia", tipo: "medaglia", peso: 3.4 },
  ]
  for (let n = 1; n <= 5; n++) {
    for (let k = 1; k <= 10; k++) anello.push({ id: `d${n}-${k}`, tipo: "piccolo", peso: 1 })
    if (n < 5) anello.push({ id: `p-d${n}`, tipo: "grande", peso: 2 })
  }
  const totale = anello.reduce((s, g) => s + g.peso, 0)

  let acc = 0
  const grani: Grano[] = anello.map((g) => {
    const theta = ((acc + g.peso / 2 - anello[0].peso / 2) / totale) * Math.PI * 2
    acc += g.peso
    // Rounded: server and browser disagree in the last float digits of sin/cos,
    // which React reports as a hydration mismatch.
    return {
      id: g.id,
      tipo: g.tipo,
      x: Math.round((CX + R * Math.sin(theta)) * 100) / 100,
      y: Math.round((CY + R * Math.cos(theta)) * 100) / 100,
    }
  })

  grani.push(
    { id: "p2", tipo: "grande", x: CX, y: Y_MEDAGLIA + 32 },
    { id: "a3", tipo: "piccolo", x: CX, y: Y_MEDAGLIA + 56 },
    { id: "a2", tipo: "piccolo", x: CX, y: Y_MEDAGLIA + 73 },
    { id: "a1", tipo: "piccolo", x: CX, y: Y_MEDAGLIA + 90 },
    { id: "p1", tipo: "grande", x: CX, y: Y_MEDAGLIA + 116 },
  )
  return grani
}

function oggiChiave(d: Date) {
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
}

function etichetta(p: Passo) {
  if (p.fase === "inizio") return p.ave ? `INIZIO · AVE MARIA ${p.ave} DI 3` : "INIZIO"
  if (p.fase === "fine") return "CONCLUSIONE"
  return `DECINA ${p.decina} DI 5${p.ave ? ` · AVE MARIA ${p.ave} DI 10` : ""}`
}

const corpo = "font-serif text-lg text-foreground/90 leading-relaxed"

function TestoPreghiera({ id }: { id: PreghieraId }) {
  const t = testi[id]
  const litania = id === "litanie"
  return (
    <div className="space-y-5">
      {t.paragrafi?.map((p, i) => (
        <p key={i} className={corpo}>
          {p}
        </p>
      ))}
      {t.righe && (
        <div className={litania ? "space-y-1.5" : "space-y-2"}>
          {t.righe.map((riga, i) => (
            <p
              key={i}
              className={`font-serif ${litania ? "text-base" : "text-lg"} text-foreground/90 leading-snug`}
            >
              {riga.v}
              {riga.r && <span className="italic text-secondary"> {riga.r}</span>}
            </p>
          ))}
        </div>
      )}
      {t.chiusa?.map((p, i) => (
        <p key={i} className={`${corpo} pt-2`}>
          {p}
        </p>
      ))}
    </div>
  )
}

export function Rosario() {
  const passi = useMemo(costruisciPassi, [])
  const grani = useMemo(geometria, [])
  const primoPassoDelGrano = useMemo(() => {
    const m = new Map<string, number>()
    passi.forEach((p, k) => {
      if (!m.has(p.grano)) m.set(p.grano, k)
    })
    return m
  }, [passi])

  const [i, setI] = useState(0)
  const [scelta, setScelta] = useState<Serie>("gaudiosi")
  const [diOggi, setDiOggi] = useState<Serie | null>(null)
  const [pronto, setPronto] = useState(false)
  const pannello = useRef<HTMLDivElement>(null)
  const primaVolta = useRef(true)

  // The day is read on the client only: on the server it would be the
  // server's day, and the markup would not match after hydration.
  useEffect(() => {
    const d = new Date()
    const serieDiOggi = seriePerGiorno[d.getDay()]
    setDiOggi(serieDiOggi)
    try {
      const salvato = JSON.parse(localStorage.getItem(CHIAVE) ?? "null")
      const valido =
        salvato &&
        salvato.giorno === oggiChiave(d) &&
        salvato.serie in serie &&
        Number.isInteger(salvato.passo) &&
        salvato.passo >= 0 &&
        salvato.passo < passi.length
      if (valido) {
        setScelta(salvato.serie)
        setI(salvato.passo)
      } else {
        setScelta(serieDiOggi)
      }
    } catch {
      setScelta(serieDiOggi)
    }
    setPronto(true)
  }, [passi.length])

  useEffect(() => {
    if (!pronto) return
    localStorage.setItem(
      CHIAVE,
      JSON.stringify({ giorno: oggiChiave(new Date()), serie: scelta, passo: i }),
    )
  }, [pronto, scelta, i])

  const vai = useCallback(
    (n: number) => setI(Math.max(0, Math.min(passi.length - 1, n))),
    [passi.length],
  )

  useEffect(() => {
    const tasto = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") vai(i + 1)
      if (e.key === "ArrowLeft") vai(i - 1)
    }
    window.addEventListener("keydown", tasto)
    return () => window.removeEventListener("keydown", tasto)
  }, [i, vai])

  // After a long prayer the reader has scrolled down to the buttons; the next
  // text starts at the top of the panel, so bring that back into view.
  useEffect(() => {
    if (primaVolta.current) {
      primaVolta.current = false
      return
    }
    const el = pannello.current
    if (!el) return
    const top = el.getBoundingClientRect().top
    if (top < 96) window.scrollBy({ top: top - 104, behavior: "instant" })
  }, [i])

  const passo = passi[i]
  const s = serie[scelta]
  const mistero = passo.decina ? s.misteri[passo.decina - 1] : null
  const ultimo = i === passi.length - 1
  const fatti = useMemo(() => new Set(passi.slice(0, i).map((p) => p.grano)), [passi, i])

  const statoDi = (id: string) =>
    id === passo.grano ? "corrente" : fatti.has(id) ? "fatto" : "futuro"

  const coloreGrano = {
    corrente: "fill-primary stroke-secondary",
    fatto: "fill-secondary stroke-secondary",
    futuro: "fill-background stroke-secondary/50",
  } as const

  const statoCroce = statoDi("croce")

  return (
    <div className="max-w-5xl mx-auto">
      <header className="text-center space-y-4 pb-8 sm:pb-10">
        <p className="font-display text-sm tracking-[0.2em] text-secondary">LE PREGHIERE</p>
        <h1 className="font-display text-2xl sm:text-3xl tracking-wide text-foreground">
          IL SANTO ROSARIO
        </h1>
        <p className="font-serif text-base text-foreground/75 leading-relaxed max-w-xl mx-auto">
          Il grano che stai pregando si illumina sulla corona e sotto trovi le parole da dire.
          Premi Avanti dopo ogni preghiera. I misteri cambiano con il giorno della settimana, e
          quelli di oggi sono già selezionati.
        </p>
      </header>

      {/* Mysteries */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
        {ordineSerie.map((k) => {
          const attiva = k === scelta
          return (
            <button
              key={k}
              type="button"
              aria-pressed={attiva}
              onClick={() => setScelta(k)}
              className={[
                "relative flex flex-col items-center justify-center gap-1 min-h-[52px] sm:min-h-[72px] px-3 py-2 sm:py-3 border transition-colors",
                attiva
                  ? "border-secondary/80 bg-card/80"
                  : "border-secondary/20 bg-card/30 hover:border-secondary/50",
              ].join(" ")}
            >
              {pronto && diOggi === k && (
                <span className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 bg-background font-display text-[0.6rem] tracking-[0.2em] text-secondary">
                  OGGI
                </span>
              )}
              <span
                className={`font-display text-sm tracking-[0.12em] ${attiva ? "text-secondary" : "text-foreground/80"}`}
              >
                {serie[k].nome.toUpperCase()}
              </span>
              <span className="hidden sm:block font-serif text-xs text-foreground/50">{serie[k].giorni}</span>
            </button>
          )
        })}
      </div>

      <div className="mt-8 sm:mt-10 grid lg:grid-cols-[320px_minmax(0,1fr)] gap-8 lg:gap-14 items-start">
        {/* Beads */}
        <div className="lg:sticky lg:top-28 flex justify-center">
          <svg
            viewBox="0 0 300 450"
            className="w-full max-w-[250px] sm:max-w-[300px] h-auto"
            role="img"
            aria-label={`Corona del rosario, passo ${i + 1} di ${passi.length}`}
          >
            <circle cx={CX} cy={CY} r={R} fill="none" className="stroke-secondary/30" strokeWidth={1} />
            <line
              x1={CX}
              y1={Y_MEDAGLIA}
              x2={CX}
              y2={Y_CROCE - 14}
              className="stroke-secondary/30"
              strokeWidth={1}
            />

            {grani.map((g) => {
              const stato = statoDi(g.id)
              const r = raggio[g.tipo]
              return (
                <g
                  key={g.id}
                  onClick={() => vai(primoPassoDelGrano.get(g.id) ?? 0)}
                  className="cursor-pointer"
                >
                  {stato === "corrente" && (
                    <circle
                      cx={g.x}
                      cy={g.y}
                      r={r + 5}
                      fill="none"
                      className="stroke-secondary/70 animate-pulse"
                      strokeWidth={1}
                    />
                  )}
                  <circle
                    cx={g.x}
                    cy={g.y}
                    r={r}
                    className={`${coloreGrano[stato]} transition-colors duration-300`}
                    strokeWidth={stato === "corrente" ? 1.5 : 1}
                  />
                  {g.tipo === "medaglia" && (
                    <path
                      d={`M${g.x} ${g.y - 5}v10M${g.x - 3.5} ${g.y - 1.5}h7`}
                      className={stato === "futuro" ? "stroke-secondary/60" : "stroke-background"}
                      strokeWidth={1.2}
                    />
                  )}
                  {/* Wider invisible target, the small beads are hard to hit */}
                  <circle cx={g.x} cy={g.y} r={Math.max(r + 3, 8)} fill="transparent" />
                </g>
              )
            })}

            <g onClick={() => vai(0)} className="cursor-pointer">
              {statoCroce === "corrente" && (
                <circle cx={CX} cy={Y_CROCE + 4} r={24} fill="none" className="stroke-secondary/60 animate-pulse" strokeWidth={1} />
              )}
              <path
                d={`M${CX - 2.5} ${Y_CROCE - 14}h5v10h9v5h-9v19h-5v-19h-9v-5h9z`}
                className={`${coloreGrano[statoCroce]} transition-colors duration-300`}
                strokeWidth={1}
              />
              <rect x={CX - 16} y={Y_CROCE - 18} width={32} height={42} fill="transparent" />
            </g>
          </svg>
        </div>

        {/* Prayer */}
        <div ref={pannello} className="min-w-0">
          <div className="h-px w-full bg-secondary/15">
            <div
              className="h-px bg-secondary transition-[width] duration-300"
              style={{ width: `${((i + 1) / passi.length) * 100}%` }}
            />
          </div>

          <p className="mt-6 font-display text-xs tracking-[0.2em] text-secondary">
            {etichetta(passo)}
          </p>

          {mistero && passo.preghiera !== "mistero" && passo.fase === "decina" && (
            <p className="mt-2 font-serif italic text-sm text-foreground/55">
              {ordinali[passo.decina! - 1]} mistero {s.aggettivo}: {mistero.titolo.charAt(0).toLowerCase() + mistero.titolo.slice(1)}
            </p>
          )}

          <div className="mt-6 min-h-[16rem]">
            {passo.preghiera === "mistero" && mistero ? (
              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="font-serif italic text-base text-secondary">
                    {ordinali[passo.decina! - 1]} mistero {s.aggettivo}
                  </p>
                  <h2 className="font-display text-xl sm:text-2xl tracking-wide text-foreground leading-snug">
                    {mistero.titolo}
                  </h2>
                </div>
                <blockquote className="border-l-2 border-primary pl-5 space-y-2">
                  <p className={`${corpo} italic`}>{mistero.versetto}</p>
                  <cite className="block not-italic font-display text-xs tracking-[0.15em] text-secondary/80">
                    {mistero.riferimento.toUpperCase()}
                  </cite>
                </blockquote>
                <p className="font-serif italic text-base text-foreground/60 leading-relaxed">
                  Annuncia il mistero e fermati qualche istante a meditarlo. Poi, sul grano grande,
                  si prega il Padre Nostro.
                </p>
              </div>
            ) : (
              <div className="space-y-5">
                <h2 className="font-display text-xl sm:text-2xl tracking-wide text-foreground">
                  {passo.preghiera in condivise
                    ? condivise[passo.preghiera as PreghieraCondivisa].titolo
                    : testi[passo.preghiera as PreghieraId].titolo}
                </h2>
                {passo.nota && (
                  <p className="font-serif italic text-base text-foreground/60">{passo.nota}</p>
                )}
                {passo.preghiera in condivise ? (
                  <Blocchi blocchi={condivise[passo.preghiera as PreghieraCondivisa].blocchi} />
                ) : (
                  <TestoPreghiera id={passo.preghiera as PreghieraId} />
                )}
              </div>
            )}
          </div>

          <div className="sticky bottom-0 z-10 mt-10 -mx-4 px-4 py-4 sm:mx-0 sm:px-0 bg-background/90 backdrop-blur-md border-t border-secondary/15 flex gap-3">
            <button
              type="button"
              onClick={() => vai(i - 1)}
              disabled={i === 0}
              aria-label="Indietro"
              className="flex items-center justify-center gap-2 min-h-[52px] px-5 border border-secondary/30 font-display text-xs tracking-[0.15em] text-foreground/80 hover:border-secondary/60 disabled:opacity-30 disabled:pointer-events-none transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">INDIETRO</span>
            </button>
            {ultimo ? (
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
      </div>
    </div>
  )
}
