"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Server, Database, Brain, Wrench } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Programming Languages",
      skills: ["C", "C++", "Java", "JavaScript", "TypeScript", "Go (Golang)"],
      color: "bg-blue-500/10 text-blue-600",
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Frontend Development",
      skills: ["React.js", "Redux Toolkit", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
      color: "bg-purple-500/10 text-purple-600",
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Backend Development",
      skills: ["Node.js", "Express.js"],
      color: "bg-green-500/10 text-green-600",
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Database Management",
      skills: ["MongoDB", "MySQL", "Vector DB"],
      color: "bg-orange-500/10 text-orange-600",
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI/Chatbot Tools",
      skills: ["LangChain", "Ollama"],
      color: "bg-pink-500/10 text-pink-600",
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Developer Tools",
      skills: ["Git", "GitHub", "VS Code", "Postman", "npm", "Vercel", "Render", "Docker", "CI/CD (GitHub Actions)"],
      color: "bg-indigo-500/10 text-indigo-600",
    },
  ]

  const additionalSkills = [
    "Object-Oriented Programming (OOP)",
    "Data Structures and Algorithms (DSA)",
    "Linux (Basics)",
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
            <Card
              key={index}
              className={`p-6 hover:shadow-lg transition-all duration-300 fade-in-up stagger-${(index % 3) + 1}`}
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${category.color}`}>
                  {category.icon}
                </div>
                <h3 className="font-semibold text-lg">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="fade-in-up">
          <Card className="p-6 bg-accent/5 border-accent/20">
            <h3 className="font-semibold text-lg mb-4 text-center">Additional Skills</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {additionalSkills.map((skill, index) => (
                <Badge key={index} variant="outline" className="text-sm border-accent/30 text-accent">
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
