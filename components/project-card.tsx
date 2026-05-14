"use client"

import { motion } from "framer-motion"
import { Project } from "@/data/projects"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700 transition-all duration-300 shadow-xl hover:shadow-2xl"
    >
      {/* Image */}
      <div className="relative overflow-hidden group h-56">
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-6">
        <div className="mb-3">
          <span className="text-xs font-medium text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
            {typeof project.type === 'object' ? project.type[language] : project.type}
          </span>
        </div>

        <h3 className="text-xl font-bold text-white mb-2">
          {project.title}
        </h3>

        <p className="text-sm text-gray-400 mb-4 line-clamp-2">
          {typeof project.description === 'object' ? project.description[language] : project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2 bg-white hover:bg-gray-100 text-black text-sm font-medium rounded-lg transition-all text-center"
          >
            {t.projects.liveDemo}
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium rounded-lg transition-all border border-gray-700 text-center"
          >
            {t.projects.github}
          </a>
        </div>
      </div>
    </motion.div>
  )
}
