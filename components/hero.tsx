import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 px-4 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Badge */}
        <Badge variant="outline" className="mb-6 border-accent/50 text-accent gap-2">
          <Sparkles className="w-3 h-3" />
          Sites Profissionais
        </Badge>

        {/* Main Heading */}
        <h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          <span className="text-balance">
            Transforme sua
            <br />
            <span className="text-muted-foreground">presença digital</span>
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty">
          Desenvolvemos sites institucionais e de divulgação de marca com design 
          moderno, performance otimizada e foco em resultados para seu negócio.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="gap-2 px-8">
            Ver Templates
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button size="lg" variant="secondary" className="gap-2 px-8">
            Falar com Especialista
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-20 pt-10 border-t border-border/50">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
              50+
            </div>
            <div className="text-sm text-muted-foreground mt-1">
              Sites Entregues
            </div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
              100%
            </div>
            <div className="text-sm text-muted-foreground mt-1">
              Clientes Satisfeitos
            </div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
              7 dias
            </div>
            <div className="text-sm text-muted-foreground mt-1">
              Entrega Média
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
