'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 pt-28 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob opacity-70 dark:opacity-50" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob-delayed-2 opacity-70 dark:opacity-50" />
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob-delayed opacity-70 dark:opacity-50" />
      </div>

      <div className="max-w-6xl w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left column: Intro text and CTAs */}
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="mb-8">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
                <span className="text-sm font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Creative Professional
                </span>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-6 leading-tight tracking-tight">
                Transforming Visions Into <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">Compelling</span> Realities
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed text-pretty mb-8">
                Expert in Coding, video editing, motion graphics, 3D animation, voice-over, and Bringing your boldest ideas to life
              </p>
            </div>
            
            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.2s' }}>
              <Link
                href="/projects"
                className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/40 transition-all duration-300 transform hover:scale-105 active:scale-95 inline-block text-center"
              >
                View My Work
              </Link>
              <Link
                href="#contact-section"
                className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300 transform hover:scale-105 active:scale-95 inline-block text-center"
              >
                Get in Touch
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-16">
              <div>
                <div className="text-3xl font-bold text-primary">47+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">2+</div>
                <div className="text-sm text-muted-foreground">Years</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Satisfied</div>
              </div>
            </div>
          </div>

          {/* Right column: Image and Name - moved to right side with professional styling */}
          <div className={`flex flex-col items-center justify-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="relative w-80 h-96">
              {/* Decorative elements */}
              <div className="absolute -inset-6 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl animate-pulse opacity-75" />
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-transparent rounded-3xl animate-blob-delayed opacity-50" />
              
              {/* Main image container */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-primary/30 shadow-2xl shadow-primary/20 h-full group">
                <img
                  src="/professional-headshot.png"
                  alt="Your Name"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              </div>
            </div>

            {/* Name and Title below image */}
            <div className={`text-center mt-12 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.3s' }}>
              <h2 className="text-4xl font-bold text-foreground mb-2">Siddhant Pal</h2>
              <p className="text-lg text-primary font-semibold">Creative Director</p>
              <p className="text-muted-foreground mt-2">Coding • Video editing • 3D animation and more</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
