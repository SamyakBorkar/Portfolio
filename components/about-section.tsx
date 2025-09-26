"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Award, Calendar } from "lucide-react"

export function AboutSection() {
  const achievements = [
    {
      icon: <Star className="h-5 w-5" />,
      title: "HackerRank 5-Star",
      description: "C++ & Java",
      date: "Dec 2024",
    },
    {
      icon: <Award className="h-5 w-5" />,
      title: "LeetCode 100 Days Badge",
      description: "Consistent problem solving",
      date: "Jan 2025",
    },
    {
      icon: <Award className="h-5 w-5" />,
      title: "Java & JavaScript Certified",
      description: "HackerRank Certifications",
      date: "2024",
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">About Me</h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto text-pretty">
            Passionate about building innovative solutions that bridge design and technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in-up stagger-1">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-pretty">
                I'm a B.Tech Information Technology student at Shri Guru Gobind Singhji College of Engineering and
                Technology, currently maintaining a{" "}
                <Badge variant="secondary" className="mx-1">
                  8.3/10.0 GPA
                </Badge>
                . My journey in technology is driven by curiosity and a passion for creating meaningful digital
                experiences.
              </p>

              <p className="text-lg leading-relaxed text-pretty">
                I specialize in full-stack development with expertise in modern frameworks like React.js, Node.js, and
                emerging technologies in AI/ML. My approach combines technical proficiency with creative problem-solving
                to deliver solutions that are both functional and user-friendly.
              </p>

              <p className="text-lg leading-relaxed text-pretty">
                When I'm not coding, I'm exploring new technologies, contributing to open-source projects, or working on
                innovative solutions that push the boundaries of what's possible with web development and artificial
                intelligence.
              </p>
            </div>
          </div>

          <div className="fade-in-up stagger-2">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Recent Achievements</h3>
              {achievements.map((achievement, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent">
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">{achievement.title}</h4>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          {achievement.date}
                        </div>
                      </div>
                      <p className="text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
