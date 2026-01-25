import { useState, useEffect } from "react";
import { FiChevronUp } from "react-icons/fi";

const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false);
    const [overFooter, setOverFooter] = useState(false);

    // Mostrar botón cuando scrollY > 200px
    const toggleVisibility = () => {
        if (window.pageYOffset > 200) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    // Detectar si el footer está en pantalla
    useEffect(() => {
        const footer = document.getElementById("footer");

        if (!footer) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setOverFooter(entry.isIntersecting);
            },
            {
                root: null, // viewport
                threshold: 0.1, // cuando al menos el 10% del footer sea visible
            }
        );

        observer.observe(footer);

        return () => {
            if (footer) observer.unobserve(footer);
        };
    }, []);

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
            className={`default-button fixed right-10 transition-all duration-300 p-3 rounded-full ${overFooter ? "bottom-32" : "bottom-10"
                }`}
        >
            <FiChevronUp size={24} />
        </button>
    );
};

export default ScrollToTopButton;
