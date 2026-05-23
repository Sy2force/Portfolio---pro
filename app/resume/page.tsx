"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import Link from "next/link"
import { useState, useEffect } from "react"

export const dynamic = 'force-dynamic'

export default function ResumePage() {
  const { language, setLanguage } = useLanguage()
  const t = translations[language]
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handlePrint = (pdfUrl: string) => {
    window.open(pdfUrl, '_blank')
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      <style jsx global>{`
        @keyframes waveMove {
          0%, 100% {
            transform: translateX(0) translateY(0);
          }
          25% {
            transform: translateX(10px) translateY(-5px);
          }
          50% {
            transform: translateX(-5px) translateY(5px);
          }
          75% {
            transform: translateX(-10px) translateY(-3px);
          }
        }

        @keyframes shimmer {
          0%, 100% {
            opacity: 0.3;
            transform: translateX(-100%);
          }
          50% {
            opacity: 0.8;
            transform: translateX(100%);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .resume-wave-background {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          background:
            radial-gradient(circle at 20% 10%, rgba(226,232,240,0.55), transparent 28%),
            radial-gradient(circle at 85% 20%, rgba(241,245,249,0.8), transparent 30%),
            linear-gradient(180deg, #ffffff 0%, #f8fafc 50%, #ffffff 100%);
        }

        .resume-wave-background::before {
          content: "";
          position: absolute;
          inset: -120px -10% auto -10%;
          height: 360px;
          background:
            linear-gradient(165deg, transparent 0 18%, rgba(255,255,255,0.95) 19% 28%, transparent 29% 100%),
            linear-gradient(170deg, transparent 0 30%, rgba(226,232,240,0.55) 31% 40%, transparent 41% 100%),
            linear-gradient(175deg, transparent 0 43%, rgba(255,255,255,0.92) 44% 53%, transparent 54% 100%),
            linear-gradient(168deg, transparent 0 57%, rgba(203,213,225,0.38) 58% 66%, transparent 67% 100%);
          filter: blur(0.2px);
          opacity: 0.95;
          pointer-events: none;
          z-index: 0;
          animation: waveMove 8s ease-in-out infinite;
        }

        .resume-wave-background::after {
          content: "";
          position: absolute;
          left: -8%;
          right: -8%;
          bottom: -130px;
          height: 420px;
          background:
            linear-gradient(12deg, transparent 0 22%, rgba(226,232,240,0.45) 23% 31%, transparent 32% 100%),
            linear-gradient(8deg, transparent 0 38%, rgba(255,255,255,0.96) 39% 49%, transparent 50% 100%),
            linear-gradient(5deg, transparent 0 55%, rgba(203,213,225,0.35) 56% 65%, transparent 66% 100%),
            linear-gradient(2deg, transparent 0 70%, rgba(255,255,255,0.9) 71% 80%, transparent 81% 100%);
          box-shadow:
            0 -35px 80px rgba(15, 23, 42, 0.08),
            inset 0 35px 80px rgba(255, 255, 255, 0.85),
            0 0 60px rgba(59, 130, 246, 0.1);
          opacity: 0.95;
          pointer-events: none;
          z-index: 0;
          animation: waveMove 10s ease-in-out infinite reverse;
        }

        .wave-shimmer {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.4) 50%,
            transparent 100%
          );
          animation: shimmer 3s ease-in-out infinite;
          pointer-events: none;
          z-index: 0;
          opacity: 0.3;
        }

        .wave-cross-effect {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 200%;
          height: 200%;
          background: radial-gradient(
            ellipse at center,
            rgba(59, 130, 246, 0.05) 0%,
            transparent 70%
          );
          animation: float 6s ease-in-out infinite;
          pointer-events: none;
          z-index: 0;
        }

        .resume-wave-background > * {
          position: relative;
          z-index: 1;
        }
      `}</style>
      <div className="min-h-screen text-gray-900 relative overflow-hidden resume-wave-background">
        {/* Shimmer effect */}
        <div className="wave-shimmer" />
        {/* Cross effect */}
        <div className="wave-cross-effect" />

      {/* Language Toggle - Mobile */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <button
          onClick={() => setLanguage(language === "en" ? "fr" : "en")}
          className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg transition-all duration-300 font-medium text-sm touch-manipulation active:scale-95 shadow-lg shadow-blue-500/30 backdrop-blur-sm"
        >
          {language === "en" ? "FR" : "EN"}
        </button>
      </div>

      {/* Language Toggle - Desktop */}
      <div className="hidden md:block fixed top-4 right-4 z-50">
        <button
          onClick={() => setLanguage(language === "en" ? "fr" : "en")}
          className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg transition-all duration-300 font-medium shadow-lg shadow-blue-500/30 backdrop-blur-sm"
        >
          {language === "en" ? "FR" : "EN"}
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 md:py-8 pt-20 md:pt-20 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 md:mb-10"
        >
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent"
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
          <h2 className="text-lg md:text-xl text-gray-800 mb-4 font-semibold">
            Download or print a clean, professional bilingual resume
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium">
            Available in English and French. Optimized for startups, tech companies and professional applications.
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
            whileHover={{ 
              scale: 1.02,
              rotateY: 2,
              rotateX: 2
            }}
            className="bg-white/95 backdrop-blur-xl border-2 border-gray-200 rounded-3xl p-6 md:p-8 hover:border-blue-500 transition-all duration-500 flex flex-col shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 relative overflow-hidden"
            style={{
              perspective: '1000px'
            }}
          >
            {/* Card glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 flex items-center justify-between mb-4">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                English Resume
              </h3>
              <span className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-bold rounded-full shadow-lg shadow-blue-500/30">
                1 page
              </span>
            </div>
            <p className="text-sm md:text-base text-gray-700 mb-6 leading-relaxed flex-grow relative z-10 font-medium">
              Clean one-page PDF optimized for LinkedIn, startups and tech applications.
            </p>
            <div className="space-y-4 relative z-10">
              <a
                href="/Shay_Acoca_CV_EN.pdf"
                download
                className="block w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl transition-all duration-300 font-bold text-center touch-manipulation active:scale-98 shadow-xl shadow-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/50 text-lg"
                aria-label="Download Shay Acoca English CV PDF"
              >
                Download English PDF
              </a>
              <button
                onClick={() => handlePrint("/Shay_Acoca_CV_EN.pdf")}
                className="block w-full px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white rounded-xl transition-all duration-300 font-bold text-center touch-manipulation active:scale-98 shadow-xl shadow-gray-500/40 hover:shadow-2xl hover:shadow-gray-500/50 text-lg"
                aria-label="Print Shay Acoca English CV"
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
            className="bg-white/95 backdrop-blur-xl border-2 border-gray-200 rounded-3xl p-6 md:p-8 hover:border-purple-500 transition-all duration-500 flex flex-col shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 relative overflow-hidden"
            style={{
              perspective: '1000px'
            }}
          >
            {/* Card glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 flex items-center justify-between mb-4">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                CV Français
              </h3>
              <span className="px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white text-sm font-bold rounded-full shadow-lg shadow-purple-500/30">
                1 page
              </span>
            </div>
            <p className="text-sm md:text-base text-gray-700 mb-6 leading-relaxed flex-grow relative z-10 font-medium">
              CV professionnel en une page, optimisé pour candidatures tech et startups.
            </p>
            <div className="space-y-4 relative z-10">
              <a
                href="/Shay_Acoca_CV_FR.pdf"
                download
                className="block w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-xl transition-all duration-300 font-bold text-center touch-manipulation active:scale-98 shadow-xl shadow-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/50 text-lg"
                aria-label="Télécharger le CV français de Shay Acoca en PDF"
              >
                Télécharger le PDF français
              </a>
              <button
                onClick={() => handlePrint("/Shay_Acoca_CV_FR.pdf")}
                className="block w-full px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white rounded-xl transition-all duration-300 font-bold text-center touch-manipulation active:scale-98 shadow-xl shadow-gray-500/40 hover:shadow-2xl hover:shadow-gray-500/50 text-lg"
                aria-label="Imprimer le CV français"
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
          className="bg-white/95 backdrop-blur-xl border-2 border-gray-200 rounded-3xl p-6 md:p-8 mb-8 md:mb-10 relative overflow-hidden shadow-xl"
        >
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
          
          <div className="relative z-10">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 text-center">
              What&apos;s Inside
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
                <div className="text-sm md:text-base text-gray-700 font-medium">Selected Projects</div>
              </motion.div>
              <motion.div 
                className="space-y-2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
                  3
                </div>
                <div className="text-sm md:text-base text-gray-700 font-medium">Experience Items</div>
              </motion.div>
              <motion.div 
                className="space-y-2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-600 to-pink-700 bg-clip-text text-transparent">
                  2
                </div>
                <div className="text-sm md:text-base text-gray-700 font-medium">Educational Programs</div>
              </motion.div>
            </div>
            <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-200 text-center">
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
            className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white transition-all duration-300 font-bold touch-manipulation active:scale-95 text-sm md:text-base px-6 py-3 rounded-xl shadow-xl shadow-gray-500/30 hover:shadow-2xl hover:shadow-gray-500/50"
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
