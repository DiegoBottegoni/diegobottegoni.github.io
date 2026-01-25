import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import ProjectPage from "@/components/Projects/ProjectPage";
import AboutPage from "@/pages/About/About";
import BannerSection from "@/pages/Banner/BannerSection";
// import PeopleTalkPage from "@/pages/PeopleTalk/PeopleTalkPage";
import SkillsPage from "@/pages/Skills/SkillsPage";
import ContactSection from "@/pages/Contact/ContactSection";
import Footer from "@/components/Footer/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollTo) {
            const el = document.getElementById(location.state.scrollTo);
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: "smooth" });
                }, 100);
            }
        }
    }, [location]);

    return (
        <div className="w-full overflow-x-hidden relative"> {/* relative para posicionar Drag */}
            <div className="flex flex-col h-screen">
                <Navbar />
                <Hero />
            </div>
            <SkillsPage />
            <AboutPage />
            <BannerSection />
            <ProjectPage />
            {/* <PeopleTalkPage /> */}
            <ContactSection />
            <Footer />
            <ScrollToTopButton />
        </div>
    );
};

export default Home;
