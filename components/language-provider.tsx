"use client"

import { createContext, useContext, useEffect, useState } from "react"

export type Language = "pt-BR" | "en-US"

const LanguageContext = createContext<{
  language: Language
  setLanguage: (language: Language) => void
} | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt-BR")

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("site-language")
    if (savedLanguage === "pt-BR" || savedLanguage === "en-US") {
      setLanguage(savedLanguage)
    }
  }, [])

  const updateLanguage = (nextLanguage: Language) => {
    setLanguage(nextLanguage)
    window.localStorage.setItem("site-language", nextLanguage)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: updateLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error("useLanguage must be used within LanguageProvider")
  return context
}
