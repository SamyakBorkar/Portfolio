"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import * as Progress from "@radix-ui/react-progress"
import {
  Code,
  Palette,
  Server,
  Database,
  Cloud,
  Wrench,
  Zap,
  Sparkles,
  Brain,
  Terminal,
} from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      id: "languages",
      icon: <Code className="h-6 w-6" />,
      title: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Java", "C++", "C", "Go (Golang)"],
      color: "text-blue-500",
      bgGradient: "from-blue-500/10 to-blue-600/5",
      borderColor: "border-blue-500/30",
      glowColor: "shadow-blue-500/20",
    },
    {
      id: "frontend",
      icon: <Palette className="h-6 w-6" />,
      title: "Frontend Development",
      skills: ["React.js", "Redux Toolkit", "Tailwind CSS", "HTML5", "CSS3"],
      color: "text-purple-500",
      bgGradient: "from-purple-500/10 to-purple-600/5",
      borderColor: "border-purple-500/30",
      glowColor: "shadow-purple-500/20",
    },
    {
      id: "backend",
      icon: <Server className="h-6 w-6" />,
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "RESTful APIs"],
      color: "text-green-500",
      bgGradient: "from-green-500/10 to-green-600/5",
      borderColor: "border-green-500/30",
      glowColor: "shadow-green-500/20",
    },
    {
      id: "database",
      icon: <Database className="h-6 w-6" />,
      title: "Database & Storage",
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Vector DB"],
      color: "text-orange-500",
      bgGradient: "from-orange-500/10 to-orange-600/5",
      borderColor: "border-orange-500/30",
      glowColor: "shadow-orange-500/20",
    },
    {
      id: "devops",
      icon: <Cloud className="h-6 w-6" />,
      title: "DevOps & Cloud",
      skills: ["Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Vercel"],
      color: "text-cyan-500",
      bgGradient: "from-cyan-500/10 to-cyan-600/5",
      borderColor: "border-cyan-500/30",
      glowColor: "shadow-cyan-500/20",
    },
    {
      id: "tools",
      icon: <Wrench className="h-6 w-6" />,
      title: "Development Tools",
      skills: ["Git", "GitHub", "VS Code", "Postman", "npm", "Vite"],
      color: "text-indigo-500",
      bgGradient: "from-indigo-500/10 to-indigo-600/5",
      borderColor: "border-indigo-500/30",
      glowColor: "shadow-indigo-500/20",
    },
  ]

  const additionalSkills = [
    {
      skill: "Object-Oriented Programming (OOP)",
      level: 90,
      icon: <Code className="h-4 w-4" />,
      tone: "from-blue-500/30 to-blue-500/10",
    },
    {
      skill: "Data Structures & Algorithms",
      level: 78,
      icon: <Brain className="h-4 w-4" />,
      tone: "from-purple-500/30 to-purple-500/10",
    },
    {
      skill: "Linux & Shell Scripting",
      level: 82,
      icon: <Terminal className="h-4 w-4" />,
      tone: "from-emerald-500/30 to-emerald-500/10",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-br from-background via-accent/5 to-background relative overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-accent/10 border">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium">Tech Stack</span>
          </div>
          <h2 className="text-5xl font-bold mb-4">
            Technical Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A comprehensive overview of my expertise across technologies
          </p>
        </motion.div>

        {/* Skill Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <Card
                className={`p-6 bg-gradient-to-br ${category.bgGradient} border ${category.borderColor} hover:${category.glowColor} hover:shadow-2xl transition-all h-full`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-3 rounded-xl bg-background/50 border ${category.borderColor} ${category.color}`}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="font-bold">{category.title}</h3>
                    <p className="text-xs text-muted-foreground">
                      {category.skills.length} skills
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* 🔥 CORE EXPERTISE – FIXED ALIGNMENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 md:p-12 bg-gradient-to-br from-background/90 to-accent/10 backdrop-blur-xl border-accent/20 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-center gap-3 mb-12">
              <Zap className="h-8 w-8 text-accent" />
              <div className="text-center">
                <h3 className="font-bold text-3xl md:text-4xl">
                  Core Expertise
                </h3>
                <p className="text-sm text-muted-foreground">
                  Foundational knowledge & competencies
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {additionalSkills.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="p-6 h-full min-h-[150px] rounded-2xl border border-accent/15 bg-background/80 backdrop-blur-sm flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold text-sm">
                          {item.skill}
                        </span>
                        <span className="font-bold text-lg">
                          {item.level}%
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {item.level >= 85
                          ? "⭐ Expert"
                          : item.level >= 75
                          ? "🎯 Advanced"
                          : "✓ Proficient"}
                      </p>
                    </div>

                    <Progress.Root
                      value={item.level}
                      className="h-2 bg-muted rounded-full mt-4"
                    >
                      <Progress.Indicator
                        style={{ width: `${item.level}%` }}
                        className="h-full bg-gradient-to-r from-amber-400 to-rose-400 rounded-full"
                      />
                    </Progress.Root>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
