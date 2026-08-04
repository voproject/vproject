import type { Metadata } from "next"
import { VolpinVeritasHeader } from "@/components/volpinveritas-header"
import { VolpinFooter } from "@/components/volpin-footer"
import { EmailSignup } from "@/components/email-signup"
import { ProgrammaUominiContent } from "@/components/programma-uomini-content"

export const metadata: Metadata = {
  title: "La guida per il giovane uomo che vuole costruire | VolpinVeritas",
  description:
    "Otto capitoli su lavoro, corpo, soldi, silenzio, donna, famiglia, missione e fede. Il manuale che nessuno ti ha dato.",
}

export default function ProgrammaUominiPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <VolpinVeritasHeader />
      <article className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <ProgrammaUominiContent />
      </article>
      <EmailSignup />
      <VolpinFooter />
    </main>
  )
}
