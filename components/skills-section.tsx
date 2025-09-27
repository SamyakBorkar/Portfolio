"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Server, Database, Brain, Wrench, Zap } from "lucide-react"
import { motion } from "framer-motion"

export function SkillsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const skillCategories = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Programming Languages",
      skills: ["C", "C++", "Java", "JavaScript", "TypeScript", "Go (Golang)"],
      color: "bg-blue-500/10 text-blue-600 border-blue-500/20",
      gradient: "from-blue-500/20 to-blue-600/20",
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Frontend Development",
      skills: ["React.js", "Redux Toolkit", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
      color: "bg-purple-500/10 text-purple-600 border-purple-500/20",
      gradient: "from-purple-500/20 to-purple-600/20",
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Backend Development",
      skills: ["Node.js", "Express.js"],
      color: "bg-green-500/10 text-green-600 border-green-500/20",
      gradient: "from-green-500/20 to-green-600/20",
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Database Management",
      skills: ["MongoDB", "MySQL", "Vector DB"],
      color: "bg-orange-500/10 text-orange-600 border-orange-500/20",
      gradient: "from-orange-500/20 to-orange-600/20",
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI/Chatbot Tools",
      skills: ["LangChain", "Ollama"],
      color: "bg-pink-500/10 text-pink-600 border-pink-500/20",
      gradient: "from-pink-500/20 to-pink-600/20",
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Developer Tools",
      skills: ["Git", "GitHub", "VS Code", "Postman", "npm", "Vercel", "Render", "Docker", "CI/CD (GitHub Actions)"],
      color: "bg-indigo-500/10 text-indigo-600 border-indigo-500/20",
      gradient: "from-indigo-500/20 to-indigo-600/20",
    },
  ]

  const additionalSkills = [
    { skill: "Object-Oriented Programming (OOP)", level: "Advanced" },
    { skill: "Data Structures and Algorithms (DSA)", level: "Intermediate" },
    { skill: "Linux (Basics)", level: "Intermediate" },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in-up text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <Card
                className={`p-6 h-full transition-all duration-300 fade-in-up stagger-${(index % 3) + 1} 
                  ${hoveredCard === index ? `bg-gradient-to-br ${category.gradient} shadow-xl border-2 ${category.color}` : "hover:shadow-lg"}`}
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${category.color} transition-all duration-300`}
                  >
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className={`text-xs transition-all duration-200 ${hoveredCard === index ? "bg-background/80" : ""}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="fade-in-up">
          <Card className="p-8 bg-gradient-to-r from-accent/5 via-primary/5 to-accent/5 border-accent/20">
            <div className="flex items-center justify-center mb-6">
              <Zap className="h-6 w-6 text-accent mr-3" />
              <h3 className="font-semibold text-2xl text-center">Additional Expertise</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {additionalSkills.map((item, index) => (
                <div key={index} className="text-center p-4 bg-background/50 rounded-lg border border-accent/10">
                  <div className="font-medium text-foreground mb-2">{item.skill}</div>
                  <Badge variant="outline" className="border-accent/30 text-accent">
                    {item.level}
                  </Badge>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
