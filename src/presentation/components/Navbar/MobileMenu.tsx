import { Link, useNavigate, useLocation } from "react-router-dom";

interface MobileMenuProps {
    onClose: () => void;
    // handleLanguageToggle: () => void;
    handleAnchorNavigation: (anchorId: string) => void;
}

const MobileMenu = ({ onClose }: MobileMenuProps) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleAnchorNavigation = (anchorId: string) => {
        onClose();
        if (location.pathname !== "/") {
            navigate("/", { state: { scrollTo: anchorId } });
        } else {
            const el = document.getElementById(anchorId);
            if (el) el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="absolute top-full left-0 w-full bg-[#F4F4F3] shadow-md z-50 flex flex-col items-center py-4 gap-4 text-sm font-semibold uppercase">
            <Link to="/" onClick={onClose}>Home</Link>
            <button className="uppercase" onClick={() => handleAnchorNavigation("about")}>About</button>
            <button className="uppercase" onClick={() => handleAnchorNavigation("works")}>Works</button>
            <Link to="/contact" onClick={onClose}>Contact</Link>
            {/* <button className="uppercase" onClick={handleLanguageToggle}>EN</button> */}
        </div>
    );
};

export default MobileMenu;
