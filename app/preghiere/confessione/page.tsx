import type { Metadata } from "next"
import { VolpinVeritasHeader } from "@/components/volpinveritas-header"
import { VolpinFooter } from "@/components/volpin-footer"
import { ConfessioneGuida } from "@/components/confessione-guida"

export const metadata: Metadata = {
  title: "Guida per una buona confessione | VolpinVeritas",
  description:
    "Come prepararsi e confessarsi bene, in cinque passi: la preghiera, l'esame di coscienza, il pentimento, la confessione e la penitenza.",
}

export default function ConfessionePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <VolpinVeritasHeader showNav={false} homeHref="/preghiere" />
      <article className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <ConfessioneGuida />
      </article>
      <VolpinFooter />
    </main>
  )
}
