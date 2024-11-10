import React from 'react'
import HeroSection from '@/components/Hero/Hero'
import About from '@/app/About/page'
import Contact from '@/app/Contact/page'
import Projects from './Projects/page'
function Home() {
  return (
    <div>
      <HeroSection/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default Home;
