"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function MissionSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          {/* Section Header */}
          <div className="border-l-2 border-primary pl-6">
            <h2 className="font-display text-4xl sm:text-5xl tracking-wide text-foreground">
              MISSIONE
            </h2>
          </div>

          {/* Diagnosis */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg text-foreground/85 leading-relaxed font-serif"
          >
            Ti hanno insegnato a vergognarti. Della tua fede, della tua nazione, della tua ambizione.
            Guardati intorno: culle vuote, chiese vuote, imprese che non nascono. Non è una crisi
            economica. È la distruzione dello scopo.
          </motion.p>

          {/* The four responses */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg text-foreground/85 leading-relaxed font-serif"
          >
            Ogni giovane italiano sceglie una risposta al declino, anche chi crede di non scegliere.
            L&apos;edonista, che ottimizza tutto tranne ciò che conta. Il rassegnato, che chiama
            lucidità la propria resa. Il rabbioso, che consuma indignazione e non costruisce niente.
            E il costruttore, che ha smesso di aspettare.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg font-display tracking-wide text-secondary"
          >
            Questo progetto è scritto per chi vuole diventare il quarto.
          </motion.p>

          {/* The builder, expanded */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg text-foreground/85 leading-relaxed font-serif"
          >
            Il costruttore non aspetta che qualcuno gli offra un posto, perché ha capito che le opinioni non
            sfamano nessuno mentre un mestiere imparato fino in fondo sì, e con quella competenza inizia
            a costruire qualcosa che sarà davvero suo, non un contratto a termine che può sparire da un
            giorno all&apos;altro. Vuole possedere i suoi strumenti, i suoi dati e il suo futuro, perché
            sa che la dipendenza, sotto qualunque forma si presenti, resta sempre una forma di servitù.
          </motion.p>

          {/* Links to manifesto and programma */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-5 sm:gap-10"
          >
            <a
              href="/manifesto"
              className="inline-flex items-center gap-2 text-sm font-display tracking-[0.1em] text-secondary border-b border-secondary/40 pb-1 hover:border-secondary transition-colors self-start"
            >
              LEGGI IL MANIFESTO COMPLETO
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="/programma"
              className="inline-flex items-center gap-2 text-sm font-display tracking-[0.1em] text-secondary border-b border-secondary/40 pb-1 hover:border-secondary transition-colors self-start"
            >
              SCOPRI IL PROGRAMMA
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            viewport={{ once: true }}
            className="pt-8 text-center border-t border-secondary/15"
          >
            <div className="flex items-center justify-center gap-6 pt-2 text-sm font-serif">
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
