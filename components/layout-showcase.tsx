"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Eye } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

interface LayoutTemplate {
  id: string
  name: string
  category: string
  description: string
  price: string
  imageUrl: string
  features: string[]
}

const templates: LayoutTemplate[] = [
  {
    id: "1",
    name: "Corporate Pro",
    category: "Institucional",
    description: "Layout profissional para empresas estabelecidas",
    price: "R$ 2.500",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=2000&fit=crop",
    features: ["Responsivo", "SEO Otimizado", "5 Páginas"]
  },
  {
    id: "2", 
    name: "Startup Launch",
    category: "Landing Page",
    description: "Perfeito para startups e lançamentos de produtos",
    price: "R$ 1.800",
    imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=2000&fit=crop",
    features: ["One Page", "Animações", "Conversão"]
  },
  {
    id: "3",
    name: "Portfolio Creative",
    category: "Portfólio",
    description: "Mostre seus trabalhos com elegância e impacto",
    price: "R$ 2.000",
    imageUrl: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=2000&fit=crop",
    features: ["Galeria", "Blog", "Contato"]
  },
  {
    id: "4",
    name: "Business Elite",
    category: "Institucional",
    description: "Transmita credibilidade e profissionalismo",
    price: "R$ 3.200",
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=2000&fit=crop",
    features: ["Premium", "10 Páginas", "CRM Ready"]
  },
  {
    id: "5",
    name: "Brand Showcase",
    category: "Marca",
    description: "Destaque sua marca com design impactante",
    price: "R$ 2.800",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=2000&fit=crop",
    features: ["Branding", "Animado", "Moderno"]
  },
  {
    id: "6",
    name: "Services Hub",
    category: "Serviços",
    description: "Ideal para profissionais e prestadores de serviço",
    price: "R$ 2.200",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=2000&fit=crop",
    features: ["Agendamento", "Formulários", "WhatsApp"]
  }
]

function LayoutCard({ template, language }: { template: LayoutTemplate; language: "pt-BR" | "en-US" }) {
  const [isHovered, setIsHovered] = useState(false)
  const isEnglish = language === "en-US"
  const translatedTemplates: Record<string, { category: string; description: string; features: string[] }> = {
    "1": { category: "Business", description: "Professional layout for established companies", features: ["Responsive", "SEO Optimized", "5 Pages"] },
    "2": { category: "Landing Page", description: "Perfect for startups and product launches", features: ["One Page", "Animations", "Conversions"] },
    "3": { category: "Portfolio", description: "Showcase your work with style and impact", features: ["Gallery", "Blog", "Contact"] },
    "4": { category: "Business", description: "Build trust and communicate professionalism", features: ["Premium", "10 Pages", "CRM Ready"] },
    "5": { category: "Brand", description: "Make your brand stand out with striking design", features: ["Branding", "Animated", "Modern"] },
    "6": { category: "Services", description: "Ideal for professionals and service providers", features: ["Scheduling", "Forms", "WhatsApp"] },
  }
  const translated = isEnglish ? translatedTemplates[template.id] : null

  return (
    <div 
      className="group relative flex flex-col rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Preview Container with Scroll Effect */}
      <div className="relative h-64 overflow-hidden bg-secondary">
        <div 
          className="absolute inset-0 w-full transition-transform duration-[2000ms] ease-out"
          style={{
            transform: isHovered ? 'translateY(-60%)' : 'translateY(0%)'
          }}
        >
          <img 
            src={template.imageUrl}
            alt={isEnglish ? `Preview of the ${template.name} layout` : `Preview do layout ${template.name}`}
            className="w-full h-auto min-h-[400%] object-cover object-top"
          />
        </div>
        
        {/* Overlay on hover */}
        <div className={`absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <Button variant="secondary" size="sm" className="gap-2">
            <Eye className="w-4 h-4" />
          {isEnglish ? "Preview" : "Ver Preview"}
          </Button>
        </div>

        {/* Category Badge */}
        <Badge 
          variant="secondary" 
          className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm text-foreground"
        >
          {translated?.category ?? template.category}
        </Badge>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-lg text-foreground">{template.name}</h3>
          <span className="text-accent font-bold whitespace-nowrap">{template.price}</span>
        </div>
        
        <p className="text-muted-foreground text-sm mb-4 flex-1">
          {translated?.description ?? template.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-4">
          {(translated?.features ?? template.features).map((feature) => (
            <span 
              key={feature}
              className="text-xs px-2 py-1 rounded-md bg-secondary text-muted-foreground"
            >
              {feature}
            </span>
          ))}
        </div>

        <Button className="w-full gap-2 group/btn">
          {isEnglish ? "Request a Quote" : "Solicitar Orçamento"}
          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
        </Button>
      </div>
    </div>
  )
}

export function LayoutShowcase() {
  const { language } = useLanguage()
  const isEnglish = language === "en-US"
  return (
    <section id="templates" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-accent/50 text-accent">
            Templates
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
            {isEnglish ? "Choose the ideal layout" : "Escolha o layout ideal"}
            <br />
            <span className="text-muted-foreground">{isEnglish ? "for your business" : "para seu negócio"}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {isEnglish ? "Hover over each layout to preview the full page. All templates are customizable and optimized for conversions." : "Passe o mouse sobre cada layout para visualizar a página completa. Todos os templates são personalizáveis e otimizados para conversão."}
          </p>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => (
            <LayoutCard key={template.id} template={template} language={language} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            {isEnglish ? "Can't find what you're looking for? We create custom layouts!" : "Não encontrou o que procura? Criamos layouts personalizados!"}
          </p>
          <Button variant="outline" size="lg" className="gap-2">
            {isEnglish ? "Request a Custom Layout" : "Solicitar Layout Personalizado"}
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
