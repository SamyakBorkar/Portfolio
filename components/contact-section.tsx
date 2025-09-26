"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from "lucide-react"

export function ContactSection() {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "borkarsamyak66@gmail.com",
      href: "mailto:borkarsamyak66@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+91-9604450984",
      href: "tel:+919604450984",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Nanded, Maharashtra, India",
      href: null,
    },
  ]

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      username: "SamyakBorkar",
      href: "https://github.com/SamyakBorkar",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      username: "SamyakBorkar",
      href: "https://linkedin.com/in/SamyakBorkar",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in-up text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Ready to collaborate on your next project or discuss opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="fade-in-up stagger-1">
            <h3 className="text-2xl font-semibold mb-8">Get in Touch</h3>
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent">
                    {contact.icon}
                  </div>
                  <div>
                    <p className="font-medium">{contact.label}</p>
                    {contact.href ? (
                      <a href={contact.href} className="text-muted-foreground hover:text-accent transition-colors">
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{contact.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Links & CTA */}
          <div className="fade-in-up stagger-2">
            <h3 className="text-2xl font-semibold mb-8">Connect Online</h3>
            <div className="space-y-6">
              {socialLinks.map((social, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent">
                        {social.icon}
                      </div>
                      <div>
                        <p className="font-medium">{social.label}</p>
                        <p className="text-sm text-muted-foreground">@{social.username}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </Card>
              ))}

              <Card className="p-8 bg-accent/5 border-accent/20 text-center">
                <h4 className="font-semibold text-lg mb-4">Ready to Start a Project?</h4>
                <p className="text-muted-foreground mb-6 text-pretty">
                  Whether you have a specific project in mind or just want to explore possibilities, I'm always excited
                  to discuss new opportunities.
                </p>
                <Button size="lg" asChild>
                  <a href="mailto:borkarsamyak66@gmail.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Message
                  </a>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
