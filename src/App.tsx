import { useEffect, useState } from 'react'
import './App.css'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    console.log(windowWidth);
  })
  return (
    <div className='bg-dark'>
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
