"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import Link from "next/link"

export const dynamic = 'force-dynamic'

export default function ResumePage() {
  const { language, setLanguage } = useLanguage()

  const handlePrint = (pdfUrl: string) => {
    window.open(pdfUrl, '_blank')
  }

  const translations = {
    en: {
      title: "Resume / CV",
      subtitle: "Download or print a clean, professional bilingual resume",
      description: "Available in English and French. Optimized for startups, tech companies and professional applications.",
      englishCard: {
        language: "English",
        miniSummary: "Full Stack Developer",
        description: "Clean one-page PDF optimized for LinkedIn, startups and tech applications.",
        download: "Download English PDF",
        print: "Print English CV"
      },
      frenchCard: {
        language: "Français",
        miniSummary: "Développeur Full Stack",
        description: "CV professionnel en une page, optimisé pour candidatures tech et startups.",
        download: "Télécharger le PDF français",
        print: "Imprimer le CV français"
      },
      infoBlock: {
        title: "What's Inside",
        projects: "Selected Projects",
        experience: "Experience Items",
        education: "Educational Programs",
        footer: "Print-friendly design · Clean professional PDF · Optimized for A4"
      },
      backToPortfolio: "Back to Portfolio"
    },
    fr: {
      title: "CV / Resume",
      subtitle: "Téléchargez ou imprimez un CV bilingue propre et professionnel",
      description: "Disponible en anglais et français. Optimisé pour les startups, les entreprises tech et les candidatures professionnelles.",
      englishCard: {
        language: "Anglais",
        miniSummary: "Développeur Full Stack",
        description: "PDF d'une page optimisé pour LinkedIn, les startups et les applications tech.",
        download: "Télécharger le PDF anglais",
        print: "Imprimer le CV anglais"
      },
      frenchCard: {
        language: "Français",
        miniSummary: "Développeur Full Stack",
        description: "CV professionnel en une page, optimisé pour candidatures tech et startups.",
        download: "Télécharger le PDF français",
        print: "Imprimer le CV français"
      },
      infoBlock: {
        title: "Ce que contient le CV",
        projects: "Projets sélectionnés",
        experience: "Expériences",
        education: "Formations",
        footer: "Design imprimable · PDF professionnel propre · Optimisé pour A4"
      },
      backToPortfolio: "Retour au Portfolio"
    }
  }

  const t = translations[language] || translations.en

  return (
    <>
      <style jsx global>{`
        .resume-background {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          background: #ffffff;
        }

        .wave-container {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .wave {
          position: absolute;
          left: -50%;
          width: 200%;
          height: 100%;
          background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(59, 130, 246, 0.05) 30%, 
            rgba(59, 130, 246, 0.08) 50%, 
            rgba(59, 130, 246, 0.05) 70%, 
            transparent 100%
          );
          animation: waveMove 6s ease-in-out infinite;
        }

        .wave:nth-child(1) {
          top: 0;
          animation-delay: 0s;
          opacity: 0.6;
        }

        .wave:nth-child(2) {
          top: 33%;
          animation-delay: 2s;
          opacity: 0.5;
        }

        .wave:nth-child(3) {
          top: 66%;
          animation-delay: 4s;
          opacity: 0.4;
        }

        @keyframes waveMove {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .resume-background > *:not(.wave-container) {
          position: relative;
          z-index: 10;
        }
      `}</style>
      <div className="min-h-screen text-black bg-white resume-background">
        {/* Animated wave background */}
        <div className="wave-container">
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-20">
          {/* Language Toggle - Mobile */}
          <div className="relative z-50 md:hidden mb-4">
            <div className="flex justify-center">
              <button
                onClick={() => setLanguage(language === "en" ? "fr" : "en")}
                className="px-4 py-2 md:px-6 md:py-3 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-600 hover:from-blue-700 hover:via-blue-600 hover:to-blue-700 text-white rounded-2xl transition-all duration-400 font-black shadow-2xl shadow-blue-600/50 hover:shadow-3xl hover:shadow-blue-700/60 text-sm md:text-lg border-2 border-blue-400/30"
              >
                {language === "en" ? "FR" : "EN"}
              </button>
            </div>
          </div>

          {/* Language Toggle - Desktop */}
          <div className="hidden md:block relative z-50 mb-8">
            <div className="flex justify-center">
              <button
                onClick={() => setLanguage(language === "en" ? "fr" : "en")}
                className="px-6 py-3 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-600 hover:from-blue-700 hover:via-blue-600 hover:to-blue-700 text-white rounded-2xl transition-all duration-400 font-black shadow-2xl shadow-blue-600/50 hover:shadow-3xl hover:shadow-blue-700/60 text-lg border-2 border-blue-400/30"
              >
                {language === "en" ? "FR" : "EN"}
              </button>
            </div>
          </div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-6 md:mb-10"
          >
            <motion.h1 
              className="text-2xl md:text-4xl font-bold mb-2 md:mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0%', '100%', '0%']
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {t.title}
            </motion.h1>
            <h2 className="text-sm md:text-xl text-black mb-2 md:mb-4 font-semibold">
              {t.subtitle}
            </h2>
            <p className="text-xs md:text-base text-gray-700 max-w-2xl mx-auto">
              {t.description}
            </p>
          </motion.div>

          {/* Resume Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid md:grid-cols-2 gap-4 md:gap-10 mb-8 md:mb-16"
          >
            {/* English Resume Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ 
                scale: 1.02,
                rotateY: 2,
                rotateX: 2
              }}
              className="bg-white/95 backdrop-blur-xl border-3 border-gray-300 rounded-full p-4 md:p-20 hover:border-blue-600 transition-all duration-500 flex flex-col shadow-2xl hover:shadow-3xl hover:shadow-blue-600/30 relative overflow-hidden"
              style={{
                perspective: '1000px'
              }}
            >
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />
              
              {/* Logo */}
              <div className="relative z-10 flex justify-center mb-2 md:mb-6">
                <div className="w-12 h-12 md:w-24 md:h-24 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-2xl shadow-blue-500/40 flex items-center justify-center">
                  <svg className="w-7 h-7 md:w-14 md:h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
              
              <div className="relative z-10 flex flex-col items-center justify-center mb-2 md:mb-6">
                <h3 className="text-3xl md:text-7xl font-black text-gray-900 tracking-tight">
                  CV
                </h3>
                <span className="text-sm md:text-xl text-gray-500 font-medium mt-1 md:mt-2">
                  {t.englishCard.language}
                </span>
                <span className="text-xs md:text-lg text-gray-600 font-semibold mt-1 md:mt-2">
                  {t.englishCard.miniSummary}
                </span>
              </div>
              <p className="text-sm md:text-2xl text-gray-600 mb-4 md:mb-12 leading-relaxed flex-grow relative z-10 font-medium text-center">
                {t.englishCard.description}
              </p>
              <div className="space-y-3 md:space-y-6 relative z-10 flex flex-col items-center">
                <a
                  href="/Shay_Acoca_CV_EN.pdf"
                  download
                  className="w-full px-4 py-2 md:px-12 md:py-6 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-600 hover:from-blue-700 hover:via-blue-600 hover:to-blue-700 text-white rounded-2xl transition-all duration-400 font-black text-center shadow-2xl shadow-blue-600/50 hover:shadow-3xl hover:shadow-blue-700/60 text-sm md:text-2xl active:scale-95 border-2 border-blue-400/30"
                >
                  {t.englishCard.download}
                </a>
                <button
                  onClick={() => handlePrint("/Shay_Acoca_CV_EN.pdf")}
                  className="w-full px-4 py-2 md:px-12 md:py-6 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 hover:from-gray-700 hover:via-gray-600 hover:to-gray-700 text-white rounded-2xl transition-all duration-400 font-black text-center shadow-2xl shadow-gray-600/50 hover:shadow-3xl hover:shadow-gray-700/60 text-sm md:text-2xl active:scale-95 border-2 border-gray-500/30"
                >
                  {t.englishCard.print}
                </button>
              </div>
            </motion.div>

            {/* French Resume Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ 
                scale: 1.02,
                rotateY: -2,
                rotateX: 2
              }}
              className="bg-white/95 backdrop-blur-xl border-3 border-gray-300 rounded-full p-4 md:p-20 hover:border-purple-600 transition-all duration-500 flex flex-col shadow-2xl hover:shadow-3xl hover:shadow-purple-600/30 relative overflow-hidden"
              style={{
                perspective: '1000px'
              }}
            >
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />
              
              {/* Logo */}
              <div className="relative z-10 flex justify-center mb-2 md:mb-6">
                <div className="w-12 h-12 md:w-24 md:h-24 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl shadow-2xl shadow-purple-500/40 flex items-center justify-center">
                  <svg className="w-7 h-7 md:w-14 md:h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
              
              <div className="relative z-10 flex flex-col items-center justify-center mb-2 md:mb-6">
                <h3 className="text-3xl md:text-7xl font-black text-gray-900 tracking-tight">
                  CV
                </h3>
                <span className="text-sm md:text-xl text-gray-500 font-medium mt-1 md:mt-2">
                  {t.frenchCard.language}
                </span>
                <span className="text-xs md:text-lg text-gray-600 font-semibold mt-1 md:mt-2">
                  {t.frenchCard.miniSummary}
                </span>
              </div>
              <p className="text-sm md:text-2xl text-gray-600 mb-4 md:mb-12 leading-relaxed flex-grow relative z-10 font-medium text-center">
                {t.frenchCard.description}
              </p>
              <div className="space-y-3 md:space-y-6 relative z-10 flex flex-col items-center">
                <a
                  href="/Shay_Acoca_CV_FR.pdf"
                  download
                  className="w-full px-4 py-2 md:px-12 md:py-6 bg-gradient-to-br from-purple-600 via-purple-500 to-purple-600 hover:from-purple-700 hover:via-purple-600 hover:to-purple-700 text-white rounded-2xl transition-all duration-400 font-black text-center shadow-2xl shadow-purple-600/50 hover:shadow-3xl hover:shadow-purple-700/60 text-sm md:text-2xl active:scale-95 border-2 border-purple-400/30"
                >
                  {t.frenchCard.download}
                </a>
                <button
                  onClick={() => handlePrint("/Shay_Acoca_CV_FR.pdf")}
                  className="w-full px-4 py-2 md:px-12 md:py-6 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 hover:from-gray-700 hover:via-gray-600 hover:to-gray-700 text-white rounded-2xl transition-all duration-400 font-black text-center shadow-2xl shadow-gray-600/50 hover:shadow-3xl hover:shadow-gray-700/60 text-sm md:text-2xl active:scale-95 border-2 border-gray-500/30"
                >
                  {t.frenchCard.print}
                </button>
              </div>
            </motion.div>
          </motion.div>

          {/* Info Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/95 backdrop-blur-xl border-2 border-gray-200 rounded-3xl p-4 md:p-8 mb-6 md:mb-10 relative overflow-hidden shadow-xl"
          >
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
            
            <div className="relative z-10">
              <h3 className="text-sm md:text-xl font-bold text-gray-900 mb-2 md:mb-4 text-center">
                {t.infoBlock.title}
              </h3>
              <div className="grid md:grid-cols-3 gap-4 md:gap-6 text-center">
                <motion.div 
                  className="space-y-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                    3
                  </div>
                  <div className="text-xs md:text-base text-gray-700 font-medium">{t.infoBlock.projects}</div>
                </motion.div>
                <motion.div 
                  className="space-y-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
                    3
                  </div>
                  <div className="text-xs md:text-base text-gray-700 font-medium">{t.infoBlock.experience}</div>
                </motion.div>
                <motion.div 
                  className="space-y-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-600 to-pink-700 bg-clip-text text-transparent">
                    2
                  </div>
                  <div className="text-xs md:text-base text-gray-700 font-medium">{t.infoBlock.education}</div>
                </motion.div>
              </div>
              <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-200 text-center">
                <p className="text-xs md:text-sm text-gray-600 font-medium">
                  {t.infoBlock.footer}
                </p>
              </div>
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
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white transition-all duration-300 font-bold px-4 py-2 md:px-6 md:py-3 rounded-xl shadow-xl shadow-gray-500/30 hover:shadow-2xl hover:shadow-gray-500/50 active:scale-95 text-sm md:text-base"
            >
              <svg className="w-3 h-3 md:w-4 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              {t.backToPortfolio}
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  )
}
