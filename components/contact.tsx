"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageSquare, Send } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { language } = useLanguage()
  const isEnglish = language === "en-US"

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    alert(isEnglish ? "Message sent successfully! We'll be in touch soon." : "Mensagem enviada com sucesso! Entraremos em contato em breve.")
  }

  return (
    <section id="contato" className="py-24 px-4 bg-secondary/30">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-accent/50 text-accent">
            {isEnglish ? "Contact" : "Contato"}
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
            {isEnglish ? "Let's talk" : "Vamos conversar?"}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            {isEnglish ? "Tell us about your project and receive a custom quote within 24 hours." : "Conte-nos sobre seu projeto e receba um orçamento personalizado em até 24 horas."}
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                {isEnglish ? "Name" : "Nome"}
              </label>
              <Input 
                id="name"
                placeholder={isEnglish ? "Your name" : "Seu nome"}
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                E-mail
              </label>
              <Input 
                id="email"
                type="email"
                placeholder={isEnglish ? "you@email.com" : "seu@email.com"}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium">
              {isEnglish ? "WhatsApp / Phone" : "WhatsApp / Telefone"}
            </label>
            <Input 
              id="phone"
              placeholder={isEnglish ? "Your phone number" : "(00) 00000-0000"}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="project" className="text-sm font-medium">
              {isEnglish ? "Project Type" : "Tipo de Projeto"}
            </label>
            <select 
              id="project"
              className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
              required
            >
              <option value="">{isEnglish ? "Choose an option" : "Selecione uma opção"}</option>
              <option value="institucional">{isEnglish ? "Business Website" : "Site Institucional"}</option>
              <option value="landing">Landing Page</option>
              <option value="portfolio">{isEnglish ? "Portfolio" : "Portfólio"}</option>
              <option value="marca">{isEnglish ? "Brand Website" : "Site de Marca"}</option>
              <option value="servicos">{isEnglish ? "Services Website" : "Site de Serviços"}</option>
              <option value="outro">{isEnglish ? "Other" : "Outro"}</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              {isEnglish ? "Message" : "Mensagem"}
            </label>
            <Textarea 
              id="message"
              placeholder={isEnglish ? "Tell us about your project, goals, and timeline..." : "Conte um pouco sobre seu projeto, objetivos e prazos..."}
              rows={5}
              required
            />
          </div>

          <Button 
            type="submit" 
            size="lg" 
            className="w-full gap-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              isEnglish ? "Sending..." : "Enviando..."
            ) : (
              <>
                {isEnglish ? "Send Message" : "Enviar Mensagem"}
                <Send className="w-4 h-4" />
              </>
            )}
          </Button>
        </form>

        {/* Alternative Contact */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-muted-foreground mb-6">
            {isEnglish ? "Or contact us directly:" : "Ou entre em contato diretamente:"}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="mailto:contato@webcraft.com.br"
              className="flex items-center gap-2 text-foreground hover:text-accent transition-colors"
            >
              <Mail className="w-5 h-5" />
              contato@webcraft.com.br
            </a>
            <a 
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground hover:text-accent transition-colors"
            >
              <MessageSquare className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
