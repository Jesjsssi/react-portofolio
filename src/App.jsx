import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import About from './pages/About'
import Skill from './pages/Skill'
import Projects from './pages/Projects'
import Contacts from './pages/Contacts'


function App() {
  return (
    <div className="portfolio-container">
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  )
}

export default App;
