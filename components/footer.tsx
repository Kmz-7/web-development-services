"use client"

import { Code2 } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { language } = useLanguage()
  const isEnglish = language === "en-US"

  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
              <Code2 className="w-5 h-5 text-accent-foreground" />
            </div>
            <span className="font-bold text-lg" style={{ fontFamily: 'var(--font-display)' }}>
              Niarts Development Tech
            </span>
          </a>

          {/* Links */}
          <nav className="flex items-center gap-6 text-sm">
            <a href="#templates" className="text-muted-foreground hover:text-foreground transition-colors">
              Templates
            </a>
            <a href="#servicos" className="text-muted-foreground hover:text-foreground transition-colors">
              {isEnglish ? "Services" : "Serviços"}
            </a>
            <a href="#sobre" className="text-muted-foreground hover:text-foreground transition-colors">
              {isEnglish ? "About" : "Sobre"}
            </a>
            <a href="#contato" className="text-muted-foreground hover:text-foreground transition-colors">
              {isEnglish ? "Contact" : "Contato"}
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} Niarts Development Tech. {isEnglish ? "All rights reserved." : "Todos os direitos reservados."}
          </p>
        </div>
      </div>
    </footer>
  )
}
