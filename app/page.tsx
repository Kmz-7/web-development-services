import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { LayoutShowcase } from "@/components/layout-showcase"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="page-frame">
        <Hero />
        <LayoutShowcase />
        <Services />
        <About />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
