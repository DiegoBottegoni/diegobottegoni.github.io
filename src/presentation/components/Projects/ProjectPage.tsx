import { projects } from "../../../../data";
import { ProjectCard } from "./ProjectCard";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

const ProjectPage = () => {
    const { t } = useTranslation();

    return (
        <section className="py-32 bg-primary-d">
            <div id="works" className="max-w-6xl mx-auto px-4 flex flex-col gap-8">
                <motion.h2
                    id="about"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold mb-12 text-center uppercase"
                >
                    {t("titles.works")}
                </motion.h2>
                <div className="flex flex-col gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            {...project}
                            animationDirection={index % 2 === 0 ? "left" : "right"} // alterna dirección
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectPage;
