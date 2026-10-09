"use client"

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Check, Mail, MessageSquare, Send } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessToast, setShowSuccessToast] = useState(false)
  const [phoneRegion, setPhoneRegion] = useState<"BR" | "US">("BR")
  const [phone, setPhone] = useState("")
  const { language } = useLanguage()
  const isEnglish = language === "en-US"
  const reduceMotion = useReducedMotion()

  const formatPhone = (value: string, region: "BR" | "US") => {
    const digits = value.replace(/\D/g, "").slice(0, region === "BR" ? 11 : 10)

    if (region === "US") {
      if (digits.length <= 3) return digits ? `(${digits}` : ""
      if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`
      return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
    }

    if (digits.length <= 2) return digits ? `(${digits}` : ""
    if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}${digits.length > 6 ? `-${digits.slice(6)}` : ""}`
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
  }

  const handlePhoneRegionChange = (region: "BR" | "US") => {
    setPhoneRegion(region)
    setPhone(formatPhone(phone, region))
  }

  useEffect(() => {
    if (!showSuccessToast) return

    const timeoutId = window.setTimeout(() => setShowSuccessToast(false), 3000)
    return () => window.clearTimeout(timeoutId)
  }, [showSuccessToast])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    form.reset()
    setPhoneRegion("BR")
    setPhone("")
    setIsSubmitting(false)
    setShowSuccessToast(true)
  }

  return (
    <>
    <section id="contato" className="py-24 px-4 bg-secondary/30">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-accent/50 text-accent">
            {isEnglish ? "Contact" : "Contato"}
          </Badge>
          <motion.h2
            initial={reduceMotion ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-3xl md:text-5xl font-bold mb-4 tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {isEnglish ? "Let's talk" : "Vamos conversar?"}
          </motion.h2>
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
                autoComplete="name"
                placeholder={isEnglish ? "Your name" : "Seu nome"}
                pattern="[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+"
                title={isEnglish ? "Use letters only." : "Digite apenas letras."}
                onChange={(event) => {
                  event.currentTarget.value = event.currentTarget.value.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ\s'-]/g, "")
                }}
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
                autoComplete="email"
                pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                title={isEnglish ? "Enter a valid email address containing @." : "Digite um e-mail válido com @."}
                placeholder={isEnglish ? "you@email.com" : "seu@email.com"}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium">
              {isEnglish ? "WhatsApp / Phone" : "WhatsApp / Telefone"}
            </label>
            <div className="flex gap-2">
              <select
                aria-label={isEnglish ? "Phone country" : "País do telefone"}
                value={phoneRegion}
                onChange={(event) => handlePhoneRegionChange(event.target.value as "BR" | "US")}
                className="h-10 rounded-md border border-input bg-background px-3 text-sm"
              >
                <option value="BR">🇧🇷 +55</option>
                <option value="US">🇺🇸 +1</option>
              </select>
              <Input
                id="phone"
                type="tel"
                autoComplete="tel-national"
                inputMode="numeric"
                maxLength={phoneRegion === "BR" ? 16 : 14}
                value={phone}
                onChange={(event) => setPhone(formatPhone(event.target.value, phoneRegion))}
                placeholder={phoneRegion === "BR" ? "(00) 00000-0000" : "(000) 000-0000"}
              />
            </div>
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
              contato@niarts.com.br
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
    <div className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center px-4" aria-live="polite" aria-atomic="true">
      <AnimatePresence>
        {showSuccessToast && (
          <motion.div
            role="status"
            initial={reduceMotion ? false : { opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="pointer-events-auto flex w-full max-w-sm flex-col items-center gap-3 rounded-2xl border border-orange-500/65 border-b-2 bg-zinc-950/90 px-7 py-6 text-center text-foreground shadow-[inset_0_-1px_0_rgba(249,115,22,0.5),0_12px_50px_rgba(0,0,0,0.45)] backdrop-blur-xl"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500">
              <Check className="h-6 w-6 text-black" strokeWidth={3} aria-hidden="true" />
            </span>
            <p className="font-semibold">
              {isEnglish ? "Form submitted successfully!" : "Formulário enviado com sucesso!"}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </>
  )
}
