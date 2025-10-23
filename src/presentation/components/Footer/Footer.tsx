import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer id="footer" className="relative w-full bg-white px-6 text-sm sm:py-2">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-0 relative text-center sm:text-left py-4 sm:py-10 lg:py-4">

                {/* Email - orden 2 en mobile, orden natural en sm+ */}
                <a
                    href="mailto:diego@example.com"
                    className="order-2 sm:order-none inline-flex items-center gap-1 justify-center sm:justify-start font-semibold"
                >
                    dev.diegobottegoni@gmail.com
                    <ArrowUpRight size={16} />
                </a>

                {/* Copyright - orden 3 en mobile, centrado absoluto en sm+ */}
                <span className="order-3 sm:order-none sm:absolute sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2">
                    © {new Date().getFullYear()} Diego Bottegoni. {t("footer.text")}
                </span>

                {/* Íconos - orden 1 en mobile, orden natural en sm+ */}
                <div className="order-1 sm:order-none flex justify-center sm:justify-end gap-6">
                    <a
                        href="https://github.com/DiegoBottegoni"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-900 transition"
                    >
                        <Github size={18} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/diego-bottegoni/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-900 transition"
                    >
                        <Linkedin size={18} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
