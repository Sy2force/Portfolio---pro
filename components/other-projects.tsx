"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export function OtherProjects() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-center">
            {t.otherProjects.title}
          </h2>
          <p className="text-base md:text-lg text-muted mb-8 max-w-3xl mx-auto text-center">
            {t.otherProjects.description}
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {t.otherProjects.list.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-3 p-4 bg-background border border-border rounded-lg hover:border-accent/30 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <p className="text-sm md:text-base text-muted">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <p className="text-sm md:text-base text-muted italic max-w-2xl mx-auto">
              {t.otherProjects.conclusion}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
