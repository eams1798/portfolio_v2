import { useEffect, useState, Suspense } from 'react'
import './App.css'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import PorfolioMenu from './components/PorfolioMenu'

const SuspensedApp = () => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='bg-dark'>
      <PorfolioMenu />
      <div className="portfolio">
        <Hero windowWidth={windowWidth} />
        <Skills windowWidth={windowWidth} />
        <Projects windowWidth={windowWidth} />
        <Contact windowWidth={windowWidth} />
      </div>
    </div>
  )
}

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuspensedApp />
    </Suspense>
  )
}

export default App
