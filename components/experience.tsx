"use client"

import { motion } from "framer-motion"
import { SectionTitle } from "./section-title"
import { experience } from "@/data/experience"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export function Experience() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title={t.experience.title}
          subtitle={t.experience.subtitle}
        />

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border" />
          
          <div className="space-y-12">
            {experience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}
              >
                <div className="absolute left-0 md:left-auto md:right-0 top-6 w-3 h-3 bg-accent rounded-full transform -translate-x-1/2 md:translate-x-1/2" />
                
                <div className="bg-card border border-border rounded-lg p-6 ml-8 md:ml-0">
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {typeof item.title === 'object' ? item.title[language] : item.title}
                  </h3>
                  <p className="text-sm text-accent mb-2">
                    {typeof item.organization === 'object' ? item.organization[language] : item.organization}
                    {item.date && (
                      <span className="text-muted ml-2">
                        {typeof item.date === 'object' ? item.date[language] : item.date}
                      </span>
                    )}
                  </p>
                  <p className="text-muted">
                    {typeof item.description === 'object' ? item.description[language] : item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
