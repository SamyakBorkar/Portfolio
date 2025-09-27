"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, ChevronLeft, ChevronRight, Award, Calendar } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function CertificationsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const certifications = [
    {
      title: "Java (Basic)",
      issuer: "HackerRank",
      description: "Validated core Java programming concepts through hands-on coding assessments",
      date: "2024",
      certificateUrl: "https://www.hackerrank.com/certificates/java-basic",
      image: "/java-programming-certificate-hackerrank.jpg",
      skills: ["Object-Oriented Programming", "Data Structures", "Exception Handling"],
    },
    {
      title: "JavaScript (Basic)",
      issuer: "HackerRank",
      description: "Demonstrated proficiency in JavaScript fundamentals, DOM manipulation, and ES6 features",
      date: "2024",
      certificateUrl: "https://www.hackerrank.com/certificates/javascript-basic",
      image: "/javascript-programming-certificate-hackerrank.jpg",
      skills: ["ES6 Features", "DOM Manipulation", "Asynchronous Programming"],
    },
  ]

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % certifications.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, certifications.length])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % certifications.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + certifications.length) % certifications.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <section id="certifications" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in-up text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Award className="h-8 w-8 text-accent mr-3" />
            <h2 className="text-3xl sm:text-4xl font-bold">Professional Certifications</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Validated skills and expertise through industry-recognized certifications
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/10 card-hover-effect">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    {/* Certificate Image */}
                    <div className="relative">
                      <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg overflow-hidden shadow-lg hover-lift">
                        <img
                          src={certifications[currentIndex].image || "/placeholder.svg"}
                          alt={`${certifications[currentIndex].title} Certificate`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      </div>
                    </div>

                    {/* Certificate Details */}
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="border-accent/30 text-accent">
                            {certifications[currentIndex].issuer}
                          </Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-1" />
                            {certifications[currentIndex].date}
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold">{certifications[currentIndex].title}</h3>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        {certifications[currentIndex].description}
                      </p>

                      <div className="space-y-3">
                        <h4 className="font-semibold">Key Skills Validated:</h4>
                        <div className="flex flex-wrap gap-2">
                          {certifications[currentIndex].skills.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <Button asChild className="w-full sm:w-auto hover-lift">
                        <a href={certifications[currentIndex].certificateUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Certificate
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={prevSlide}
              className="flex items-center hover-lift bg-transparent"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Previous
            </Button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {certifications.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 focus-visible ${
                    index === currentIndex
                      ? "bg-primary scale-125"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextSlide}
              className="flex items-center hover-lift bg-transparent"
            >
              Next
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>

          {/* Auto-play indicator */}
          <div className="text-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors focus-visible"
            >
              {isAutoPlaying ? "Auto-playing" : "Paused"} • Click to {isAutoPlaying ? "pause" : "resume"}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
