import type { Metadata } from "next"
import { VolpinVeritasHeader } from "@/components/volpinveritas-header"
import { VolpinFooter } from "@/components/volpin-footer"
import { PreghiereLibro } from "@/components/preghiere-libro"
import { sera } from "@/lib/preghiere"

export const metadata: Metadata = {
  title: "Preghiere della sera | VolpinVeritas",
  description:
    "Le preghiere della sera: l'atto di dolore, l'Angelo Custode, la preghiera per i defunti e la devozione delle Tre Ave Maria.",
}

export default function PreghiereSeraPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <VolpinVeritasHeader showNav={false} homeHref="/preghiere" />
      <article className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <PreghiereLibro
          titolo="PREGHIERE DELLA SERA"
          preghiere={sera}
          altra={{ href: "/preghiere/mattino", label: "PREGHIERE DEL MATTINO" }}
        />
      </article>
      <VolpinFooter />
    </main>
  )
}
