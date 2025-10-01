"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Award } from "lucide-react";

export function EducationTimeline() {
  const educationHistory = [
    {
      institution:
        "Shri Guru Gobind Singhji College of Engineering and Technology",
      location: "Nanded, Maharashtra",
      degree: "B.Tech Information Technology",
      duration: "2022 - 2026",
      gpa: "8.3/10.0",
      status: "Current",
      level: "Undergraduate",
      highlights: [
        "Strong foundation in Computer Science fundamentals",
        "Specialized coursework in Web Development and AI/ML",
        "Active participation in coding competitions",
        "Leadership roles in technical societies",
      ],
    },
    {
      institution: "Oasis International School",
      location: "Bhandara, Maharashtra",
      degree: "HSC (Science Stream)",
      duration: "2020 - 2022",
      gpa: "83%",
      status: "Completed",
      level: "Higher Secondary",
      highlights: [
        "Mathematics, Physics, Chemistry specialization",
        "Strong analytical and problem-solving foundation",
        "Participated in science exhibitions",
      ],
    },
    {
      institution: "Sunny's Spring Dale School",
      location: "Bhandara, Maharashtra",
      degree: "SSC",
      duration: "2010 - 2020",
      gpa: "91%",
      status: "Completed",
      level: "Secondary",
      highlights: [
        "Achieved academic excellence with consistent top performance",
        "Engaged in extracurricular and cultural initiatives at school level",
        "Runner-up in Taluka-level Chess Championship, representing the school",
      ],
    },
  ];

  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in-up text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Educational Journey
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            My academic path from foundation to specialization
          </p>
        </div>

        <div className="relative">
          {/* Central timeline line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary hidden lg:block"></div>

          <div className="space-y-12">
            {educationHistory.map((edu, index) => (
              <div
                key={index}
                className={`fade-in-up stagger-${index + 1} flex items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } flex-col lg:gap-12 gap-8`}
              >
                {/* Timeline dot */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-primary to-accent rounded-full border-4 border-background shadow-lg z-10">
                  <div className="absolute inset-1 bg-background rounded-full"></div>
                </div>

                {/* Content card */}
                <div
                  className={`lg:w-5/12 w-full ${
                    index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                  } text-center`}
                >
                  <Card className="p-8 transition-all duration-300 bg-gradient-to-br from-background to-muted/30 border-2 border-orange-500/20 hover:shadow-xl hover:border-orange-500/40">
                    <div
                      className={`space-y-4 ${
                        index === 1 ? "lg:text-left" : "lg:text-left"
                      } text-center`}
                    >
                      <div className="flex items-center justify-between">
                        <Badge
                          variant="outline"
                          className={`
                            ${
                              edu.status === "Current"
                                ? "bg-green-500/10 text-green-600 border-green-500/20"
                                : "bg-blue-500/10 text-blue-600 border-blue-500/20"
                            }`}
                        >
                          {edu.level}
                        </Badge>
                        <Badge variant="secondary">{edu.status}</Badge>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-balance mb-2">
                          {edu.institution}
                        </h3>
                        <div className="flex items-center justify-center text-muted-foreground mb-1 lg:justify-start">
                          <MapPin className="h-4 w-4 mr-1" />
                          {edu.location}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <p className="font-semibold text-lg">{edu.degree}</p>
                        <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground lg:justify-start">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {edu.duration}
                          </div>
                          <div className="flex items-center">
                            <Award className="h-4 w-4 mr-1" />
                            {edu.gpa}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h4 className="text-center font-semibold text-sm lg:text-left">
                          Key Highlights:
                        </h4>
                        <ul className="space-y-1">
                          {edu.highlights.map((highlight, highlightIndex) => (
                            <li
                              key={highlightIndex}
                              className="flex items-start text-sm text-muted-foreground"
                            >
                              <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                              <span className="text-left">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Spacer for zigzag effect */}
                <div className="lg:w-5/12 hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
