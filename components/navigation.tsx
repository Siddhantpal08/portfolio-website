'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export function Navigation() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:opacity-80 transition-opacity">
          Portfolio
        </Link>
        
        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-8">
            <Link href="/" className="text-foreground/80 hover:text-foreground transition-colors">Home</Link>
            <Link href="/projects" className="text-foreground/80 hover:text-foreground transition-colors">Projects</Link>
            <a href="#contact-section" className="text-foreground/80 hover:text-foreground transition-colors">Contact</a>
          </div>
          
          <Link
            href="#contact"
            className="hidden md:inline-block px-6 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            Hire Me
          </Link>
          
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-foreground" />
            ) : (
              <Moon className="w-5 h-5 text-foreground" />
            )}
          </button>
        </div>
      </div>
    </nav>
  )
}
