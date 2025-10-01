"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute top-8 right-8 z-20">
        {/* <ThemeToggle /> */}
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-96 h-96 bg-accent/30 rounded-full blur-3xl parallax-slow"
          style={{
            left: `${20 + mousePosition.x * 0.02}%`,
            top: `${30 + mousePosition.y * 0.02}%`,
          }}
        />
        <div
          className="absolute w-64 h-64 bg-primary/30 rounded-full blur-3xl parallax-fast"
          style={{
            right: `${15 + mousePosition.x * 0.015}%`,
            bottom: `${25 + mousePosition.y * 0.015}%`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="fade-in-up">
          <p className="text-muted-foreground text-lg mb-4">Hello, I'm</p>
        </div>

        <div className="fade-in-up stagger-1">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
            Samyak <span className="text-orange-400">Borkar</span>
          </h1>
        </div>

        <div className="fade-in-up stagger-2">
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 text-balance">
            Software Developer & Techie!
          </h2>
        </div>

        <div className="fade-in-up stagger-3">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed text-pretty">
            B.Tech IT student passionate about crafting innovative web applications and intelligent systems.
            Specializing in React, Node.js, Golang, and modern development practices.
          </p>
        </div>

        <div className="fade-in-up stagger-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" onClick={scrollToAbout} className="group">
            View My Work
            <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={scrollToAbout} className="text-muted-foreground hover:text-foreground transition-colors">
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  )
}
