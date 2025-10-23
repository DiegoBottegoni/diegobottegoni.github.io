import { projects } from "../../../../data";
import { ProjectCard } from "./ProjectCard";
import { useTranslation } from 'react-i18next';

const ProjectPage = () => {
    const { t } = useTranslation();

    return (
        <section className="py-32 bg-primary-d">
            <div id="works" className="max-w-6xl mx-auto px-4 flex flex-col gap-8">
                <h2
                    id="about"
                    className="text-4xl font-bold mb-12 text-center uppercase"
                >
                    {t("titles.works")}
                </h2>
                <div className="flex flex-col gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            {...project}
                            direction={index % 2 === 0 ? -1 : 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectPage;
