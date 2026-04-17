// app/page.tsx
'use client'

import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contacts from '@/components/Contacts'
import Navigation from '@/components/Navigation'
import Background3D from '@/components/Background3D'
import { useEffect, useState } from 'react'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      <div className="relative min-h-screen">
        {mounted && <Background3D />}
        <Navigation />
        <main className="relative z-10">
          <Hero />
          <About />
          <Projects />
          <Contacts />
        </main>
      </div>
    </>
  )
}