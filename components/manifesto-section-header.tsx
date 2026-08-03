"use client"

import { motion } from "framer-motion"

export function ManifestoSectionHeader({
  numeral,
  title,
}: {
  numeral: string
  title: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="border-l-2 border-primary pl-6 mb-8"
    >
      <h2 className="font-display text-2xl sm:text-3xl tracking-wide text-foreground">
        {numeral}. {title.toUpperCase()}
      </h2>
    </motion.div>
  )
}
