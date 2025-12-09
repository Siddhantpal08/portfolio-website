'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { Project } from '@/lib/projects-data'
import { ArrowRight, Github, ExternalLink } from 'lucide-react'

interface ProjectGridProps {
  projects: Project[]
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const router = useRouter()

  function goToDetail(id: string) {
    router.push(`/projects/${id}`)
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => {
        const delayStyle = { animationDelay: `${index * 50}ms` } as React.CSSProperties

        const content = (
          <>
            <div className="relative aspect-video bg-gradient-to-br from-muted via-muted to-muted/50 overflow-hidden">
              {/* optional hero image if available */}
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center relative">
                  <div className={`text-center transition-all duration-500 transform ${hoveredId === project.id ? 'scale-110' : 'scale-100'}`}>
                    <div className="text-6xl mb-2 group-hover:scale-125 transition-transform duration-300">{project.icon}</div>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">{project.category.replace('-', ' ')}</p>
                  </div>

                  {hoveredId === project.id && (
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}
                </div>
              )}
            </div>

            <div className="p-6 relative">
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2 group-hover:text-foreground/80 transition-colors">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs bg-primary/15 text-primary rounded-full backdrop-blur-sm border border-primary/20 group-hover:bg-primary/25 group-hover:border-primary/40 transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Visual CTA (non-interactive) */}
              <span className="text-sm font-semibold text-primary hover:text-primary/80 transition-all duration-300 flex items-center gap-1 group/btn">
                View Project
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </span>
            </div>
          </>
        )

        return (
          <div
            key={project.id}
            role="button"
            tabIndex={0}
            onClick={() => goToDetail(project.id)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                goToDetail(project.id)
              }
            }}
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
            className={
              `group cursor-pointer rounded-xl overflow-hidden bg-muted/40 border border-border/50 ` +
              `hover:border-primary transition-all duration-500 transform hover:scale-105 hover:shadow-lg hover:shadow-primary/10 animate-fadeIn`
            }
            style={delayStyle}
          >
            <div className="relative">
              {content}

              {/* Hover toolbar: Demo & Source buttons.
                  These are real anchors — stopPropagation so clicking them does not trigger card navigation. */}
              <div
                className={`absolute top-3 right-3 flex gap-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200`}
              >
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/90 border border-border/60 text-sm font-medium shadow-sm hover:bg-white"
                    aria-label={`Open live demo of ${project.title}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                )}

                {project.repoLink && (
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/90 border border-border/60 text-sm font-medium shadow-sm hover:bg-white"
                    aria-label={`Open source repository of ${project.title}`}
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                )}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
