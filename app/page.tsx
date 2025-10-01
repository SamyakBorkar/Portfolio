"use client"

import { useEffect, useState } from "react"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { EducationTimeline } from "@/components/education-timeline"
import { ContactSection } from "@/components/contact-section"
import { ParallaxProvider } from "@/components/parallax-provider"
import { Loader } from "@/components/loader"
import { CertificationsSection } from "@/components/certifications-section"
import { PositionsSection } from "@/components/positions-section"
import { ScrollAnimations } from "@/components/scroll-animations"

export default function Portfolio() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // simulate load or replace with your actual logic
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    // ✅ Only Loader while page is loading
    return <Loader />
  }

  return (
    <ParallaxProvider>
      <ScrollAnimations />
      <div className="min-h-screen bg-background">
        {/* ✅ Navbar appears only after Loader finishes */}
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <EducationTimeline />
          {/* <AchievementsSection /> */}
          <CertificationsSection />
          <PositionsSection />
          <ContactSection />
        </main>
      </div>
    </ParallaxProvider>
  )
}
