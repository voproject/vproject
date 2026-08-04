"use client"

import Link from "next/link"
import Image from "next/image"

export function VolpinVeritasHeader() {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/70 backdrop-blur-md border-b border-secondary/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo-volpinveritas.png"
            alt="VolpinVeritas"
            width={32}
            height={32}
            className="opacity-90"
          />
          <span className="hidden sm:inline font-display text-sm tracking-[0.15em] text-foreground">
            VOLPINVERITAS
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-5 sm:gap-8">
          <Link
            href="/manifesto"
            className="font-serif text-sm text-foreground/70 hover:text-secondary transition-colors"
          >
            Manifesto
          </Link>
          <Link
            href="/programma"
            className="font-serif text-sm text-foreground/70 hover:text-secondary transition-colors"
          >
            Programma
          </Link>
          <a
            href="#unisciti"
            className="px-4 py-2 font-display text-xs tracking-[0.1em] bg-primary text-primary-foreground border border-secondary/30 hover:border-secondary/60 hover:bg-primary/90 transition-colors"
          >
            UNISCITI
          </a>
        </nav>
      </div>
    </header>
  )
}
