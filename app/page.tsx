import { VolpinVeritasHeader } from "@/components/volpinveritas-header"
import { CathedralHero } from "@/components/cathedral-hero"
import { MissionSection } from "@/components/mission-section"
import { UniscitiBroadcast } from "@/components/unisciti-broadcast"
import { VolpinFooter } from "@/components/volpin-footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <VolpinVeritasHeader />
      <CathedralHero />
      <MissionSection />
      <UniscitiBroadcast />
      <VolpinFooter />
    </main>
  )
}
