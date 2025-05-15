import "./index.css";
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import ProjectPage from "./presentation/components/Projects/ProjectPage"
import AboutPage from "./presentation/pages/About/About"
import BannerSection from "./presentation/pages/Banner/BannerSection"
import PeopleTalkPage from "./presentation/pages/PeopleTalk/PeopleTalkPage"
import SkillsPage from "./presentation/pages/Skills/SkillsPage"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <SkillsPage />
      <AboutPage />
      <BannerSection />
      <ProjectPage />
      <PeopleTalkPage />
    </>
  )
}

export default App
