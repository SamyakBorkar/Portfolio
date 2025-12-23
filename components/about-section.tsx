"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, GraduationCap, MapPin } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            About Me
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto text-pretty">
            Passionate about building innovative solutions that bridge design
            and technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in-up stagger-1">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center border-2 border-primary/20">
                  {/* <User className="h-12 w-12 text-primary" /> */}
                  {/* Profile photo will go here */}
                  <img
                    src="/profile.jpeg"
                    alt="Samyak Borkar"
                    className="w-24 h-24 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Samyak Borkar</h3>
                  <div className="flex items-center text-muted-foreground mt-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>Nanded, Maharashtra</span>
                  </div>
                </div>
              </div>

              <p className="text-lg leading-relaxed text-pretty">
                I'm a B.Tech Information Technology student at Shri Guru Gobind
                Singhji Institute of Engineering and Technology Nanded, currently
                maintaining a{" "}
                <Badge variant="secondary" className="mx-1">
                  8.7/10.0 GPA
                </Badge>
                . My journey in technology is driven by curiosity and a passion
                for creating meaningful digital experiences.
              </p>

              <p className="text-lg leading-relaxed text-pretty">
                I specialize in full-stack development with expertise in modern
                frameworks like React.js, Node.js, and building robust, scalable applications.
                My approach combines technical proficiency with creative
                problem-solving to deliver solutions that are both functional
                and user-friendly.
              </p>

              <p className="text-lg leading-relaxed text-pretty">
                When I'm not coding, I'm exploring new technologies,
                contributing to open-source projects, or working on innovative
                solutions that push the boundaries of what's possible with web
                development and system architecture.
              </p>
            </div>
          </div>

          <div className="fade-in-up stagger-2">
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/10">
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  <h3 className="text-2xl font-semibold">Quick Stats</h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-background/50 rounded-lg">
                    <div className="text-2xl font-bold text-primary">8.7</div>
                    <div className="text-sm text-muted-foreground">
                      Current GPA
                    </div>
                  </div>
                  <div className="text-center p-4 bg-background/50 rounded-lg">
                    <div className="text-2xl font-bold text-primary">3+</div>
                    <div className="text-sm text-muted-foreground">
                      Major Projects
                    </div>
                  </div>
                  <div className="text-center p-4 bg-background/50 rounded-lg">
                    <div className="text-2xl font-bold text-primary">6+</div>
                    <div className="text-sm text-muted-foreground">
                      Programming Languages
                    </div>
                  </div>
                  <div className="text-center p-4 bg-background/50 rounded-lg">
                    <div className="text-2xl font-bold text-primary">5⭐</div>
                    <div className="text-sm text-muted-foreground">
                      HackerRank Rating
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-primary/10">
                  <p className="text-center text-muted-foreground">
                    "Building the future, one line of code at a time"
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}