"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export function About() {
  const { language } = useLanguage()
  const t = translations[language]

  const attributes = [
    {
      title: t.about.productMinded,
      description: t.about.productMindedDesc
    },
    {
      title: t.about.fullStackFoundation,
      description: t.about.fullStackFoundationDesc
    },
    {
      title: t.about.consistentLearner,
      description: t.about.consistentLearnerDesc
    }
  ]

  return (
    <section id="about" className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="px-2"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6 md:mb-8 text-center">
            {t.about.title}
          </h2>

          <div className="max-w-3xl mb-8 md:mb-12 lg:mb-16 px-2">
            <p className="text-sm md:text-base lg:text-lg text-muted mb-4 md:mb-6 leading-relaxed">
              {t.about.text1}
            </p>
            <p className="text-sm md:text-base lg:text-lg text-muted mb-4 md:mb-6 leading-relaxed">
              {t.about.text2}
            </p>
            <p className="text-sm md:text-base lg:text-lg text-muted mb-4 md:mb-6 leading-relaxed">
              {t.about.text3}
            </p>
            <p className="text-sm md:text-base lg:text-lg text-muted leading-relaxed">
              {t.about.text4}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
            {attributes.map((attribute, index) => (
              <motion.div
                key={attribute.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-4 md:p-5 lg:p-6 bg-card border border-border rounded-lg hover:border-accent/30 transition-colors shadow-lg hover:shadow-accent/10"
              >
                <h3 className="text-base md:text-lg lg:text-xl font-semibold text-foreground mb-2 md:mb-3">
                  {attribute.title}
                </h3>
                <p className="text-xs md:text-sm lg:text-base text-muted leading-relaxed">
                  {attribute.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
