'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ProjectGrid } from '@/components/project-grid'
import { CategoryFilter } from '@/components/category-filter'
import { PROJECTS, CATEGORIES } from '@/lib/projects-data'

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter(project => project.category === activeCategory)

  return (
    <main className="min-h-screen bg-background pt-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/15 rounded-full mix-blend-multiply filter blur-3xl animate-blob opacity-60 dark:opacity-40" />
        <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-accent/15 rounded-full mix-blend-multiply filter blur-3xl animate-blob-delayed opacity-60 dark:opacity-40" />
      </div>

      {/* Header */}
      <div className={`py-12 px-6 border-b border-border/50 backdrop-blur-sm transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors mb-8 inline-block group">
            <span className="inline-block group-hover:-translate-x-1 transition-transform">←</span> Back to Home
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance">
            My <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl text-pretty">
            Explore my work across various creative disciplines and technical projects.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Filter */}
          <div className={`transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <CategoryFilter
              categories={CATEGORIES}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </div>

          {/* Projects Grid */}
          <div className={`transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <ProjectGrid projects={filteredProjects} />

            {filteredProjects.length === 0 && (
              <div className="text-center py-20">
                <p className="text-lg text-muted-foreground">No projects found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
