import About from '@/components/About'
import Hero from '@/components/Hero'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className='mx-5 sm:mx-8 xl:mx-16'>
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Contact />
    </main>
  )
}
