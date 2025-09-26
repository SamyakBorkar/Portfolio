"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Calendar, Zap } from "lucide-react"

export function ProjectsSection() {
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
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in-up text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Innovative solutions showcasing full-stack development and AI integration
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`p-8 hover:shadow-xl transition-all duration-300 fade-in-up stagger-${(index % 3) + 1}`}
            >
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {project.date}
                        </div>
                        <Badge
                          variant={project.status === "Live" ? "default" : "secondary"}
                          className={
                            project.status === "Live" ? "bg-green-500/10 text-green-600 border-green-500/20" : ""
                          }
                        >
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed text-pretty">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    {project.liveUrl && (
                      <Button asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    <Button variant="outline" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold flex items-center">
                    <Zap className="h-4 w-4 mr-2 text-accent" />
                    Key Highlights
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="text-sm text-muted-foreground flex items-start">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
