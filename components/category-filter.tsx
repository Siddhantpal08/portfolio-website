'use client'

import { useState } from 'react'

interface CategoryFilterProps {
  categories: string[]
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export function CategoryFilter({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

  const formatCategory = (category: string) => {
    const labels: Record<string, string> = {
      'all': 'All Projects',
      'video-editing': 'Video Editing',
      'coding': 'Coding',
      'vo': 'Voice-Over',
      '3d-animation': '3D Animation',
      'after-effects': 'After Effects'
    }
    return labels[category] || category
  }

  return (
    <div className="mb-12 flex flex-wrap gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          onMouseEnter={() => setHoveredCategory(category)}
          onMouseLeave={() => setHoveredCategory(null)}
          className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 ${
            activeCategory === category
              ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
              : 'bg-muted/60 text-muted-foreground hover:bg-muted border border-border/50 hover:border-primary/50'
          }`}
        >
          {formatCategory(category)}
        </button>
      ))}
    </div>
  )
}
