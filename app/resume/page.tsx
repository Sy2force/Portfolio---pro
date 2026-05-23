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
        .resume-wave-background {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          background: #ffffff;
        }

        .resume-wave-field {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .resume-wave-background > *:not(.resume-wave-field) {
          position: relative;
          z-index: 1;
        }

        .resume-wave-field .wave-svg {
          position: absolute;
          left: 0;
          width: 100%;
          pointer-events: none;
        }

        .resume-wave-field .wave-svg-1 {
          top: 10%;
          height: 180px;
          opacity: 0.6;
          animation: waveSvgFloat 5s ease-in-out infinite alternate;
        }

        .resume-wave-field .wave-svg-2 {
          top: 30%;
          height: 150px;
          opacity: 0.5;
          animation: waveSvgFloat 6s ease-in-out infinite alternate-reverse;
        }

        .resume-wave-field .wave-svg-3 {
          top: 50%;
          height: 140px;
          opacity: 0.4;
          animation: waveSvgFloat 7s ease-in-out infinite alternate;
        }

        .resume-wave-field .wave-svg-4 {
          top: 70%;
          height: 160px;
          opacity: 0.5;
          animation: waveSvgFloat 8s ease-in-out infinite alternate-reverse;
        }

        @keyframes waveSvgFloat {
          from {
            transform: translateX(-15px);
          }
          to {
            transform: translateX(15px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .resume-wave-field .wave-svg {
            animation: none;
          }
        }

        @media (max-width: 768px) {
          .resume-wave-field .wave-svg-1 { height: 120px; top: 12%; }
          .resume-wave-field .wave-svg-2 { height: 100px; top: 32%; }
          .resume-wave-field .wave-svg-3 { height: 90px; top: 52%; }
          .resume-wave-field .wave-svg-4 { height: 100px; top: 72%; }
        }
      `}</style>
      <div className="min-h-screen text-gray-900 relative overflow-hidden resume-wave-background">
        {/* Wave field - full screen SVG waves */}
        <div className="resume-wave-field" aria-hidden="true">
          <svg className="wave-svg wave-svg-1" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="rgba(59, 130, 246, 0.12)" fillOpacity="1" d="M0,224L60,213.3C120,203,240,181,360,149.3C480,117,600,75,720,48C840,21,960,11,1080,16C1200,21,1320,43,1380,53.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
          <svg className="wave-svg wave-svg-2" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="rgba(99, 102, 241, 0.1)" fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
          <svg className="wave-svg wave-svg-3" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="rgba(59, 130, 246, 0.08)" fillOpacity="1" d="M0,160L80,181.3C160,203,320,245,480,245.3C640,245,800,203,960,186.7C1120,171,1280,181,1360,186.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
          <svg className="wave-svg wave-svg-4" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="rgba(99, 102, 241, 0.06)" fillOpacity="1" d="M0,128L60,144C120,160,240,192,360,197.3C480,203,600,181,720,165.3C840,149,960,139,1080,144C1200,149,1320,171,1380,181.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
        </div>

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
