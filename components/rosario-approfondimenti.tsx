"use client"

import Image from "next/image"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { momenti, notaPromesse, promesse, quadro } from "@/lib/rosario-storia"

const corpo = "font-serif text-lg text-foreground/90 leading-relaxed"

function romano(n: number) {
  const tabella: [number, string][] = [
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ]
  let out = ""
  for (const [valore, simbolo] of tabella) {
    while (n >= valore) {
      out += simbolo
      n -= valore
    }
  }
  return out
}

function Titolo({ titolo, sottotitolo }: { titolo: string; sottotitolo: string }) {
  return (
    <div className="text-left space-y-2 pr-2">
      <h2 className="font-display text-xl sm:text-2xl tracking-wide text-foreground group-hover:text-secondary transition-colors">
        {titolo}
      </h2>
      <p className="font-serif italic text-base text-foreground/60 leading-relaxed">{sottotitolo}</p>
    </div>
  )
}

// Below the rosary and closed by default: the page is for praying first,
// the background is there for whoever wants it.
export function RosarioApprofondimenti() {
  return (
    <section className="max-w-5xl mx-auto mt-20">
      <p className="font-display text-xs tracking-[0.2em] text-secondary text-center mb-6">
        PER APPROFONDIRE
      </p>
      <Accordion type="multiple" className="border-t border-secondary/20">
        <AccordionItem value="storia" className="border-b border-secondary/20">
          <AccordionTrigger className="hover:no-underline py-7 group">
            <Titolo
              titolo="LA STORIA DEL ROSARIO"
              sottotitolo="Come è nata questa preghiera e come si è diffusa, in pochi momenti."
            />
          </AccordionTrigger>
          <AccordionContent className="pb-12">
            <ol className="relative ml-2 border-l border-secondary/30 space-y-10 max-w-3xl">
              {momenti.map((m) => (
                <li key={m.anno} className="relative pl-8">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[5px] top-2 w-2.5 h-2.5 rotate-45 bg-secondary"
                  />
                  <p className="font-display text-sm tracking-[0.15em] text-secondary">{m.anno}</p>
                  <h3 className="mt-1 font-display text-lg tracking-wide text-foreground">
                    {m.titolo}
                  </h3>
                  <p className={`mt-2 ${corpo}`}>{m.testo}</p>
                </li>
              ))}
            </ol>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="promesse" className="border-b border-secondary/20">
          <AccordionTrigger className="hover:no-underline py-7 group">
            <Titolo
              titolo="LE QUINDICI PROMESSE"
              sottotitolo="Ciò che, secondo la tradizione, la Madonna ha promesso a chi recita il rosario."
            />
          </AccordionTrigger>
          <AccordionContent className="pb-12">
            <div className="grid md:grid-cols-[minmax(0,320px)_minmax(0,1fr)] gap-8 md:gap-12 items-start">
              <figure className="space-y-3">
                {/* On phones the full altarpiece would be taller than the screen,
                    so it is cropped to the central group: Mary, Dominic, Catherine. */}
                <div className="relative overflow-hidden border border-secondary/30 aspect-[4/5] md:aspect-auto">
                  <Image
                    src={quadro.src}
                    alt={quadro.alt}
                    width={quadro.width}
                    height={quadro.height}
                    sizes="(min-width: 768px) 320px, 100vw"
                    className="w-full h-full object-cover object-[50%_68%] md:h-auto"
                  />
                </div>
                <figcaption className="font-serif text-sm text-foreground/55 leading-snug">
                  {quadro.didascalia}
                  <span className="block mt-1 text-xs text-foreground/40">
                    Foto:{" "}
                    <a
                      href={quadro.pagina}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-secondary transition-colors"
                    >
                      {quadro.credito}
                    </a>
                  </span>
                </figcaption>
              </figure>

              <div className="min-w-0">
                <p className="font-serif italic text-base text-foreground/60 leading-relaxed">
                  {notaPromesse}
                </p>
                <ol className="mt-6 border-t border-secondary/15">
                  {promesse.map((p, i) => (
                    <li key={i} className="flex gap-5 py-4 border-b border-secondary/15">
                      <span className="w-9 shrink-0 text-right font-display text-sm tracking-wide text-secondary pt-1">
                        {romano(i + 1)}
                      </span>
                      <p className={corpo}>{p}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}
