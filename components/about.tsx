import { Badge } from "@/components/ui/badge"
import { CheckCircle2 } from "lucide-react"

const highlights = [
  "Comunicação clara durante todo o projeto",
  "Prazos cumpridos e entregas pontuais",
  "Suporte pós-entrega incluso",
  "Treinamento para gerenciar seu site",
  "Código limpo e bem documentado",
  "Hospedagem orientada inclusa"
]

export function About() {
  return (
    <section id="sobre" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <Badge variant="outline" className="mb-4 border-accent/50 text-accent">
              Sobre
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
              Criando experiências
              <br />
              <span className="text-muted-foreground">digitais memoráveis</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Somos especializados em desenvolver sites que não apenas impressionam 
                visualmente, mas que também geram resultados concretos para nossos clientes.
              </p>
              <p>
                Cada projeto é tratado de forma única, com atenção aos detalhes e foco 
                em entregar uma presença digital que realmente represente sua marca e 
                conecte com seu público.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-secondary/50 border border-border overflow-hidden">
              {/* Abstract code/design visual */}
              <div className="absolute inset-0 p-8 flex flex-col gap-4">
                {/* Fake browser window */}
                <div className="flex-1 rounded-lg bg-card border border-border overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-destructive/50" />
                      <div className="w-3 h-3 rounded-full bg-chart-4/50" />
                      <div className="w-3 h-3 rounded-full bg-accent/50" />
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="h-6 rounded bg-secondary flex items-center px-3">
                        <span className="text-xs text-muted-foreground">suaempresa.com.br</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="h-8 bg-secondary rounded w-2/3" />
                    <div className="h-4 bg-secondary/50 rounded w-full" />
                    <div className="h-4 bg-secondary/50 rounded w-4/5" />
                    <div className="h-4 bg-secondary/50 rounded w-3/5" />
                    <div className="flex gap-2 mt-4">
                      <div className="h-10 bg-accent rounded w-32" />
                      <div className="h-10 bg-secondary rounded w-32" />
                    </div>
                  </div>
                </div>

                {/* Code snippet visual */}
                <div className="h-32 rounded-lg bg-card border border-border p-4 font-mono text-xs">
                  <div className="text-muted-foreground">
                    <span className="text-accent">{"<"}</span>
                    <span className="text-foreground">section</span>
                    <span className="text-accent">{">"}</span>
                  </div>
                  <div className="text-muted-foreground pl-4">
                    <span className="text-accent">{"<"}</span>
                    <span className="text-foreground">h1</span>
                    <span className="text-accent">{">"}</span>
                    <span className="text-foreground/70">Sua Marca</span>
                    <span className="text-accent">{"</"}</span>
                    <span className="text-foreground">h1</span>
                    <span className="text-accent">{">"}</span>
                  </div>
                  <div className="text-muted-foreground pl-4">
                    <span className="text-accent">{"<"}</span>
                    <span className="text-foreground">p</span>
                    <span className="text-accent">{">"}</span>
                    <span className="text-foreground/70">...</span>
                    <span className="text-accent">{"</"}</span>
                    <span className="text-foreground">p</span>
                    <span className="text-accent">{">"}</span>
                  </div>
                  <div className="text-muted-foreground">
                    <span className="text-accent">{"</"}</span>
                    <span className="text-foreground">section</span>
                    <span className="text-accent">{">"}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
