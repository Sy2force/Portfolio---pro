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
        @keyframes waterfallFlow {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(100%);
            opacity: 0;
          }
        }
      `}</style>
      <div className="min-h-screen text-white relative overflow-hidden">
      {/* Forest background with waterfalls */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-900/30 via-green-800/20 to-blue-900/40" />
      
      {/* Animated waterfalls */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Waterfall 1 */}
        <motion.div
          className="absolute top-0 left-1/4 w-32 h-full"
          animate={{
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-400/20 via-blue-500/30 to-blue-600/40 blur-sm" />
          <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-full"
            style={{
              background: `linear-gradient(180deg, 
                rgba(59, 130, 246, 0.4) 0%, 
                rgba(59, 130, 246, 0.6) 50%, 
                rgba(59, 130, 246, 0.3) 100%)`,
              animation: 'waterfallFlow 2s linear infinite'
            }}
          />
        </motion.div>

        {/* Waterfall 2 */}
        <motion.div
          className="absolute top-0 right-1/4 w-24 h-full"
          animate={{
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-cyan-400/20 via-cyan-500/30 to-cyan-600/40 blur-sm" />
          <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-full"
            style={{
              background: `linear-gradient(180deg, 
                rgba(34, 211, 238, 0.4) 0%, 
                rgba(34, 211, 238, 0.6) 50%, 
                rgba(34, 211, 238, 0.3) 100%)`,
              animation: 'waterfallFlow 2.5s linear infinite'
            }}
          />
        </motion.div>

        {/* Waterfall 3 */}
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-full"
          animate={{
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-300/20 via-blue-400/30 to-blue-500/40 blur-sm" />
          <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-full"
            style={{
              background: `linear-gradient(180deg, 
                rgba(147, 197, 253, 0.4) 0%, 
                rgba(147, 197, 253, 0.6) 50%, 
                rgba(147, 197, 253, 0.3) 100%)`,
              animation: 'waterfallFlow 3s linear infinite'
            }}
          />
        </motion.div>
      </div>

      {/* Forest trees silhouettes */}
      <div className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none">
        <svg className="absolute bottom-0 left-0 w-full h-full opacity-30" viewBox="0 0 1440 256" preserveAspectRatio="none">
          <path fill="#0f172a" d="M0,256 L0,180 L40,180 L40,140 L80,140 L80,180 L120,180 L120,100 L160,100 L160,180 L200,180 L200,120 L240,120 L240,180 L280,180 L280,80 L320,80 L320,180 L360,180 L360,130 L400,130 L400,180 L440,180 L440,90 L480,90 L480,180 L520,180 L520,110 L560,110 L560,180 L600,180 L600,70 L640,70 L640,180 L680,180 L680,120 L720,120 L720,180 L760,180 L760,100 L800,100 L800,180 L840,180 L840,140 L880,140 L880,180 L920,180 L920,80 L960,80 L960,180 L1000,180 L1000,110 L1040,110 L1040,180 L1080,180 L1080,90 L1120,90 L1120,180 L1160,180 L1160,130 L1200,130 L1200,180 L1240,180 L1240,100 L1280,100 L1280,180 L1320,180 L1320,120 L1360,120 L1360,180 L1400,180 L1400,150 L1440,150 L1440,256 Z" />
        </svg>
      </div>

      {/* Water droplets/particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-3 bg-blue-400/30 rounded-full"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, 100, 0],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeIn"
            }}
          />
        ))}
      </div>

      {/* Mist/fog effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-green-900/20 pointer-events-none" />

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
          className="text-center mb-6 md:mb-8"
        >
          <motion.h1 
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
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
          <h2 className="text-base md:text-lg text-gray-300 mb-3 font-light">
            Download or print a clean, professional bilingual resume
          </h2>
          <p className="text-xs md:text-sm text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Available in English and French. Optimized for startups, tech companies and professional applications.
          </p>
        </motion.div>

        {/* Resume Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid md:grid-cols-2 gap-3 md:gap-5 mb-6 md:mb-8"
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
            className="bg-gradient-to-br from-gray-800/60 via-gray-800/40 to-gray-900/60 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-5 md:p-6 hover:border-blue-500/50 transition-all duration-500 flex flex-col shadow-2xl hover:shadow-blue-500/20 relative overflow-hidden"
            style={{
              perspective: '1000px'
            }}
          >
            {/* Card glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 flex items-center justify-between mb-3">
              <h3 className="text-lg md:text-xl font-bold text-white">
                English Resume
              </h3>
              <span className="px-3 py-1 bg-gradient-to-r from-blue-600/30 to-purple-600/30 text-blue-400 text-xs font-medium rounded-full border border-blue-500/30 backdrop-blur-sm">
                1 page
              </span>
            </div>
            <p className="text-xs md:text-sm text-gray-300 mb-4 leading-relaxed flex-grow relative z-10">
              Clean one-page PDF optimized for LinkedIn, startups and tech applications.
            </p>
            <div className="space-y-3 relative z-10">
              <a
                href="/Shay_Acoca_CV_EN.pdf"
                download
                className="block w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl transition-all duration-300 font-semibold text-center touch-manipulation active:scale-98 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50"
                aria-label="Download Shay Acoca English CV PDF"
              >
                Download English PDF
              </a>
              <button
                onClick={() => handlePrint("/Shay_Acoca_CV_EN.pdf")}
                className="block w-full px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white rounded-xl transition-all duration-300 font-semibold text-center touch-manipulation active:scale-98 shadow-lg shadow-gray-500/30 hover:shadow-gray-500/50"
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
            className="bg-gradient-to-br from-gray-800/60 via-gray-800/40 to-gray-900/60 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-5 md:p-6 hover:border-purple-500/50 transition-all duration-500 flex flex-col shadow-2xl hover:shadow-purple-500/20 relative overflow-hidden"
            style={{
              perspective: '1000px'
            }}
          >
            {/* Card glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 flex items-center justify-between mb-3">
              <h3 className="text-lg md:text-xl font-bold text-white">
                CV Français
              </h3>
              <span className="px-3 py-1 bg-gradient-to-r from-purple-600/30 to-pink-600/30 text-purple-400 text-xs font-medium rounded-full border border-purple-500/30 backdrop-blur-sm">
                1 page
              </span>
            </div>
            <p className="text-xs md:text-sm text-gray-300 mb-4 leading-relaxed flex-grow relative z-10">
              CV professionnel en une page, optimisé pour candidatures tech et startups.
            </p>
            <div className="space-y-3 relative z-10">
              <a
                href="/Shay_Acoca_CV_FR.pdf"
                download
                className="block w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-xl transition-all duration-300 font-semibold text-center touch-manipulation active:scale-98 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50"
                aria-label="Télécharger le CV français de Shay Acoca en PDF"
              >
                Télécharger le PDF français
              </a>
              <button
                onClick={() => handlePrint("/Shay_Acoca_CV_FR.pdf")}
                className="block w-full px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white rounded-xl transition-all duration-300 font-semibold text-center touch-manipulation active:scale-98 shadow-lg shadow-gray-500/30 hover:shadow-gray-500/50"
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
          className="bg-gradient-to-br from-gray-800/40 via-gray-800/30 to-gray-900/40 backdrop-blur-xl border border-gray-700/40 rounded-3xl p-5 md:p-6 mb-6 md:mb-8 relative overflow-hidden"
        >
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
          
          <div className="relative z-10">
            <h3 className="text-base md:text-lg font-bold text-white mb-3 text-center">
              What&apos;s Inside
            </h3>
            <div className="grid md:grid-cols-3 gap-3 md:gap-5 text-center">
              <motion.div 
                className="space-y-2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  3
                </div>
                <div className="text-xs md:text-sm text-gray-300">Selected Projects</div>
              </motion.div>
              <motion.div 
                className="space-y-2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                  3
                </div>
                <div className="text-xs md:text-sm text-gray-300">Experience Items</div>
              </motion.div>
              <motion.div 
                className="space-y-2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
                  2
                </div>
                <div className="text-xs md:text-sm text-gray-300">Educational Programs</div>
              </motion.div>
            </div>
            <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-gray-700/50 text-center">
              <p className="text-xs text-gray-400">
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
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 text-blue-400 hover:text-blue-300 transition-all duration-300 font-medium touch-manipulation active:scale-95 text-xs md:text-sm px-4 py-2 rounded-xl backdrop-blur-sm border border-blue-500/20"
          >
            <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
