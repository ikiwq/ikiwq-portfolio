import React, { useEffect, useState } from 'react'
import About from './components/About/About';
import Home from './components/Home/Home'
import NavBar from './components/NavBar/NavBar'
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact'

const App = () => {
  const [nightMode, setNightMode] = useState(true);

  return (
    <div className={`transition-all duration-500 ${nightMode ? "bg-black" : "bg-white"} overflow-x-hidden`}>
      <div className={``}>
        <NavBar nightMode={nightMode} setNightMode={setNightMode}/>
        <Home nightMode={nightMode}/>
        <About nightMode={nightMode}/>
        <Skills nightMode={nightMode}/>
        <Projects nightMode={nightMode}/>
        <Contact nightMode={nightMode}/>
      </div>
    </div>
  )
}

export default App