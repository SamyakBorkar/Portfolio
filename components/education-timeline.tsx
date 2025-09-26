"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react"

export function EducationTimeline() {
  const education = {
    institution: "Shri Guru Gobind Singhji College of Engineering and Technology",
    location: "Nanded",
    degree: "B.Tech Information Technology",
    duration: "2022 - 2026",
    gpa: "8.3/10.0",
    status: "Current",
    highlights: [
      "Strong foundation in Computer Science fundamentals",
      "Specialized coursework in Web Development and AI/ML",
      "Active participation in coding competitions",
      "Leadership roles in technical societies",
    ],
  }

  const certifications = [
    {
      title: "Java (Basic)",
      issuer: "HackerRank",
      description: "Validated core Java programming concepts through hands-on coding assessments",
      date: "2024",
    },
    {
      title: "JavaScript (Basic)",
      issuer: "HackerRank",
      description: "Demonstrated proficiency in JavaScript fundamentals, DOM manipulation, and ES6 features",
      date: "2024",
    },
  ]

  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in-up text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Education & Certifications</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Academic journey and professional certifications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div className="fade-in-up stagger-1">
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <GraduationCap className="h-6 w-6 mr-3 text-accent" />
              Education
            </h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border"></div>

              <Card className="p-8 ml-16 relative hover:shadow-lg transition-shadow">
                {/* Timeline dot */}
                <div className="absolute -left-12 top-8 w-4 h-4 bg-accent rounded-full border-4 border-background shadow-lg"></div>

                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-balance">{education.institution}</h4>
                      <div className="flex items-center text-muted-foreground mt-1">
                        <MapPin className="h-4 w-4 mr-1" />
                        {education.location}
                      </div>
                    </div>
                    <Badge className="bg-green-500/10 text-green-600 border-green-500/20">{education.status}</Badge>
                  </div>

                  <div className="space-y-2">
                    <p className="font-semibold text-lg">{education.degree}</p>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {education.duration}
                      </div>
                      <div className="flex items-center">
                        <Award className="h-4 w-4 mr-1" />
                        Current GPA: {education.gpa}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h5 className="font-semibold">Key Highlights:</h5>
                    <ul className="space-y-1">
                      {education.highlights.map((highlight, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Certifications */}
          <div className="fade-in-up stagger-2">
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <Award className="h-6 w-6 mr-3 text-accent" />
              Certifications
            </h3>

            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <h4 className="font-bold text-lg">{cert.title}</h4>
                      <Badge variant="outline" className="text-xs">
                        {cert.date}
                      </Badge>
                    </div>

                    <p className="text-accent font-medium">{cert.issuer}</p>

                    <p className="text-sm text-muted-foreground leading-relaxed text-pretty">{cert.description}</p>
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
