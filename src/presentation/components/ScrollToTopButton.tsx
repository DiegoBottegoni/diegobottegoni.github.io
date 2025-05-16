import { useState, useEffect } from "react";
import { FiChevronUp } from "react-icons/fi";

const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false);

    // Mostrar botón cuando scrollY > 300px (podés ajustar)
    const toggleVisibility = () => {
        if (window.pageYOffset > 200) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };


    if (!visible) return null;

    return (
        <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="fixed bottom-8 right-8 bg-[#F4F4F3] p-3 rounded-full shadow-lg hover:bg-gray-200 transition-colors duration-300"
        >
            <FiChevronUp size={24} />
        </button>
    );
};

export default ScrollToTopButton;
