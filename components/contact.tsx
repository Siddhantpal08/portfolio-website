'use client'

import { useEffect, useState } from 'react'
import { Mail, Linkedin, Github, Twitter, Instagram } from 'lucide-react'

export function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true)
    }, { threshold: 0.1 })

    const element = document.getElementById('contact-section')
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 3000)
  }

  const socials = [
    { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/siddhantpals' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/siddhant-pal-92b71316a' },
    { name: 'GitHub', icon: Github, url: 'https://github.com/Siddhantpal08/' },
    { name: 'Twitter', icon: Twitter, url: 'https://x.com/Siddhantpal44' },
  ]

  return (
    <section id="contact-section" className="py-20 px-6 bg-background relative overflow-hidden border-t border-border/50">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-50 dark:opacity-30" />
      </div>

      <div className="max-w-4xl mx-auto">
        <h2 className={`text-4xl font-bold text-foreground mb-12 text-balance transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Contact
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <h3 className="text-2xl font-semibold text-foreground mb-6">Let's Talk</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <div className="space-y-4">
              <div className="group">
                <p className="text-sm font-mono text-muted-foreground mb-2">EMAIL</p>
                <a href="mailto:hello@example.com" className="text-lg text-foreground hover:text-primary transition-colors flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                  <Mail className="w-5 h-5" />
                  siddhant.pal.work@gmail.com
                </a>
              </div>
            </div>
          </div>
          
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <h3 className="text-2xl font-semibold text-foreground mb-6">Connect</h3>
            <div className="space-y-3">
              {socials.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-lg text-muted-foreground hover:text-foreground transition-all duration-300 group hover:translate-x-2"
                  >
                    <Icon className="w-5 h-5 group-hover:text-primary transition-colors" />
                    {social.name}
                    <span className="ml-auto group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6 mb-16 p-8 rounded-xl bg-muted/50 border border-border/50 backdrop-blur-sm transition-all duration-300 hover:bg-muted/70">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
              required
            />
          </div>
          <textarea
            placeholder="Your Message"
            rows={6}
            className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 resize-none"
            required
          />
          <button
            type="submit"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/40 transform hover:scale-105 active:scale-95"
          >
            {formSubmitted ? '✓ Message Sent!' : 'Send Message'}
          </button>
        </form>
        
        <div className="text-center pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © 2025 Siddhant Pal. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  )
}
