import Link from 'next/link'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { CTA } from '@/components/cta'
import { Contact } from '@/components/contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <CTA />
      <Contact />
    </main>
  )
}
