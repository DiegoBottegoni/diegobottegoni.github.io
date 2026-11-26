import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";

interface MobileMenuProps {
    onClose: () => void;
    handleLanguageToggle: () => void;
}

const MobileMenu = ({ onClose, handleLanguageToggle }: MobileMenuProps) => {
    const { i18n, t } = useTranslation();
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                onClose();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClose]);

    return (
        <div
            ref={menuRef}
            className="absolute top-full left-0 w-full bg-[#F4F4F3] shadow-md z-50 flex flex-col items-center py-4 gap-4 text-sm font-semibold uppercase"
        >
            <Link to="/" onClick={onClose}>{t("navbar.home")}</Link>
            <Link to="/#about" onClick={onClose}>{t("navbar.about")}</Link>
            <Link to="/#works" onClick={onClose}>{t("navbar.works")}</Link>
            <Link to="/contact" onClick={onClose}>{t("navbar.contact")}</Link>
            <button onClick={handleLanguageToggle}>
                {i18n.language === "es" ? "EN" : "ES"}
            </button>
        </div>
    );
};

export default MobileMenu;
