"use client"

import { useEffect, type ReactNode } from "react"

interface ParallaxProviderProps {
  children: ReactNode
}

export function ParallaxProvider({ children }: ParallaxProviderProps) {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const parallaxElements = document.querySelectorAll(".parallax-slow, .parallax-fast")

      parallaxElements.forEach((element) => {
        const speed = element.classList.contains("parallax-slow") ? 0.5 : 0.8
        const yPos = -(scrolled * speed)

        if (element.classList.contains("parallax-slow")) {
          ;(element as HTMLElement).style.setProperty("--parallax-offset-slow", `${yPos}px`)
        } else {
          ;(element as HTMLElement).style.setProperty("--parallax-offset-fast", `${yPos}px`)
        }
      })

      // Fade in animation on scroll
      const fadeElements = document.querySelectorAll(".fade-in-up:not(.visible)")
      fadeElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 150

        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add("visible")
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial call

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return <>{children}</>
}
