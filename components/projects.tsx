"use client"

import { SectionTitle } from "./section-title"
import { ProjectCard } from "./project-card"
import { projects } from "@/data/projects"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import { motion } from "framer-motion"

export function Projects() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section id="projects" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle title={t.projects.title} subtitle={t.projects.subtitle} />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
