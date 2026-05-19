"use client"

import { motion } from "framer-motion"
import { SectionTitle } from "./section-title"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export function WhyHireMe() {
  const { language } = useLanguage()
  const t = translations[language]

  const reasons = [
    {
      title: t.whyHireMe.cleanExecution,
      description: t.whyHireMe.cleanExecutionDesc
    },
    {
      title: t.whyHireMe.productAwareness,
      description: t.whyHireMe.productAwarenessDesc
    },
    {
      title: t.whyHireMe.fullStackMindset,
      description: t.whyHireMe.fullStackMindsetDesc
    },
    {
      title: t.whyHireMe.fastLearning,
      description: t.whyHireMe.fastLearningDesc
    },
    {
      title: t.whyHireMe.professionalEthic,
      description: t.whyHireMe.professionalEthicDesc
    }
  ]

  return (
    <section id="why-hire-me" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
            {t.whyHireMe.title}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-5 md:p-6 bg-card border border-border rounded-lg hover:border-accent/30 transition-colors shadow-lg hover:shadow-accent/10"
              >
                <h3 className="text-base md:text-lg font-semibold text-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-sm md:text-base text-muted">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
