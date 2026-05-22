"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
          <div className="flex items-center justify-center w-full">
            <Link
              href="/"
              className="text-xl font-semibold text-white hover:text-gray-300 transition-all duration-300"
            >
              Shay Acoca
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Top Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-gray-800 safe-area-top">
        <div className="flex items-center justify-center px-3 md:px-4 py-2 md:py-3">
          <a href="#" className="text-base md:text-lg font-semibold text-white">
            Shay Acoca
          </a>
        </div>
      </div>
    </>
  )
}
