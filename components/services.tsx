"use client"

import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/language-provider"
import { motion, useReducedMotion } from "motion/react"
import { 
  Palette, 
  Smartphone, 
  Search, 
  Zap, 
  Shield, 
  Headphones 
} from "lucide-react"

const services = [
  {
    icon: Palette,
    title: "Design Exclusivo",
    description: "Layouts personalizados que refletem a identidade única da sua marca e atraem seu público-alvo."
  },
  {
    icon: Smartphone,
    title: "100% Responsivo",
    description: "Sites que funcionam perfeitamente em todos os dispositivos, do desktop ao smartphone."
  },
  {
    icon: Search,
    title: "SEO Otimizado",
    description: "Estrutura otimizada para mecanismos de busca, ajudando sua empresa a ser encontrada."
  },
  {
    icon: Zap,
    title: "Alta Performance",
    description: "Sites rápidos e otimizados para garantir a melhor experiência ao usuário."
  },
  {
    icon: Shield,
    title: "Segurança",
    description: "Certificado SSL incluso e boas práticas de segurança para proteger seus dados."
  },
  {
    icon: Headphones,
    title: "Suporte Dedicado",
    description: "Acompanhamento durante todo o projeto e suporte pós-entrega para sua tranquilidade."
  }
]

const translations = {
  en: {
    badge: "Services", heading: "What we offer",
    intro: "Every project is built with attention to detail and a focus on delivering real results for your business.",
    titles: ["Exclusive Design", "100% Responsive", "SEO Optimized", "High Performance", "Security", "Dedicated Support"],
    descriptions: [
      "Custom layouts that reflect your brand's identity and attract your target audience.",
      "Websites that work perfectly on every device, from desktop to smartphone.",
      "Search-friendly structure to help customers find your business.",
      "Fast, optimized websites for a better user experience.",
      "SSL certificate and security best practices to help protect your data.",
      "Guidance throughout the project and after delivery for your peace of mind.",
    ],
    coming: "Coming Soon", future: "Websites with a Full Backend",
    futureText: "Soon, we'll offer complete solutions with an admin panel, database, and advanced features for your business.",
  },
}

export function Services() {
  const { language } = useLanguage()
  const reduceMotion = useReducedMotion()
  const t = language === "en-US" ? translations.en : null
  return (
    <section id="servicos" className="py-24 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-accent/50 text-accent">
            {t?.badge ?? "Serviços"}
          </Badge>
          <motion.h2
            initial={reduceMotion ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-3xl md:text-5xl font-bold mb-4 tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {t?.heading ?? "O que oferecemos"}
          </motion.h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t?.intro ?? "Cada projeto é desenvolvido com atenção aos detalhes e foco em entregar resultados reais para seu negócio."}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <motion.div 
              key={service.title}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (services.indexOf(service) % 3) * 0.08, ease: "easeOut" }}
              whileHover={reduceMotion ? undefined : { y: -4 }}
              className="p-6 rounded-xl border border-border bg-card hover:border-accent/70 hover:shadow-[0_0_24px_rgba(249,115,22,0.12)] transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <motion.span
                  className="flex"
                  whileHover={reduceMotion ? undefined : { scale: 1.22, rotate: 4 }}
                  whileFocus={reduceMotion ? undefined : { scale: 1.18 }}
                  transition={{ type: "spring", stiffness: 380, damping: 16 }}
                >
                  <service.icon className="w-6 h-6 text-accent" />
                </motion.span>
              </div>
              <h3 className="font-semibold text-lg mb-2">{t?.titles[services.indexOf(service)] ?? service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t?.descriptions[services.indexOf(service)] ?? service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Future Services Banner */}
        <div className="mt-16 p-8 rounded-2xl border border-dashed border-accent/30 bg-accent/5 text-center">
          <Badge variant="secondary" className="mb-4">
            {t?.coming ?? "Em Breve"}
          </Badge>
          <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: 'var(--font-display)' }}>
            {t?.future ?? "Sites com Backend Completo"}
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t?.futureText ?? "Em breve ofereceremos soluções completas com painel administrativo, banco de dados e funcionalidades avançadas para seu negócio."}
          </p>
        </div>
      </div>
    </section>
  )
}
