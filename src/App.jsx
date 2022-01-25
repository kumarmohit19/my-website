import Topbar from './components/topbar/TopBar'
import Intro from './components/intro/Intro'
import Menu from './components/menu/Menu'
import Portfolio from './components/portfolio/Portfolio'
import Works from './components/works/Works'
import Testinomials from './components/testinomials/Testinomials'
import Contact from './components/contact/Contact'
import './app.scss'
import { useState } from 'react'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className='app'>
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className='sections'>
        <Intro />
        <Portfolio />
        <Works />
        <Testinomials />
        <Contact />
      </div>
    </div>
  )
}

export default App
