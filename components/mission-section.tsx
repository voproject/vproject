"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function MissionSection() {
  const missionItems = [
    {
      title: "La Missione",
      text: "Creare il primo progetto in Italia che unisce l'imprenditoria al cattolicesimo militante.",
    },
    {
      title: "Il Problema",
      text: "Ti hanno insegnato a vergognarti della tua fede, della tua nazione, della tua ambizione.",
    },
    {
      title: "La Soluzione",
      text: "Qui documenterò tutto: la Fede Cattolica, il Business, e l'amore verso la Patria.",
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* Section Header */}
          <div className="border-l-2 border-primary pl-6 pb-12">
            <h2 className="font-display text-4xl sm:text-5xl tracking-wide text-foreground">
              MISSIONE
            </h2>
          </div>

          {/* Mission Items Grid */}
          <div className="grid gap-8">
            {missionItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-3 border-l border-secondary/20 pl-6"
              >
                <h3 className="font-display text-sm font-semibold text-secondary tracking-[0.15em]">
                  {item.title.toUpperCase()}
                </h3>
                <p className="text-lg text-foreground/80 leading-relaxed font-serif">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="pt-12 space-y-6 text-center"
          >
            {/* Main CTA Button */}
            <a
              href="https://t.me/volpinveritas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-display text-sm tracking-[0.1em] border border-secondary/40 hover:bg-primary/90 hover:border-secondary/70 transition-all duration-300 group"
            >
              UNISCITI AL CANALE TELEGRAM
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Secondary CTAs */}
            <div className="flex items-center justify-center gap-6 pt-6 text-sm font-serif">
              <a
                href="https://instagram.com/volpinveritas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-secondary transition-colors"
              >
                Instagram @volpinveritas
              </a>
              <span className="text-secondary/40">✦</span>
              <a
                href="https://tiktok.com/@volpinveritas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-secondary transition-colors"
              >
                TikTok @volpinveritas
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
