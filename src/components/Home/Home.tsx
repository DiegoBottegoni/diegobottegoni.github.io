import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Hero from "..//Hero/Hero";
import Navbar from "../Navbar/Navbar";
import ProjectPage from "../../presentation/components/Projects/ProjectPage";
import AboutPage from "../../presentation/pages/About/About";
import BannerSection from "../../presentation/pages/Banner/BannerSection";
import PeopleTalkPage from "../../presentation/pages/PeopleTalk/PeopleTalkPage";
import SkillsPage from "../../presentation/pages/Skills/SkillsPage";
import ContactSection from "../../presentation/pages/Contact/ContactSection";
import Footer from "../../presentation/components/Footer/Footer";
import ScrollToTopButton from "../../presentation/components/ScrollToTopButton";

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollTo) {
            const el = document.getElementById(location.state.scrollTo);
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: "smooth" });
                }, 100); // pequeño delay para asegurar que esté renderizado
            }
        }
    }, [location]);

    return (
        <div className="w-full overflow-x-hidden ">
            <div className="flex flex-col h-screen">
                <Navbar />
                <Hero />
            </div>
            <SkillsPage />
            <AboutPage />
            <BannerSection />
            <ProjectPage />
            <PeopleTalkPage />
            <ContactSection />
            <Footer />
            <ScrollToTopButton />
        </div>
    );
};

export default Home;
