"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Code2 } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage } = useLanguage()
  const isEnglish = language === "en-US"
  const navLinks = [
    { href: "#templates", label: isEnglish ? "Templates" : "Templates" },
    { href: "#servicos", label: isEnglish ? "Services" : "Serviços" },
    { href: "#sobre", label: isEnglish ? "About" : "Sobre" },
    { href: "#contato", label: isEnglish ? "Contact" : "Contato" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
              <Code2 className="w-5 h-5 text-accent-foreground" />
            </div>
            <span className="font-bold text-lg" style={{ fontFamily: 'var(--font-display)' }}>
              Niarts Development Tech
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageSelector isEnglish={isEnglish} />
            <Button className="gap-2">
              {isEnglish ? "Start a Project" : "Começar Projeto"}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
          <LanguageSelector isEnglish={isEnglish} />
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button className="mt-2 w-full">
                {isEnglish ? "Start a Project" : "Começar Projeto"}
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

function LanguageSelector({ isEnglish }: { isEnglish: boolean }) {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-1" role="group" aria-label={isEnglish ? "Choose language" : "Escolher idioma"}>
      <button
        type="button"
        onClick={() => setLanguage("pt-BR")}
        aria-label="Português do Brasil"
        aria-pressed={language === "pt-BR"}
        className={`rounded-md p-1 text-xl transition-opacity ${language === "pt-BR" ? "opacity-100" : "opacity-50 hover:opacity-80"}`}
      >
        🇧🇷
      </button>
      <button
        type="button"
        onClick={() => setLanguage("en-US")}
        aria-label="English (United States)"
        aria-pressed={language === "en-US"}
        className={`rounded-md p-1 text-xl transition-opacity ${language === "en-US" ? "opacity-100" : "opacity-50 hover:opacity-80"}`}
      >
        🇺🇸
      </button>
    </div>
  )
}
