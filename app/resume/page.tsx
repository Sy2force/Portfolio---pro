"use client"

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
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            {language === "en" ? "FR" : "EN"}
          </button>
        </div>

        {/* Language Toggle - Desktop */}
        <div className="hidden md:block fixed top-4 right-4 z-50">
          <button
            onClick={() => setLanguage(language === "en" ? "fr" : "en")}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            {language === "en" ? "FR" : "EN"}
          </button>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-20">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold mb-4 text-black">
              Resume / CV
            </h1>
            <h2 className="text-xl text-black mb-4 font-semibold">
              Download or print a clean, professional bilingual resume
            </h2>
            <p className="text-base text-gray-700 max-w-2xl mx-auto">
              Available in English and French. Optimized for startups, tech companies and professional applications.
            </p>
          </div>

          {/* Resume Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {/* English Resume Card */}
            <div className="bg-white border-2 border-gray-200 rounded-3xl p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-black">
                  English Resume
                </h3>
                <span className="px-4 py-2 bg-blue-600 text-white text-sm font-bold rounded-full">
                  1 page
                </span>
              </div>
              <p className="text-base text-gray-700 mb-6">
                Clean one-page PDF optimized for LinkedIn, startups and tech applications.
              </p>
              <div className="space-y-4">
                <a
                  href="/Shay_Acoca_CV_EN.pdf"
                  download
                  className="block w-full px-6 py-3 bg-blue-600 text-white rounded-xl text-center font-bold"
                >
                  Download English PDF
                </a>
                <button
                  onClick={() => handlePrint("/Shay_Acoca_CV_EN.pdf")}
                  className="block w-full px-6 py-3 bg-gray-700 text-white rounded-xl text-center font-bold"
                >
                  Print English CV
                </button>
              </div>
            </div>

            {/* French Resume Card */}
            <div className="bg-white border-2 border-gray-200 rounded-3xl p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-black">
                  CV Français
                </h3>
                <span className="px-4 py-2 bg-purple-600 text-white text-sm font-bold rounded-full">
                  1 page
                </span>
              </div>
              <p className="text-base text-gray-700 mb-6">
                CV professionnel en une page, optimisé pour candidatures tech et startups.
              </p>
              <div className="space-y-4">
                <a
                  href="/Shay_Acoca_CV_FR.pdf"
                  download
                  className="block w-full px-6 py-3 bg-purple-600 text-white rounded-xl text-center font-bold"
                >
                  Télécharger le PDF français
                </a>
                <button
                  onClick={() => handlePrint("/Shay_Acoca_CV_FR.pdf")}
                  className="block w-full px-6 py-3 bg-gray-700 text-white rounded-xl text-center font-bold"
                >
                  Imprimer le CV français
                </button>
              </div>
            </div>
          </div>

          {/* Info Block */}
          <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 mb-10">
            <h3 className="text-xl font-bold text-black mb-4 text-center">
              What&apos;s Inside
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-blue-600">
                  3
                </div>
                <div className="text-base text-gray-700 font-medium">Selected Projects</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-purple-600">
                  3
                </div>
                <div className="text-base text-gray-700 font-medium">Experience Items</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-pink-600">
                  2
                </div>
                <div className="text-base text-gray-700 font-medium">Educational Programs</div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200 text-center">
              <p className="text-sm text-gray-600 font-medium">
                Print-friendly design · Clean professional PDF · Optimized for A4
              </p>
            </div>
          </div>

          {/* Back to Portfolio */}
          <div className="text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-xl font-bold"
            >
              Back to Portfolio
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
