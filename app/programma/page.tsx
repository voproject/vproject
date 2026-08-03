import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { VolpinVeritasHeader } from "@/components/volpinveritas-header"
import { VolpinFooter } from "@/components/volpin-footer"

export const metadata: Metadata = {
  title: "Il programma | VolpinVeritas",
  description:
    "Il manuale che nessuno ti ha dato. Scegli il percorso e comincia a costruire.",
}

export default function ProgrammaPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <VolpinVeritasHeader />

      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl mx-auto w-full text-center space-y-12">
          <div className="flex justify-center">
            <Image
              src="/logo-volpinveritas.png"
              alt="VolpinVeritas"
              width={52}
              height={52}
              priority
            />
          </div>

          <div className="space-y-4">
            <h1 className="font-display text-3xl sm:text-4xl tracking-wide text-foreground">
              IL PROGRAMMA
            </h1>
            <p className="font-serif italic text-lg text-foreground/70">
              Il manuale che nessuno ti ha dato.
            </p>
          </div>

          <p className="font-serif text-base text-foreground/80 leading-relaxed max-w-md mx-auto">
            Non è un corso e non si paga. È la strada, scritta nell&apos;ordine giusto. Scegli da
            dove parti.
          </p>

          <div className="grid sm:grid-cols-2 gap-5 pt-4">
            <Link
              href="/programma/uomini"
              className="group border border-secondary/30 hover:border-secondary/70 bg-card/40 hover:bg-card/70 transition-all duration-300 py-12 px-6 flex flex-col items-center justify-center gap-3"
            >
              <span className="font-display text-2xl tracking-[0.15em] text-foreground group-hover:text-secondary transition-colors">
                UOMO
              </span>
              <span className="font-display text-[0.65rem] tracking-[0.2em] text-secondary/70">
                18 · 35 ANNI
              </span>
              <span className="inline-flex items-center gap-2 font-serif text-sm text-foreground/50">
                Otto capitoli
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              href="/programma/donne"
              className="group border border-secondary/30 hover:border-secondary/70 bg-card/40 hover:bg-card/70 transition-all duration-300 py-12 px-6 flex flex-col items-center justify-center gap-3"
            >
              <span className="font-display text-2xl tracking-[0.15em] text-foreground group-hover:text-secondary transition-colors">
                DONNA
              </span>
              <span className="font-display text-[0.65rem] tracking-[0.2em] text-secondary/70">
                18 · 35 ANNI
              </span>
              <span className="inline-flex items-center gap-2 font-serif text-sm text-foreground/50">
                Otto capitoli
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </div>

      <VolpinFooter />
    </main>
  )
}
