import { VolpinVeritasHeader } from "@/components/volpinveritas-header"
import { CathedralHero } from "@/components/cathedral-hero"
import { VSLSection } from "@/components/vsl-section"
import { SectionDivider } from "@/components/section-divider"
import { MissionSection } from "@/components/mission-section"
import { VolpinFooter } from "@/components/volpin-footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <VolpinVeritasHeader />
      <CathedralHero />
      <VSLSection />
      <SectionDivider />
      <MissionSection />
      <VolpinFooter />
    </main>
  )
}
