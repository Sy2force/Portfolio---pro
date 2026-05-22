"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export function OtherProjects() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <span className="inline-block px-3 py-1 bg-accent/10 border border-accent/20 text-accent text-xs font-medium rounded-full mb-4">
              {language === "en" ? "In Progress" : "En cours"}
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {t.otherProjects.title}
            </h2>
            <p className="text-base md:text-lg text-muted max-w-3xl mx-auto">
              {t.otherProjects.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {t.otherProjects.list.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-3 p-5 bg-card border border-border rounded-lg hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all group"
              >
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0 group-hover:scale-125 transition-transform" />
                <p className="text-sm md:text-base text-muted group-hover:text-foreground transition-colors">
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
            className="text-center p-6 bg-card/50 border border-border rounded-lg"
          >
            <p className="text-sm md:text-base text-gray-300 italic max-w-2xl mx-auto">
              {t.otherProjects.conclusion}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
