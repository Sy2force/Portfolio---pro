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
    <div className="min-h-screen bg-background text-foreground">
      {/* Language Toggle - Mobile */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <button
          onClick={() => setLanguage(language === "en" ? "fr" : "en")}
          className="px-4 py-2 bg-accent hover:bg-accent-hover text-white rounded-lg transition-colors font-medium text-sm touch-manipulation active:scale-95"
        >
          {language === "en" ? "FR" : "EN"}
        </button>
      </div>

      {/* Language Toggle - Desktop */}
      <div className="hidden md:block fixed top-4 right-4 z-50">
        <button
          onClick={() => setLanguage(language === "en" ? "fr" : "en")}
          className="px-4 py-2 bg-accent hover:bg-accent-hover text-white rounded-lg transition-colors font-medium"
        >
          {language === "en" ? "FR" : "EN"}
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-12 pt-16 md:pt-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 md:mb-12"
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-foreground">
            Resume / CV
          </h1>
          <h2 className="text-lg md:text-xl text-accent mb-4">
            Choose the version you want to download.
          </h2>
          <p className="text-sm md:text-base text-muted max-w-2xl mx-auto leading-relaxed">
            Download a clean, professional PDF resume in English or French.
          </p>
        </motion.div>

        {/* Resume Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid md:grid-cols-2 gap-6 mb-8 md:mb-12"
        >
          {/* English Resume Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card border border-border rounded-lg p-6 md:p-8 hover:border-accent/30 transition-colors flex flex-col"
          >
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
              English Resume
            </h3>
            <p className="text-sm md:text-base text-muted mb-6 leading-relaxed flex-grow">
              Professional CV for international and tech opportunities.
            </p>
            <div className="space-y-3">
              <a
                href="/Shay_Acoca_CV_EN.pdf"
                download
                className="block w-full px-6 py-3 bg-accent hover:bg-accent-hover text-white rounded-lg transition-colors font-medium text-center touch-manipulation active:scale-95"
                aria-label="Download Shay Acoca English CV PDF"
              >
                Download English PDF (2 pages)
              </a>
              <a
                href="/Shay_Acoca_CV_Summary_EN.pdf"
                download
                className="block w-full px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors font-medium text-center touch-manipulation active:scale-95"
                aria-label="Download Shay Acoca English Summary CV PDF"
              >
                Download Summary PDF (1 page)
              </a>
            </div>
          </motion.div>

          {/* French Resume Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-card border border-border rounded-lg p-6 md:p-8 hover:border-accent/30 transition-colors flex flex-col"
          >
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
              CV Français
            </h3>
            <p className="text-sm md:text-base text-muted mb-6 leading-relaxed flex-grow">
              Version française complète pour candidatures francophones.
            </p>
            <div className="space-y-3">
              <a
                href="/Shay_Acoca_CV_FR.pdf"
                download
                className="block w-full px-6 py-3 bg-accent hover:bg-accent-hover text-white rounded-lg transition-colors font-medium text-center touch-manipulation active:scale-95"
                aria-label="Télécharger le CV français de Shay Acoca en PDF"
              >
                Télécharger le PDF français (2 pages)
              </a>
              <a
                href="/Shay_Acoca_CV_Summary_FR.pdf"
                download
                className="block w-full px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors font-medium text-center touch-manipulation active:scale-95"
                aria-label="Télécharger le CV résumé français de Shay Acoca en PDF"
              >
                Télécharger le résumé PDF (1 page)
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Back to Portfolio */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors font-medium touch-manipulation active:scale-95"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Portfolio
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
