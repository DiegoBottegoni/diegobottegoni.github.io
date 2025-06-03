import { Link, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";


interface MobileMenuProps {
    onClose: () => void;
    handleLanguageToggle: () => void;
    handleAnchorNavigation: (anchorId: string) => void;
}

const MobileMenu = ({ onClose, handleLanguageToggle }: MobileMenuProps) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { i18n, t } = useTranslation();

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
            <Link to="/" onClick={onClose}>{t("navbar.home")}</Link>
            <button className="uppercase" onClick={() => handleAnchorNavigation("about")}>{t("navbar.about")}</button>
            <button className="uppercase" onClick={() => handleAnchorNavigation("works")}>{t("navbar.works")}</button>
            <Link to="/contact" onClick={onClose}>{t("navbar.contact")}</Link>
            <button onClick={handleLanguageToggle}>
                {i18n.language === "es" ? "EN" : "ES"}
            </button>
        </div>
    );
};

export default MobileMenu;
