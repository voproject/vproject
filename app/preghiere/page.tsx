import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { VolpinVeritasHeader } from "@/components/volpinveritas-header"
import { VolpinFooter } from "@/components/volpin-footer"

export const metadata: Metadata = {
  title: "Le preghiere | VolpinVeritas",
  description: "Le preghiere del mattino e della sera, per cominciare la giornata e per chiuderla.",
}

const percorsi = [
  { href: "/preghiere/mattino", sopra: "PREGHIERE DEL", nome: "MATTINO", sotto: "Al risveglio" },
  { href: "/preghiere/sera", sopra: "PREGHIERE DELLA", nome: "SERA", sotto: "Prima di dormire" },
  {
    href: "/preghiere/rosario",
    sopra: "IL SANTO",
    nome: "ROSARIO",
    sotto: "Grano per grano, con i misteri del giorno",
    largo: true,
  },
]

export default function PreghierePage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <VolpinVeritasHeader showNav={false} homeHref="/preghiere" />

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
              LE PREGHIERE
            </h1>
            <p className="font-serif italic text-lg text-foreground/70">
              Per cominciare la giornata e per chiuderla.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 pt-4">
            {percorsi.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className={`${p.largo ? "sm:col-span-2 " : ""}group border border-secondary/30 hover:border-secondary/70 bg-card/40 hover:bg-card/70 transition-all duration-300 py-12 px-6 flex flex-col items-center justify-center gap-3`}
              >
                <span className="font-display text-[0.65rem] tracking-[0.2em] text-secondary/70">
                  {p.sopra}
                </span>
                <span className="font-display text-2xl tracking-[0.15em] text-foreground group-hover:text-secondary transition-colors">
                  {p.nome}
                </span>
                <span className="inline-flex items-center gap-2 font-serif text-sm text-foreground/50">
                  {p.sotto}
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <VolpinFooter />
    </main>
  )
}
