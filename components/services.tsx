"use client"

import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/language-provider"
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
  const t = language === "en-US" ? translations.en : null
  return (
    <section id="servicos" className="py-24 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-accent/50 text-accent">
            {t?.badge ?? "Serviços"}
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
            {t?.heading ?? "O que oferecemos"}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t?.intro ?? "Cada projeto é desenvolvido com atenção aos detalhes e foco em entregar resultados reais para seu negócio."}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div 
              key={service.title}
              className="p-6 rounded-xl border border-border bg-card hover:border-accent/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{t?.titles[services.indexOf(service)] ?? service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t?.descriptions[services.indexOf(service)] ?? service.description}
              </p>
            </div>
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
