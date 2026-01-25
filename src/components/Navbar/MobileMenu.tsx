import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

interface MobileMenuProps {
    onClose: () => void;
    handleAnchorNavigation: (id: string) => void;
    handleLanguageToggle: () => void;
}

const MobileMenu = ({ onClose, handleAnchorNavigation, handleLanguageToggle }: MobileMenuProps) => {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();

    const menuItems = [
        { label: t("navbar.home"), action: () => { navigate("/"); onClose(); } },
        { label: t("navbar.about"), action: () => { handleAnchorNavigation("about"); onClose(); } },
        { label: t("navbar.works"), action: () => { handleAnchorNavigation("works"); onClose(); } },
        { label: t("navbar.contact"), action: () => { navigate("/contact"); onClose(); } },
        {
            label: i18n.language === "es" ? "EN" : "ES",
            action: () => { handleLanguageToggle(); onClose(); },
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 w-full bg-primary-d shadow-lg z-40 md:hidden"
        >
            <ul className="flex flex-col items-center py-6 gap-6 text-lg font-semibold text-gray-900 uppercase">
                {menuItems.map((item) => (
                    <li key={item.label}>
                        <button onClick={item.action} className="cursor-pointer hover:text-gray-600">
                            {item.label}
                        </button>
                    </li>
                ))}
            </ul>
        </motion.div>
    );
};

export default MobileMenu;
