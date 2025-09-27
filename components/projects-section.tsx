"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Calendar, Zap } from "lucide-react"
import { motion } from "framer-motion"

export function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects = [
    {
      title: "Employee Management System",
      description:
        "Full-stack MERN application with JWT authentication, role-based authorization, and RAG-powered chatbot using Ollama + LangChain + Vector DB. Containerized with Docker Compose for consistent deployments.",
      technologies: ["MERN", "Redux Toolkit", "JWT", "Docker", "LangChain", "Ollama"],
      date: "July 2025",
      status: "Live",
      liveUrl: "#",
      githubUrl: "https://github.com/SamyakBorkar",
      highlights: [
        "35% faster data retrieval",
        "RAG-powered chatbot",
        "Docker containerization",
        "Role-based authorization",
      ],
      image: "/employee-management-dashboard-interface.jpg",
    },
    {
      title: "Eco-APT",
      description:
        "Intelligent and lightweight package manager for Debian-based Linux distributions built with Golang. Features P2P dependency sharing and storage verification mechanisms.",
      technologies: ["Golang", "Linux", "Bash", "Debian Packaging", "P2P Networking"],
      date: "Feb 2025 – Present",
      status: "Ongoing",
      githubUrl: "https://github.com/SamyakBorkar",
      highlights: [
        "15% reduction in software conflicts",
        "P2P dependency sharing",
        "Storage overflow prevention",
        "CLI tool in Golang",
      ],
      image: "/linux-terminal-package-manager-interface.jpg",
    },
    {
      title: "Weather Forecast Web App",
      description:
        "Dynamic React-based weather application with real-time data from OpenWeatherMap API. Features responsive UI with city search and comprehensive weather information display.",
      technologies: ["React.js", "OpenWeatherMap API", "Axios", "CSS3"],
      date: "May 2025",
      status: "Live",
      liveUrl: "#",
      githubUrl: "https://github.com/SamyakBorkar",
      highlights: [
        "Real-time weather data",
        "Responsive design",
        "City search functionality",
        "Asynchronous API calls",
      ],
      image: "/weather-app-interface-with-forecast-cards.jpg",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in-up text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Innovative solutions showcasing full-stack development and system architecture
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              <Card
                className={`h-full overflow-hidden transition-all duration-300 fade-in-up stagger-${(index % 3) + 1}
                ${hoveredProject === index ? "shadow-2xl border-primary/20" : "hover:shadow-lg"}`}
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant={project.status === "Live" ? "default" : "secondary"}
                      className={
                        project.status === "Live"
                          ? "bg-green-500/90 text-white border-green-500/20"
                          : "bg-orange-500/90 text-white"
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {project.date}
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">{project.description}</p>

                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm flex items-center">
                      <Zap className="h-3 w-3 mr-2 text-accent" />
                      Key Features
                    </h4>
                    <ul className="space-y-1">
                      {project.highlights.slice(0, 2).map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="text-xs text-muted-foreground flex items-start">
                          <div className="w-1 h-1 bg-accent rounded-full mt-1.5 mr-2 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-2 pt-2">
                    {project.liveUrl && (
                      <Button size="sm" asChild className="flex-1">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-1 h-3 w-3" />
                          Live
                        </a>
                      </Button>
                    )}
                    <Button size="sm" variant="outline" asChild className="flex-1 bg-transparent">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-1 h-3 w-3" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
