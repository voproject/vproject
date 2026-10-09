import type { Metadata } from "next"
import { VolpinVeritasHeader } from "@/components/volpinveritas-header"
import { VolpinFooter } from "@/components/volpin-footer"
import { SantaBrigidaCarte } from "@/components/santa-brigida-carte"
import {
  approvazioni,
  dopoPromesse,
  imprimatur,
  premessa,
  promesse,
  promesseApertura,
  promesseCitazione,
  promesseIntro,
  testimonianza,
} from "@/lib/santa-brigida"

export const metadata: Metadata = {
  title: "Le quindici orazioni di Santa Brigida | VolpinVeritas",
  description:
    "Le quindici orazioni rivelate da nostro Signore a Santa Brigida, con le promesse di Gesù e le approvazioni. Una orazione alla volta, da seguire ogni giorno.",
}

const corpo = "font-serif text-lg text-foreground/90 leading-relaxed"

export default function SantaBrigidaPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <VolpinVeritasHeader showNav={false} homeHref="/preghiere" />
      <article className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <header className="text-center space-y-4 pb-10">
            <p className="font-display text-sm tracking-[0.2em] text-secondary">LE PREGHIERE</p>
            <h1 className="font-display text-2xl sm:text-3xl tracking-wide text-foreground leading-snug">
              LE QUINDICI ORAZIONI RIVELATE DA NOSTRO SIGNORE A SANTA BRIGIDA
            </h1>
            <p className="font-serif italic text-base text-foreground/70 leading-relaxed max-w-xl mx-auto">
              {premessa}
            </p>
          </header>

          <section className="space-y-5 border-t border-secondary/20 pt-10">
            <p className="font-display text-xs tracking-[0.2em] text-secondary">
              SANTA BRIGIDA SCRISSE
            </p>
            {testimonianza.map((p, i) => (
              <p key={i} className={`${corpo} italic`}>
                {p}
              </p>
            ))}
          </section>

          <section id="promesse" className="scroll-mt-28 mt-14 border-t border-secondary/20 pt-10">
            <h2 className="font-display text-xl sm:text-2xl tracking-wide text-foreground text-center">
              LE PROMESSE DI GESÙ
            </h2>

            <div className="mt-7 space-y-5">
              {promesseIntro.map((p, i) => (
                <p key={i} className={corpo}>
                  {p}
                </p>
              ))}
              <blockquote className="border-l-2 border-primary pl-5 py-1">
                <p className={`${corpo} italic`}>{promesseCitazione}</p>
              </blockquote>
              <p className={corpo}>E aggiunse:</p>
            </div>

            <div className="mt-7 border border-secondary/30 bg-card/30 p-5 sm:p-8">
              <p className={`${corpo} italic`}>{promesseApertura}</p>
              <ol className="mt-6 space-y-4">
                {promesse.map((p, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="shrink-0 w-7 text-right font-display text-sm text-secondary pt-1">
                      {i + 1}
                    </span>
                    <p className="font-serif text-base text-foreground/85 leading-snug italic">
                      {p}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            <p className={`${corpo} mt-7`}>{dopoPromesse}</p>
          </section>

          <section id="approvazioni" className="scroll-mt-28 mt-14 border-t border-secondary/20 pt-10">
            <h2 className="font-display text-xl sm:text-2xl tracking-wide text-foreground text-center">
              APPROVAZIONI
            </h2>
            <div className="mt-7 space-y-5">
              {approvazioni.map((p, i) => (
                <p key={i} className={corpo}>
                  {p}
                </p>
              ))}
            </div>
          </section>

          <section id="orazioni" className="scroll-mt-28 mt-16 border-t border-secondary/20 pt-10">
            <h2 className="font-display text-xl sm:text-2xl tracking-wide text-foreground text-center">
              LE QUINDICI ORAZIONI
            </h2>
            <p className="mt-3 mb-8 font-serif italic text-base text-foreground/60 text-center">
              Una alla volta. Premi Avanti quando hai finito di recitarla.
            </p>
            <SantaBrigidaCarte />
          </section>

          <p className="mt-14 pt-8 border-t border-secondary/20 font-serif text-sm text-foreground/45 text-center">
            {imprimatur}
          </p>
        </div>
      </article>
      <VolpinFooter />
    </main>
  )
}
