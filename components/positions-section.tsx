"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Calendar, MapPin, Zap, Trophy, Target, Lightbulb } from "lucide-react"
import { motion } from "framer-motion"

export function PositionsSection() {
  const [hoveredPosition, setHoveredPosition] = useState<number | null>(null)

  const positions = [
    {
      title: "Robotics Club Coordinator",
      organization: "Official Robotics Club, SGGS College of Engineering",
      duration: "2023 - Present",
      location: "Nanded, Maharashtra",
      type: "Leadership Role",
      description:
        "Leading the official robotics club and coordinating various technical events and competitions at the college level.",
      responsibilities: [
        "Coordinate national-level robotics events and competitions",
        "Mentor junior students in robotics and automation projects",
        "Organize workshops on emerging technologies in robotics",
        "Collaborate with industry experts for guest lectures and seminars",
        "Manage club resources and technical equipment",
      ],
      achievements: [
        "Successfully organized national-level robotics competition",
        "Increased club membership by 150% during tenure",
        "Established partnerships with 3 industry organizations",
        "Led team of 25+ active members",
      ],
      skills: ["Leadership", "Event Management", "Team Coordination", "Technical Mentoring", "Project Management"],
      icon: <Users className="h-6 w-6" />,
      color: "from-primary/5 to-accent/5",
      iconColor: "text-primary",
      borderColor: "border-primary/10",
    },
  ]

  return (
    <section id="positions" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in-up text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Trophy className="h-8 w-8 text-accent mr-3" />
            <h2 className="text-3xl sm:text-4xl font-bold">Positions of Responsibility</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Leadership roles and responsibilities that shaped my professional growth
          </p>
        </div>

        <div className="space-y-8">
          {positions.map((position, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3 }}
              onHoverStart={() => setHoveredPosition(index)}
              onHoverEnd={() => setHoveredPosition(null)}
            >
              <Card
                className={`p-8 hover:shadow-lg transition-all duration-300 fade-in-up
                bg-gradient-to-br ${position.color} border ${position.borderColor}
                ${hoveredPosition === index ? "shadow-lg border-primary/20" : ""}`}
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Main Info */}
                  <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-start justify-between">
                      <div className="space-y-3">
                        <div className="flex items-center space-x-4">
                          <div
                            className={`w-12 h-12 rounded-xl bg-background/80 flex items-center justify-center ${position.iconColor}`}
                          >
                            {position.icon}
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold">{position.title}</h3>
                            <p className="text-lg text-muted-foreground">{position.organization}</p>
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {position.duration}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {position.location}
                          </div>
                          <Badge variant="outline" className="border-accent/30 text-accent">
                            {position.type}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed text-pretty">{position.description}</p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold flex items-center mb-3">
                          <Target className="h-4 w-4 mr-2 text-accent" />
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-2">
                          {position.responsibilities.map((responsibility, respIndex) => (
                            <li key={respIndex} className="text-sm text-muted-foreground flex items-start">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                              {responsibility}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold flex items-center mb-3">
                          <Zap className="h-4 w-4 mr-2 text-accent" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {position.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-sm text-muted-foreground flex items-start">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Skills & Impact */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold flex items-center mb-4">
                        <Lightbulb className="h-4 w-4 mr-2 text-accent" />
                        Skills Developed
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {position.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Card className="p-6 bg-background/50 border-accent/10">
                      <h4 className="font-semibold mb-4 text-center">Impact Summary</h4>
                      <div className="space-y-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">25+</div>
                          <div className="text-xs text-muted-foreground">Team Members Led</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">150%</div>
                          <div className="text-xs text-muted-foreground">Membership Growth</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">3</div>
                          <div className="text-xs text-muted-foreground">Industry Partnerships</div>
                        </div>
                      </div>
                    </Card>
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
