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
          isolation: isolate;
          background:
            linear-gradient(180deg, #ffffff 0%, #f8fafc 45%, #f1f5f9 100%);
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

        .resume-wave-field .wave {
          position: absolute;
          left: -20%;
          width: 140%;
          border-radius: 999px;
          pointer-events: none;
          will-change: transform;
          transform-origin: center;
          filter: blur(1px);
        }

        .resume-wave-field .wave-1 {
          top: 8%;
          height: 180px;
          background: linear-gradient(
            180deg,
            rgba(255,255,255,0.92) 0%,
            rgba(226,232,240,0.55) 100%
          );
          box-shadow:
            0 20px 50px rgba(15,23,42,0.08),
            inset 0 12px 30px rgba(255,255,255,0.9);
          transform: rotate(-6deg);
          animation: waveFloatA 18s ease-in-out infinite alternate;
        }

        .resume-wave-field .wave-2 {
          top: 18%;
          height: 140px;
          background: linear-gradient(
            180deg,
            rgba(255,255,255,0.78) 0%,
            rgba(203,213,225,0.35) 100%
          );
          opacity: 0.8;
          transform: rotate(5deg);
          animation: waveFloatB 22s ease-in-out infinite alternate;
        }

        .resume-wave-field .wave-3 {
          top: 34%;
          height: 170px;
          background: linear-gradient(
            180deg,
            rgba(255,255,255,0.86) 0%,
            rgba(226,232,240,0.40) 100%
          );
          opacity: 0.72;
          transform: rotate(-4deg);
          animation: waveFloatC 24s ease-in-out infinite alternate;
        }

        .resume-wave-field .wave-4 {
          top: 48%;
          height: 150px;
          background: linear-gradient(
            180deg,
            rgba(255,255,255,0.74) 0%,
            rgba(203,213,225,0.30) 100%
          );
          opacity: 0.68;
          transform: rotate(4deg);
          animation: waveFloatA 26s ease-in-out infinite alternate;
        }

        .resume-wave-field .wave-5 {
          top: 66%;
          height: 180px;
          background: linear-gradient(
            180deg,
            rgba(255,255,255,0.84) 0%,
            rgba(226,232,240,0.34) 100%
          );
          opacity: 0.72;
          transform: rotate(-5deg);
          animation: waveFloatB 28s ease-in-out infinite alternate;
        }

        .resume-wave-field .wave-6 {
          top: 82%;
          height: 160px;
          background: linear-gradient(
            180deg,
            rgba(255,255,255,0.90) 0%,
            rgba(203,213,225,0.28) 100%
          );
          opacity: 0.76;
          transform: rotate(3deg);
          animation: waveFloatC 30s ease-in-out infinite alternate;
        }

        @keyframes waveFloatA {
          from {
            transform: translate3d(-40px, 0, 0) rotate(-6deg) scaleX(1.02);
          }
          to {
            transform: translate3d(40px, 16px, 0) rotate(-2deg) scaleX(1.08);
          }
        }

        @keyframes waveFloatB {
          from {
            transform: translate3d(34px, 0, 0) rotate(5deg) scaleX(1.03);
          }
          to {
            transform: translate3d(-34px, 14px, 0) rotate(1deg) scaleX(1.07);
          }
        }

        @keyframes waveFloatC {
          from {
            transform: translate3d(-28px, 0, 0) rotate(-4deg) scaleX(1.01);
          }
          to {
            transform: translate3d(28px, 18px, 0) rotate(2deg) scaleX(1.06);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .resume-wave-field .wave {
            animation: none;
          }
        }

        @media (max-width: 768px) {
          .resume-wave-field .wave-1 { top: 10%; height: 120px; }
          .resume-wave-field .wave-2 { top: 22%; height: 100px; }
          .resume-wave-field .wave-3 { top: 38%; height: 120px; }
          .resume-wave-field .wave-4 { top: 53%; height: 110px; }
          .resume-wave-field .wave-5 { top: 69%; height: 120px; }
          .resume-wave-field .wave-6 { top: 84%; height: 110px; }
        }
      `}</style>
      <div className="min-h-screen text-gray-900 relative overflow-hidden resume-wave-background">
        {/* Wave field - full screen waves */}
        <div className="resume-wave-field" aria-hidden="true">
          <span className="wave wave-1" />
          <span className="wave wave-2" />
          <span className="wave wave-3" />
          <span className="wave wave-4" />
          <span className="wave wave-5" />
          <span className="wave wave-6" />
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
