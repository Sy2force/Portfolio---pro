import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { OtherProjects } from "@/components/other-projects"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { WhyHireMe } from "@/components/why-hire-me"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <OtherProjects />
      <Skills />
      <Experience />
      <WhyHireMe />
      <Contact />
      <Footer />
    </main>
  )
}
