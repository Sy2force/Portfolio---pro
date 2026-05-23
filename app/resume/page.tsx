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
          left: 0;
          width: 200%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(30, 58, 138, 0.3), transparent);
          animation: waveMove 3s ease-in-out infinite;
        }

        .wave:nth-child(1) {
          top: 0;
          animation-delay: 0s;
        }

        .wave:nth-child(2) {
          top: 25%;
          animation-delay: 0.5s;
        }

        .wave:nth-child(3) {
          top: 50%;
          animation-delay: 1s;
        }

        .wave:nth-child(4) {
          top: 75%;
          animation-delay: 1.5s;
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
          <div className="wave"></div>
        </div>

        {/* Language Toggle - Mobile */}
        <div className="fixed top-4 right-4 z-50 md:hidden">
          <button
            onClick={() => setLanguage(language === "en" ? "fr" : "en")}
            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg transition-all duration-300 font-medium shadow-lg shadow-blue-500/30"
          >
            {language === "en" ? "FR" : "EN"}
          </button>
        </div>

        {/* Language Toggle - Desktop */}
        <div className="hidden md:block fixed top-4 right-4 z-50">
          <button
            onClick={() => setLanguage(language === "en" ? "fr" : "en")}
            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg transition-all duration-300 font-medium shadow-lg shadow-blue-500/30"
          >
            {language === "en" ? "FR" : "EN"}
          </button>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-20">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            <motion.h1 
              className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0%', '100%', '0%']
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              Resume / CV
            </motion.h1>
            <h2 className="text-xl text-black mb-4 font-semibold">
              Download or print a clean, professional bilingual resume
            </h2>
            <p className="text-base text-gray-700 max-w-2xl mx-auto">
              Available in English and French. Optimized for startups, tech companies and professional applications.
            </p>
          </motion.div>

          {/* Resume Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid md:grid-cols-2 gap-6 mb-10"
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
              className="bg-white/95 backdrop-blur-xl border-2 border-gray-200 rounded-3xl p-8 hover:border-blue-500 transition-all duration-500 flex flex-col shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 relative overflow-hidden"
              style={{
                perspective: '1000px'
              }}
            >
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  English Resume
                </h3>
                <span className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-bold rounded-full shadow-lg shadow-blue-500/30">
                  1 page
                </span>
              </div>
              <p className="text-base text-gray-700 mb-6 leading-relaxed flex-grow relative z-10 font-medium">
                Clean one-page PDF optimized for LinkedIn, startups and tech applications.
              </p>
              <div className="space-y-4 relative z-10">
                <a
                  href="/Shay_Acoca_CV_EN.pdf"
                  download
                  className="block w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl transition-all duration-300 font-bold text-center shadow-xl shadow-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/50 text-lg active:scale-95"
                >
                  Download English PDF
                </a>
                <button
                  onClick={() => handlePrint("/Shay_Acoca_CV_EN.pdf")}
                  className="block w-full px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white rounded-xl transition-all duration-300 font-bold text-center shadow-xl shadow-gray-500/40 hover:shadow-2xl hover:shadow-gray-500/50 text-lg active:scale-95"
                >
                  Print English CV
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
              className="bg-white/95 backdrop-blur-xl border-2 border-gray-200 rounded-3xl p-8 hover:border-purple-500 transition-all duration-500 flex flex-col shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 relative overflow-hidden"
              style={{
                perspective: '1000px'
              }}
            >
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  CV Français
                </h3>
                <span className="px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white text-sm font-bold rounded-full shadow-lg shadow-purple-500/30">
                  1 page
                </span>
              </div>
              <p className="text-base text-gray-700 mb-6 leading-relaxed flex-grow relative z-10 font-medium">
                CV professionnel en une page, optimisé pour candidatures tech et startups.
              </p>
              <div className="space-y-4 relative z-10">
                <a
                  href="/Shay_Acoca_CV_FR.pdf"
                  download
                  className="block w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-xl transition-all duration-300 font-bold text-center shadow-xl shadow-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/50 text-lg active:scale-95"
                >
                  Télécharger le PDF français
                </a>
                <button
                  onClick={() => handlePrint("/Shay_Acoca_CV_FR.pdf")}
                  className="block w-full px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white rounded-xl transition-all duration-300 font-bold text-center shadow-xl shadow-gray-500/40 hover:shadow-2xl hover:shadow-gray-500/50 text-lg active:scale-95"
                >
                  Imprimer le CV français
                </button>
              </div>
            </motion.div>
          </motion.div>

          {/* Info Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/95 backdrop-blur-xl border-2 border-gray-200 rounded-3xl p-8 mb-10 relative overflow-hidden shadow-xl"
          >
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
            
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                What&apos;s Inside
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <motion.div 
                  className="space-y-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                    3
                  </div>
                  <div className="text-base text-gray-700 font-medium">Selected Projects</div>
                </motion.div>
                <motion.div 
                  className="space-y-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
                    3
                  </div>
                  <div className="text-base text-gray-700 font-medium">Experience Items</div>
                </motion.div>
                <motion.div 
                  className="space-y-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-pink-700 bg-clip-text text-transparent">
                    2
                  </div>
                  <div className="text-base text-gray-700 font-medium">Educational Programs</div>
                </motion.div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                <p className="text-sm text-gray-600 font-medium">
                  Print-friendly design · Clean professional PDF · Optimized for A4
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
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white transition-all duration-300 font-bold px-6 py-3 rounded-xl shadow-xl shadow-gray-500/30 hover:shadow-2xl hover:shadow-gray-500/50 active:scale-95"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Portfolio
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  )
}
