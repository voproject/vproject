import type { Metadata } from "next"
import { VolpinVeritasHeader } from "@/components/volpinveritas-header"
import { VolpinFooter } from "@/components/volpin-footer"
import { EmailSignup } from "@/components/email-signup"
import { ProgrammaDonneContent } from "@/components/programma-donne-content"

export const metadata: Metadata = {
  title: "La guida per la giovane donna che vuole costruire ciò che dura | VolpinVeritas",
  description:
    "Otto capitoli su femminilità, corpo, casa, amore, matrimonio, maternità, fede e devozione. La guida che nessuno ti ha dato.",
}

export default function ProgrammaDonnePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <VolpinVeritasHeader />
      <article className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <ProgrammaDonneContent />
      </article>
      <EmailSignup />
      <VolpinFooter />
    </main>
  )
}
