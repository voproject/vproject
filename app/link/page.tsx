import type { Metadata } from "next"
import Image from "next/image"
import { Cross, Instagram } from "lucide-react"

export const metadata: Metadata = {
  title: "Link | VolpinVeritas",
  description: "Imprenditore Cattolico Militante. Tutti i link in un posto solo.",
}

// lucide's "X" is the close cross, not the platform mark, so this is hand-drawn.
function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.9 10.47 21.15 2h-1.72l-6.3 7.35L8.1 2H2.3l7.6 11.12L2.3 22h1.72l6.65-7.76L15.97 22h5.8l-7.88-11.53Zm-2.35 2.74-.77-1.1-6.13-8.79h2.64l4.95 7.1.77 1.1 6.43 9.22h-2.64l-5.25-7.53Z" />
    </svg>
  )
}

const IG = "https://instagram.com/volpinveritas"
const X = "https://x.com/volpinveritas"

const links = [
  { href: "/preghiere", label: "PREGHIERE", Icon: Cross, external: false, primary: true },
  { href: IG, label: "INSTAGRAM", Icon: Instagram, external: true },
  { href: X, label: "X", Icon: XIcon, external: true },
]

const social = [
  { href: IG, label: "Instagram", Icon: Instagram },
  { href: X, label: "X", Icon: XIcon },
]

export default function LinkPage() {
  return (
    <main className="relative min-h-[100svh] w-full overflow-hidden bg-background text-foreground flex items-center justify-center py-16 px-5">
      {/* Plain dark ground. A photo behind this much dimming only ever showed
          as a stray bright band across the middle, which read as a mistake, so
          the depth comes from a single soft glow behind the portrait instead. */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(120% 70% at 50% 18%, oklch(0.12 0.02 50) 0%, oklch(0.06 0.01 50) 62%)",
        }}
      />


      {/* Content */}
      <div className="relative z-20 w-full max-w-sm mx-auto text-center">
        {/* Portrait */}
        <div className="flex justify-center">
          <div className="w-28 h-28 rounded-full border border-secondary/50 overflow-hidden bg-card/60 flex items-center justify-center">
            {/* Already cropped square and centred on the face, so it drops
                straight into the circle with no object-position tuning. */}
            <Image
              src="/profilo.jpg"
              alt="Josef Volpin"
              width={600}
              height={600}
              priority
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h1 className="mt-6 font-display text-2xl tracking-[0.12em] text-foreground">
          VOLPINVERITAS
        </h1>
        <p className="mt-2 font-serif italic text-base text-secondary">
          Imprenditore Cattolico Militante
        </p>

        {/* Social row */}
        <div className="mt-6 flex items-center justify-center gap-7">
          {social.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-foreground/60 hover:text-secondary transition-colors p-2 -m-2"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        {/* Links. Our own pages open in the same tab; only the socials open a new one. */}
        <nav className="mt-9 flex flex-col gap-3.5">
          {links.map(({ href, label, Icon, primary, external }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className={[
                "group relative flex items-center justify-center min-h-[58px] px-14 border transition-all duration-300 font-display text-sm tracking-[0.1em]",
                primary
                  ? "bg-primary text-primary-foreground border-secondary/40 hover:bg-primary/90 hover:border-secondary/70"
                  : "bg-card/40 text-foreground border-secondary/25 hover:border-secondary/60 hover:bg-card/70",
              ].join(" ")}
            >
              <Icon
                className={`absolute left-5 w-[18px] h-[18px] ${
                  primary ? "text-primary-foreground/80" : "text-secondary/70"
                }`}
              />
              <span>{label}</span>
            </a>
          ))}
        </nav>

        <p className="mt-10 font-serif italic text-sm text-foreground/50">
          Noi proponiamo, Dio dispone.
        </p>
      </div>
    </main>
  )
}
