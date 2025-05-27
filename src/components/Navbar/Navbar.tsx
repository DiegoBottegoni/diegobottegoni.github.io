import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import MobileMenu from "../../presentation/components/Navbar/MobileMenu";
import { LuMenu, LuX } from "react-icons/lu";

const Navbar = () => {
    const [showTooltip, setShowTooltip] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    const handleLanguageToggle = () => {
        setShowTooltip(true);
        setTimeout(() => setShowTooltip(false), 1000);
    };

    const handleAnchorNavigation = (anchorId: string) => {
        if (location.pathname !== "/") {
            navigate("/", { state: { scrollTo: anchorId } });
        } else {
            const el = document.getElementById(anchorId);
            if (el) el.scrollIntoView({ behavior: "smooth" });
        }
    };

    const navItems = [
        { label: "Home", action: () => navigate("/") },
        { label: "About", action: () => handleAnchorNavigation("about") },
        { label: "Works", action: () => handleAnchorNavigation("works") },
        { label: "Contact", action: () => navigate("/contact") },
        { label: "ES", action: handleLanguageToggle, isLang: true },
    ];

    return (
        <nav
            id="home"
            className="bg-primary-d py-4 relative z-50"
        >
            <div className="max-w-screen-xl mx-auto px-6 flex justify-between items-center">
                {/* Menú completo (visible en desktop) */}
                <ul className="hidden md:flex w-full justify-between text-sm font-semibold tracking-wide text-gray-900">
                    {navItems.map((item, index) => (
                        <motion.li
                            key={item.label}
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 + index * 0.1, duration: 0.3 }}
                            className="relative"
                        >
                            <button onClick={item.action} className="uppercase cursor-pointer">
                                {item.label}
                            </button>
                            {item.isLang && showTooltip && (
                                <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-max px-2 py-1 rounded bg-gray-900 text-white text-xs shadow transition-opacity duration-100">
                                    Coming soon...
                                </div>
                            )}
                        </motion.li>
                    ))}
                </ul>

                {/* Icono menú mobile */}
                <div className="md:hidden w-full flex justify-between items-center">
                    <div></div>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-gray-800 hover:text-gray-600 transition-colors"
                    >
                        {isMobileMenuOpen ? <LuX size={24} /> : <LuMenu size={24} />}
                    </button>
                </div>

                {/* Menú desplegable mobile */}
                {isMobileMenuOpen && (
                    <MobileMenu
                        onClose={() => setIsMobileMenuOpen(false)}
                        handleAnchorNavigation={handleAnchorNavigation}
                    />
                )}
            </div>
        </nav>
    );
};

export default Navbar;
