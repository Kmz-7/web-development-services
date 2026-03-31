import { Badge } from "@/components/ui/badge"
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

export function Services() {
  return (
    <section id="servicos" className="py-24 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-accent/50 text-accent">
            Serviços
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
            O que oferecemos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Cada projeto é desenvolvido com atenção aos detalhes e foco 
            em entregar resultados reais para seu negócio.
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
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Future Services Banner */}
        <div className="mt-16 p-8 rounded-2xl border border-dashed border-accent/30 bg-accent/5 text-center">
          <Badge variant="secondary" className="mb-4">
            Em Breve
          </Badge>
          <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: 'var(--font-display)' }}>
            Sites com Backend Completo
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Em breve ofereceremos soluções completas com painel administrativo, 
            banco de dados e funcionalidades avançadas para seu negócio.
          </p>
        </div>
      </div>
    </section>
  )
}
