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

          {/* What the manifesto and the programma are */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6 pt-4"
          >
            <a
              href="/manifesto"
              className="group border border-secondary/20 hover:border-secondary/50 bg-card/20 hover:bg-card/40 transition-all duration-300 p-7 flex flex-col gap-3"
            >
              <span className="font-display text-lg tracking-[0.12em] text-foreground group-hover:text-secondary transition-colors">
                IL MANIFESTO
              </span>
              <span className="font-serif text-base text-foreground/70 leading-relaxed">
                La diagnosi. I numeri del declino italiano, le cause che nessuno nomina e il credo su
                cui poggia tutto il resto.
              </span>
              <span className="inline-flex items-center gap-2 mt-1 text-xs font-display tracking-[0.15em] text-secondary/80">
                LEGGI
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>

            <a
              href="/programma"
              className="group border border-secondary/20 hover:border-secondary/50 bg-card/20 hover:bg-card/40 transition-all duration-300 p-7 flex flex-col gap-3"
            >
              <span className="font-display text-lg tracking-[0.12em] text-foreground group-hover:text-secondary transition-colors">
                IL PROGRAMMA
              </span>
              <span className="font-serif text-base text-foreground/70 leading-relaxed">
                La strada. Otto capitoli per gli uomini e otto per le donne, su fede, corpo, lavoro e
                famiglia, nell&apos;ordine giusto.
              </span>
              <span className="inline-flex items-center gap-2 mt-1 text-xs font-display tracking-[0.15em] text-secondary/80">
                SCOPRI
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
