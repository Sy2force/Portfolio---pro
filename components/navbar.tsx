"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { language, setLanguage } = useLanguage()
  
  // Draggable navbar state
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [isExpanded, setIsExpanded] = useState(false)
  const navbarRef = useRef<HTMLDivElement>(null)

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
    { name: t.nav.experience, href: "#experience" },
    { name: t.nav.resume, href: "/resume" },
    { name: t.nav.contact, href: "#contact" },
  ]

  // Drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    })
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    const touch = e.touches[0]
    setDragStart({
      x: touch.clientX - position.x,
      y: touch.clientY - position.y
    })
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    e.preventDefault()
    const touch = e.touches[0]
    setPosition({
      x: touch.clientX - dragStart.x,
      y: touch.clientY - dragStart.y
    })
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  // Global mouse move/up handlers
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!isDragging) return
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      })
    }

    const handleGlobalMouseUp = () => {
      setIsDragging(false)
    }

    if (isDragging) {
      window.addEventListener('mousemove', handleGlobalMouseMove)
      window.addEventListener('mouseup', handleGlobalMouseUp)
    }

    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove)
      window.removeEventListener('mouseup', handleGlobalMouseUp)
    }
  }, [isDragging, dragStart])

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
              {t.footer.text}
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

      {/* Mobile Side Navigation - Right Side Glassmorphism - Draggable */}
      <nav 
        ref={navbarRef}
        className="md:hidden fixed z-50"
        style={{
          top: `calc(50% + ${position.y}px)`,
          right: `calc(1rem - ${position.x}px)`,
          transform: 'translateY(-50%)',
          cursor: isDragging ? 'grabbing' : 'grab'
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className={cn(
          "bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300",
          isDragging ? "scale-105 bg-white/20" : "",
          isExpanded ? "bg-white/15 border-white/30 scale-110" : "scale-90 opacity-80"
        )}>
          <div className={cn(
            "flex flex-col items-center gap-1 transition-all duration-300",
            isExpanded ? "p-4 gap-2" : "p-2 gap-0.5"
          )}>
            <div className={cn(
              "bg-white/30 rounded-full transition-all duration-300",
              isExpanded ? "w-8 h-1 mb-2" : "w-6 h-0.5 mb-1"
            )} />
            {mobileNavLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "flex items-center justify-center text-white rounded-xl transition-all duration-300 touch-manipulation",
                  isExpanded 
                    ? "w-12 h-12 hover:bg-white/20 hover:scale-110 active:scale-95" 
                    : "w-8 h-8 hover:bg-white/15 hover:scale-105 active:scale-95"
                )}
                title={link.name}
                onClick={(e) => e.stopPropagation()}
              >
                {link.name === t.nav.about && (
                  <svg className={cn("fill-none stroke", isExpanded ? "w-6 h-6" : "w-4 h-4")} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                )}
                {link.name === t.nav.projects && (
                  <svg className={cn("fill-none stroke", isExpanded ? "w-6 h-6" : "w-4 h-4")} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                )}
                {link.name === t.nav.skills && (
                  <svg className={cn("fill-none stroke", isExpanded ? "w-6 h-6" : "w-4 h-4")} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                )}
                {link.name === t.nav.experience && (
                  <svg className={cn("fill-none stroke", isExpanded ? "w-6 h-6" : "w-4 h-4")} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )}
                {link.name === t.nav.resume && (
                  <svg className={cn("fill-none stroke", isExpanded ? "w-6 h-6" : "w-4 h-4")} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                )}
                {link.name === t.nav.contact && (
                  <svg className={cn("fill-none stroke", isExpanded ? "w-6 h-6" : "w-4 h-4")} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                )}
              </a>
            ))}
            <div className={cn(
              "bg-white/20 transition-all duration-300",
              isExpanded ? "w-8 h-px my-1" : "w-6 h-px my-0.5"
            )} />
            <button
              onClick={(e) => { e.stopPropagation(); setLanguage(language === "en" ? "fr" : "en") }}
              className={cn(
                "flex items-center justify-center text-white rounded-xl transition-all duration-300 hover:bg-white/20 hover:scale-110 active:scale-95 touch-manipulation",
                isExpanded 
                  ? "w-12 h-12" 
                  : "w-8 h-8"
              )}
              title={language === "en" ? "FR" : "EN"}
            >
              <span className={cn("font-semibold", isExpanded ? "text-xs" : "text-[10px]")}>{language === "en" ? "FR" : "EN"}</span>
            </button>
            <a
              href="#contact"
              className={cn(
                "flex items-center justify-center bg-green-600/80 hover:bg-green-600 text-white rounded-xl transition-all duration-300 hover:scale-110 active:scale-95 touch-manipulation",
                isExpanded 
                  ? "w-12 h-12" 
                  : "w-8 h-8"
              )}
              title={t.nav.contact}
              onClick={(e) => e.stopPropagation()}
            >
              <svg className={cn("fill-none stroke", isExpanded ? "w-5 h-5" : "w-4 h-4")} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Top Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-xl border-b border-gray-800 safe-area-top">
        <div className="flex items-center justify-between px-3 md:px-4 py-2 md:py-3">
          <a href="#" className="text-base md:text-lg font-semibold text-white">
            {t.footer.text}
          </a>
          <span className="text-[10px] md:text-xs text-gray-400 max-w-[150px] md:max-w-none truncate">
            Full Stack Developer
          </span>
        </div>
      </div>
    </>
  )
}
