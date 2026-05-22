"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export function Hero() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 md:pt-20 pb-28 md:pb-20 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-gray-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-gray-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-48 md:w-80 h-48 md:h-80 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="px-2"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
            {t.hero.title}
          </h1>

          <p className="text-sm md:text-base lg:text-lg text-muted mb-4 md:mb-6 max-w-2xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>

          <p className="text-xs md:text-sm lg:text-base text-muted mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
            {t.hero.shortPhrase}
          </p>

          <p className="text-xs md:text-sm lg:text-base text-muted mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
            {t.hero.secondaryPhrase}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8 md:mb-12 px-4">
            <a
              href="#projects"
              className="px-5 py-2.5 md:px-6 md:py-3 bg-white hover:bg-gray-100 text-black font-medium rounded-lg transition-all shadow-lg shadow-white/10 text-center touch-manipulation active:scale-95"
            >
              {t.hero.viewProjects}
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 md:px-6 md:py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg transition-all border border-gray-700 text-center touch-manipulation active:scale-95"
            >
              {t.hero.contactMe}
            </a>
          </div>

          <div className="flex justify-center gap-4 md:gap-6 mb-6 md:mb-8">
            <a
              href="https://github.com/Sy2force"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors p-2 md:p-2 rounded-lg hover:bg-gray-800/50 touch-manipulation active:scale-95"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/shay-acoca-046311302/?locale=en-US"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors p-2 md:p-2 rounded-lg hover:bg-gray-800/50 touch-manipulation active:scale-95"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a
              href="mailto:shayacoca20@gmail.com"
              className="text-gray-400 hover:text-white transition-colors p-2 md:p-2 rounded-lg hover:bg-gray-800/50 touch-manipulation active:scale-95"
              aria-label="Email"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
