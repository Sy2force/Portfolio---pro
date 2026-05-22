"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { language, setLanguage } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const t = translations[language]

  const navLinks = [
    { name: t.nav.about, href: "#about" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.skills, href: "#skills" },
    { name: t.nav.experience, href: "#experience" },
    { name: t.nav.resume, href: "/resume" },
    { name: t.nav.contact, href: "#contact" },
  ]

  const mobileNavLinks = [
    { name: t.nav.about, href: "#about" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.skills, href: "#skills" },
    { name: t.nav.resume, href: "/resume" },
    { name: t.nav.contact, href: "#contact" },
  ]

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={cn(
          "hidden md:flex fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-black/60 backdrop-blur-xl border-b border-gray-800 py-4"
            : "bg-transparent py-4"
        )}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between w-full">
            <Link
              href="/"
              className="text-xl font-semibold text-white hover:text-gray-300 transition-all duration-300"
            >
              Shay Acoca
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-400 hover:text-white transition-all duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white/50 transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setLanguage(language === "en" ? "fr" : "en")}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-lg transition-all duration-300 hover:scale-105 touch-manipulation active:scale-95"
              >
                {language === "en" ? "FR" : "EN"}
              </button>
              <a
                href="#contact"
                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-xs font-medium rounded-lg transition-all duration-300 hover:scale-105 touch-manipulation active:scale-95"
              >
                {t.nav.contact}
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-t border-gray-800 safe-area-bottom">
        <div className="flex items-center justify-around px-1 py-2 md:py-3">
          {mobileNavLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="flex flex-col items-center gap-0.5 md:gap-1 text-[10px] md:text-xs text-gray-400 hover:text-white transition-colors touch-manipulation active:scale-95"
            >
              {link.name === t.nav.about && (
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              )}
              {link.name === t.nav.projects && (
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              )}
              {link.name === t.nav.skills && (
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              )}
              {link.name === t.nav.resume && (
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              )}
              {link.name === t.nav.contact && (
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              )}
              <span className="text-[9px] md:text-[10px]">{link.name}</span>
            </a>
          ))}
          <button
            onClick={() => setLanguage(language === "en" ? "fr" : "en")}
            className="flex flex-col items-center gap-0.5 md:gap-1 text-[10px] md:text-xs text-gray-400 hover:text-white transition-colors touch-manipulation active:scale-95"
          >
            <div className="w-4 h-4 md:w-5 md:h-5 bg-gray-800 rounded-full flex items-center justify-center">
              <span className="text-[9px] md:text-[10px] font-semibold text-white">{language === "en" ? "FR" : "EN"}</span>
            </div>
            <span className="text-[9px] md:text-[10px]">{language === "en" ? "FR" : "EN"}</span>
          </button>
        </div>
      </nav>

      {/* Mobile Top Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-gray-800 safe-area-top">
        <div className="flex items-center justify-between px-3 md:px-4 py-2 md:py-3">
          <a href="#" className="text-base md:text-lg font-semibold text-white">
            Shay Acoca
          </a>
          <span className="text-[10px] md:text-xs text-gray-400 max-w-[150px] md:max-w-none truncate">
            Full Stack Developer
          </span>
        </div>
      </div>
    </>
  )
}
