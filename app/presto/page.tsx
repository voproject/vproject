"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
}

export default function PrestoPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-background text-foreground flex items-center justify-center px-4">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hype-background.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/70" />
      </div>

      {/* Corner arches, same motif as main site */}
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
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-20 max-w-lg mx-auto text-center space-y-8 py-24"
      >
        <motion.div variants={item} className="flex justify-center">
          <Image src="/logo-volpinveritas.png" alt="VolpinVeritas" width={56} height={56} priority />
        </motion.div>

        <motion.div variants={item} className="flex justify-center">
          <span className="relative inline-flex items-center gap-2 px-4 py-1.5 border border-secondary/50 text-secondary font-display text-xs tracking-[0.25em]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary/60" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-secondary" />
            </span>
            PROSSIMAMENTE
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="font-display text-4xl sm:text-5xl tracking-[0.03em] text-foreground"
          style={{ textShadow: "0 2px 24px rgba(0,0,0,0.85), 0 1px 4px rgba(0,0,0,0.9)" }}
        >
          STA ARRIVANDO
        </motion.h1>

        <motion.p variants={item} className="font-serif italic text-lg text-secondary">
          Imprenditore. Cattolico. Militante.
        </motion.p>

        <motion.p variants={item} className="font-serif text-base text-foreground/80 leading-relaxed">
          Quello che hanno tenuto separato per settant&apos;anni, la fede, il lavoro e l&apos;amore
          per la propria terra, sta per tornare insieme in un solo progetto.
        </motion.p>

        <motion.p variants={item} className="font-serif italic text-sm text-foreground/50 pt-6">
          Noi proponiamo, Dio dispone.
        </motion.p>
      </motion.div>
    </main>
  )
}
