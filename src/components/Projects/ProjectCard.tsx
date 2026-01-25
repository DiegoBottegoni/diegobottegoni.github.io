import { motion } from "framer-motion";
// import { FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import type { Variants } from "framer-motion";

type ProjectProps = {
    img: string;
    url: string;
    github: string;
    titleKey: string;
    textKey: string;
    direction?: number; // 1 o -1
};

// Animación con duración más natural y menor salto
const cardVariants = (direction: number): Variants => ({
    offscreen: {
        y: 60 * direction,
        opacity: 0,
    },
    onscreen: {
        y: 0,
        rotate: -2 * direction,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.3,
            duration: 1.8,
            delay: 0.2, // Añadir un pequeño retraso para suavizar la entrada
            ease: [0.25, 0.1, 0.25, 1], // Curva de aceleración más natural
            staggerChildren: 0.1, // Añadir un pequeño desfase entre los hijos si es necesario
        },
    },
});

export const ProjectCard = ({
    img,
    url,
    github,
    titleKey,
    textKey,
    direction = 1,
}: ProjectProps) => {
    const { t } = useTranslation();

    return (
        <motion.article
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.4 }}
            className="w-full"
        >
            <motion.div
                variants={cardVariants(direction)}
                className="flex flex-col md:flex-row items-center rounded-xl bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 min-h-[400px] overflow-hidden"
            >
                <div className="w-full md:w-1/2 p-4 flex items-center justify-center">
                    <img
                        src={img}
                        alt={t(titleKey)}
                        className="w-full h-[200px] md:h-[300px] object-cover rounded-md"
                    />
                </div>
                <div className="w-full md:w-1/2 p-6 flex flex-col justify-between gap-4">
                    <div>
                        <h3 className="text-xl font-semibold capitalize">{t(titleKey)}</h3>
                        <p className="text-sm mt-4">{t(textKey)}</p>
                    </div>
                    <div className="flex items-center gap-4 pt-2">
                        <button
                            onClick={() => window.open(url, "_blank")}
                            className="default-button rounded-full -mr-2"
                        >
                            {t("projects.button.text1")}
                        </button>
                        <button
                            onClick={() => window.open(github, "_blank")}
                            className="default-button rounded-full"
                        >
                            {t("projects.button.text2")}
                        </button>

                    </div>
                </div>
            </motion.div>
        </motion.article>
    );
};
