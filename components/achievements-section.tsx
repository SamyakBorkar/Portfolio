"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Award, Calendar, Trophy, Target } from "lucide-react"
import { motion } from "framer-motion"

export function AchievementsSection() {
  const achievements = [
    {
      icon: <Star className="h-6 w-6" />,
      title: "HackerRank 5-Star",
      description:
        "Earned 5-star ratings in both C++ and Java, demonstrating strong coding and problem-solving abilities",
      category: "C++ & Java",
      date: "Dec 2024",
      color: "from-yellow-500/20 to-orange-500/20",
      iconColor: "text-yellow-600",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "LeetCode 100 Days Badge",
      description:
        "Completed the 100 Days of Coding challenge, showcasing consistency and dedication to problem solving",
      category: "Consistent Problem Solving",
      date: "Jan 2025",
      color: "from-green-500/20 to-emerald-500/20",
      iconColor: "text-green-600",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Java & JavaScript Certified",
      description: "Validated programming concepts through comprehensive hands-on coding assessments",
      category: "HackerRank Certifications",
      date: "2024",
      color: "from-blue-500/20 to-purple-500/20",
      iconColor: "text-blue-600",
    },
  ]

  return (
    <section id="achievements" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in-up text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Trophy className="h-8 w-8 text-accent mr-3" />
            <h2 className="text-3xl sm:text-4xl font-bold">Achievements & Recognition</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Milestones that reflect dedication, skill development, and consistent growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05, y: -5 }} transition={{ duration: 0.3 }}>
              <Card
                className={`p-8 h-full hover:shadow-xl transition-all duration-300 fade-in-up stagger-${index + 1} 
                bg-gradient-to-br ${achievement.color} border-2 border-transparent hover:border-accent/20`}
              >
                <div className="space-y-6">
                  <div className="flex items-start justify-between">
                    <div
                      className={`w-14 h-14 rounded-xl bg-background/80 flex items-center justify-center ${achievement.iconColor}`}
                    >
                      {achievement.icon}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {achievement.date}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-bold">{achievement.title}</h3>
                    <Badge variant="outline" className="text-xs border-accent/30 text-accent">
                      {achievement.category}
                    </Badge>
                  </div>

                  <p className="text-muted-foreground leading-relaxed text-pretty">{achievement.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
