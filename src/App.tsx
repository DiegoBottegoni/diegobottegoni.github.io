import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import AboutPage from "./presentation/pages/About/About"
import SkillsPage from "./presentation/pages/Skills/SkillsPage"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <SkillsPage />
      <AboutPage />
    </>
  )
}

export default App
