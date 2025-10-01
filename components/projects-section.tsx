"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Calendar, Zap, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "SmartHR-Portal",
      description:
        "Full-stack MERN application with JWT authentication, role-based authorization, and RAG-powered chatbot using Ollama + LangChain + Vector DB. Containerized with Docker Compose for consistent deployments.",
      technologies: [
        "MERN",
        "Redux Toolkit",
        "JWT",
        "Docker",
        "LangChain",
        "Ollama",
      ],
      date: "July 2025",
      status: "Live",
      liveUrl: "https://smarthr-zeta.vercel.app/",
      githubUrl: "https://github.com/SamyakBorkar",
      highlights: [
        "35% faster data retrieval",
        "RAG-powered chatbot",
        "Docker containerization",
        "Role-based authorization",
      ],
      image: "/EMS.png",
    },
    {
      title: "Eco-APT",
      description:
        "Intelligent and lightweight package manager for Debian-based Linux distributions built with Golang. Features P2P dependency sharing and storage verification mechanisms.",
      technologies: [
        "Golang",
        "Linux",
        "Bash",
        "Debian Packaging",
        "P2P Networking",
      ],
      date: "Feb 2025 – Present",
      status: "Ongoing",
      githubUrl: "https://github.com/SamyakBorkar",
      highlights: [
        "15% reduction in software conflicts",
        "P2P dependency sharing",
        "Storage overflow prevention",
        "CLI tool in Golang",
      ],
      image: "/ecoaptnew.png",
    },
    {
      title: "Weather Forecast Web App",
      description:
        "Dynamic React-based weather application with real-time data from OpenWeatherMap API. Features responsive UI with city search and comprehensive weather information display.",
      technologies: ["React.js", "OpenWeatherMap API", "Axios", "CSS3"],
      date: "May 2025",
      status: "Live",
      liveUrl: "https://weather-app-samyak-borkars-projects.vercel.app/",
      githubUrl: "https://github.com/SamyakBorkar",
      highlights: [
        "Real-time weather data",
        "Responsive design",
        "City search functionality",
        "Asynchronous API calls",
      ],
      image: "/WeatherApp.png",
    },
    {
      title: "Portfolio Website",
      description:
        "Interactive portfolio website built with Next.js, TypeScript, and Framer Motion. Features parallax effects, dark/light mode, and responsive design.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      date: "Jan 2025",
      status: "Live",
      liveUrl: "#",
      githubUrl: "https://github.com/SamyakBorkar",
      highlights: [
        "Parallax effects",
        "Dark/Light mode",
        "Responsive design",
        "Interactive animations",
      ],
      image: "/PortfolioWebsite.png",
    },
    {
      title: "Number Base Converter",
      description:
        "A versatile utility application built with Java Swing that converts numbers between different bases (Binary, Octal, Decimal, Hexadecimal). Features a clean, user-friendly graphical interface.",
      technologies: ["Java", "Swing", "AWT"],
      date: "Dec 2024",
      status: "Completed",
      liveUrl: "https://number-base-convertor.vercel.app/", 
      githubUrl: "https://github.com/SamyakBorkar/NumberBaseConverter", 
      highlights: [
        "Multi-base conversion",
        "User-friendly GUI",
        "Error handling for invalid input",
        "Lightweight and fast",
      ],
      image: "/NumberBaseConvertor.png",
    },

    {
      title: "Brick Breaker Game",
      description:
        "A classic Brick Breaker game developed using Java's Swing and AWT libraries. Features collision detection, scoring, and progressively challenging levels.",
      technologies: ["Java", "Swing", "AWT", "Game Development"],
      date: "Oct 2024",
      status: "Completed",
      githubUrl: "https://github.com/SamyakBorkar",
      highlights: [
        "Collision detection logic",
        "Dynamic level generation",
        "Scoring and life system",
        "Object-oriented design",
      ],
      image: "/b_bg.png",
    },
    // {
    //   title: "Sensor Fusion for Robotics",
    //   description: "Implemented sensor fusion algorithms (e.g., Kalman Filter) to combine data from IMU and GPS for accurate robot localization and navigation in a simulated environment.",
    //   technologies: ["Python", "ROS", "Kalman Filter", "Robotics"],
    //   date: "Sep 2024",
    //   status: "Completed",
    //   githubUrl: "https://github.com/SamyakBorkar",
    //   highlights: ["IMU & GPS data fusion", "Kalman Filter implementation", "Improved localization accuracy", "ROS integration"],
    //   image: "/kf.png",
    // },
    {
      title: "Embedded Drone using ESP32",
      description:
        "Developed the flight controller for a quadcopter drone using an ESP32 microcontroller. Implemented PID control for stability and remote control via a web interface.",
      technologies: ["C++", "ESP32", "OTA", "PID Control", "Embedded Systems"],
      date: "Aug 2024",
      status: "Completed",
      githubUrl: "https://github.com/SamyakBorkar/QuadCopter.git",
      highlights: [
        "PID control for stability",
        "Real-time flight control",
        "ESP32 programming",
        "Web-based remote control",
      ],
      image: "/drone.png",
    },
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in-up text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Innovative solutions showcasing full-stack development and system
            architecture
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-2 gap-8">
          <AnimatePresence>
            {visibleProjects.map((project, index) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card
                  className={`
                    h-full overflow-hidden transition-all duration-300
                    border-2 border-primary/10 hover:border-primary/30
                    hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1
                  `}
                >
                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge
                        variant={
                          project.status === "Live" ? "default" : "secondary"
                        }
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

                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1">
                      {project.technologies
                        .slice(0, 3)
                        .map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="text-xs"
                          >
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
                        {project.highlights
                          .slice(0, 2)
                          .map((highlight, highlightIndex) => (
                            <li
                              key={highlightIndex}
                              className="text-xs text-muted-foreground flex items-start"
                            >
                              <div className="w-1 h-1 bg-accent rounded-full mt-1.5 mr-2 flex-shrink-0" />
                              {highlight}
                            </li>
                          ))}
                      </ul>
                    </div>

                    <div className="flex gap-2 pt-2">
                      {project.liveUrl && (
                        <Button size="sm" asChild className="flex-1">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="mr-1 h-3 w-3" />
                            View
                          </a>
                        </Button>
                      )}
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                        className="flex-1 bg-transparent"
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-1 h-3 w-3" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {!showAll && projects.length > 4 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button
              onClick={() => setShowAll(true)}
              variant="outline"
              size="lg"
              className="group"
            >
              See More Projects
              <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
          </motion.div>
        )}

        {showAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button
              onClick={() => setShowAll(false)}
              variant="outline"
              size="lg"
              className="group"
            >
              Show Less
              <ChevronDown className="ml-2 h-4 w-4 rotate-180 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
