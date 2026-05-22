"use client"

import { motion } from "framer-motion"
import { SectionTitle } from "./section-title"
import { skills } from "@/data/skills"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export function Skills() {
  const { language } = useLanguage()
  const t = translations[language]

  const categories = [
    { name: t.skills.frontend, items: skills.frontend },
    { name: t.skills.backend, items: skills.backend },
    { name: t.skills.tools, items: skills.tools },
    { name: t.skills.digital, items: skills.digital },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title={t.skills.title}
          subtitle={t.skills.subtitle}
        />

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-card border border-border rounded-lg p-6 hover:border-accent/30 transition-colors shadow-lg hover:shadow-accent/10"
            >
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span
                    key={typeof skill.name === 'object' ? skill.name[language] : skill.name}
                    className="px-3 py-1 bg-background border border-border text-sm text-muted rounded-full"
                  >
                    {typeof skill.name === 'object' ? skill.name[language] : skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
