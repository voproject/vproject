"use client"

import { useEffect, useState, type ReactNode } from "react"
import { ArrowRight } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export type Chapter = {
  slug: string
  number: number
  title: string
  tesi: string
  menzogna: string
  protocollo: string[]
  ancora: string
  errore: string
}

export type Source = {
  label: string
  url: string
}

export const guideLabel = "font-display text-xs tracking-[0.2em] text-secondary"
export const guideBody = "font-serif text-base text-foreground/85 leading-relaxed"

type Props = {
  title: string
  subtitle: string
  ageBadge: string
  intro: ReactNode
  chapters: Chapter[]
  closing: ReactNode
  sources: Source[]
}

export function ProgrammaGuide({
  title,
  subtitle,
  ageBadge,
  intro,
  chapters,
  closing,
  sources,
}: Props) {
  const [open, setOpen] = useState<string | undefined>(undefined)

  // A direct link with #capitolo-N opens that chapter and scrolls to it.
  useEffect(() => {
    const openFromHash = () => {
      const hash = window.location.hash.replace("#", "")
      if (!hash) return
      if (!chapters.some((c) => c.slug === hash)) return
      setOpen(hash)
      requestAnimationFrame(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" })
      })
    }

    openFromHash()
    window.addEventListener("hashchange", openFromHash)
    return () => window.removeEventListener("hashchange", openFromHash)
  }, [chapters])

  return (
    <div className="max-w-2xl mx-auto">
      {/* Opening */}
      <header className="text-center space-y-4 pb-12">
        <p className="font-display text-sm tracking-[0.2em] text-secondary">LA GUIDA</p>
        <h1 className="font-display text-2xl sm:text-3xl tracking-wide text-foreground leading-snug">
          {title}
        </h1>
        <p className="font-serif italic text-lg text-foreground/70">{subtitle}</p>
        <div className="flex justify-center pt-2">
          <span className="inline-block px-4 py-1.5 border border-secondary/40 font-display text-xs tracking-[0.2em] text-secondary">
            {ageBadge}
          </span>
        </div>
      </header>

      <div className="space-y-6">{intro}</div>

      {/* Index */}
      <nav className="mt-14 border-y border-secondary/20 py-8">
        <p className={`${guideLabel} mb-5`}>GLI OTTO CAPITOLI</p>
        <ol className="space-y-2.5">
          {chapters.map((c) => (
            <li key={c.slug}>
              <a
                href={`#${c.slug}`}
                className="font-serif text-base text-foreground/75 hover:text-secondary transition-colors"
              >
                <span className="text-secondary/70 mr-2">{c.number}.</span>
                {c.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* Chapters */}
      <Accordion type="single" collapsible value={open} onValueChange={setOpen} className="mt-6">
        {chapters.map((c) => (
          <AccordionItem
            key={c.slug}
            value={c.slug}
            id={c.slug}
            className="border-b border-secondary/20 scroll-mt-28"
          >
            <AccordionTrigger className="hover:no-underline py-6 group">
              <div className="text-left space-y-2 pr-2">
                <h2 className="font-display text-lg sm:text-xl tracking-wide text-foreground group-hover:text-secondary transition-colors">
                  {c.number}. {c.title.toUpperCase()}
                </h2>
                <p className="font-serif italic text-base text-foreground/60 leading-relaxed">
                  {c.tesi}
                </p>
              </div>
            </AccordionTrigger>

            <AccordionContent className="pb-10 space-y-7">
              <div className="space-y-2">
                <p className={guideLabel}>LA MENZOGNA</p>
                <p className={guideBody}>{c.menzogna}</p>
              </div>

              <div className="space-y-3">
                <p className={guideLabel}>IL PROTOCOLLO</p>
                <ol className="space-y-4">
                  {c.protocollo.map((step, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="font-display text-sm text-secondary/70 shrink-0 pt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className={guideBody}>{step}</p>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="space-y-2 border-l-2 border-primary pl-5">
                <p className={guideLabel}>L&apos;ANCORA</p>
                <p className={`${guideBody} italic`}>{c.ancora}</p>
              </div>

              <div className="space-y-2">
                <p className={guideLabel}>L&apos;ERRORE</p>
                <p className={guideBody}>{c.errore}</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {/* Closing */}
      <section className="mt-16 pt-10 border-t border-secondary/20 space-y-6">
        {closing}

        <div className="text-center pt-6">
          <a
            href="#unisciti"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-display text-sm tracking-[0.1em] border border-secondary/40 hover:bg-primary/90 hover:border-secondary/70 transition-all duration-300 group"
          >
            UNISCITI ALLA VERITÀ
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* Sources */}
      <Accordion type="single" collapsible className="mt-14">
        <AccordionItem value="fonti" className="border-t border-secondary/20 border-b-0">
          <AccordionTrigger className="hover:no-underline py-5">
            <span className={guideLabel}>FONTI</span>
          </AccordionTrigger>
          <AccordionContent className="pb-8">
            <ol className="space-y-3">
              {sources.map((s, i) => (
                <li key={i} className="font-serif text-sm text-foreground/60 leading-relaxed">
                  <span className="text-secondary/60 mr-2">{i + 1}.</span>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-secondary transition-colors"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ol>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
