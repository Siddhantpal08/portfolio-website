'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export function CTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true)
    }, { threshold: 0.3 })

    const element = document.getElementById('cta-section')
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="cta-section" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50 dark:opacity-30" />
      </div>

      <div className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
          Ready to <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">collaborate</span>?
        </h2>
        <p className="text-xl text-muted-foreground mb-10 text-pretty">
          Let's create something extraordinary together. Whether you have a specific project in mind or just want to explore possibilities, I'm here to help bring your vision to life.
        </p>
        <Link
          href="#contact-section"
          className="px-10 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/40 inline-block transform hover:scale-105 active:scale-95"
        >
          Start Your Project
        </Link>
      </div>
    </section>
  )
}
