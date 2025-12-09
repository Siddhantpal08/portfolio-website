// app/projects/[id]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { PROJECTS } from '@/lib/projects-data'
import { ArrowRight, Github } from 'lucide-react'

interface Props {
  params: { id: string }
}

function youtubeEmbedSrc(url?: string) {
  if (!url) return null
  const yMatch = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([A-Za-z0-9_-]{6,})/
  )
  if (yMatch) return `https://www.youtube.com/embed/${yMatch[1]}`
  return null
}

export default function ProjectDetailPage({ params }: Props) {
  const project = PROJECTS.find((p) => p.id === params.id)

  if (!project) return notFound()

  const embedSrc = youtubeEmbedSrc(project.video)

  return (
    <main className="min-h-screen max-w-6xl mx-auto py-16 px-6">
      <Link href="/projects" className="text-sm text-muted-foreground hover:text-primary inline-block mb-6">
        ← Back to Projects
      </Link>

      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
        <p className="text-muted-foreground max-w-2xl">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span key={t} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
              {t}
            </span>
          ))}
        </div>
      </header>

      <section className="mb-8">
        {embedSrc ? (
          <div className="aspect-video w-full rounded-lg overflow-hidden border border-border/50">
            <iframe
              src={embedSrc}
              title={project.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        ) : project.images && project.images.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.images.map((src) => (
              <img key={src} src={src} alt={project.title} className="w-full rounded-lg border border-border/50" />
            ))}
          </div>
        ) : (
          <div className="h-60 w-full rounded-lg bg-muted/30 flex items-center justify-center border border-border/50">
            <span className="text-muted-foreground">No demo available</span>
          </div>
        )}
      </section>

      <section className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <article className="md:col-span-2 prose max-w-none">
          <h2>About the project</h2>
          <p>{project.longDescription ?? project.description}</p>
        </article>

        <aside className="md:col-span-1 space-y-4">
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-3 bg-primary text-white rounded-md text-center font-semibold"
            >
              View Live Demo <ArrowRight className="inline-block w-4 h-4 ml-2" />
            </a>
          )}

          {project.repoLink && (
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-3 border border-border/50 rounded-md text-center font-semibold"
            >
              <Github className="w-4 h-4" /> View Source (GitHub)
            </a>
          )}

          <div className="p-4 rounded-md border border-border/50">
            <h4 className="text-sm text-muted-foreground mb-2">Category</h4>
            <div className="text-foreground font-medium">{project.category}</div>
          </div>
        </aside>
      </section>
    </main>
  )
}
