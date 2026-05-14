"use client"

import { motion } from "framer-motion"
import { projects } from "@/data/projects"
import { skills } from "@/data/skills"
import { experience } from "@/data/experience"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export const dynamic = 'force-dynamic'

export default function ResumePage() {
  const { language, setLanguage } = useLanguage()
  const t = translations[language]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Language Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setLanguage(language === "en" ? "fr" : "en")}
          className="px-4 py-2 bg-accent hover:bg-accent-hover text-white rounded-lg transition-colors font-medium"
        >
          {language === "en" ? "FR" : "EN"}
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-2 text-foreground">
            {t.resume.title}
          </h1>
          <h2 className="text-xl text-accent mb-4">
            {t.resume.subtitle}
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            {t.resume.about}
          </p>

          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() => window.print()}
              className="px-4 py-2 bg-card border border-border hover:border-accent text-foreground rounded-lg transition-colors"
            >
              {t.resume.print}
            </button>
          </div>
        </motion.div>

        {/* Experience */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold mb-6 text-accent border-b border-border pb-2">
            {t.resume.experience}
          </h3>
          <div className="space-y-6">
            {experience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-card border border-border rounded-lg p-6 hover:border-accent/30 transition-colors"
              >
                <h4 className="text-lg font-semibold text-foreground mb-1">
                  {typeof item.title === 'object' ? item.title[language] : item.title}
                </h4>
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
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold mb-6 text-accent border-b border-border pb-2">
            {t.resume.skills}
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {Object.entries(skills).map(([category, items], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + categoryIndex * 0.1 }}
                className="bg-card border border-border rounded-lg p-5 hover:border-accent/30 transition-colors"
              >
                <h4 className="text-lg font-semibold text-foreground mb-3 capitalize">
                  {category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, skillIndex) => (
                    <span
                      key={`${category}-${skillIndex}`}
                      className="px-3 py-1 bg-accent/10 border border-accent/20 text-accent text-sm rounded-full"
                    >
                      {typeof skill.name === 'object' ? skill.name[language] : skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold mb-6 text-accent border-b border-border pb-2">
            {t.resume.projects}
          </h3>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="bg-card border border-border rounded-lg p-6 hover:border-accent/30 transition-colors"
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-lg font-semibold text-foreground">
                    {project.title}
                  </h4>
                  <span className="text-xs px-2 py-1 bg-accent/10 border border-accent/20 text-accent rounded-full">
                    {typeof project.type === 'object' ? project.type[language] : project.type}
                  </span>
                </div>
                <p className="text-muted mb-4 text-sm">
                  {typeof project.description === 'object' ? project.description[language] : project.description}
                </p>
                <div className="mb-4">
                  <p className="text-xs text-accent mb-2 font-medium">{t.resume.techStack}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-background border border-border text-muted rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-accent hover:text-accent-hover transition-colors"
                  >
                    {t.resume.liveDemo} →
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-accent hover:text-accent-hover transition-colors"
                  >
                    {t.resume.github} →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold mb-6 text-accent border-b border-border pb-2">
            {t.resume.contact}
          </h3>
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="space-y-3">
              <a
                href="https://github.com/Sy2force"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted hover:text-foreground transition-colors"
              >
                <span className="text-accent">GitHub:</span> github.com/Sy2force
              </a>
              <a
                href="https://linkedin.com/in/shay-acoca"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted hover:text-foreground transition-colors"
              >
                <span className="text-accent">LinkedIn:</span> linkedin.com/in/shay-acoca
              </a>
              <a
                href="mailto:shayacoca@gmail.com"
                className="flex items-center gap-3 text-muted hover:text-foreground transition-colors"
              >
                <span className="text-accent">Email:</span> shayacoca@gmail.com
              </a>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center text-sm text-muted border-t border-border pt-8"
        >
          <p>{t.resume.basedIn}</p>
          <p className="mt-2">Built with Next.js, TypeScript and Tailwind CSS</p>
        </motion.div>
      </div>

      <style jsx global>{`
        @media print {
          .no-print {
            display: none !important;
          }
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
        }
      `}</style>
    </div>
  )
}
