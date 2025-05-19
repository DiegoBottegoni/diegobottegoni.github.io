import { useNavigate, useLocation, Link } from "react-router-dom";
import { useState } from "react";
import MobileMenu from "../../presentation/components/Navbar/MobileMenu";
import { LuMenu, LuX } from "react-icons/lu";


const Navbar = () => {
    const [showTooltip, setShowTooltip] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    const handleLanguageToggle = () => {
        setShowTooltip(true);
        setTimeout(() => setShowTooltip(false), 2500);
    };

    const handleAnchorNavigation = (anchorId: string) => {
        if (location.pathname !== "/") {
            navigate("/", { state: { scrollTo: anchorId } });
        } else {
            const el = document.getElementById(anchorId);
            if (el) el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav id="home" className="bg-[#F4F4F3] py-4 relative">
            <div className="max-w-screen-xl mx-auto px-6 flex justify-between items-center">
                {/* Menú completo (visible en desktop) */}
                <ul className="hidden md:flex w-full justify-between text-sm font-semibold tracking-wide">
                    <li>
                        <Link to="/" className="uppercase">Home</Link>
                    </li>
                    <li>
                        <button className="uppercase cursor-pointer" onClick={() => handleAnchorNavigation("about")}>
                            About
                        </button>
                    </li>
                    <li>
                        <button className="uppercase cursor-pointer" onClick={() => handleAnchorNavigation("works")}>
                            Works
                        </button>
                    </li>
                    <li>
                        <Link to="/contact" className="uppercase">
                            Contact
                        </Link>
                    </li>
                    <li className="relative">
                        <button className="uppercase cursor-pointer" onClick={handleLanguageToggle}>
                            EN / ES
                        </button>
                        {showTooltip && (
                            <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-max px-2 py-1 rounded bg-gray-800 text-white text-xs shadow transition-opacity duration-200">
                                Coming soon...
                            </div>
                        )}
                    </li>
                </ul>

                {/* Icono menú mobile */}
                {/* <div className="md:hidden w-full flex justify-between items-center">
                    <Link to="/" className="uppercase font-semibold text-sm tracking-wide">Home</Link>
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-xl font-bold">
                        ☰
                    </button>
                </div> */}
                <div className="md:hidden w-full flex justify-between items-center">
                    <Link to="/" className="uppercase font-semibold text-sm tracking-wide">Home</Link>
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
                        handleLanguageToggle={handleLanguageToggle}
                    />
                )}
            </div>
        </nav>
    );
};

export default Navbar;
