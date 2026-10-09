"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { motion, useReducedMotion, useSpring, useTransform } from "motion/react"
import { useState } from "react"

export function Hero() {
  const { language } = useLanguage()
  const isEnglish = language === "en-US"
  const reduceMotion = useReducedMotion()
  const [headingHovered, setHeadingHovered] = useState(false)
  const pointerX = useSpring(0, { stiffness: 180, damping: 20, mass: 0.35 })
  const pointerY = useSpring(0, { stiffness: 180, damping: 20, mass: 0.35 })
  const rotateY = useTransform(pointerX, [-1, 1], [-7, 7])
  const rotateX = useTransform(pointerY, [-1, 1], [5, -5])

  const handleHeadingPointerMove = (event: React.PointerEvent<HTMLHeadingElement>) => {
    if (reduceMotion || event.pointerType !== "mouse") return
    const bounds = event.currentTarget.getBoundingClientRect()
    pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 2)
    pointerY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 2)
  }

  const resetHeadingTilt = () => {
    setHeadingHovered(false)
    pointerX.set(0)
    pointerY.set(0)
  }
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
          {isEnglish ? "Professional Websites" : "Sites Profissionais"}
        </Badge>

        {/* Main Heading */}
        <motion.h1
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          onPointerEnter={() => setHeadingHovered(true)}
          onPointerMove={handleHeadingPointerMove}
          onPointerLeave={resetHeadingTilt}
          onPointerCancel={resetHeadingTilt}
          style={{ fontFamily: 'var(--font-display)', rotateX: headingHovered && !reduceMotion ? rotateX : 0, rotateY: headingHovered && !reduceMotion ? rotateY : 0, transformPerspective: 800, transformStyle: "preserve-3d", transformOrigin: "center" }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
        >
          <span className="text-balance">
            {isEnglish ? "Transform your" : "Transforme sua"}
            <br />
            <span className="text-muted-foreground">{isEnglish ? "digital presence" : "presença digital"}</span>
          </span>
        </motion.h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty">
          {isEnglish
            ? "We build business and brand websites with modern design, optimized performance, and a focus on results for your business."
            : "Desenvolvemos sites institucionais e de divulgação de marca com design moderno, performance otimizada e foco em resultados para seu negócio."}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="gap-2 px-8">
            {isEnglish ? "View Templates" : "Ver Templates"}
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button size="lg" variant="outline" className="gap-2 px-8">
            {isEnglish ? "Talk to an Expert" : "Falar com Especialista"}
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-40 pt-10 border-t border-border/50">
          <motion.div tabIndex={0} className="group rounded-xl p-3 focus-visible:outline-none">
            <motion.div whileHover={reduceMotion ? undefined : { scale: 1.12, textShadow: "0 0 8px rgba(249,115,22,0.9), 0 0 22px rgba(249,115,22,0.65)" }} transition={{ type: "spring", stiffness: 320, damping: 18 }} className="text-3xl md:text-6xl font-bold text-foreground group-focus-visible:[text-shadow:0_0_8px_rgba(249,115,22,0.9),0_0_22px_rgba(249,115,22,0.65)]" style={{ fontFamily: 'var(--font-display)' }}>
              50+
            </motion.div>
            <div className="text-sm md:text-lg text-muted-foreground mt-1">
              {isEnglish ? "Websites Delivered" : "Sites Entregues"}
            </div>
          </motion.div>
          <motion.div tabIndex={0} className="group rounded-xl p-3 focus-visible:outline-none">
            <motion.div whileHover={reduceMotion ? undefined : { scale: 1.12, textShadow: "0 0 8px rgba(249,115,22,0.9), 0 0 22px rgba(249,115,22,0.65)" }} transition={{ type: "spring", stiffness: 320, damping: 18 }} className="text-3xl md:text-6xl font-bold text-foreground group-focus-visible:[text-shadow:0_0_8px_rgba(249,115,22,0.9),0_0_22px_rgba(249,115,22,0.65)]" style={{ fontFamily: 'var(--font-display)' }}>
              100%
            </motion.div>
            <div className="text-sm md:text-lg text-muted-foreground mt-1">
              {isEnglish ? "Satisfied Clients" : "Clientes Satisfeitos"}
            </div>
          </motion.div>
          <motion.div tabIndex={0} className="group rounded-xl p-3 focus-visible:outline-none">
            <motion.div whileHover={reduceMotion ? undefined : { scale: 1.12, textShadow: "0 0 8px rgba(249,115,22,0.9), 0 0 22px rgba(249,115,22,0.65)" }} transition={{ type: "spring", stiffness: 320, damping: 18 }} className="text-3xl md:text-6xl font-bold text-foreground group-focus-visible:[text-shadow:0_0_8px_rgba(249,115,22,0.9),0_0_22px_rgba(249,115,22,0.65)]" style={{ fontFamily: 'var(--font-display)' }}>
              7 dias
            </motion.div>
            <div className="text-sm md:text-lg text-muted-foreground mt-1">
              {isEnglish ? "Average Delivery" : "Entrega Média"}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
