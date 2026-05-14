"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { Language } from "./translations"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Load language from localStorage
    const savedLang = localStorage.getItem("language") as Language
    // Only use saved language if it's valid, otherwise default to "en" and clear invalid value
    if (savedLang === "en" || savedLang === "fr") {
      setLanguage(savedLang)
    } else {
      // Clear invalid language and default to "en"
      localStorage.removeItem("language")
      setLanguage("en")
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    if (typeof window !== "undefined") {
      localStorage.setItem("language", lang)
    }
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    // Return default values during SSR
    return { language: "en" as Language, setLanguage: () => {} }
  }
  return context
}
