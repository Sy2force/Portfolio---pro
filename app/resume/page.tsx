"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import Link from "next/link"

export const dynamic = 'force-dynamic'

export default function ResumePage() {
  const { language, setLanguage } = useLanguage()
  const t = translations[language]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white">
      {/* Language Toggle - Mobile */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <button
          onClick={() => setLanguage(language === "en" ? "fr" : "en")}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 font-medium text-sm touch-manipulation active:scale-95 shadow-lg shadow-blue-500/20"
        >
          {language === "en" ? "FR" : "EN"}
        </button>
      </div>

      {/* Language Toggle - Desktop */}
      <div className="hidden md:block fixed top-4 right-4 z-50">
        <button
          onClick={() => setLanguage(language === "en" ? "fr" : "en")}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 font-medium shadow-lg shadow-blue-500/20"
        >
          {language === "en" ? "FR" : "EN"}
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-10 pt-20 md:pt-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 md:mb-10"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Resume / CV
          </h1>
          <h2 className="text-lg md:text-xl text-gray-300 mb-4 font-light">
            Download a clean, professional bilingual resume
          </h2>
          <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Optimized for startups and professional applications. Available in English and French with a modern, corporate design.
          </p>
        </motion.div>

        {/* Resume Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-10"
        >
          {/* English Resume Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 md:p-8 hover:border-blue-500/50 transition-all duration-300 flex flex-col shadow-2xl hover:shadow-blue-500/10"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl md:text-2xl font-bold text-white">
                English Resume
              </h3>
              <span className="px-3 py-1 bg-blue-600/20 text-blue-400 text-xs font-medium rounded-full border border-blue-500/30">
                1 page
              </span>
            </div>
            <p className="text-sm md:text-base text-gray-300 mb-6 leading-relaxed flex-grow">
              Clean black-and-white PDF optimized for professional applications and printing.
            </p>
            <div className="space-y-3">
              <a
                href="/Shay_Acoca_CV_EN.pdf"
                download
                className="block w-full px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all duration-300 font-semibold text-center touch-manipulation active:scale-98 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
                aria-label="Download Shay Acoca English CV PDF"
              >
                Download English PDF
              </a>
            </div>
          </motion.div>

          {/* French Resume Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 md:p-8 hover:border-blue-500/50 transition-all duration-300 flex flex-col shadow-2xl hover:shadow-blue-500/10"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl md:text-2xl font-bold text-white">
                CV Français
              </h3>
              <span className="px-3 py-1 bg-blue-600/20 text-blue-400 text-xs font-medium rounded-full border border-blue-500/30">
                1 page
              </span>
            </div>
            <p className="text-sm md:text-base text-gray-300 mb-6 leading-relaxed flex-grow">
              CV noir et blanc, propre et optimisé pour impression et candidatures professionnelles.
            </p>
            <div className="space-y-3">
              <a
                href="/Shay_Acoca_CV_FR.pdf"
                download
                className="block w-full px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all duration-300 font-semibold text-center touch-manipulation active:scale-98 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
                aria-label="Télécharger le CV français de Shay Acoca en PDF"
              >
                Télécharger le PDF français
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Info Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-6 md:p-8 mb-8 md:mb-10"
        >
          <h3 className="text-lg md:text-xl font-bold text-white mb-4 text-center">
            What&apos;s Inside
          </h3>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6 text-center">
            <div className="space-y-2">
              <div className="text-2xl md:text-3xl font-bold text-blue-400">3</div>
              <div className="text-xs md:text-sm text-gray-300">Selected Projects</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl md:text-3xl font-bold text-blue-400">3</div>
              <div className="text-xs md:text-sm text-gray-300">Experience Items</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl md:text-3xl font-bold text-blue-400">2</div>
              <div className="text-xs md:text-sm text-gray-300">Educational Programs</div>
            </div>
          </div>
          <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-700/50 text-center">
            <p className="text-xs md:text-sm text-gray-400">
              Print-friendly black-and-white design • Clean professional PDF • Optimized for A4 printing
            </p>
          </div>
        </motion.div>

        {/* Back to Portfolio */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium touch-manipulation active:scale-95 text-sm md:text-base"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Portfolio
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
