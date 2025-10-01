"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import * as Tabs from "@radix-ui/react-tabs"
import * as Progress from "@radix-ui/react-progress"
import { Code, Palette, Server, Database, Brain, Wrench, Zap } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      id: "languages",
      icon: <Code className="h-5 w-5" />,
      title: "Programming Languages",
      skills: ["C", "C++", "Java", "JavaScript", "TypeScript", "Go (Golang)"],
      color: "text-blue-500",
    },
    {
      id: "frontend",
      icon: <Palette className="h-5 w-5" />,
      title: "Frontend Development",
      skills: ["React.js", "Redux Toolkit", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
      color: "text-purple-500",
    },
    {
      id: "backend",
      icon: <Server className="h-5 w-5" />,
      title: "Backend Development",
      skills: ["Node.js", "Express.js"],
      color: "text-green-500",
    },
    {
      id: "database",
      icon: <Database className="h-5 w-5" />,
      title: "Database Management",
      skills: ["MongoDB", "MySQL", "Vector DB"],
      color: "text-orange-500",
    },
    {
      id: "ai",
      icon: <Brain className="h-5 w-5" />,
      title: "AI / Chatbot Tools",
      skills: ["LangChain", "Ollama"],
      color: "text-pink-500",
    },
    {
      id: "tools",
      icon: <Wrench className="h-5 w-5" />,
      title: "Developer Tools",
      skills: ["Git", "GitHub", "VS Code", "Postman", "npm", "Vercel", "Render", "Docker", "CI/CD (GitHub Actions)"],
      color: "text-indigo-500",
    },
  ]

  const additionalSkills = [
    { skill: "Object-Oriented Programming (OOP)", level: 90 },
    { skill: "Data Structures & Algorithms", level: 70 },
    { skill: "Linux (Basics)", level: 60 },
  ]

  const [activeTab, setActiveTab] = useState("languages")

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-background via-accent/5 to-background">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-3"> Technical Skills</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Interactive showcase of my toolkit for building modern, scalable applications
          </p>
        </motion.div>

        {/* Tabs for categories */}
        <Tabs.Root value={activeTab} onValueChange={setActiveTab} className="w-full">
          <Tabs.List className="flex flex-wrap justify-center gap-3 mb-12">
            {skillCategories.map((cat) => (
              <Tabs.Trigger
                key={cat.id}
                value={cat.id}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 
                           hover:border-accent/40 hover:shadow-md transition data-[state=active]:bg-accent/10"
              >
                <span className={cat.color}>{cat.icon}</span>
                {cat.title}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          {skillCategories.map((cat) => (
            <Tabs.Content key={cat.id} value={cat.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {cat.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.2)" }}
                  >
                    <Card className="p-4 text-center bg-background/60 backdrop-blur border border-accent/20 rounded-xl transition">
                      <Badge
                        variant="secondary"
                        className={`px-3 py-1 text-sm font-medium ${cat.color}`}
                      >
                        {skill}
                      </Badge>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </Tabs.Content>
          ))}
        </Tabs.Root>

        {/* Additional Expertise with progress bars */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <Card className="p-10 bg-background/60 backdrop-blur-xl border-accent/20">
            <div className="flex items-center justify-center mb-8">
              <Zap className="h-6 w-6 text-accent mr-3" />
              <h3 className="font-semibold text-2xl">Additional Expertise</h3>
            </div>
            <div className="space-y-6">
              {additionalSkills.map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-2 text-sm font-medium">
                    <span>{item.skill}</span>
                    <span>{item.level}%</span>
                  </div>
                  <Progress.Root
                    className="relative overflow-hidden bg-muted rounded-full w-full h-2"
                    value={item.level}
                  >
                    <Progress.Indicator
                      className="h-full transition-transform duration-300 bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400"
                      style={{ transform: `translateX(-${100 - item.level}%)` }}
                    />
                  </Progress.Root>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
