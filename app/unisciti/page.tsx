import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { EmailSignup } from "@/components/email-signup"

export const metadata: Metadata = {
  title: "Unisciti | VolpinVeritas",
  description: "Imprenditore. Cattolico. Militante. Lascia la tua email e ricevi l'accesso.",
}

export default function UniscitiPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-background text-foreground flex items-center justify-center py-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-interior.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/80" />
      </div>

      {/* Corner arches, same motif as the rest of the site */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <svg viewBox="0 0 220 220" className="absolute top-0 left-0 w-20 h-20 sm:w-32 sm:h-32" fill="none">
          <path d="M0 220 L0 90 C0 40 40 0 90 0 L220 0" stroke="oklch(0.68 0.09 75)" strokeWidth="1" strokeOpacity="0.4" />
        </svg>
        <svg viewBox="0 0 220 220" className="absolute top-0 right-0 w-20 h-20 sm:w-32 sm:h-32 -scale-x-100" fill="none">
          <path d="M0 220 L0 90 C0 40 40 0 90 0 L220 0" stroke="oklch(0.68 0.09 75)" strokeWidth="1" strokeOpacity="0.4" />
        </svg>
        <svg viewBox="0 0 220 220" className="absolute bottom-0 left-0 w-20 h-20 sm:w-32 sm:h-32 -scale-y-100" fill="none">
          <path d="M0 220 L0 90 C0 40 40 0 90 0 L220 0" stroke="oklch(0.68 0.09 75)" strokeWidth="1" strokeOpacity="0.4" />
        </svg>
        <svg viewBox="0 0 220 220" className="absolute bottom-0 right-0 w-20 h-20 sm:w-32 sm:h-32 -scale-x-100 -scale-y-100" fill="none">
          <path d="M0 220 L0 90 C0 40 40 0 90 0 L220 0" stroke="oklch(0.68 0.09 75)" strokeWidth="1" strokeOpacity="0.4" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-20 w-full space-y-10">
        <div className="flex justify-center">
          <Link href="/">
            <Image
              src="/logo-volpinveritas.png"
              alt="VolpinVeritas"
              width={56}
              height={56}
              priority
            />
          </Link>
        </div>

        <EmailSignup standalone />
      </div>
    </main>
  )
}
