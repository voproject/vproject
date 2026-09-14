import type { Metadata } from "next"
import { VolpinVeritasHeader } from "@/components/volpinveritas-header"
import { VolpinFooter } from "@/components/volpin-footer"
import { EmailSignup } from "@/components/email-signup"
import { PreghiereLibro } from "@/components/preghiere-libro"
import { mattino } from "@/lib/preghiere"

export const metadata: Metadata = {
  title: "Preghiere del mattino | VolpinVeritas",
  description:
    "Le preghiere del mattino: gli atti di fede, speranza e carità e la consacrazione della giornata al Sacro Cuore, a Maria, a San Giuseppe e a San Michele.",
}

export default function PreghiereMattinoPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <VolpinVeritasHeader />
      <article className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <PreghiereLibro
          titolo="PREGHIERE DEL MATTINO"
          preghiere={mattino}
          altra={{ href: "/preghiere/sera", label: "PREGHIERE DELLA SERA" }}
        />
      </article>
      <EmailSignup />
      <VolpinFooter />
    </main>
  )
}
