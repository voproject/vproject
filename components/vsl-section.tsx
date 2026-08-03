"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function VSLSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Section Title */}
          <div className="border-l-2 border-primary pl-6">
            <h3 className="font-display text-3xl sm:text-4xl tracking-wide text-foreground">
              IL MANIFESTO
            </h3>
          </div>

          {/* Video Embed */}
          <div className="relative w-full bg-muted/50 overflow-hidden border border-secondary/25">
            <div className="aspect-video bg-muted flex items-center justify-center">
              {/* Placeholder for VSL — swap with actual video URL */}
              <div className="text-center space-y-4">
                <div className="w-16 h-16 border border-secondary/40 rounded-full mx-auto flex items-center justify-center">
                  <svg
                    className="w-7 h-7 text-secondary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
                <p className="text-sm text-foreground/60 font-serif italic">Video manifesto coming soon</p>
              </div>
            </div>
          </div>

          {/* Context Text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg text-foreground/80 text-center font-serif italic"
          >
            Non è un video di benvenuto. È la dichiarazione da cui parte tutto quello che segue.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center pt-2"
          >
            <a
              href="https://t.me/volpinveritas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-display text-sm tracking-[0.1em] border border-secondary/40 hover:bg-primary/90 hover:border-secondary/70 transition-all duration-300 group"
            >
              UNISCITI ALLA VERITÀ
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
