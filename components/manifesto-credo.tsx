"use client"

import { motion } from "framer-motion"

const tenets = [
  "Dio, famiglia, impresa, nell'ordine giusto. L'impresa serve la famiglia, la famiglia serve Dio. Invertire l'ordine produce ricchi infelici e imperi di sabbia.",
  "Il lavoro è partecipazione all'opera creatrice di Dio. Costruire un'impresa onesta è un atto spirituale.",
  "La forma precede la funzione. Ciò che una cosa è determina ciò che può fare. Vale per un uomo, per un'impresa, per una nazione: prima l'identità, poi i risultati.",
  "Costruire è la risposta al declino. Il sistema produce consumatori, questa missione produce costruttori. Chi costruisce recupera la volontà di vivere.",
  "La rassegnazione non esiste. È una resa travestita da lucidità, un peccato contro la speranza.",
  "Sovranità. Un uomo deve possedere i suoi strumenti, i suoi dati, il suo futuro. La dipendenza è servitù con un altro nome.",
  "La battaglia è spirituale prima che politica. Nessuna legge salva un popolo che non vuole esistere. Prima si riaccende la volontà, poi tutto il resto diventa possibile.",
  "Abbastanza non è abbastanza. Sopravvivere non è vivere. Questo progetto esiste per chi vuole imprimere la propria volontà sul mondo, non per chi vuole arrivare a fine mese.",
  "Non siete soli. Il progetto esiste perché quelli che la pensano così si trovino. Prima dell'economia, prima della politica, questa è la risposta all'isolamento.",
  "Noi proponiamo, Dio dispone.",
]

export function ManifestoCredo() {
  return (
    <div className="border-y border-secondary/30 py-14 my-4">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="font-display text-2xl sm:text-3xl tracking-wide text-foreground text-center mb-12"
      >
        VI. IL CREDO
      </motion.h2>
      <ol className="space-y-8 max-w-xl mx-auto text-center">
        {tenets.map((tenet, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: (i % 5) * 0.06, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="block font-display text-xs text-secondary tracking-[0.25em] mb-2">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="font-serif text-lg text-foreground/90 leading-relaxed">
              {tenet}
            </span>
          </motion.li>
        ))}
      </ol>
    </div>
  )
}
