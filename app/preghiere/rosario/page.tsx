import type { Metadata } from "next"
import { VolpinVeritasHeader } from "@/components/volpinveritas-header"
import { VolpinFooter } from "@/components/volpin-footer"
import { Rosario } from "@/components/rosario"

export const metadata: Metadata = {
  title: "Il Santo Rosario | VolpinVeritas",
  description:
    "Il rosario interattivo: segui la corona grano per grano, con le preghiere e i misteri del giorno.",
}

export default function RosarioPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <VolpinVeritasHeader showNav={false} homeHref="/preghiere" />
      <article className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <Rosario />
      </article>
      <VolpinFooter />
    </main>
  )
}
