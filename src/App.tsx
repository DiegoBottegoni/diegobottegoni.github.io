import "./index.css";
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import ProjectPage from "./presentation/components/Projects/ProjectPage"
import AboutPage from "./presentation/pages/About/About"
import BannerSection from "./presentation/pages/Banner/BannerSection"
import PeopleTalkPage from "./presentation/pages/PeopleTalk/PeopleTalkPage"
import SkillsPage from "./presentation/pages/Skills/SkillsPage"
import ContactSection from "./presentation/pages/Contact/ContactSection";
import Footer from "./presentation/components/Footer/Footer";
import ScrollToTopButton from "./presentation/components/ScrollToTopButton";

function App() {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <SkillsPage />
      <AboutPage />
      <BannerSection />
      <ProjectPage />
      <PeopleTalkPage />
      <ContactSection />
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}

export default App
