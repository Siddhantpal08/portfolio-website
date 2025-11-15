'use client'

import { useEffect, useState } from 'react'

export function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true)
    }, { threshold: 0.1 })

    const element = document.getElementById('about-section')
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about-section" className="py-20 px-6 bg-background relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-40 dark:opacity-20">
        <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto">
        <h2 className={`text-4xl font-bold text-foreground mb-12 text-balance transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 hover:text-foreground transition-colors duration-300">
              I'm a versatile creative professional with expertise spanning multiple disciplines. Whether it's crafting compelling video narratives, developing elegant code solutions, or bringing 3D visions to life, I approach every project with meticulous attention to detail.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed hover:text-foreground transition-colors duration-300">
              My passion lies at the intersection of creativity and technology, where artistic vision meets technical precision to create memorable experiences.
            </p>
          </div>
          
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-primary/5 border border-primary/20 hover:border-primary/50 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">47+</div>
                <p className="text-muted-foreground font-medium">Projects Completed</p>
              </div>
              <div className="p-6 rounded-xl bg-accent/5 border border-accent/20 hover:border-accent/50 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-2">2+</div>
                <p className="text-muted-foreground font-medium">Years Experience</p>
              </div>
            </div>
          </div>
        </div>

        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-2xl font-semibold text-foreground mb-8">Skills & Expertise</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { category: 'Video & Animation', skills: ['Video Editing', '3D Animation', 'Motion Graphics', 'After Effects'] },
              { category: 'Development', skills: ['Web Development', 'React', 'TypeScript', 'Full Stack'] },
              { category: 'Creative Services', skills: ['Voice-Over', 'UI/UX Design', 'Audio Production', 'Copywriting'] }
            ].map((skillGroup) => (
              <div key={skillGroup.category} className="p-6 rounded-xl bg-muted/50 hover:bg-muted border border-border/50 hover:border-primary/50 transition-all duration-300 transform hover:translate-y-[-4px]">
                <h4 className="text-lg font-semibold text-foreground mb-4">{skillGroup.category}</h4>
                <ul className="space-y-2">
                  {skillGroup.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
