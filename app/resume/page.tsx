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
            radial-gradient(circle at 18% 12%, rgba(226, 232, 240, 0.75), transparent 28%),
            radial-gradient(circle at 82% 18%, rgba(241, 245, 249, 0.95), transparent 32%),
            linear-gradient(180deg, #ffffff 0%, #f8fafc 48%, #ffffff 100%);
        }

        .resume-wave-background::before,
        .resume-wave-background::after {
          content: "";
          position: absolute;
          left: -15%;
          right: -15%;
          pointer-events: none;
          z-index: -1;
          will-change: transform;
        }

        .resume-wave-background::before {
          top: -150px;
          height: 500px;
          opacity: 0.95;
          background:
            radial-gradient(120% 80% at 50% 100%, rgba(255,255,255,0.98) 0 36%, transparent 37%),
            radial-gradient(115% 75% at 48% 92%, rgba(226,232,240,0.65) 0 38%, transparent 39%),
            radial-gradient(110% 70% at 52% 82%, rgba(255,255,255,0.96) 0 40%, transparent 41%),
            radial-gradient(105% 65% at 50% 72%, rgba(203,213,225,0.42) 0 42%, transparent 43%);
          filter: drop-shadow(0 24px 32px rgba(15, 23, 42, 0.10));
          animation: resumeWaveTop 14s ease-in-out infinite alternate;
        }

        .resume-wave-background::after {
          bottom: -150px;
          height: 550px;
          opacity: 0.98;
          background:
            radial-gradient(125% 85% at 50% 0%, rgba(255,255,255,0.98) 0 34%, transparent 35%),
            radial-gradient(120% 80% at 52% 10%, rgba(226,232,240,0.58) 0 36%, transparent 37%),
            radial-gradient(115% 78% at 48% 22%, rgba(255,255,255,0.96) 0 38%, transparent 39%),
            radial-gradient(110% 76% at 50% 34%, rgba(203,213,225,0.38) 0 40%, transparent 41%);
          filter: drop-shadow(0 -28px 44px rgba(15, 23, 42, 0.12));
          animation: resumeWaveBottom 18s ease-in-out infinite alternate;
        }

        .resume-wave-layer {
          position: absolute;
          inset: 0;
          z-index: -1;
          pointer-events: none;
          overflow: hidden;
        }

        .resume-wave-layer span {
          position: absolute;
          left: -20%;
          width: 140%;
          height: 90px;
          border-radius: 999px;
          background: linear-gradient(
            180deg,
            rgba(255,255,255,0.96),
            rgba(226,232,240,0.42)
          );
          box-shadow:
            0 18px 38px rgba(15, 23, 42, 0.08),
            inset 0 12px 24px rgba(255, 255, 255, 0.9);
          opacity: 0.65;
          transform: rotate(-2deg);
          animation: resumeSoftWave 16s ease-in-out infinite alternate;
        }

        .resume-wave-layer span:nth-child(1) {
          top: 100px;
          animation-duration: 15s;
        }

        .resume-wave-layer span:nth-child(2) {
          top: 200px;
          opacity: 0.45;
          transform: rotate(2deg);
          animation-duration: 19s;
        }

        .resume-wave-layer span:nth-child(3) {
          bottom: 200px;
          opacity: 0.5;
          transform: rotate(-1.5deg);
          animation-duration: 22s;
        }

        .resume-wave-layer span:nth-child(4) {
          bottom: 100px;
          opacity: 0.38;
          transform: rotate(1.5deg);
          animation-duration: 24s;
        }

        .resume-wave-layer span:nth-child(5) {
          top: 50%;
          transform: translateY(-50%) rotate(1deg);
          opacity: 0.3;
          animation-duration: 28s;
        }

        @keyframes resumeWaveTop {
          from {
            transform: translate3d(-24px, 0, 0) scaleX(1.02);
          }
          to {
            transform: translate3d(24px, 18px, 0) scaleX(1.06);
          }
        }

        @keyframes resumeWaveBottom {
          from {
            transform: translate3d(32px, 0, 0) scaleX(1.04);
          }
          to {
            transform: translate3d(-32px, -18px, 0) scaleX(1.08);
          }
        }

        @keyframes resumeSoftWave {
          from {
            transform: translate3d(-28px, 0, 0) rotate(-2deg);
          }
          to {
            transform: translate3d(28px, 12px, 0) rotate(2deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .resume-wave-background::before,
          .resume-wave-background::after,
          .resume-wave-layer span {
            animation: none;
          }
        }

        @media (max-width: 768px) {
          .resume-wave-background::before {
            height: 350px;
            top: -120px;
          }

          .resume-wave-background::after {
            height: 400px;
            bottom: -120px;
          }

          .resume-wave-layer span {
            height: 70px;
            opacity: 0.42;
          }
        }

        .resume-wave-center {
          position: absolute;
          inset: 0;
          z-index: -1;
          pointer-events: none;
          overflow: hidden;
        }

        .resume-wave-center span {
          position: absolute;
          left: -18%;
          width: 136%;
          height: 115px;
          border-radius: 999px;
          background:
            linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.92) 0%,
              rgba(248, 250, 252, 0.82) 42%,
              rgba(203, 213, 225, 0.30) 100%
            );
          box-shadow:
            0 22px 46px rgba(15, 23, 42, 0.055),
            inset 0 14px 28px rgba(255, 255, 255, 0.92),
            inset 0 -12px 24px rgba(148, 163, 184, 0.12);
          opacity: 0.48;
          will-change: transform;
          animation: resumeCenterWave 20s ease-in-out infinite alternate;
        }

        .resume-wave-center span:nth-child(1) {
          top: 28%;
          transform: rotate(-1.4deg);
          animation-duration: 18s;
        }

        .resume-wave-center span:nth-child(2) {
          top: 38%;
          opacity: 0.42;
          transform: rotate(1.2deg);
          animation-duration: 22s;
        }

        .resume-wave-center span:nth-child(3) {
          top: 49%;
          opacity: 0.38;
          transform: rotate(-1deg);
          animation-duration: 24s;
        }

        .resume-wave-center span:nth-child(4) {
          top: 60%;
          opacity: 0.34;
          transform: rotate(1.1deg);
          animation-duration: 26s;
        }

        .resume-wave-center span:nth-child(5) {
          top: 71%;
          opacity: 0.30;
          transform: rotate(-0.9deg);
          animation-duration: 28s;
        }

        @keyframes resumeCenterWave {
          from {
            transform: translate3d(-26px, 0, 0) rotate(-1.2deg) scaleX(1.02);
          }
          to {
            transform: translate3d(26px, 12px, 0) rotate(1.2deg) scaleX(1.05);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .resume-wave-center span {
            animation: none;
          }
        }

        @media (max-width: 768px) {
          .resume-wave-center span {
            height: 78px;
            opacity: 0.34;
          }

          .resume-wave-center span:nth-child(1) { top: 26%; }
          .resume-wave-center span:nth-child(2) { top: 38%; }
          .resume-wave-center span:nth-child(3) { top: 50%; }
          .resume-wave-center span:nth-child(4) { top: 62%; }
          .resume-wave-center span:nth-child(5) { top: 74%; }
        }
      `}</style>
      <div className="min-h-screen text-gray-900 relative overflow-hidden resume-wave-background">
        {/* Wave layer for additional depth */}
        <div className="resume-wave-layer" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        {/* Center wave layer */}
        <div className="resume-wave-center" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
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
