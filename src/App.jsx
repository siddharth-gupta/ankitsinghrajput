import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Contact from './components/Contact'
import ExtraCurricular from './components/ExtraCurricular'

function App() {
  return (
    <div className="app">
      <Hero />
      <main className="main-content">
        <Experience />
        <Education />
        <Skills />
        <ExtraCurricular />
      </main>
      <Contact />
    </div>
  )
}

export default App
