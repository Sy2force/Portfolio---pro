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
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className={cn(
          "bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden transition-all duration-200",
          isDragging ? "scale-105" : ""
        )}>
          <div className="flex flex-col items-center gap-1 p-3">
            <div className="w-8 h-1 bg-white/30 rounded-full mb-2" />
            {mobileNavLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="w-10 h-10 flex items-center justify-center text-white hover:bg-white/20 rounded-xl transition-all duration-300 hover:scale-110 active:scale-95 touch-manipulation"
                title={link.name}
                onClick={(e) => e.stopPropagation()}
              >
                <span className="text-xs font-medium truncate max-w-[3rem]">{link.name}</span>
              </a>
            ))}
            <div className="w-8 h-px bg-white/20 my-1" />
            <button
              onClick={(e) => { e.stopPropagation(); setLanguage(language === "en" ? "fr" : "en") }}
              className="w-10 h-10 flex items-center justify-center text-white hover:bg-white/20 rounded-xl transition-all duration-300 hover:scale-110 active:scale-95 touch-manipulation"
              title={language === "en" ? "FR" : "EN"}
            >
              <span className="text-xs font-semibold">{language === "en" ? "FR" : "EN"}</span>
            </button>
            <a
              href="#contact"
              className="w-10 h-10 flex items-center justify-center bg-green-600/80 hover:bg-green-600 text-white rounded-xl transition-all duration-300 hover:scale-110 active:scale-95 touch-manipulation"
              title={t.nav.contact}
              onClick={(e) => e.stopPropagation()}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
