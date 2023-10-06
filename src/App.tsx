import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Resume from './sections/Resume'
import Services from './sections/Services'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Blogs from './sections/Blogs'
import Counter from './sections/Counter'
import HireMe from './sections/HireMe'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Resume />
      <Services />
      <Skills />
      <Projects />
      <Blogs />
      <Counter />
      <HireMe />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
