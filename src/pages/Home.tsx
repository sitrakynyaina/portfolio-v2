import Navbar from '@/components/Navbar'
import Hero from '@/sections/Hero'
import Projects from '@/sections/Projects'
import Certifications from '@/sections/Certifications'
import Distinctions from '@/sections/Distinctions'
import Education from '@/sections/Education'
import Skills from '@/sections/Skills'
import Footer from '@/sections/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-cream text-ink transition-colors duration-300 dark:bg-background dark:text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Certifications />
        <Distinctions />
        <Education />
        <Skills/>
      </main>
      <Footer />
    </div>
  )
}
