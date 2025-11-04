import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer id="footer" className="relative w-full bg-white px-6 text-sm py-4">
            <div
                className="
          max-w-7xl mx-auto
          flex flex-col md:flex-row
          md:items-center md:justify-between
          gap-4 md:gap-0
          relative
          text-center md:text-left
          py-6 md:py-10
        "
            >
                {/* Email - orden 2 en mobile, orden natural en md+ */}
                <a
                    href="mailto:dev.diegobottegoni@gmail.com"
                    className="
            order-2 md:order-none
            inline-flex items-center gap-1
            justify-center md:justify-start
            font-semibold
            whitespace-nowrap
          "
                >
                    dev.diegobottegoni@gmail.com
                    <ArrowUpRight size={16} />
                </a>

                {/* Copyright - orden 3 en mobile, centrado absoluto en md+ */}
                <span
                    className="
            order-3 md:order-none
            md:absolute md:left-1/2 md:top-1/2
            md:-translate-x-1/2 md:-translate-y-1/2
            text-gray-700
            px-4
          "
                >
                    © {new Date().getFullYear()} Diego Bottegoni. {t("footer.text")}
                </span>

                {/* Íconos - orden 1 en mobile, orden natural en md+ */}
                <div
                    className="
            order-1 md:order-none
            flex justify-center md:justify-end
            gap-6
          "
                >
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
