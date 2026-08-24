"use client"

export function VolpinFooter() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-secondary/20">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6 text-center">
          {/* Main Quote */}
          <p className="font-serif text-lg text-foreground/70 italic">
            Noi proponiamo, Dio dispone
          </p>

          {/* Attribution */}
          <p className="text-sm text-foreground/50 font-display tracking-wide">
            VOLPINVERITAS
          </p>

          {/* Minimal Links */}
          <div className="flex items-center justify-center gap-4 text-xs text-foreground/40 font-serif">
            <a
              href="/manifesto"
              className="hover:text-secondary transition-colors py-2.5 -my-2.5"
            >
              Manifesto
            </a>
            <span className="text-secondary/40">✦</span>
            <a
              href="/programma"
              className="hover:text-secondary transition-colors py-2.5 -my-2.5"
            >
              Programma
            </a>
            <span className="text-secondary/40">✦</span>
            <a
              href="#unisciti"
              className="hover:text-secondary transition-colors py-2.5 -my-2.5"
            >
              Unisciti
            </a>
            <span className="text-secondary/40">✦</span>
            <a
              href="https://instagram.com/volpinveritas"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition-colors py-2.5 -my-2.5"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
